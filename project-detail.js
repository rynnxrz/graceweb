/* =========================================================================
   project-detail.js
   Specimen dossier — chaptered plate sequence built from the PDF's raw
   embedded images (not page crops with caption text). Per-project
   layouts mirror the original spread composition; click any plate to
   open the lightbox.
   ========================================================================= */

(() => {

  const BASE = 'public/images/projects/extracted-portfolio/';

  /* --- Project dossiers -------------------------------------------- */
  // Each dossier carries a `chapters` array. A chapter corresponds to
  // a PDF spread page; its `rows` are 12-col grid rows where each item
  // declares its `img` (file stem under `<folder>/images/webp/`), a
  // `span` (1-12), and a short caption.

  const DOSSIERS = {

    'heishui-river-resort': {
      no: 'spec.001 / 2023',
      name: 'Heishui River Resort',
      binomial: 'Aquaria nigra',
      kind: 'Hospitality · Practice — Concept stage, design team',
      meta: 'Guangxi, China · 03–08 / 2023 · ≈100 rooms, 50 homestays',
      abstract:
        "Hospitality grafted to the Blackwater River. The architecture retreats into its environment — dark tones, mountain-inspired forms, native vegetation. As part of the design team I worked the early stage: site planning, room typology, and the massing strategy that responded to topography and river orientation. The masterplan won its competition and is now under construction.",
      folder: 'heishui-river-resort',
      chapters: [
        {
          note: 'Spread 04–05 · project leaf',
          rows: [
            [{ img: 'p04-img01', span: 12, cap: 'Bird-eye perspective along the Blackwater River' }],
            [{ img: 'p05-img02', span: 12, cap: 'Public-house panorama at dawn — black slate roofs' }],
            [
              { img: 'p05-img01', span: 6, cap: 'Site master plan — riverine substrate' },
              { img: 'p05-img03', span: 6, cap: 'Pool house — slate void looking out to mountain' },
            ],
          ],
        },
        {
          note: 'Spread 06–07 · concept & plan',
          rows: [
            [
              { img: 'p07-img08', span: 7, cap: 'Resort house — black slate roofs into the misty valley' },
              { img: 'p07-img06', span: 5, cap: 'Resort house render — over-water platform' },
            ],
            [
              { img: 'p07-img02', span: 4, cap: 'Room type 1 — plan' },
              { img: 'p07-img03', span: 4, cap: 'Room type 2 — plan' },
              { img: 'p07-img04', span: 4, cap: 'Room type 3 — plan' },
            ],
            [
              { img: 'p07-img07', span: 7, cap: 'Public-building entry — courtyard tea house' },
              { img: 'p07-img05', span: 5, cap: 'Resort cluster — aerial view across the valley' },
            ],
          ],
        },
      ],
    },

    'les-chardonneuses': {
      no: 'spec.002 / 2026',
      name: 'Les-Chardonneuses',
      binomial: 'Cardus couture',
      kind: 'Couture · Collaboration — Germanier Paris, Haute Couture SS26',
      meta: 'Paris, France · 12 / 2025 – 01 / 2026 · headpiece × 3',
      abstract:
        "A wearable micro-structure for Germanier's SS26 — the lifecycle of a flower (growth, collapse, decay) translated into a runway-ready couture headpiece. At Ivy J Studio I supported design through fast 3D iteration and parametric exploration: lace-like digital textures, controlled deformations, internal frameworks resolved through repeated 3D-print prototyping.",
      folder: 'les-chardonneuses',
      chapters: [
        {
          note: 'Spread 08–09 · couture SS26',
          rows: [
            [
              { img: 'p08-img02', span: 5, cap: 'Detail 3D lace — design 01' },
              { img: 'p08-img01', span: 7, cap: 'Atelier backstage — Headpiece design 02' },
            ],
            [{ img: 'p08-img03', span: 12, cap: 'Headpiece 03 — side detail, organic-rupture lace' }],
            [
              { img: 'p09-img01', span: 4, cap: 'Couture look 13 · Headpiece 01' },
              { img: 'p09-img02', span: 4, cap: 'Couture look 01 · Headpiece 02' },
              { img: 'p09-img03', span: 4, cap: 'Couture look 24 · Headpiece 03' },
            ],
          ],
        },
      ],
    },

    'seeds-of-change': {
      no: 'spec.003 / 2025',
      name: 'Seeds of Change',
      binomial: 'Semina mutabilis',
      kind: 'Spatial · Exhibition design — Curation team',
      meta: 'London, UK · 10 / 2025',
      abstract:
        "Spatial and material setup for an immersive exhibition on the transformative power of nature. I worked the physical build — wall display layouts, mounting techniques, organic-aligned material sourcing — and oversaw graphic production: posters, stickers, postcards, flyers. On-site coordination during the show.",
      folder: 'seeds-of-change',
      chapters: [
        {
          note: 'Spread 10–11 · exhibition',
          rows: [
            [{ img: 'p10-img02', span: 12, cap: 'Product table — perspex flowers, glass vitrines' }],
            [
              { img: 'p10-img01', span: 6, cap: 'Interactive wearable — visitor in conversation' },
              { img: 'p10-img03', span: 6, cap: 'Opening night — printed-petal wall' },
            ],
            [
              { img: 'p11-img02', span: 6, cap: 'Wall display — small sculptures on white card' },
              { img: 'p11-img04', span: 6, cap: '"Four seasons" — suspended floral cloud' },
            ],
          ],
        },
      ],
    },

    'tide-rewoven': {
      no: 'spec.004 / 2025',
      name: 'Tide-ReWoven',
      binomial: 'Marina contexta',
      kind: 'Bio-integrated · YR 2 Master · Group research project',
      meta: 'Aberdeen Harbour, Hong Kong · 10 / 2024 – 06 / 2025',
      abstract:
        "Aberdeen waterfront re-imagined as a floating, adaptive market that responds to tides, light, and ecological pressure. Roof structures and membranes — fishnet-chitosan composites — shift in porosity and density across the day, indexed to Micrasterias morphology and trained against algal photo-tropism via a GAN. A circular spatial system that grows with environmental rhythm.",
      folder: 'tide-rewoven',
      chapters: [
        {
          note: 'Spread 12–13 · project leaf · site',
          rows: [
            [{ img: 'p12-img01', span: 12, cap: 'Bird-eye perspective — floating market, Aberdeen Harbour' }],
            [
              { img: 'p13-img05', span: 4, cap: 'Existing fish market — wet-floor cold chain' },
              { img: 'p13-img06', span: 4, cap: 'Existing fish market — interior corridor' },
              { img: 'p13-img07', span: 4, cap: 'Existing fish market — vendor row' },
            ],
          ],
        },
        {
          note: 'Spread 14–15 · dynamic design',
          rows: [
            [{ img: 'p15-img04', span: 12, cap: 'Perspective section — tidal market, layered platforms' }],
          ],
        },
        {
          note: 'Spread 16–17 · parametric application',
          rows: [
            [{ img: 'p17-img08', span: 12, cap: 'Ocean-side perspective — chitosan roofscape at sunset' }],
          ],
        },
      ],
    },

    'mycoterra': {
      no: 'spec.005 / 2024',
      name: 'MycoTerra',
      binomial: 'Mycelium aedificans',
      kind: 'Bio-integrated · YR 1 Master · Group research project',
      meta: 'London, UK · 02–08 / 2024 · with Yingying Yan & Yining Loh',
      abstract:
        "Architecture as participant rather than shelter. MycoTerra integrates mycelium fabrication with earth construction, embracing growth, decay, and renewal. Computationally tuned through Grasshopper / Galapagos against CFD simulations for airflow, humidity, and temperature, then prototyped and tested for structural and biological viability.",
      folder: 'mycoterra',
      chapters: [
        {
          note: 'Project leaf · entrance & section',
          rows: [
            { kind: 'hero', cells: [
              { img: 'myco-hero-render', cap: 'Entrance perspective — mycelial-earth grove at the threshold' },
            ]},
            { kind: 'pair', cells: [
              { img: 'myco-section-01', cap: 'Long section — modular columns above the grove' },
              { img: 'myco-section-02', cap: 'Perspective section — habitation along the spine' },
            ]},
          ],
        },
        {
          note: 'Massing studies · iterative form',
          rows: [
            { kind: 'strip', cells: [
              { img: 'myco-massing-01', cap: '01' },
              { img: 'myco-massing-02', cap: '02' },
              { img: 'myco-massing-03', cap: '03' },
              { img: 'myco-massing-04', cap: '04' },
              { img: 'myco-massing-05', cap: '05' },
              { img: 'myco-massing-06', cap: '06' },
            ], cap: 'Six massing iterations — eroded mycelium-textured envelopes, computational variation across a single substrate logic.' },
          ],
        },
        {
          note: 'Fabrication & living material',
          rows: [
            { kind: 'pair', cells: [
              { img: 'myco-fab-pair-01', cap: '3D-printed lace scaffold — branching macro detail' },
              { img: 'myco-fab-pair-02', cap: 'Lattice prototype with clear-resin substrate' },
            ]},
            { kind: 'strip', cells: [
              { img: 'myco-fab-detail-01', cap: 'detail · seed' },
              { img: 'myco-fab-detail-02', cap: 'detail · cluster' },
              { img: 'myco-fab-detail-03', cap: 'detail · tower' },
              { img: 'myco-fab-detail-04', cap: 'detail · mesh substrate' },
            ], cap: 'Process plates — fabrication of mycelium-bearing scaffolds, four states across the iteration cycle.' },
          ],
        },
      ],
    },

    'co-silo-ferry-station': {
      no: 'spec.006 / 2022',
      name: 'Co-Silo Ferry Station',
      binomial: 'Silo coralinus',
      kind: 'Civic · YR 3 Undergraduate design project',
      meta: 'Wynyard Point, Auckland, New Zealand · 07–10 / 2022',
      abstract:
        'Six existing fuel silos on reclaimed land, reversed: rather than producing CO₂, they capture it. The ferry station becomes a threshold between human and reef — passengers asked to read the decay of coral as the architecture itself slowly opens, calcifies, and re-attaches to the bay.',
      folder: 'co-silo-ferry-station',
      chapters: [
        {
          note: 'Spread 25 · project leaf',
          rows: [
            [{ img: 'p25-img01', span: 12, cap: 'Underwater perspective — ferry above water, coral structure below' }],
          ],
        },
        {
          note: 'Spread 26–27 · coral ecology',
          rows: [
            [
              { img: 'p26-img11', span: 6, cap: 'Coral structure — physical model' },
              { img: 'p26-img10', span: 6, cap: 'Coral structure — digital model' },
            ],
          ],
        },
        {
          note: 'Spread 28–29 · design logic',
          rows: [
            [
              { img: 'p28-img06', span: 4, cap: 'Architectural model — first study' },
              { img: 'p28-img07', span: 4, cap: 'Architectural model — second study' },
              { img: 'p28-img08', span: 4, cap: 'Architectural model — final form' },
            ],
          ],
        },
        {
          note: 'Spread 30–31 · external · interior',
          rows: [
            [{ img: 'p30-img02', span: 12, cap: 'External perspective — coral-flower form catching the dusk' }],
            [
              { img: 'p30-img01', span: 5, cap: 'Façade detail — bio-material weave at scale' },
              { img: 'p30-img03', span: 7, cap: 'Elevation render — illuminated façade against dark sky' },
            ],
            [
              { img: 'p31-img02', span: 6, cap: 'Interior — waiting hall, reef columns' },
              { img: 'p31-img03', span: 6, cap: 'Interior atmospheres — lobby · departure · food court' },
            ],
          ],
        },
      ],
    },

    'project-ecoflow': {
      no: 'spec.007 / 2023',
      name: 'Project EcoFlow',
      binomial: 'Bryophyta aedicula',
      kind: 'Bio-integrated · YR 1 Master · Individual research project',
      meta: 'Oxford St, London, UK · 09 / 2023 – 01 / 2024',
      abstract:
        'A water-retaining moss façade for dense urban skin — tested against the heat-island of Oxford Street. Surface area, not floor area, becomes the unit. Architecture as metabolic system: existing buildings re-skinned to invite an interspecies network into the city.',
      folder: 'project-ecoflow',
      chapters: [
        {
          note: 'Spread 32–33 · narrative · facade',
          rows: [
            [{ img: 'p32-img01', span: 12, cap: 'Streetscape collage — moss-façade prototype on Oxford Street' }],
            [
              { img: 'p33-img04', span: 6, cap: 'Stage 1 — moss-patch perspective, early growth' },
              { img: 'p33-img16', span: 6, cap: 'Stage 3 — moss-patch perspective, mature growth' },
            ],
          ],
        },
      ],
    },

    'project-ultra-plant': {
      no: 'spec.008 / 2022',
      name: 'Project Ultra-Plant',
      binomial: 'Symbiosis postnuclearis',
      kind: 'Speculative · YR 3 Undergraduate design project',
      meta: 'Auckland CBD, New Zealand (post-WW3) · 03–05 / 2022',
      abstract:
        'A modular living system in a post-nuclear Auckland: humans and plants share expandable habitats whose vein networks transfer energy, resources, and slowly restore the surrounding ecology. Residents are linked to a meta-verse layer through biological–digital exchange; design lives in four evolutionary phases. The project is presented in a speculative, illustrative voice — the boards below are reproduced as drawn.',
      folder: 'project-ultra-plant',
      chapters: [
        {
          note: 'Spread 34–35 · site',
          rows: [
            [{ img: 'p35-img01', span: 12, cap: 'Site map — Auckland CBD pod network · year 2330 (illustrative)' }],
          ],
        },
        {
          note: 'Spread 36–37 · core & pod',
          rows: [
            [{ img: 'p37-img01', span: 12, cap: 'Core perspective section — concrete core, pod cycle (illustrative)' }],
          ],
        },
      ],
    },

    'neptunes-dawn': {
      no: 'spec.009 / 2024',
      name: "Neptune's Dawn",
      binomial: 'Neptuni aurora',
      kind: 'Competition · Group project',
      meta: 'Shanghai, China · 08–09 / 2024 · with Muze Ouyang & Xinning Yu',
      abstract:
        "A Shanghai competition entry — submerged ecologies and shifting waterlines translated into a riverside vertical-tower scheme. Hand-drawn sea-creature taxonomy informs partition strategy; the site map indexes towers to programme nodes. Presented as competition boards (full sheets reproduced).",
      folder: 'neptunes-dawn',
      chapters: [
        {
          note: 'Spread 38 · concept board',
          rows: [
            [{ img: 'p38-img01', span: 12, cap: 'Background · concept · spaces · partitions — competition sheet 1' }],
          ],
        },
        {
          note: 'Spread 39 · site board',
          rows: [
            [{ img: 'p39-img01', span: 12, cap: 'Site axonometric — vertical tower cluster — competition sheet 2' }],
          ],
        },
      ],
    },
  };

  // Order matters for prev/next navigation (matches index.html ordering)
  const ORDER = [
    'heishui-river-resort',
    'les-chardonneuses',
    'seeds-of-change',
    'tide-rewoven',
    'mycoterra',
    'co-silo-ferry-station',
    'project-ecoflow',
    'project-ultra-plant',
    'neptunes-dawn',
  ];

  /* --- Helpers ------------------------------------------------------ */

  function qs(name) {
    const url = new URL(window.location.href);
    return url.searchParams.get(name);
  }

  function imgSrc(folder, stem) {
    return `${BASE}${folder}/images/webp/${stem}.webp`;
  }

  // For lightbox / retina viewing, prefer a `<stem>-lg.webp` companion
  // when the dossier was authored from curated originals (the
  // conversion script writes both sizes side-by-side). Fall back to
  // the page-size webp when no -lg variant exists.
  function imgSrcLg(folder, stem) {
    return `${BASE}${folder}/images/webp/${stem}-lg.webp`;
  }

  /* --- Render ------------------------------------------------------ */

  const id = qs('project') || ORDER[0];
  const d = DOSSIERS[id];

  if (!d) {
    document.body.innerHTML =
      '<div style="padding:120px 40px;font-family:Cormorant Garamond,serif;color:#d6d2c4">' +
      '<h1 style="font-style:italic;font-weight:300;font-size:48px;margin-bottom:16px">Specimen not found.</h1>' +
      '<p style="color:#b9b4a2"><a href="index.html" style="color:inherit;border-bottom:1px solid currentColor;text-decoration:none">return to index</a></p>' +
      '</div>';
    return;
  }

  // Title
  document.title = `${d.name} — Grace`;

  // Header chips
  const folio = document.getElementById('dossier-folio');
  const dossierId = document.getElementById('dossier-id');
  if (folio) folio.textContent = `FOLIO / ${d.name.toUpperCase()}`;
  if (dossierId) dossierId.textContent = d.no;

  // Hero
  document.getElementById('dossier-kind').textContent = d.kind;
  document.getElementById('dossier-name-text').textContent = d.name;
  document.getElementById('dossier-binomial').textContent = d.binomial;
  document.getElementById('dossier-meta').textContent = d.meta;
  document.getElementById('dossier-abstract').textContent = d.abstract;

  // Plates — one chapter per PDF spread; each chapter has a row grid
  const platesEl = document.getElementById('plates');

  // Flat list of {src, cap} for lightbox navigation
  const lbItems = [];

  const chaptersHtml = d.chapters.map((ch) => {
    const rowsHtml = ch.rows.map((row) => {
      // A row may be either:
      //   • the legacy shape — an array of cells (default 12-col grid)
      //   • the new shape  — { kind: 'hero|pair|strip|pull|detail',
      //                        cells: [...], cap?: '...' }
      const isShape = !Array.isArray(row);
      const rowKind = isShape ? row.kind : null;
      const rowCells = isShape ? row.cells : row;
      const rowCap   = isShape ? row.cap  : null;

      const itemsHtml = rowCells.map((it) => {
        const src   = imgSrc(d.folder, it.img);
        const srcLg = imgSrcLg(d.folder, it.img);
        const lbIdx = lbItems.length;
        // Lightbox prefers the -lg companion. project-detail.js will
        // gracefully fall back to `src` if -lg 404s.
        lbItems.push({ src, srcLg, cap: it.cap });
        const safeCap = it.cap.replace(/"/g, '&quot;');
        const styleAttr = it.span ? `style="grid-column: span ${it.span};"` : '';
        return `
          <figure class="plate-cell" ${styleAttr} data-lb="${lbIdx}">
            <button class="plate-img-btn" type="button" aria-label="Open ${safeCap}">
              <img src="${src}" alt="${safeCap}" loading="lazy" decoding="async">
            </button>
            <figcaption class="plate-cap">${it.cap}</figcaption>
          </figure>
        `;
      }).join('');

      const rowClass = rowKind ? `plate-row plate-row--${rowKind}` : 'plate-row';
      // Strip rows pass cell count via custom property so the grid
      // template adapts automatically (4-up, 5-up, 6-up …).
      const rowStyle = rowKind === 'strip'
        ? ` style="--strip-cols: ${rowCells.length}"`
        : '';
      const sharedCapHtml = rowCap
        ? `<figcaption class="plate-row-cap">${rowCap}</figcaption>`
        : '';
      return `<div class="${rowClass}"${rowStyle}>${itemsHtml}</div>${sharedCapHtml}`;
    }).join('');

    return `
      <section class="plate-chapter">
        <header class="plate-chapter-head">
          <span class="plate-chapter-mark">◦</span>
          <span class="plate-chapter-note">${ch.note}</span>
        </header>
        ${rowsHtml}
      </section>
    `;
  }).join('');

  platesEl.innerHTML = chaptersHtml;

  // Reveal-on-scroll for chapters and rows
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.06, rootMargin: '0px 0px -6% 0px' });
    document.querySelectorAll('.plate-chapter, .plate-row').forEach((el) => io.observe(el));
  } else {
    document.querySelectorAll('.plate-chapter, .plate-row').forEach((el) => el.classList.add('is-in'));
  }

  /* --- Lightbox ---------------------------------------------------- */

  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lb-img');
  const lbCap = document.getElementById('lb-cap');
  const lbCount = document.getElementById('lb-count');
  let lbCurrent = -1;

  function lbOpen(idx) {
    if (!lb) return;
    if (idx < 0 || idx >= lbItems.length) return;
    lbCurrent = idx;
    const it = lbItems[idx];
    // Show the page-size webp instantly (it's already in cache), then
    // upgrade to the -lg variant once it loads. If -lg 404s (older
    // dossiers without curated originals), keep the page-size view.
    lbImg.src = it.src;
    lbImg.alt = it.cap;
    if (it.srcLg && it.srcLg !== it.src) {
      const probe = new Image();
      probe.onload = () => {
        if (lbCurrent === idx) lbImg.src = it.srcLg;
      };
      probe.src = it.srcLg;
    }
    if (lbCap) lbCap.textContent = it.cap;
    if (lbCount) lbCount.textContent = `${idx + 1} / ${lbItems.length}`;
    lb.classList.add('is-open');
    lb.setAttribute('aria-hidden', 'false');
    document.documentElement.classList.add('lb-open');
  }
  function lbClose() {
    if (!lb) return;
    lb.classList.remove('is-open');
    lb.setAttribute('aria-hidden', 'true');
    document.documentElement.classList.remove('lb-open');
    setTimeout(() => { if (!lb.classList.contains('is-open')) lbImg.src = ''; }, 280);
  }
  function lbStep(delta) {
    if (lbCurrent < 0) return;
    const next = (lbCurrent + delta + lbItems.length) % lbItems.length;
    lbOpen(next);
  }

  platesEl.addEventListener('click', (e) => {
    const btn = e.target.closest('.plate-img-btn');
    if (!btn) return;
    const fig = btn.closest('.plate-cell');
    if (!fig) return;
    const idx = Number(fig.dataset.lb);
    lbOpen(idx);
  });

  if (lb) {
    lb.addEventListener('click', (e) => {
      if (e.target.closest('[data-lb-close]')) { lbClose(); return; }
      if (e.target.closest('[data-lb-prev]')) { lbStep(-1); return; }
      if (e.target.closest('[data-lb-next]')) { lbStep(1); return; }
      if (e.target === lb) lbClose();
    });
    window.addEventListener('keydown', (e) => {
      if (!lb.classList.contains('is-open')) return;
      if (e.key === 'Escape') lbClose();
      else if (e.key === 'ArrowLeft') lbStep(-1);
      else if (e.key === 'ArrowRight') lbStep(1);
    });
  }

  /* --- Prev / next ------------------------------------------------- */

  const idx = ORDER.indexOf(id);
  const prevId = ORDER[(idx - 1 + ORDER.length) % ORDER.length];
  const nextId = ORDER[(idx + 1) % ORDER.length];
  const prev = DOSSIERS[prevId];
  const next = DOSSIERS[nextId];
  const prevEl = document.getElementById('dossier-prev');
  const nextEl = document.getElementById('dossier-next');
  if (prevEl) {
    prevEl.href = `project-detail.html?project=${prevId}`;
    document.getElementById('dossier-prev-name').textContent = prev.name;
  }
  if (nextEl) {
    nextEl.href = `project-detail.html?project=${nextId}`;
    document.getElementById('dossier-next-name').textContent = next.name;
  }
})();
