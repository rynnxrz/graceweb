/* =========================================================================
   network.js — homepage map.

   Layout: nine specimens at fixed positions on a tall scrollable
   canvas. Each mark is positioned in page coordinates and parked once
   the entry animation lands.

   Background: the topographic isoline field has been removed (request
   2026-05-06). The bg-canvas now paints a single substrate fill so the
   kinship threads carry the visual weight. The Gaussian-peak fields
   on each node remain in the data model but are no longer rendered.

   Entry: every mark starts at the centre of the viewport and lerps to
   its fixed position over ~1.6s. Once parked, marks DO NOT move — no
   idle drift, no mouse repulsion.

   Kinship threads: each edge is a hyphal strand assembled from a
   12-point smooth polyline (Q+T chain) plus a parallel "ghost"
   filament for volume, two short side branches that sprout once the
   main strand passes their root, and a glowing tip particle that
   leads the growth. Linear growth clock is eased through
   easeInOutCubic so strands germinate slowly, extend quickly, and
   slow as the tip arrives.
   ========================================================================= */

(() => {

  const root = document.getElementById('network');
  const bgCanvas = document.getElementById('bg-canvas');
  if (!root || !bgCanvas) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const bgCtx = bgCanvas.getContext('2d', { alpha: false });

  /* --- Specimens — fixed positions on the tall map ----------------- */

  const BASE = 'public/images/projects/extracted-portfolio/';
  const HERO_BASE = 'public/images/projects/hero image/';
  const heroSrc = (path) => path.startsWith('public/') ? path : BASE + path;

  // xPct relative to .network width, yPct relative to .network height.
  // .network is 220vh tall, so yPct=10 means up near the top, yPct=90
  // is way down the page. Keep neighbours far enough that their peaks
  // don't merge into a single blob.
  const NODES = [
    { id: 'mycoterra',             name: 'MycoTerra',             binomial: 'Mycelium aedificans',
      year: '2024', site: 'London · UK',
      kind: 'BIO-INTEGRATED RESEARCH',
      abstract: 'Architecture as participant in ecological cycle — mycelium and earth, computationally tuned for airflow and humidity.',
      xPct: 32, yPct: 11, peak: 'lg',
      hero: 'mycoterra/images/webp/myco-hero-render.webp' },

    { id: 'tide-rewoven',          name: 'Tide-ReWoven',          binomial: 'Marina contexta',
      year: '2025', site: 'Hong Kong',
      kind: 'BIO-INTEGRATED RESEARCH',
      abstract: 'Aberdeen waterfront re-imagined as a floating market that breathes with the tide. Algae-trained, GAN-driven membranes.',
      xPct: 70, yPct: 14, peak: 'lg',
      hero: HERO_BASE + 'tide-rewoven.webp' },

    { id: 'project-ecoflow',       name: 'Project EcoFlow',       binomial: 'Bryophyta aedicula',
      year: '2023', site: 'London · UK',
      kind: 'BIO-INTEGRATED RESEARCH',
      abstract: 'A water-retaining moss façade — tested against the heat-island of Oxford Street.',
      xPct: 84, yPct: 30, peak: 'md',
      hero: HERO_BASE + 'project-ecoflow.webp' },

    { id: 'project-ultra-plant',   name: 'Project Ultra-Plant',   binomial: 'Symbiosis postnuclearis',
      year: '2022', site: 'Auckland · NZ',
      kind: 'SPECULATIVE ARCHITECTURE',
      abstract: 'A modular living organism. Humans and plants share habitat whose vein networks slowly restore the surrounding ecology.',
      xPct: 14, yPct: 32, peak: 'md',
      hero: HERO_BASE + 'project-ultra-plant.webp' },

    { id: 'co-silo-ferry-station', name: 'Co-Silo Ferry Station', binomial: 'Silo coralinus',
      year: '2022', site: 'Auckland · NZ',
      kind: 'CIVIC ARCHITECTURE',
      abstract: 'Six fuel silos reversed — the ferry threshold becomes a meeting between human and reef.',
      xPct: 50, yPct: 48, peak: 'lg',
      hero: HERO_BASE + 'co-silo-ferry-station.webp' },

    { id: 'heishui-river-resort',  name: 'Heishui River Resort',  binomial: 'Aquaria nigra',
      year: '2023', site: 'Guangxi · CN',
      kind: 'HOSPITALITY · PRACTICE',
      abstract: 'Hospitality grafted to the Blackwater. Concept stage with the design team; under construction.',
      xPct: 16, yPct: 64, peak: 'sm',
      hero: HERO_BASE + 'heishui-river-resort.webp' },

    { id: 'les-chardonneuses',     name: 'Les-Chardonneuses',     binomial: 'Cardus couture',
      year: '2026', site: 'Paris · FR',
      kind: 'COUTURE · COLLABORATION',
      abstract: 'A couture headpiece for Germanier SS26 — the lifecycle of a flower as a runway-ready micro-structure.',
      xPct: 42, yPct: 70, peak: 'md',
      hero: 'les-chardonneuses/images/webp/lc-hero-thistle.webp' },

    { id: 'seeds-of-change',       name: 'Seeds of Change',       binomial: 'Semina mutabilis',
      year: '2025', site: 'London · UK',
      kind: 'EXHIBITION · CURATION',
      abstract: 'Spatial and material setup of an immersive exhibition on the transformative power of nature.',
      xPct: 76, yPct: 65, peak: 'sm',
      hero: HERO_BASE + 'seeds-of-change.webp' },

    { id: 'neptunes-dawn',         name: "Neptune's Dawn",        binomial: 'Neptuni aurora',
      year: '2024', site: 'Shanghai · CN',
      kind: 'COMPETITION · GROUP',
      abstract: 'A submerged sunrise — Shanghai competition entry, designed with Muze Ouyang and Xinning Yu.',
      xPct: 60, yPct: 88, peak: 'sm',
      hero: HERO_BASE + 'neptunes-dawn.webp' },
  ];

  /* --- Edges (kinship) -------------------------------------------- */

  const EDGES = [
    { a: 'mycoterra',             b: 'tide-rewoven',          group: 'bio-fabric',  label: 'bio-fabric' },
    { a: 'mycoterra',             b: 'project-ecoflow',       group: 'bio-fabric',  label: 'bio-fabric · Bartlett' },
    { a: 'tide-rewoven',          b: 'project-ecoflow',       group: 'bio-fabric',  label: 'bio-fabric' },
    { a: 'mycoterra',             b: 'les-chardonneuses',     group: 'method',      label: 'micro-structure · 3D-print' },
    { a: 'mycoterra',             b: 'project-ultra-plant',   group: 'speculative', label: 'speculative biology' },
    { a: 'project-ultra-plant',   b: 'project-ecoflow',       group: 'speculative', label: 'metabolic system' },
    { a: 'tide-rewoven',          b: 'co-silo-ferry-station', group: 'marine',      label: 'marine' },
    { a: 'tide-rewoven',          b: 'neptunes-dawn',         group: 'marine',      label: 'marine' },
    { a: 'co-silo-ferry-station', b: 'neptunes-dawn',         group: 'marine',      label: 'marine' },
    { a: 'co-silo-ferry-station', b: 'project-ultra-plant',   group: 'site',        label: 'Auckland' },
    { a: 'heishui-river-resort',  b: 'seeds-of-change',       group: 'practice',    label: 'practice · curation' },
    { a: 'heishui-river-resort',  b: 'les-chardonneuses',     group: 'practice',    label: 'practice · collaboration' },
    { a: 'les-chardonneuses',     b: 'seeds-of-change',       group: 'practice',    label: 'wearable · curation' },
  ];

  /* --- DOM construction ------------------------------------------- */

  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('class', 'net-svg');
  svg.setAttribute('preserveAspectRatio', 'none');

  // <defs> — glow filter for the growing tip + soft halo on mature strands
  const defs = document.createElementNS(svgNS, 'defs');
  defs.innerHTML = `
    <filter id="hypha-glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="2.4" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <radialGradient id="tip-bone" cx="50%" cy="50%" r="50%">
      <stop offset="0%"  stop-color="#f1ecdc" stop-opacity="0.95"/>
      <stop offset="45%" stop-color="#d6d2c4" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="#d6d2c4" stop-opacity="0"/>
    </radialGradient>
  `;
  svg.appendChild(defs);

  // Each edge now renders as a small group: one ghost (paler, parallel)
  // strand for volume, one main strand, plus a glowing tip and a couple
  // of side filaments that branch off mid-curve. All share the same
  // linear "growth clock" so the hyphal tip leads the growth.
  EDGES.forEach((e) => {
    const g = document.createElementNS(svgNS, 'g');
    g.setAttribute('class', 'net-thread-group');
    g.setAttribute('data-from', e.a);
    g.setAttribute('data-to', e.b);
    g.setAttribute('data-group', e.group);

    // (Ghost parallel filament removed 2026-05-06: each node should
    // emit a single line. Mid-strand side branches are still allowed
    // — those sprout from the main line, not from the node itself.)

    const main = document.createElementNS(svgNS, 'path');
    main.setAttribute('class', 'net-thread');
    main.setAttribute('data-from', e.a);
    main.setAttribute('data-to', e.b);
    main.setAttribute('data-group', e.group);
    g.appendChild(main);

    // Two side filaments — short branches sprouting from t≈0.35 and t≈0.7
    const branchA = document.createElementNS(svgNS, 'path');
    branchA.setAttribute('class', 'net-thread net-thread--branch');
    branchA.setAttribute('data-group', e.group);
    g.appendChild(branchA);

    const branchB = document.createElementNS(svgNS, 'path');
    branchB.setAttribute('class', 'net-thread net-thread--branch');
    branchB.setAttribute('data-group', e.group);
    g.appendChild(branchB);

    // Glowing growing tip
    const tip = document.createElementNS(svgNS, 'circle');
    tip.setAttribute('class', 'net-thread-tip');
    tip.setAttribute('data-group', e.group);
    tip.setAttribute('r', '5');
    tip.setAttribute('fill', 'url(#tip-bone)');
    tip.setAttribute('filter', 'url(#hypha-glow)');
    g.appendChild(tip);

    // Joint markers — small filled circles where the strand meets each
    // dot, so the line termination doesn't read as "floating off". They
    // share the strand's group colour and fade in alongside the strand.
    const jointA = document.createElementNS(svgNS, 'circle');
    jointA.setAttribute('class', 'net-thread-joint');
    jointA.setAttribute('data-group', e.group);
    jointA.setAttribute('r', '2.4');
    g.appendChild(jointA);

    const jointB = document.createElementNS(svgNS, 'circle');
    jointB.setAttribute('class', 'net-thread-joint');
    jointB.setAttribute('data-group', e.group);
    jointB.setAttribute('r', '2.4');
    g.appendChild(jointB);

    svg.appendChild(g);
    e.el       = main;
    e.branchA  = branchA;
    e.branchB  = branchB;
    e.tipEl    = tip;
    e.jointA   = jointA;
    e.jointB   = jointB;
    e.groupEl  = g;
    e.branchPhaseA = Math.random() * Math.PI * 2;
    e.branchPhaseB = Math.random() * Math.PI * 2;
  });
  root.appendChild(svg);

  const labelLayer = document.createElement('div');
  labelLayer.className = 'net-thread-labels';
  EDGES.forEach((e) => {
    const lab = document.createElement('span');
    lab.className = 'net-thread-label';
    lab.dataset.from = e.a;
    lab.dataset.to = e.b;
    lab.dataset.group = e.group;
    lab.textContent = e.label;
    labelLayer.appendChild(lab);
    e.labEl = lab;
  });
  root.appendChild(labelLayer);

  const nodeMap = new Map();
  NODES.forEach((n, idx) => {
    const sideRight = n.xPct < 65;
    const el = document.createElement('a');
    el.className = `net-mark ${sideRight ? 'is-side-right' : 'is-side-left'}`;
    el.href = `project-detail.html?project=${n.id}`;
    el.setAttribute('data-id', n.id);
    el.setAttribute('aria-label', `${n.name} — open dossier`);
    el.innerHTML = `
      <span class="net-mark-rings" aria-hidden="true">
        <span class="net-mark-ring" style="--i:0"></span>
        <span class="net-mark-ring" style="--i:1"></span>
        <span class="net-mark-ring" style="--i:2"></span>
      </span>
      <span class="net-mark-dot" aria-hidden="true"></span>
      <span class="net-mark-caption">
        <span class="net-mark-kind">${n.kind}</span>
        <span class="net-mark-name">${n.name}</span>
        <span class="net-mark-binomial">${n.binomial}</span>
        <span class="net-mark-meta">${n.site} · ${n.year}</span>
        <span class="net-mark-abstract">${n.abstract}</span>
      </span>
      <span class="net-mark-thumb" aria-hidden="true">
        <img src="${heroSrc(n.hero)}" alt="" loading="${idx < 3 ? 'eager' : 'lazy'}" decoding="async"${n.heroCrop ? ` style="transform:scale(${n.heroCrop.s||1});transform-origin:${n.heroCrop.x??50}% ${n.heroCrop.y??50}%"` : ''}>
      </span>
    `;
    root.appendChild(el);
    n.el = el;
    n.x = 0; n.y = 0;       // current viewport-local pixel position (for drawing)
    n.bx = 0; n.by = 0;     // base position in PAGE coordinates
    n.startX = 0; n.startY = 0; // entry-animation starting point (page coords)
    // Peak parameters for the height field
    const peakSpec = { lg: { sigma: 220, strength: 1.0 },
                       md: { sigma: 175, strength: 0.85 },
                       sm: { sigma: 140, strength: 0.7 } }[n.peak];
    n.peakSigma = peakSpec.sigma;
    n.peakStrength = peakSpec.strength;
    n.peakPhase = Math.random() * Math.PI * 2;
    nodeMap.set(n.id, n);
  });

  // Strand lifecycle states — colony loops grow → mature → die →
  // dormant → regrow forever, each edge independently phased.
  const ST_GROWING = 0;
  const ST_MATURE  = 1;
  const ST_DYING   = 2;
  const ST_DORMANT = 3;

  // Slowed lifecycle (was 4.5–9 / 1.4–2.3 / 1.5–3.7s). Strands now
  // hold longer before dying and rest longer between cycles, so the
  // colony breathes rather than churns.
  function rollHold()  { return 7500 + Math.random() * 7000; }  // 7.5–14.5s
  function rollDying() { return 2400 + Math.random() * 1400; }  // 2.4–3.8s
  function rollDorm()  { return 2800 + Math.random() * 3200; }  // 2.8–6.0s

  EDGES.forEach((e) => {
    e.aRef = nodeMap.get(e.a);
    e.bRef = nodeMap.get(e.b);
    e.phase = Math.random() * Math.PI * 2;
    // Mycelium growth — split into a baseline clock and a temporary
    // boost so cursor activity can preview growth without committing
    // it. `tBase` only ever advances (or resets at rebirth); `tBoost`
    // lerps toward a target driven by mouse energy / hover, and
    // decays back to 0 when the cursor stops or moves away — so the
    // strand visually retracts to its baseline when no longer fed.
    e.tBase    = 0;
    e.tBoost   = 0;
    e.progress = 0;
    e.matured  = false;
    // Lifecycle state machine + group alpha. `state` cycles through
    // ST_GROWING → ST_MATURE → ST_DYING → ST_DORMANT → ST_GROWING.
    // `stateMs` is wall-clock ms since entering the current state.
    // Random initial offset so strands aren't all in sync on load.
    e.state   = ST_GROWING;
    e.stateMs = -Math.random() * 600;   // negative = small head-start jitter
    e.holdMs  = rollHold();
    e.dyingMs = rollDying();
    e.dormMs  = rollDorm();
    e.alpha   = 1;
    e.el.setAttribute('pathLength', '1');
    e.el.style.strokeDasharray = '0 1';
    e.branchA.setAttribute('pathLength', '1');
    e.branchA.style.strokeDasharray = '0 1';
    e.branchB.setAttribute('pathLength', '1');
    e.branchB.style.strokeDasharray = '0 1';
    e.tipEl.style.opacity = '0';
  });

  // Boost shaping — how much "preview" mouse motion / hover can buy
  // and how quickly the boost relaxes back to zero. BOOST_LERP is per
  // frame; with 0.06 the boost half-lifes in ~11 frames (~180ms at
  // 60fps), so retraction reads as quick but not snappy.
  const BOOST_PER_E   = 0.16;     // max boost per energy unit (≤ ENERGY_MAX*this ≤ 0.64)
  const BOOST_HOVER   = 0.34;     // when this strand's endpoint is hovered
  const BOOST_LERP    = 0.06;

  /* --- Strict sequential entry queue --------------------------------
     Each node enters one at a time — like mushrooms breaking ground
     in succession, not a cohort arriving at once. Visible-on-load
     nodes are enqueued in folio (yPct) order; below-fold nodes wait
     until they intersect the viewport (so scrolling reveals them
     one by one, never "all already there"). ENTRY_STAGGER_MS ≥
     ENTRY_MS guarantees one node fully lands before the next starts.
  ----------------------------------------------------------------*/
  const ENTRY_STAGGER_MS = 620;     // ms between pops (≥ ENTRY_MS)

  const entryQueue = [];
  let entryConsumerTimer = null;

  function consumeEntry() {
    if (entryQueue.length === 0) {
      entryConsumerTimer = null;
      return;
    }
    const n = entryQueue.shift();
    if (n.entryAt === undefined) n.entryAt = performance.now();
    entryConsumerTimer = setTimeout(consumeEntry, ENTRY_STAGGER_MS);
  }
  function enqueueEntry(n) {
    if (n.entryAt !== undefined) return;
    if (entryQueue.indexOf(n) !== -1) return;
    entryQueue.push(n);
    if (entryConsumerTimer === null) {
      // Pop the first one immediately, schedule the rest
      const first = entryQueue.shift();
      first.entryAt = performance.now();
      entryConsumerTimer = setTimeout(consumeEntry, ENTRY_STAGGER_MS);
    }
  }

  // IntersectionObserver — every node observes itself; on first
  // intersection it joins the queue. rootMargin lets nodes start
  // emerging just before they reach the viewport edge so the user
  // sees them "arriving" rather than already-present.
  const io = (typeof IntersectionObserver !== 'undefined')
    ? new IntersectionObserver((entries) => {
        const arrivals = [];
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const id = entry.target.getAttribute('data-id');
          const n = nodeMap.get(id);
          if (n) arrivals.push(n);
          io.unobserve(entry.target);     // one-shot
        }
        // Sort arrivals by yPct so a fast-scrolling user still sees
        // them surface in folio order, not spatial-collision order.
        arrivals.sort((a, b) => a.yPct - b.yPct);
        arrivals.forEach(enqueueEntry);
      }, { rootMargin: '120px 0px 120px 0px', threshold: 0.01 })
    : null;

  /* --- Sizing ----------------------------------------------------- */

  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  let bgW = 0, bgH = 0;     // viewport pixels
  let netW = 0, netH = 0;   // .network content
  let netLeft = 0, netTop = 0; // page coord origin of .network

  function syncBgSize() {
    bgW = window.innerWidth;
    bgH = window.innerHeight;
    bgCanvas.width = Math.floor(bgW * dpr);
    bgCanvas.height = Math.floor(bgH * dpr);
    bgCanvas.style.width = bgW + 'px';
    bgCanvas.style.height = bgH + 'px';
    bgCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function resize() {
    syncBgSize();
    const r = root.getBoundingClientRect();
    netW = r.width;
    netH = root.offsetHeight;
    netLeft = root.offsetLeft;
    netTop = root.offsetTop;
    NODES.forEach((n) => {
      n.bx = netLeft + (n.xPct / 100) * netW;
      n.by = netTop  + (n.yPct / 100) * netH;
    });
    svg.setAttribute('viewBox', `0 0 ${netW} ${netH}`);
    svg.style.width = netW + 'px';
    svg.style.height = netH + 'px';
  }

  /* --- Background — quiet substrate only ---------------------------- */
  /* The topographic isolines have been removed (request 2026-05-06).
     The background stays as the dark substrate so the threads carry
     the visual weight on their own. The function is kept as a single
     fillRect so the rest of the loop stays unchanged. */

  function renderContour(/* time */) {
    bgCtx.fillStyle = '#070a0b';
    bgCtx.fillRect(0, 0, bgW, bgH);
  }

  /* --- Hover state ------------------------------------------------ */

  let hoveredId = null;

  function setHover(id) {
    hoveredId = id;
    if (id) {
      root.classList.add('has-hover');
      root.setAttribute('data-hover', id);
      EDGES.forEach((e) => {
        const isMine = e.a === id || e.b === id;
        e.el.classList.toggle('is-active', isMine);
        e.el.classList.toggle('is-muted', !isMine);
        e.labEl.classList.toggle('is-active', isMine);
        e.labEl.classList.toggle('is-muted', !isMine);
      });
      NODES.forEach((m) => {
        const related = m.id === id || EDGES.some((e) =>
          (e.a === id && e.b === m.id) || (e.b === id && e.a === m.id)
        );
        m.el.classList.toggle('is-related', related);
        m.el.classList.toggle('is-muted', !related);
      });
    } else {
      root.classList.remove('has-hover');
      root.setAttribute('data-hover', '');
      EDGES.forEach((e) => {
        e.el.classList.remove('is-active', 'is-muted');
        e.labEl.classList.remove('is-active', 'is-muted');
      });
      NODES.forEach((m) => m.el.classList.remove('is-related', 'is-muted'));
    }
  }

  NODES.forEach((n) => {
    n.el.addEventListener('mouseenter', () => setHover(n.id));
    n.el.addEventListener('mouseleave', () => setHover(null));
    n.el.addEventListener('focus', () => setHover(n.id));
    n.el.addEventListener('blur', () => setHover(null));
  });
  EDGES.forEach((e) => {
    function on() {
      e.el.classList.add('is-hot');
      e.labEl.classList.add('is-hot');
      e.aRef.el.classList.add('is-related');
      e.bRef.el.classList.add('is-related');
    }
    function off() {
      e.el.classList.remove('is-hot');
      e.labEl.classList.remove('is-hot');
      if (!hoveredId) {
        e.aRef.el.classList.remove('is-related');
        e.bRef.el.classList.remove('is-related');
      }
    }
    e.el.addEventListener('mouseenter', on);
    e.el.addEventListener('mouseleave', off);
    e.labEl.addEventListener('mouseenter', on);
    e.labEl.addEventListener('mouseleave', off);
  });

  /* --- Entry animation -------------------------------------------- */

  // Per-node entry duration. Each pop is one beat (~600ms); the queue
  // staggers them so the next pop only starts after the previous has
  // landed.
  const ENTRY_MS = 600;
  let entryStart = 0;
  function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }
  // Mild back-ease for the scale pop only — gives a subtle overshoot
  // (~5%) so each mark feels like it surfaces rather than slides in.
  // Default Penner constant is 1.70158; we use 1.0 for a calmer pop
  // that fits the herbarium tone.
  function easeOutBack(t) {
    const c1 = 1.0;
    const c3 = c1 + 1;
    return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
  }
  function setEntryStart() {
    // Nodes now appear AT their base positions (no fly-in from
    // viewport centre), so we no longer need to seed a startX/startY.
    // Function kept as a stub so the call sites (frame, boot)
    // continue to work.
  }

  /* --- Mycelium growth — mouse "feeds" the strands --------------- */
  /* Every pixel of cursor motion adds a tiny bit of energy that
     decays each frame. While the cursor is still, energy approaches
     zero and the strands grow at the slow base rate. While the
     cursor is in motion, all strands grow noticeably faster. */

  let mouseEnergy = 0;
  let lastMx = -1, lastMy = -1;
  // Slowed growth rates across the board. Idle full-growth was ~28s,
  // now ~60s. Mouse-active full growth was ~3s, now ~8s. Hover boost
  // halved so an actively-watched strand doesn't shoot to maturity.
  const ENERGY_PER_PX  = 0.0007;   // gain per pixel of pointer travel
  const ENERGY_DECAY   = 0.95;     // per-frame decay (slightly slower)
  const ENERGY_MAX     = 4;
  const GROW_BASE      = 0.00028;  // slow idle creep — full growth ≈ 60s
  const GROW_PER_E     = 0.00050;  // boost per energy unit
  const GROW_HOVER     = 0.00220;  // when a strand's endpoint is hovered

  window.addEventListener('mousemove', (e) => {
    if (lastMx >= 0) {
      const dx = e.clientX - lastMx;
      const dy = e.clientY - lastMy;
      const d  = Math.hypot(dx, dy);
      mouseEnergy = Math.min(ENERGY_MAX, mouseEnergy + d * ENERGY_PER_PX);
    }
    lastMx = e.clientX;
    lastMy = e.clientY;
  }, { passive: true });
  window.addEventListener('touchmove', (e) => {
    const t = e.touches[0]; if (!t) return;
    if (lastMx >= 0) {
      const d = Math.hypot(t.clientX - lastMx, t.clientY - lastMy);
      mouseEnergy = Math.min(ENERGY_MAX, mouseEnergy + d * ENERGY_PER_PX);
    }
    lastMx = t.clientX;
    lastMy = t.clientY;
  }, { passive: true });

  /* --- Hyphal strand geometry -------------------------------------- */
  /* Each strand is a 12-point smooth polyline along the A→B axis,
     perpendicularly displaced by a base half-sine sag plus two slowly
     evolving sine wobbles. The path is emitted as a Q+T chain (smooth
     quadratic chain with implicit reflected control points) so it
     reads as one continuous filament rather than a stiff arc. */

  const SAMPLES = 12;
  const easeInOutCubic = (t) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  function buildStrand(ax, ay, bx, by, time, phase, perpShift, bendSign) {
    const dx = bx - ax, dy = by - ay;
    const len = Math.hypot(dx, dy) || 1;
    const ux = dx / len, uy = dy / len;
    const px = -uy, py = ux;
    // More pronounced arch (was 0.13) + a low-frequency S-curve
    // contribution so long strands feel sinuous rather than C-shaped.
    const baseSag = Math.min(86, len * 0.20);
    const pts = new Array(SAMPLES + 1);
    for (let i = 0; i <= SAMPLES; i++) {
      const ti = i / SAMPLES;
      const along = ti * len;
      // Half-sine arch + low-freq S-bend + two wobble harmonics.
      // EVERY term is enveloped by sin(ti·π) so the strand pinches
      // exactly to (ax,ay) at ti=0 and (bx,by) at ti=1 — the line
      // visibly emerges from the dot rather than floating off it.
      const env = Math.sin(ti * Math.PI);
      const sag =
        env * baseSag * bendSign +
        env * Math.sin(ti * 2 * Math.PI + phase) * baseSag * 0.18 * bendSign +
        env * 9.0 * Math.sin(ti * 4 * Math.PI + time * 0.00080 + phase) +
        env * 4.2 * Math.sin(ti * 7 * Math.PI - time * 0.00110 + phase * 1.7) +
        env * perpShift;
      pts[i] = {
        x: ax + ux * along + px * sag,
        y: ay + uy * along + py * sag,
      };
    }
    let d = `M ${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}`;
    for (let i = 1; i < pts.length - 1; i++) {
      const mx = (pts[i].x + pts[i + 1].x) / 2;
      const my = (pts[i].y + pts[i + 1].y) / 2;
      d += ` Q ${pts[i].x.toFixed(1)} ${pts[i].y.toFixed(1)} ${mx.toFixed(1)} ${my.toFixed(1)}`;
    }
    d += ` T ${pts[pts.length - 1].x.toFixed(1)} ${pts[pts.length - 1].y.toFixed(1)}`;
    return { d, pts, ux, uy, px, py, len };
  }

  // Sample a point at parametric t along the polyline (used for tip
  // and branch root placement).
  function pointAt(pts, t) {
    const s = Math.max(0, Math.min(0.9999, t)) * (pts.length - 1);
    const i = Math.floor(s);
    const f = s - i;
    return {
      x: pts[i].x + (pts[i + 1].x - pts[i].x) * f,
      y: pts[i].y + (pts[i + 1].y - pts[i].y) * f,
    };
  }

  // Short side filament springing perpendicular off the main axis.
  function buildBranch(rootX, rootY, dirX, dirY, perpX, perpY, time, phase, length) {
    const tipX = rootX + perpX * length + dirX * length * 0.25;
    const tipY = rootY + perpY * length + dirY * length * 0.25;
    const wob  = Math.sin(time * 0.0009 + phase) * 4;
    const cpX  = rootX + perpX * length * 0.55 + wob;
    const cpY  = rootY + perpY * length * 0.55 + Math.cos(time * 0.0011 + phase) * 4;
    return `M ${rootX.toFixed(1)} ${rootY.toFixed(1)} Q ${cpX.toFixed(1)} ${cpY.toFixed(1)} ${tipX.toFixed(1)} ${tipY.toFixed(1)}`;
  }

  /* --- Animation loop --------------------------------------------- */

  let raf = 0;
  let running = true;
  let lastFrameT = 0;       // wall-clock t of last frame, for dt

  document.addEventListener('visibilitychange', () => { running = !document.hidden; });
  window.addEventListener('resize', () => {
    clearTimeout(resize._t);
    resize._t = setTimeout(resize, 120);
  });
  // No-op on scroll — we re-sample the field every frame anyway,
  // but render order already accounts for window.scrollY. Listen
  // mostly so we don't skip a frame on slower machines.
  window.addEventListener('scroll', () => {}, { passive: true });

  function frame(t) {
    raf = requestAnimationFrame(frame);
    if (!running) {
      lastFrameT = t;   // avoid huge dt jump on un-pause
      return;
    }

    if (entryStart === 0) {
      entryStart = t;
      lastFrameT = t;
      setEntryStart();
    }

    // Wall-clock dt for state-machine timers. Clamp to avoid huge
    // jumps after tab-visibility changes.
    const dt = Math.min(80, Math.max(0, t - lastFrameT));
    lastFrameT = t;

    // Per-node entry — each specimen pops in AT its final position
    // when its turn arrives in the queue (or when scrolled into view).
    // Nodes whose `entryAt` is still undefined stay tucked away at
    // scale 0.6 / opacity 0 — the queue/observer drives the timing.
    for (let i = 0; i < NODES.length; i++) {
      const n = NODES[i];
      n.x = n.bx;
      n.y = n.by;
      const lx = n.bx - netLeft;
      const ly = n.by - netTop;
      let easedN, scaledN;
      if (n.entryAt === undefined) {
        easedN  = 0;
        scaledN = 0.62;
      } else {
        const localT = t - n.entryAt;
        const entryProgN = Math.max(0, Math.min(1, localT / ENTRY_MS));
        easedN  = easeOutCubic(entryProgN);
        // Scale uses easeOutBack for the small "surfacing" overshoot.
        scaledN = 0.62 + 0.38 * easeOutBack(entryProgN);
      }
      n.el.style.transform =
        `translate3d(${lx.toFixed(1)}px, ${ly.toFixed(1)}px, 0) translate(-50%, -50%) scale(${scaledN.toFixed(3)})`;
      n.el.style.opacity = easedN.toFixed(3);
      n._eased = easedN;                     // cached for thread gating below
    }

    // Quiet substrate paint
    renderContour(t);

    // Mycelium energy — decay first, then advance every strand
    mouseEnergy *= ENERGY_DECAY;

    // Threads — multi-strand hyphal geometry with lifecycle loop
    // Strand endpoints sit exactly on the dot centres so each filament
    // visibly grows OUT OF the dot. The 9px dot covers the line cap.
    for (let i = 0; i < EDGES.length; i++) {
      const e = EDGES[i];
      const a = e.aRef, b = e.bRef;

      const cax = a.x - netLeft, cay = a.y - netTop;
      const cbx = b.x - netLeft, cby = b.y - netTop;
      const ax  = cax;
      const ay  = cay;
      const bxp = cbx;
      const byp = cby;

      const bendSign = Math.sin(e.phase) >= 0 ? 1 : -1;
      const main = buildStrand(ax, ay, bxp, byp, t, e.phase, 0, bendSign);
      e.el.setAttribute('d', main.d);

      // Mid-line kinship label tracks the actual sampled curve
      const mid = pointAt(main.pts, 0.5);
      e.labEl.style.transform =
        `translate3d(${mid.x.toFixed(1)}px, ${mid.y.toFixed(1)}px, 0) translate(-50%, -50%)`;

      /* Lifecycle ----------------------------------------------------
         Threads only start growing once both their endpoint nodes have
         substantially landed. After landing, they cycle through grow
         → mature (hold) → dying (alpha fade) → dormant (invisible)
         → grow again — each phase has a randomised duration so the
         colony as a whole feels alive but never frantic.

         tBase = baseline (only advances). tBoost = mouse/hover-driven
         preview that lerps back to 0 once feeding stops, so a strand
         that the cursor zoomed forward visually retracts to its
         baseline when the cursor leaves.
      ---------------------------------------------------------------*/
      const aLanded = (a._eased || 0) > 0.55;
      const bLanded = (b._eased || 0) > 0.55;
      const canGrow = aLanded && bLanded;
      const hovered = hoveredId && (e.a === hoveredId || e.b === hoveredId);

      e.stateMs += dt;

      if (e.state === ST_GROWING) {
        if (canGrow) {
          // Baseline is committed — never retreats during growing.
          // Hover is treated as "feeding" so it nudges baseline too,
          // letting the user accelerate to maturity by focussing on a
          // strand. Passive mouse motion only adjusts the boost.
          let baseRate = GROW_BASE;
          if (hovered) baseRate += GROW_HOVER;
          e.tBase = Math.min(1, e.tBase + baseRate);

          // Boost target — mouse energy + hover bonus. Capped by
          // remaining headroom so the visible progress can't exceed 1.
          const headroom = Math.max(0, 1 - e.tBase);
          let target = mouseEnergy * BOOST_PER_E;
          if (hovered) target += BOOST_HOVER;
          if (target > headroom) target = headroom;
          e.tBoost += (target - e.tBoost) * BOOST_LERP;
        } else {
          // Boost still relaxes even before the strand can grow, so
          // it doesn't accumulate unspent during entry.
          e.tBoost += (0 - e.tBoost) * BOOST_LERP;
        }
        e.alpha = 1;
        if (e.tBase >= 1) {
          e.state = ST_MATURE;
          e.stateMs = 0;
          e.holdMs = rollHold();
          e.tBoost = 0;
          if (!e.matured) {
            e.matured = true;
            e.groupEl.classList.add('is-mature');
            e.el.classList.add('is-mature');
          }
        }
      } else if (e.state === ST_MATURE) {
        e.tBase = 1; e.tBoost = 0;
        e.alpha = 1;
        // Hover keeps a strand from dying — focus is "feeding" it
        if (!hovered && e.stateMs >= e.holdMs) {
          e.state = ST_DYING;
          e.stateMs = 0;
          e.dyingMs = rollDying();
        }
      } else if (e.state === ST_DYING) {
        e.tBase = 1; e.tBoost = 0;
        e.alpha = Math.max(0, 1 - e.stateMs / e.dyingMs);
        if (e.stateMs >= e.dyingMs) {
          e.state = ST_DORMANT;
          e.stateMs = 0;
          e.dormMs = rollDorm();
          e.alpha  = 0;
          // Reset for the next cycle — fresh phases so each rebirth
          // grows along a slightly different curve.
          e.tBase = 0; e.tBoost = 0;
          e.matured = false;
          e.groupEl.classList.remove('is-mature');
          e.el.classList.remove('is-mature');
          e.phase        = Math.random() * Math.PI * 2;
          e.branchPhaseA = Math.random() * Math.PI * 2;
          e.branchPhaseB = Math.random() * Math.PI * 2;
        }
      } else if (e.state === ST_DORMANT) {
        e.alpha = 0;
        if (e.stateMs >= e.dormMs) {
          e.state = ST_GROWING;
          e.stateMs = 0;
        }
      }

      // Visual progress combines baseline + relaxed boost. Clamped so
      // we never overshoot the strand's geometric end.
      const tVis = Math.max(0, Math.min(1, e.tBase + e.tBoost));
      e.progress = easeInOutCubic(tVis);
      e.groupEl.style.opacity = e.alpha.toFixed(3);

      // Stroke-dasharray growth — single main strand only
      e.el.style.strokeDasharray = `${e.progress.toFixed(4)} 1`;

      // Glowing growing tip — only visible while extending, not while
      // mature/dying (mycelium tips dissipate once they reach target).
      if (e.state === ST_GROWING && e.progress > 0.001 && e.progress < 0.999) {
        const tipPt = pointAt(main.pts, e.progress);
        e.tipEl.setAttribute('cx', tipPt.x.toFixed(1));
        e.tipEl.setAttribute('cy', tipPt.y.toFixed(1));
        let tipOp;
        if      (e.progress < 0.06) tipOp = e.progress / 0.06;
        else if (e.progress > 0.94) tipOp = (1 - e.progress) / 0.06;
        else                        tipOp = 1;
        e.tipEl.style.opacity = tipOp.toFixed(3);
      } else {
        e.tipEl.style.opacity = '0';
      }

      // Joint markers — A appears as soon as the strand sprouts;
      // B reveals once the tip arrives, so the connection feels
      // "made" rather than "drawn-through".
      e.jointA.setAttribute('cx', cax.toFixed(1));
      e.jointA.setAttribute('cy', cay.toFixed(1));
      e.jointB.setAttribute('cx', cbx.toFixed(1));
      e.jointB.setAttribute('cy', cby.toFixed(1));
      const jointAOp = e.progress > 0.04 ? Math.min(1, e.progress * 6) : 0;
      const jointBOp = e.progress > 0.93 ? Math.min(1, (e.progress - 0.93) / 0.07) : 0;
      e.jointA.style.opacity = jointAOp.toFixed(3);
      e.jointB.style.opacity = jointBOp.toFixed(3);

      // Side filaments — sprout once the main strand passes their
      // root. branchA at t=0.32, branchB at t=0.68.
      const A_ROOT = 0.32, B_ROOT = 0.68, FAN = 0.18;
      const aProg = Math.max(0, Math.min(1, (e.progress - A_ROOT) / FAN));
      const bProg = Math.max(0, Math.min(1, (e.progress - B_ROOT) / FAN));
      const aRoot = pointAt(main.pts, A_ROOT);
      const bRoot = pointAt(main.pts, B_ROOT);
      const branchLen = Math.min(54, main.len * 0.13);
      e.branchA.setAttribute('d',
        buildBranch(aRoot.x, aRoot.y, main.ux, main.uy,  main.px,  main.py,
                    t, e.branchPhaseA, branchLen));
      e.branchB.setAttribute('d',
        buildBranch(bRoot.x, bRoot.y, main.ux, main.uy, -main.px, -main.py,
                    t, e.branchPhaseB, branchLen * 0.85));
      e.branchA.style.strokeDasharray = `${aProg.toFixed(4)} 1`;
      e.branchB.style.strokeDasharray = `${bProg.toFixed(4)} 1`;
      e.branchA.style.opacity = aProg > 0.05 ? '0.55' : '0';
      e.branchB.style.opacity = bProg > 0.05 ? '0.45' : '0';

      // Mid-line label fades in once the strand is largely grown,
      // and back out as the strand dies so it doesn't outlast its host.
      let labelOp;
      if (e.state === ST_DYING)        labelOp = e.alpha;
      else if (e.state === ST_DORMANT) labelOp = 0;
      else                             labelOp = Math.max(0, (e.progress - 0.55) / 0.35);
      e.labEl.style.opacity = String(Math.min(1, labelOp));
    }
  }

  /* --- Boot -------------------------------------------------------- */

  resize();

  // Hand each node to the IntersectionObserver so above-fold ones
  // enqueue immediately (IO fires for already-visible elements on
  // observe()) and below-fold ones wait until they're scrolled near.
  if (!reduced && io) {
    NODES.forEach((n) => io.observe(n.el));
  }

  if (reduced) {
    // Skip entry animation; mark every node entered immediately.
    NODES.forEach((n) => {
      n.entryAt = -ENTRY_MS;     // forces eased=1 on first frame
      n.x = n.bx; n.y = n.by;
      n.startX = n.bx; n.startY = n.by;
      n.el.style.transform =
        `translate3d(${n.bx - netLeft}px, ${n.by - netTop}px, 0) translate(-50%, -50%)`;
      n.el.style.opacity = '1';
    });
    EDGES.forEach((e) => {
      const a = e.aRef, b = e.bRef;
      const NODE_PAD = 11;
      const cax = a.bx - netLeft, cay = a.by - netTop;
      const cbx = b.bx - netLeft, cby = b.by - netTop;
      const rdx = cbx - cax, rdy = cby - cay;
      const rlen = Math.hypot(rdx, rdy) || 1;
      const rux = rdx / rlen, ruy = rdy / rlen;
      const ax  = cax + rux * NODE_PAD;
      const ay  = cay + ruy * NODE_PAD;
      const bxp = cbx - rux * NODE_PAD;
      const byp = cby - ruy * NODE_PAD;
      const bendSign = Math.sin(e.phase) >= 0 ? 1 : -1;
      const main = buildStrand(ax, ay, bxp, byp, 0, e.phase, 0, bendSign);
      e.el.setAttribute('d', main.d);
      const mid = pointAt(main.pts, 0.5);
      e.labEl.style.transform =
        `translate3d(${mid.x.toFixed(1)}px, ${mid.y.toFixed(1)}px, 0) translate(-50%, -50%)`;
      e.tBase = 1; e.tBoost = 0; e.progress = 1;
      e.alpha = 1;
      e.state = ST_MATURE;
      e.el.style.strokeDasharray = '1 1';
      e.groupEl.style.opacity = '1';
      // Joints fixed at node centres (untouched by motion)
      e.jointA.setAttribute('cx', cax.toFixed(1));
      e.jointA.setAttribute('cy', cay.toFixed(1));
      e.jointB.setAttribute('cx', cbx.toFixed(1));
      e.jointB.setAttribute('cy', cby.toFixed(1));
      e.jointA.style.opacity = '1';
      e.jointB.style.opacity = '1';
      // Reduced motion: no branches, no glowing tip — strands sit still.
      e.branchA.style.opacity = '0';
      e.branchB.style.opacity = '0';
      e.tipEl.style.opacity = '0';
      e.matured = true;
      e.groupEl.classList.add('is-mature');
      e.labEl.style.opacity = '1';
    });
    renderContour(0);
  } else {
    raf = requestAnimationFrame(frame);
  }

})();
