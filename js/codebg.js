/* =========================================================
   VIZZZ.VIZZZ — Animated Code Projection Background
   Inspired by VIZZZVIZZZ live code projections (DRØM / Church
   videomapping / vizzzvizzz.it background)
   ========================================================= */
(() => {
  const canvas = document.getElementById("codebg");
  if (!canvas) return;
  const ctx = canvas.getContext("2d", { alpha: false });

  // Authentic code lines from the VIZZZ projections + VJ/Shader/OSC pipeline + hidden message
  const CODE_LINES = [
    "struct group_info init_groups = { .usage = ATOMIC_INIT(2) };",
    "struct group_info *groups_alloc(int gidsetsize) {",
    "    struct group_info *group_info;",
    "    int nblocks;",
    "    int i;",
    "    nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK;",
    "    nblocks = nblocks ? : 1;",
    "    group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER);",
    "    if (!group_info)",
    "        return NULL;",
    "    atomic_set(&group_info->usage, 1);",
    "    group_info->ngroups = gidsetsize;",
    "    group_info->nblocks = nblocks;",
    "    if (gidsetsize <= NGROUPS_SMALL)",
    "        group_info->blocks[0] = group_info->small_block;",
    "    else {",
    "        for (i = 0; i < nblocks; i++) {",
    "            gid_t *b;",
    "            b = (void *)__get_free_page(GFP_USER);",
    "            if (!b)",
    "                goto out_undo_partial_alloc;",
    "            group_info->blocks[i] = b;",
    "        }",
    "    }",
    "    return group_info;",
    "out_undo_partial_alloc:",
    "    while (--i >= 0) {",
    "        free_page((unsigned long)group_info->blocks[i]);",
    "    }",
    "    kfree(group_info);",
    "    return NULL;",
    "}",
    "// VIZZZVIZZZ :: NODO DI INTERVENTO VISIVO [SICILIA <-> MILANO]",
    "// ORDINE E' IL RISULTATO. DISORDINE E' IL PROCESSO.",
    "uniform sampler2D u_texProjection;",
    "uniform float u_time, u_audioRMS, u_glitchSeed;",
    "uniform vec2 u_resolution, u_keystone[4];",
    "vec3 vizzz_displace(vec2 uv, float chaos) {",
    "    float slice = floor(uv.y * 48.0 + u_time * 12.0);",
    "    float shift = step(0.86, fract(sin(slice * 91.7) * 43758.5453)) * chaos;",
    "    vec2 p = uv + vec2(shift * 0.08, 0.0);",
    "    float r = texture2D(u_texProjection, p + vec2(0.004, 0.0)).r;",
    "    float g = texture2D(u_texProjection, p).g;",
    "    float b = texture2D(u_texProjection, p - vec2(0.004, 0.0)).b;",
    "    return vec3(r, g, b);",
    "}",
    "void osc_dispatch_dmx(uint16_t universe, const uint8_t *ch, size_t len) {",
    "    for (size_t k = 0; k < len; ++k) {",
    "        if ((ch[k] ^ 0xFF) && (k & 0x07) == 0) strobe_gate(universe, k, ch[k]);",
    "    }",
    "}",
    "// LO SCOPO DI VIZZZVIZZZ E' IL SUO MESSAGGIO. NASCOSTO NEL CODICE. VISIBILE NEL BUIO.",
    "EXPORT_SYMBOL(groups_alloc);",
    "int groups_search(const struct group_info *group_info, gid_t grp) {",
    "    unsigned int left, right;",
    "    if (!group_info) return 0;",
    "    left = 0; right = group_info->ngroups;",
    "    while (left < right) {",
    "        unsigned int mid = (left + right) / 2;",
    "        if (grp > GROUP_AT(group_info, mid)) left = mid + 1;",
    "        else if (grp < GROUP_AT(group_info, mid)) right = mid;",
    "        else return 1;",
    "    }",
    "    return 0;",
    "}",
    "// RICERCA RADICALE. VISIONE TOTALE. // TOUCHDESIGNER -> RESOLUME -> MADMAPPER",
    "matrix4x4 homography_solve(vec2 src[4], vec2 dst[4]) {",
    "    /* site-specific architectural warp :: phase2 / with_love / opera / vulkano */",
    "    return inverse(adjugate(src)) * project_basis(dst);",
    "}"
  ];

  const GLYPHS = "EVKFXPZNGQRBM01{}[]()<>/\\|*=+-;:_#&@~^";

  let W = 0, H = 0, DPR = 1;
  let hue = 232;
  let targetHue = 232;
  let scrollY = 0;
  let scrollVel = 0;
  let lastScroll = 0;
  const mouse = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5, vx: 0, vy: 0 };

  // Multi-depth code columns (like 2-plane architectural projection mapping)
  const planes = [];
  // Floating letters (like church arch projection in photos 74/77)
  const floaters = [];
  // Vertical data rain streams
  const streams = [];

  function initScene() {
    planes.length = 0;
    floaters.length = 0;
    streams.length = 0;

    // 3 depth planes of projected code blocks
    const planeConfigs = [
      { depth: 0.4,  fontSize: Math.max(11, Math.round(W * 0.009)),  alpha: 0.28, x: W * 0.02, widthCols: 78, speed: 14, skew: -0.05 },
      { depth: 0.75, fontSize: Math.max(13, Math.round(W * 0.0125)), alpha: 0.42, x: W * 0.30, widthCols: 68, speed: 22, skew: 0.04 },
      { depth: 1.15, fontSize: Math.max(16, Math.round(W * 0.017)),  alpha: 0.22, x: -W * 0.04, widthCols: 54, speed: 32, skew: -0.08 }
    ];

    planeConfigs.forEach((cfg, idx) => {
      planes.push({
        ...cfg,
        offsetLine: idx * 17,
        charCursor: 0,
        scrollOffset: idx * 180
      });
    });

    // Floating architectural letters (inspired by VIZZZ church mapping)
    const countFloat = Math.min(38, Math.max(18, Math.floor(W / 45)));
    for (let i = 0; i < countFloat; i++) {
      floaters.push({
        ch: GLYPHS[Math.floor(Math.random() * 16)],
        x: Math.random() * W,
        y: Math.random() * H,
        z: 0.3 + Math.random() * 1.2,
        vx: (Math.random() - 0.5) * 0.25,
        vy: -0.15 - Math.random() * 0.45,
        size: 14 + Math.random() * 34,
        alpha: 0.06 + Math.random() * 0.22,
        phase: Math.random() * Math.PI * 2
      });
    }

    // Matrix/Telemetry micro streams
    const colStep = Math.max(46, Math.floor(W / 28));
    for (let x = colStep / 2; x < W; x += colStep) {
      streams.push({
        x,
        y: Math.random() * H,
        speed: 45 + Math.random() * 110,
        len: 6 + Math.floor(Math.random() * 14),
        seed: Math.floor(Math.random() * 1000)
      });
    }
  }

  function resize() {
    DPR = Math.min(window.devicePixelRatio || 1, 1.75);
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = Math.floor(W * DPR);
    canvas.height = Math.floor(H * DPR);
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    initScene();
  }

  window.addEventListener("resize", resize, { passive: true });
  window.addEventListener("mousemove", (e) => {
    const nx = e.clientX / Math.max(1, W);
    const ny = e.clientY / Math.max(1, H);
    mouse.vx = nx - mouse.tx;
    mouse.vy = ny - mouse.ty;
    mouse.tx = nx;
    mouse.ty = ny;
  }, { passive: true });

  window.addEventListener("scroll", () => {
    scrollY = window.scrollY || window.pageYOffset;
    scrollVel = scrollY - lastScroll;
    lastScroll = scrollY;
  }, { passive: true });

  // External hook so main.js can set section hue
  window.__setVizzzHue = (h) => {
    const n = Number(h);
    if (!Number.isNaN(n)) targetHue = n;
  };

  resize();

  let lastTime = performance.now();
  let accTime = 0;

  function drawProjectionGrid(t) {
    // Subtle videomapping calibration grid & keystone quads
    const px = (mouse.x - 0.5) * 36;
    const py = (mouse.y - 0.5) * 36;

    ctx.save();
    ctx.strokeStyle = `hsla(${hue}, 95%, 62%, 0.07)`;
    ctx.lineWidth = 1;

    const step = Math.max(90, Math.floor(W / 12));
    ctx.beginPath();
    for (let x = (px % step); x < W; x += step) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, H);
    }
    for (let y = ((-scrollY * 0.15 + py) % step + step) % step; y < H; y += step) {
      ctx.moveTo(0, y);
      ctx.lineTo(W, y);
    }
    ctx.stroke();

    // Keystone target crosshairs at intersections near cursor
    const cx = mouse.x * W;
    const cy = mouse.y * H;
    ctx.strokeStyle = `hsla(${hue}, 100%, 68%, 0.22)`;
    ctx.beginPath();
    ctx.arc(cx, cy, 48 + Math.sin(t * 3) * 6, 0, Math.PI * 2);
    ctx.moveTo(cx - 68, cy);
    ctx.lineTo(cx - 26, cy);
    ctx.moveTo(cx + 26, cy);
    ctx.lineTo(cx + 68, cy);
    ctx.moveTo(cx, cy - 68);
    ctx.lineTo(cx, cy - 26);
    ctx.moveTo(cx, cy + 26);
    ctx.lineTo(cx, cy + 68);
    ctx.stroke();
    ctx.restore();
  }

  function drawCodePlanes(t, dt) {
    planes.forEach((p, idx) => {
      p.scrollOffset += p.speed * dt + Math.abs(scrollVel) * 0.18 * p.depth;
      p.charCursor += dt * (28 + idx * 14);

      const lineH = p.fontSize * 1.48;
      const totalRows = Math.ceil(H / lineH) + 4;
      const firstLineIdx = Math.floor(p.scrollOffset / lineH);
      const ySub = -(p.scrollOffset % lineH);

      const parallaxX = (mouse.x - 0.5) * -70 * p.depth;
      const parallaxY = (mouse.y - 0.5) * -45 * p.depth - (scrollY * 0.12 * p.depth) % lineH;

      ctx.save();
      ctx.font = `${idx === 1 ? "700" : "400"} ${p.fontSize}px "Space Mono", Consolas, monospace`;
      ctx.textBaseline = "top";

      // Perspective skew like projection mapping on walls/pillars
      ctx.transform(1, p.skew * 0.35, p.skew, 1, p.x + parallaxX, ySub + parallaxY);

      for (let r = 0; r < totalRows; r++) {
        const len = CODE_LINES.length;
        const codeIdx = (((firstLineIdx + r + p.offsetLine) % len) + len) % len;
        let line = CODE_LINES[codeIdx] || "";
        const y = r * lineH;

        // Live typing effect on the bottom-most active rows
        if (r === totalRows - 3) {
          const cut = Math.floor(p.charCursor) % (line.length + 12);
          line = line.slice(0, cut) + "█";
        }

        const isComment = line.trim().startsWith("//") || line.trim().startsWith("/*");
        const isDirective = line.includes("EXPORT_SYMBOL") || line.includes("VIZZZVIZZZ") || line.includes("goto ");

        // Chromatic aberration RGB split on highlighted lines or high scroll speed
        const split = (Math.abs(scrollVel) > 12 || isDirective) ? 2.2 * p.depth : 0;
        if (split > 0.4) {
          ctx.fillStyle = `hsla(${(hue + 170) % 360}, 100%, 60%, ${p.alpha * 0.65})`;
          ctx.fillText(line, -split, y);
          ctx.fillStyle = `hsla(${hue}, 100%, 60%, ${p.alpha * 0.65})`;
          ctx.fillText(line, split, y);
        }

        if (isComment) {
          ctx.fillStyle = `hsla(${hue}, 95%, 72%, ${Math.min(0.85, p.alpha * 1.35)})`;
        } else if (isDirective) {
          ctx.fillStyle = `hsla(0, 0%, 100%, ${Math.min(0.9, p.alpha * 1.45)})`;
        } else {
          ctx.fillStyle = `hsla(${hue}, 70%, 82%, ${p.alpha})`;
        }

        // Line number gutter
        const lnNum = (((firstLineIdx + r) % 999) + 999) % 999 + 1;
        const ln = String(lnNum).padStart(3, "0");
        ctx.fillText(`${ln}  ${line}`, 0, y);
      }

      ctx.restore();
    });
  }

  function drawStreams(t, dt) {
    ctx.save();
    ctx.font = `11px "Space Mono", monospace`;
    streams.forEach((s, i) => {
      s.y += (s.speed + Math.abs(scrollVel) * 1.4) * dt;
      if (s.y - s.len * 14 > H) {
        s.y = -20;
        s.seed = Math.floor(Math.random() * 1000);
      }
      for (let k = 0; k < s.len; k++) {
        const yy = s.y - k * 14;
        if (yy < -14 || yy > H + 14) continue;
        const ch = GLYPHS[(s.seed + k * 7 + Math.floor(t * 10)) % GLYPHS.length];
        const fade = 1 - k / s.len;
        ctx.fillStyle = k === 0
          ? `hsla(${hue}, 100%, 88%, ${0.42 * fade})`
          : `hsla(${hue}, 95%, 60%, ${0.18 * fade})`;
        ctx.fillText(ch, s.x, yy);
      }
    });
    ctx.restore();
  }

  function drawFloaters(t, dt) {
    ctx.save();
    floaters.forEach((f) => {
      f.x += f.vx + (mouse.vx * -18 * f.z);
      f.y += f.vy - scrollVel * 0.08 * f.z;
      if (f.y < -40) f.y = H + 40;
      if (f.y > H + 40) f.y = -40;
      if (f.x < -40) f.x = W + 40;
      if (f.x > W + 40) f.x = -40;

      const pulse = 0.65 + 0.35 * Math.sin(t * 2.2 + f.phase);
      ctx.font = `700 ${Math.round(f.size)}px "Space Mono", monospace`;
      ctx.fillStyle = `hsla(${hue}, 85%, 78%, ${f.alpha * pulse})`;
      ctx.fillText(f.ch, f.x, f.y);
    });
    ctx.restore();
  }

  function drawGlitchSlices(t) {
    // Periodic horizontal glitch displacement bars + scroll-triggered bursts
    const burst = Math.abs(scrollVel) > 18 || Math.sin(t * 1.7) > 0.92 || Math.sin(t * 7.3) > 0.96;
    if (!burst) return;

    const slices = 2 + Math.floor(Math.random() * 4);
    for (let i = 0; i < slices; i++) {
      const sy = Math.random() * H;
      const sh = 6 + Math.random() * 38;
      const dx = (Math.random() - 0.5) * 44;
      ctx.save();
      ctx.fillStyle = `hsla(${hue}, 100%, 60%, 0.08)`;
      ctx.fillRect(0, sy, W, sh);
      try {
        ctx.drawImage(
          canvas,
          0, sy * DPR, W * DPR, sh * DPR,
          dx, sy, W, sh
        );
      } catch (_) {}
      ctx.restore();
    }
  }

  function tick(now) {
    const dt = Math.min(0.05, (now - lastTime) / 1000);
    lastTime = now;
    accTime += dt;

    // Smoothly interpolate hue and mouse
    hue += (targetHue - hue) * 0.05;
    mouse.x += (mouse.tx - mouse.x) * 0.08;
    mouse.y += (mouse.ty - mouse.y) * 0.08;
    mouse.vx *= 0.9;
    mouse.vy *= 0.9;
    scrollVel *= 0.88;

    // Deep dark base with subtle radial glow matching current section hue
    ctx.fillStyle = "#050507";
    ctx.fillRect(0, 0, W, H);

    const grad = ctx.createRadialGradient(
      mouse.x * W, mouse.y * H, 10,
      mouse.x * W, mouse.y * H, Math.max(W, H) * 0.72
    );
    grad.addColorStop(0, `hsla(${hue}, 95%, 24%, 0.26)`);
    grad.addColorStop(0.55, `hsla(${(hue + 35) % 360}, 90%, 10%, 0.14)`);
    grad.addColorStop(1, "rgba(5, 5, 7, 0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);

    drawProjectionGrid(accTime);
    drawStreams(accTime, dt);
    drawCodePlanes(accTime, dt);
    drawFloaters(accTime, dt);
    drawGlitchSlices(accTime);

    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
})();
