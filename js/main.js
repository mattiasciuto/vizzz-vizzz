/* =========================================================
   VIZZZ.VIZZZ — Main Interactive Controller
   ========================================================= */
(() => {
  // ---------- PORTFOLIO PROJECTS DATA ----------
  const PROJECTS = [
    {
      id: "oneday",
      idx: "01",
      title: "ONE DAY MUSIC FESTIVAL",
      meta: "STAGE DESIGN · LEDWALL · LIVE VISUALS // CATANIA",
      cats: ["stage", "vj"],
      size: "w-l",
      cover: { type: "video", src: "assets/video/oneday-live-1.mp4", poster: "assets/video/oneday-live-1.jpg" },
      desc: "Ideazione, progettazione 3D, configurazione LEDwall e live VJing per il main stage di One Day Music Festival. Dal render preliminare in Blender/Capture alla messa in opera monumentale davanti a migliaia di persone.",
      items: [
        { type: "video", src: "assets/video/oneday-live-1.mp4", poster: "assets/video/oneday-live-1.jpg" },
        { type: "video", src: "assets/video/oneday-render-1.mp4", poster: "assets/video/oneday-render-1.jpg" },
        { type: "video", src: "assets/video/oneday-render-2.mp4", poster: "assets/video/oneday-render-2.jpg" },
        { type: "video", src: "assets/video/oneday-render-3.mp4", poster: "assets/video/oneday-render-3.jpg" },
        { type: "video", src: "assets/video/oneday-live-2.mp4", poster: "assets/video/oneday-live-2.jpg" },
        { type: "video", src: "assets/video/oneday-live-3.mp4", poster: "assets/video/oneday-live-3.jpg" },
        { type: "video", src: "assets/video/oneday-live-4.mp4", poster: "assets/video/oneday-live-4.jpg" },
        { type: "video", src: "assets/video/oneday-live-5.mp4", poster: "assets/video/oneday-live-5.jpg" },
        { type: "img", src: "assets/img/oneday-03.jpg" },
        { type: "img", src: "assets/img/oneday-01.jpg" },
        { type: "img", src: "assets/img/oneday-02.jpg" }
      ]
    },
    {
      id: "opera",
      idx: "02",
      title: "OPERA FESTIVAL — CRUDO & PRISMATICA",
      meta: "SITE-SPECIFIC STAGE · INSTALLAZIONE // MILANO & SICILIA",
      cats: ["stage", "install"],
      size: "w-m",
      cover: { type: "video", src: "assets/video/opera-crudo-2.mp4", poster: "assets/video/opera-crudo-2.jpg" },
      desc: "Concept e realizzazione degli stage Ballroom e Crudo Stage e dell'installazione site-specific Prismatica per Opera Festival: strutture nel bosco, schermi sospesi, proiezioni organiche e light design immersivo.",
      items: [
        { type: "video", src: "assets/video/opera-crudo-2.mp4", poster: "assets/video/opera-crudo-2.jpg" },
        { type: "video", src: "assets/video/opera-crudo-1.mp4", poster: "assets/video/opera-crudo-1.jpg" },
        { type: "video", src: "assets/video/opera-ballroom.mp4", poster: "assets/video/opera-ballroom.jpg" },
        { type: "video", src: "assets/video/opera-prismatica.mp4", poster: "assets/video/opera-prismatica.jpg" },
        { type: "img", src: "assets/img/opera-05.jpg" },
        { type: "img", src: "assets/img/opera-06.jpg" },
        { type: "img", src: "assets/img/opera-07.jpg" },
        { type: "img", src: "assets/img/opera-08.jpg" },
        { type: "video", src: "assets/video/opera-stage-1.mp4", poster: "assets/video/opera-stage-1.jpg" },
        { type: "video", src: "assets/video/opera-stage-2.mp4", poster: "assets/video/opera-stage-2.jpg" },
        { type: "video", src: "assets/video/opera-stage-3.mp4", poster: "assets/video/opera-stage-3.jpg" },
        { type: "video", src: "assets/video/opera-install.mp4", poster: "assets/video/opera-install.jpg" },
        { type: "img", src: "assets/img/opera-01.jpg" },
        { type: "img", src: "assets/img/opera-02.jpg" },
        { type: "img", src: "assets/img/opera-03.jpg" },
        { type: "img", src: "assets/img/opera-04.jpg" },
        { type: "img", src: "assets/img/opera-09.jpg" }
      ]
    },
    {
      id: "vulkano",
      idx: "03",
      title: "VULKANO SUMMIT FESTIVAL",
      meta: "MONOLITI DIGITALI · MAIN STAGE // ETNA",
      cats: ["stage", "vj"],
      size: "w-m",
      cover: { type: "video", src: "assets/video/vulkano-1.mp4", poster: "assets/video/vulkano-1.jpg" },
      desc: "Monoliti digitali: forme di luce illuminano la folla, la materia vulcanica si trasforma in energia. Concept, progettazione stage e live visual generativi per Vulkano Summit Festival.",
      items: [
        { type: "video", src: "assets/video/vulkano-1.mp4", poster: "assets/video/vulkano-1.jpg" },
        { type: "video", src: "assets/video/vulkano-2.mp4", poster: "assets/video/vulkano-2.jpg" },
        { type: "video", src: "assets/video/vulkano-3.mp4", poster: "assets/video/vulkano-3.jpg" },
        { type: "video", src: "assets/video/vulkano-4.mp4", poster: "assets/video/vulkano-4.jpg" },
        { type: "img", src: "assets/img/vulkano-01.jpg" }
      ]
    },
    {
      id: "phase2",
      idx: "04",
      title: "PHASE2 — FSTVL XXXL & STAGE DESIGN",
      meta: "PROGETTAZIONE STAGE · LIGHT & LED ARCHITECTURE",
      cats: ["stage", "vj"],
      size: "w-l",
      cover: { type: "img", src: "assets/img/phase2-06.jpg" },
      desc: "Collaborazione continuativa con Phase2 per la progettazione di stage di grande scala: tunnel di monoliti LED, simulazioni volumetriche 3D e regia visual e luci in dialogo con i principali artisti della scena techno internazionale.",
      items: [
        { type: "img", src: "assets/img/phase2-06.jpg" },
        { type: "video", src: "assets/video/phase2-live.mp4", poster: "assets/video/phase2-live.jpg" },
        { type: "img", src: "assets/img/stage-01.jpg" },
        { type: "img", src: "assets/img/stage-02.jpg" },
        { type: "img", src: "assets/img/stage-03.jpg" },
        { type: "img", src: "assets/img/stage-04.jpg" },
        { type: "img", src: "assets/img/stage-05.jpg" },
        { type: "img", src: "assets/img/stage-06.jpg" },
        { type: "img", src: "assets/img/stage-07.jpg" },
        { type: "img", src: "assets/img/stage-08.jpg" },
        { type: "img", src: "assets/img/phase2-01.jpg" },
        { type: "img", src: "assets/img/phase2-02.jpg" },
        { type: "img", src: "assets/img/phase2-03.jpg" },
        { type: "img", src: "assets/img/phase2-04.jpg" },
        { type: "img", src: "assets/img/phase2-05.jpg" }
      ]
    },
    {
      id: "sacred-code",
      idx: "05",
      title: "ARCHITECTURAL CODE MAPPING",
      meta: "VIDEOMAPPING SITE-SPECIFIC · GENERATIVE CODE",
      cats: ["mapping"],
      size: "w-h",
      cover: { type: "img", src: "assets/img/map-07.jpg" },
      desc: "Architetture storiche e volte monumentali ricodificate in tempo reale: frammenti di codice kernel, glifi tipografici e geometrie generative avvolgono colonne e navate trasformando lo spazio sacro in terminale vivente.",
      items: [
        { type: "img", src: "assets/img/map-07.jpg" },
        { type: "img", src: "assets/img/map-02.jpg" },
        { type: "img", src: "assets/img/map-05.jpg" },
        { type: "img", src: "assets/img/map-06.jpg" },
        { type: "img", src: "assets/img/map-01.jpg" },
        { type: "img", src: "assets/img/map-03.jpg" },
        { type: "img", src: "assets/img/map-04.jpg" },
        { type: "img", src: "assets/img/map-08.jpg" },
        { type: "img", src: "assets/img/map-09.jpg" }
      ]
    },
    {
      id: "drom",
      idx: "06",
      title: "DRØM — OLOGRAM & CODE TULLE",
      meta: "HOLOGRAPHIC PROJECTION · VJING",
      cats: ["vj", "mapping"],
      size: "w-h",
      cover: { type: "video", src: "assets/video/drom-ologram.mp4", poster: "assets/video/drom-ologram.jpg" },
      desc: "Proiezioni olografiche su tulle trasparente sospeso sopra la consolle per DRØM: codice sorgente, laser e layer tridimensionali che fondono DJ, pubblico e architettura industriale.",
      items: [
        { type: "video", src: "assets/video/drom-ologram.mp4", poster: "assets/video/drom-ologram.jpg" },
        { type: "img", src: "assets/img/drom-01.jpg" },
        { type: "img", src: "assets/img/drom-06.jpg" },
        { type: "img", src: "assets/img/drom-02.jpg" },
        { type: "img", src: "assets/img/drom-03.jpg" },
        { type: "img", src: "assets/img/drom-04.jpg" },
        { type: "img", src: "assets/img/drom-05.jpg" },
        { type: "img", src: "assets/img/drom-07.jpg" },
        { type: "img", src: "assets/img/drom-08.jpg" },
        { type: "img", src: "assets/img/drom-09.jpg" }
      ]
    },
    {
      id: "withlove",
      idx: "07",
      title: "WITH LOVE — F2F & ARENA STAGE",
      meta: "360° STAGE DESIGN · LIGHT & LASER",
      cats: ["stage", "vj"],
      size: "w-m",
      cover: { type: "img", src: "assets/img/wl-03.jpg" },
      desc: "Progettazione 360° F2F (Face to Face) e main stage per With Love: gabbie luminose, tagli laser, colonne LED verticali e sincronia totale tra architettura scenica e pressione sonora.",
      items: [
        { type: "img", src: "assets/img/wl-03.jpg" },
        { type: "img", src: "assets/img/wl-01.jpg" },
        { type: "img", src: "assets/img/wl-02.jpg" },
        { type: "img", src: "assets/img/wl-04.jpg" },
        { type: "img", src: "assets/img/wl-05.jpg" },
        { type: "img", src: "assets/img/process-01.jpg" }
      ]
    },
    {
      id: "filenz",
      idx: "08",
      title: "FILENZ — L'ISOLA DI LAND",
      meta: "OUTDOOR VIDEOMAPPING // FACCIATA STORICA",
      cats: ["mapping"],
      size: "w-m",
      cover: { type: "img", src: "assets/img/filenz-01.jpg" },
      desc: "Videomapping architetturale outdoor per Filenz — L'Isola di Land: scomposizione prospettica della facciata e texture psichedeliche sincronizzate con il live set.",
      items: [
        { type: "img", src: "assets/img/filenz-01.jpg" },
        { type: "img", src: "assets/img/filenz-02.jpg" },
        { type: "img", src: "assets/img/filenz-03.jpg" }
      ]
    },
    {
      id: "installazioni",
      idx: "09",
      title: "INSTALLAZIONI INTERATTIVE & LIGHT ART",
      meta: "TOUCHDESIGNER · SENSORI · AMBIENTI IMMERSIVI",
      cats: ["install"],
      size: "w-m",
      cover: { type: "video", src: "assets/video/interactive-1.mp4", poster: "assets/video/interactive-1.jpg" },
      desc: "Installazioni interattive con tracking del movimento in tempo reale, sculture LED geometriche, proiezioni urbane guerriglia e ambienti audio-visivi generativi tra spazi museali e archeologia industriale.",
      items: [
        { type: "video", src: "assets/video/interactive-1.mp4", poster: "assets/video/interactive-1.jpg" },
        { type: "img", src: "assets/img/inst-02.jpg" },
        { type: "img", src: "assets/img/inst-03.jpg" },
        { type: "img", src: "assets/img/inst-06.jpg" },
        { type: "img", src: "assets/img/inst-08.jpg" },
        { type: "img", src: "assets/img/inst-09.jpg" },
        { type: "img", src: "assets/img/inst-10.jpg" },
        { type: "img", src: "assets/img/inst-11.jpg" },
        { type: "img", src: "assets/img/inst-01.jpg" },
        { type: "img", src: "assets/img/inst-04.jpg" },
        { type: "img", src: "assets/img/inst-05.jpg" },
        { type: "img", src: "assets/img/inst-07.jpg" },
        { type: "img", src: "assets/img/art-01.jpg" },
        { type: "img", src: "assets/img/art-02.jpg" },
        { type: "img", src: "assets/img/art-03.jpg" }
      ]
    }
  ];

  // ---------- 1. BOOT / PRELOADER ----------
  const boot = document.getElementById("boot");
  const bootLog = document.getElementById("bootLog");
  const bootBar = document.getElementById("bootBar");
  const BOOT_STEPS = [
    "[0.00] VIZZZ.OS // KERNEL 2022.4-RADICAL INIT",
    "[0.08] ALLOCATING group_info *groups_alloc(int gidsetsize)...",
    "[0.19] TOUCHDESIGNER <-> RESOLUME <-> MADMAPPER LINKED",
    "[0.34] OSC / MIDI / LASER / DMX UNIVERSES ONLINE",
    "[0.52] LOADING SITE-SPECIFIC MAPPING MATRICES [SICILIA <-> MILANO]",
    "[0.77] ORDINE E' IL RISULTATO. DISORDINE E' IL PROCESSO.",
    "[1.00] SIGNAL LOCKED // ENTERING VIZZZVIZZZ"
  ];

  function runBoot() {
    if (!boot) return;
    let i = 0;
    const step = () => {
      if (i < BOOT_STEPS.length) {
        bootLog.textContent += (i ? "\n" : "") + BOOT_STEPS[i];
        bootBar.style.width = `${Math.round(((i + 1) / BOOT_STEPS.length) * 100)}%`;
        i++;
        setTimeout(step, 115);
      } else {
        setTimeout(() => {
          boot.classList.add("off");
          document.body.classList.remove("is-loading");
        }, 220);
      }
    };
    step();
  }
  runBoot();

  // ---------- 2. LIVE HUD CLOCK & COORDS ----------
  const clockEl = document.getElementById("clock");
  const coordsEl = document.getElementById("coords");
  setInterval(() => {
    const d = new Date();
    if (clockEl) {
      clockEl.textContent = d.toTimeString().slice(0, 8) + ":" + String(Math.floor(d.getMilliseconds() / 10)).padStart(2, "0");
    }
  }, 90);

  window.addEventListener("mousemove", (e) => {
    if (!coordsEl) return;
    const lat = (37.5079 + (e.clientY / window.innerHeight - 0.5) * 0.04).toFixed(4);
    const lon = (15.0830 + (e.clientX / window.innerWidth - 0.5) * 0.04).toFixed(4);
    coordsEl.textContent = `${lat}° N — ${lon}° E`;
  }, { passive: true });

  // ---------- 3. CUSTOM CURSOR ----------
  const cursor = document.querySelector(".cursor");
  if (cursor && window.matchMedia("(hover:hover)").matches) {
    let cx = -100, cy = -100, tx = -100, ty = -100;
    window.addEventListener("mousemove", (e) => {
      tx = e.clientX;
      ty = e.clientY;
    }, { passive: true });
    const loopCursor = () => {
      cx += (tx - cx) * 0.22;
      cy += (ty - cy) * 0.22;
      cursor.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      requestAnimationFrame(loopCursor);
    };
    requestAnimationFrame(loopCursor);

    document.addEventListener("mouseover", (e) => {
      const hit = e.target.closest("a, button, .pf-card, .reel-item, .svc li");
      cursor.classList.toggle("big", Boolean(hit));
    });
  }

  // ---------- 4. HEADER & MOBILE MENU ----------
  const hdr = document.getElementById("hdr");
  const burger = document.getElementById("burger");
  const navLinks = document.querySelectorAll("#nav a");
  let lastY = 0;

  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    hdr.classList.toggle("scrolled", y > 40);
    if (!document.body.classList.contains("menu-open")) {
      hdr.classList.toggle("hide", y > 260 && y > lastY + 6);
    }
    lastY = y;
  }, { passive: true });

  if (burger) {
    burger.addEventListener("click", () => {
      const open = document.body.classList.toggle("menu-open");
      burger.setAttribute("aria-expanded", String(open));
    });
  }
  navLinks.forEach((a) => {
    a.addEventListener("click", () => {
      document.body.classList.remove("menu-open");
      if (burger) burger.setAttribute("aria-expanded", "false");
    });
  });

  // ---------- 5. SHOWREEL STRIP ----------
  const reelTrack = document.getElementById("reelTrack");
  const REEL_ITEMS = [
    { type: "video", src: "assets/video/oneday-live-1.mp4", poster: "assets/video/oneday-live-1.jpg", label: "ONE DAY // MAIN STAGE", project: "oneday" },
    { type: "video", src: "assets/video/opera-crudo-2.mp4", poster: "assets/video/opera-crudo-2.jpg", label: "OPERA // CRUDO STAGE", project: "opera" },
    { type: "img",   src: "assets/img/map-07.jpg", label: "CODE VIDEOMAPPING", project: "sacred-code" },
    { type: "video", src: "assets/video/vulkano-1.mp4", poster: "assets/video/vulkano-1.jpg", label: "VULKANO SUMMIT", project: "vulkano" },
    { type: "video", src: "assets/video/drom-ologram.mp4", poster: "assets/video/drom-ologram.jpg", label: "DRØM // OLOGRAM", project: "drom" },
    { type: "img",   src: "assets/img/stage-02.jpg", label: "PHASE2 // MONOLITI LED", project: "phase2" },
    { type: "video", src: "assets/video/opera-prismatica.mp4", poster: "assets/video/opera-prismatica.jpg", label: "OPERA // PRISMATICA", project: "opera" },
    { type: "img",   src: "assets/img/wl-03.jpg", label: "WITH LOVE // STAGE", project: "withlove" },
    { type: "video", src: "assets/video/interactive-1.mp4", poster: "assets/video/interactive-1.jpg", label: "INTERACTIVE TRACKING", project: "installazioni" }
  ];

  if (reelTrack) {
    const doubled = [...REEL_ITEMS, ...REEL_ITEMS];
    reelTrack.innerHTML = doubled.map((it) => `
      <div class="reel-item" data-project="${it.project}">
        ${it.type === "video"
          ? `<video muted loop playsinline preload="none" data-src="${it.src}" poster="${it.poster}"></video>`
          : `<img src="${it.src}" alt="${it.label}" loading="lazy">`
        }
        <span>${it.label}</span>
      </div>
    `).join("");

    reelTrack.addEventListener("click", (e) => {
      const card = e.target.closest(".reel-item");
      if (!card) return;
      const p = PROJECTS.find((x) => x.id === card.dataset.project);
      if (p) openModal(p);
    });
  }

  // ---------- 6. PORTFOLIO GRID & FILTER ----------
  const pfGrid = document.getElementById("pfGrid");
  const pfFilter = document.getElementById("pfFilter");

  function renderPortfolio() {
    if (!pfGrid) return;
    pfGrid.innerHTML = PROJECTS.map((p) => `
      <article class="pf-card ${p.size} reveal" data-id="${p.id}" data-cats="${p.cats.join(" ")}" tabindex="0" role="button" aria-label="Apri progetto ${p.title}">
        ${p.cover.type === "video"
          ? `<video muted loop playsinline preload="none" data-src="${p.cover.src}" poster="${p.cover.poster}"></video>`
          : `<img src="${p.cover.src}" alt="${p.title}" loading="lazy">`
        }
        <div class="scan"></div>
        <span class="pf-open">APRI [${p.items.length}] ↗</span>
        <div class="pf-info">
          <span class="pf-idx">[${p.idx}]</span>
          <h3 class="pf-title">${p.title}</h3>
          <p class="pf-meta">${p.meta}</p>
        </div>
      </article>
    `).join("");

    pfGrid.querySelectorAll(".pf-card").forEach((card) => {
      const open = () => {
        const proj = PROJECTS.find((x) => x.id === card.dataset.id);
        if (proj) openModal(proj);
      };
      card.addEventListener("click", open);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          open();
        }
      });
    });
  }
  renderPortfolio();

  if (pfFilter) {
    pfFilter.addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-f]");
      if (!btn) return;
      const f = btn.dataset.f;
      pfFilter.querySelectorAll("button").forEach((b) => b.classList.toggle("on", b === btn));
      pfGrid.querySelectorAll(".pf-card").forEach((card) => {
        const cats = card.dataset.cats.split(" ");
        const show = f === "all" || cats.includes(f);
        card.classList.toggle("hidden", !show);
      });
    });
  }

  // ---------- 7. DUPLICATE MARQUEE TRACK FOR SEAMLESS LOOP ----------
  const marqueeTrack = document.querySelector(".marquee-track");
  if (marqueeTrack) {
    marqueeTrack.innerHTML += marqueeTrack.innerHTML;
  }

  // ---------- 8. PROJECT LIGHTBOX MODAL ----------
  const modal = document.getElementById("modal");
  const mIdx = document.getElementById("mIdx");
  const mTitle = document.getElementById("mTitle");
  const mMeta = document.getElementById("mMeta");
  const mDesc = document.getElementById("mDesc");
  const mStage = document.getElementById("mStage");
  const mThumbs = document.getElementById("mThumbs");
  const mCount = document.getElementById("mCount");
  const mPrev = document.getElementById("mPrev");
  const mNext = document.getElementById("mNext");

  let activeProject = null;
  let activeSlide = 0;

  function renderSlide(idx) {
    if (!activeProject) return;
    const total = activeProject.items.length;
    activeSlide = (idx + total) % total;
    const item = activeProject.items[activeSlide];

    mStage.innerHTML = item.type === "video"
      ? `<video src="${item.src}" poster="${item.poster || ""}" controls autoplay loop playsinline></video>`
      : `<img src="${item.src}" alt="${activeProject.title} — ${activeSlide + 1}">`;

    mCount.textContent = `${String(activeSlide + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
    mThumbs.querySelectorAll("button").forEach((b, i) => {
      b.classList.toggle("on", i === activeSlide);
    });
  }

  function openModal(proj) {
    activeProject = proj;
    mIdx.textContent = `[${proj.idx}]`;
    mTitle.textContent = proj.title;
    mMeta.textContent = proj.meta;
    mDesc.textContent = proj.desc;

    mThumbs.innerHTML = proj.items.map((it, i) => {
      const thumbSrc = it.type === "video" ? it.poster : it.src;
      return `<button class="${it.type === "video" ? "v" : ""}" data-i="${i}" aria-label="Media ${i + 1}"><img src="${thumbSrc}" alt=""></button>`;
    }).join("");

    renderSlide(0);
    modal.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    if (!modal || modal.hidden) return;
    mStage.innerHTML = "";
    modal.hidden = true;
    document.body.style.overflow = "";
    activeProject = null;
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target.hasAttribute("data-close")) closeModal();
      const tb = e.target.closest(".modal-thumbs button");
      if (tb) renderSlide(Number(tb.dataset.i));
    });
    mPrev.addEventListener("click", () => renderSlide(activeSlide - 1));
    mNext.addEventListener("click", () => renderSlide(activeSlide + 1));
    window.addEventListener("keydown", (e) => {
      if (modal.hidden) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") renderSlide(activeSlide - 1);
      if (e.key === "ArrowRight") renderSlide(activeSlide + 1);
    });
  }

  // ---------- 9. SERVICES HOVER VIDEO PREVIEW ----------
  const svcList = document.getElementById("svcList");
  const svcPreview = document.getElementById("svcPreview");
  if (svcList && svcPreview && window.matchMedia("(hover:hover)").matches) {
    const vid = svcPreview.querySelector("video");
    svcList.querySelectorAll("li").forEach((li) => {
      li.addEventListener("mouseenter", () => {
        const src = li.dataset.preview;
        if (src && vid.getAttribute("src") !== src) {
          vid.src = src;
          vid.play().catch(() => {});
        }
        svcPreview.classList.add("on");
      });
    });
    svcList.addEventListener("mousemove", (e) => {
      svcPreview.style.left = `${e.clientX}px`;
      svcPreview.style.top = `${e.clientY}px`;
    });
    svcList.addEventListener("mouseleave", () => {
      svcPreview.classList.remove("on");
      vid.pause();
    });
  }

  // ---------- 10. TECHNOLOGIES TERMINAL AUTOTYPE ----------
  const termBody = document.getElementById("termBody");
  const TERM_SCRIPT = [
    "$ vizzz --probe-rig --loc=SICILIA:MILANO",
    "┌──────────────────────────────────────────────────┐",
    "│ VIZZZ.VIZZZ // REAL-TIME VISUAL PIPELINE v4.2    │",
    "└──────────────────────────────────────────────────┘",
    "[OK] TOUCHDESIGNER      :: generative node graph / GLSL",
    "[OK] RESOLUME / MADMAPPER :: multi-output projection warp",
    "[OK] CAPTURE / BLENDER  :: 3D stage & lighting pre-viz",
    "[OK] SENSORI / MIDI / LASER / OSC :: interactive I/O",
    "[OK] SISTEMI LED / PROIEZIONI VIDEO :: custom pixel maps",
    "[OK] SISTEMI VR & DRONISTICA :: spatial & aerial vision",
    "",
    "$ status --signal",
    "> ORDINE E' IL RISULTATO. DISORDINE E' IL PROCESSO."
  ].join("\n");

  let termStarted = false;
  function startTerminal() {
    if (termStarted || !termBody) return;
    termStarted = true;
    let i = 0;
    const type = () => {
      if (i <= TERM_SCRIPT.length) {
        termBody.innerHTML = TERM_SCRIPT.slice(0, i)
          .replace(/\[OK\]/g, '<span class="ok">[OK]</span>') + '<span class="caret"></span>';
        i += 2;
        setTimeout(type, 18);
      }
    };
    type();
  }

  // ---------- 11. TEXT SCRAMBLE ON SECTION TITLES ----------
  const CHARS = "!<>-_\\/[]{}—=+*^?#01VIZZZ";
  function scrambleText(el) {
    if (el.dataset.scrambled) return;
    el.dataset.scrambled = "1";
    const original = el.textContent;
    let frame = 0;
    const queue = original.split("").map((ch, i) => ({
      to: ch,
      start: Math.floor(i * 1.6),
      end: Math.floor(i * 1.6) + 12 + Math.floor(Math.random() * 10)
    }));

    const update = () => {
      let out = "";
      let done = 0;
      for (let i = 0; i < queue.length; i++) {
        const q = queue[i];
        if (frame >= q.end || q.to === " ") {
          done++;
          out += q.to;
        } else if (frame >= q.start) {
          const c = CHARS[Math.floor(Math.random() * CHARS.length)];
          out += `<span class="sc">${c}</span>`;
        } else {
          out += q.to;
        }
      }
      el.innerHTML = out;
      if (done < queue.length) {
        frame++;
        requestAnimationFrame(update);
      }
    };
    update();
  }

  // ---------- 12. NO SIGNAL MANIFESTO WORD-BY-WORD SCROLL REVEAL ----------
  const manifesto = document.getElementById("manifesto");
  const KEY_WORDS = new Set(["DOMINIO", "OLIGARCHICO", "SOVRANAZIONALE", "AUTOCONSAPEVOLEZZA,", "AUTOCOSAPEVOLEZZA,", "LIBERE", "CONSAPEVOLI", "DENARO?!", "MINACCIA.", "SALVARE", "NOI", "STESSI."]);
  let manifestoWords = [];
  if (manifesto) {
    const words = manifesto.textContent.trim().split(/\s+/);
    manifesto.innerHTML = words.map((w) => {
      const clean = w.replace(/[",.;]/g, "");
      const isKey = KEY_WORDS.has(w) || KEY_WORDS.has(clean);
      return `<span class="w${isKey ? " key" : ""}">${w}</span>`;
    }).join(" ");
    manifestoWords = Array.from(manifesto.querySelectorAll(".w"));
  }

  function updateManifesto() {
    if (!manifesto || !manifestoWords.length) return;
    const rect = manifesto.getBoundingClientRect();
    const vh = window.innerHeight;
    const progress = Math.max(0, Math.min(1, (vh * 0.82 - rect.top) / (rect.height + vh * 0.35)));
    const litCount = Math.floor(progress * manifestoWords.length);
    for (let i = 0; i < manifestoWords.length; i++) {
      manifestoWords[i].classList.toggle("lit", i <= litCount);
    }
  }
  window.addEventListener("scroll", updateManifesto, { passive: true });
  updateManifesto();

  // ---------- 13. INTERSECTION OBSERVERS (REVEALS, LAZY VIDEOS, HUE, NAV) ----------
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        en.target.classList.add("in");
        if (en.target.classList.contains("scramble")) scrambleText(en.target);
        if (en.target.classList.contains("terminal")) startTerminal();
        const counter = en.target.querySelector?.("[data-count]");
        if (counter && !counter.dataset.done) {
          counter.dataset.done = "1";
          const target = Number(counter.dataset.count);
          let cur = 1990;
          const step = () => {
            cur += Math.ceil((target - cur) * 0.18);
            counter.textContent = String(cur);
            if (cur < target) requestAnimationFrame(step);
          };
          step();
        }
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal, .scramble").forEach((el) => revealObs.observe(el));

  // Lazy load & auto-play/pause loop videos when visible
  const videoObs = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      const v = en.target;
      if (en.isIntersecting) {
        if (v.dataset.src && !v.src) {
          v.src = v.dataset.src;
        }
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, { rootMargin: "200px" });

  document.querySelectorAll("video[data-src]").forEach((v) => videoObs.observe(v));

  // Section observer for active nav & dynamic background code hue
  const secObs = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        const id = en.target.id;
        const hue = en.target.dataset.hue;
        if (hue) {
          document.documentElement.style.setProperty("--hue", hue);
          if (typeof window.__setVizzzHue === "function") window.__setVizzzHue(Number(hue));
        }
        if (id) {
          navLinks.forEach((a) => a.classList.toggle("on", a.getAttribute("href") === `#${id}`));
        }
      }
    });
  }, { threshold: 0.35 });

  document.querySelectorAll("section[id]").forEach((s) => secObs.observe(s));

  // Footer year
  const yr = document.getElementById("year");
  if (yr) yr.textContent = String(new Date().getFullYear());
})();
