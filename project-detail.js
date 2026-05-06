/* =========================================================================
   project-detail.js
   Renders a specimen dossier — vertical plate sequence built from the
   PDF source-page renders. Adjacent-specimen nav at the foot.
   ========================================================================= */

(() => {

  const BASE = 'public/images/projects/extracted-portfolio/';

  /* --- Project dossiers -------------------------------------------- */

  // Each project's source-pages were dumped as p##.webp. Marginalia is
  // hand-curated to read like field notes.
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
      pages: [
        { p: 'p04', note: 'Project leaf — Blackwater River, brief' },
        { p: 'p05', note: 'Massing studies & site master plan' },
        { p: 'p06', note: 'Detail drawing — stone, vegetation, water' },
        { p: 'p07', note: 'Plans & renders — concept and room typology' },
      ],
    },

    'les-chardonneuses': {
      no: 'spec.002 / 2026',
      name: 'Les-Chardonneuses',
      binomial: 'Cardus couture',
      kind: 'Couture · Collaboration — Germanier Paris, Haute Couture SS26',
      meta: 'Paris, France · 12 / 2025 – 01 / 2026 · headpiece × 3',
      abstract:
        "A wearable micro-structure for Germanier’s SS26 — the lifecycle of a flower (growth, collapse, decay) translated into a runway-ready couture headpiece. At Ivy J Studio I supported design through fast 3D iteration and parametric exploration: lace-like digital textures, controlled deformations, internal frameworks resolved through repeated 3D-print prototyping.",
      folder: 'les-chardonneuses',
      pages: [
        { p: 'p08', note: 'Backstage — three headpieces, detail' },
        { p: 'p09', note: 'Digital design, 3D-print details, runway' },
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
      pages: [
        { p: 'p10', note: 'Opening night, wearables, table display' },
        { p: 'p11', note: 'Wall display details, peripheral products' },
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
      pages: [
        { p: 'p12', note: 'Project leaf — bird-eye render' },
        { p: 'p13', note: 'Early site analysis — Aberdeen waterfront' },
        { p: 'p14', note: 'Fish-market design overview, material life-cycle' },
        { p: 'p15', note: 'Dynamic design — tidal section & purification pods' },
        { p: 'p16', note: 'ML with algae morphology — lab data, GAN output' },
        { p: 'p17', note: 'Roof tile system — algae-driven parametric design' },
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
      pages: [
        { p: 'p18', note: 'Section — material / crystallisation zone' },
        { p: 'p19', note: 'Project leaf — entrance perspective' },
        { p: 'p20', note: 'Design optimisation, prototype printing' },
        { p: 'p21', note: 'Module fabrication, geometric variation' },
        { p: 'p22', note: 'Programme & spatial typology' },
        { p: 'p23', note: 'Biological growth, mycelial expression' },
        { p: 'p24', note: 'Final assembly, inhabitation' },
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
      pages: [
        { p: 'p25', note: 'Project leaf — underwater perspective' },
        { p: 'p26', note: 'CO₂ research — coral acidification & symbiosis' },
        { p: 'p27', note: 'Site & silo programme' },
        { p: 'p28', note: 'Plan, section, architectural strategy' },
        { p: 'p29', note: 'Material study, façade detail' },
        { p: 'p30', note: 'Interior atmospheres' },
        { p: 'p31', note: 'Reef–quay interface, final renders' },
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
      pages: [
        { p: 'p32', note: 'Project leaf — narrative collage' },
        { p: 'p33', note: 'Façade studies — moss patches, growth pattern' },
      ],
    },

    'project-ultra-plant': {
      no: 'spec.008 / 2022',
      name: 'Project Ultra-Plant',
      binomial: 'Symbiosis postnuclearis',
      kind: 'Speculative · YR 3 Undergraduate design project',
      meta: 'Auckland CBD, New Zealand (post-WW3) · 03–05 / 2022',
      abstract:
        'A modular living system in a post-nuclear Auckland: humans and plants share expandable habitats whose vein networks transfer energy, resources, and slowly restore the surrounding ecology. Residents are linked to a meta-verse layer through biological–digital exchange; design lives in four evolutionary phases.',
      folder: 'project-ultra-plant',
      pages: [
        { p: 'p34', note: 'Project leaf — background, four phases' },
        { p: 'p35', note: 'Site development, world map of damage' },
        { p: 'p36', note: 'System diagram, user manual' },
        { p: 'p37', note: 'Pod-and-vein architecture, final views' },
      ],
    },

    'neptunes-dawn': {
      no: 'spec.009 / 2024',
      name: "Neptune's Dawn",
      binomial: 'Neptuni aurora',
      kind: 'Competition · Group project',
      meta: 'Shanghai, China · 08–09 / 2024 · with Muze Ouyang & Xinning Yu',
      abstract:
        'A Shanghai competition entry — a quieter, marine-rooted dawn for a riverside site. The project shares the studio’s interest in submerged ecologies and shifting waterlines.',
      folder: 'neptunes-dawn',
      pages: [
        { p: 'p38', note: 'Project leaf — concept' },
        { p: 'p39', note: 'Continued — material and detail' },
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

  // Plates — vertical scroll of source pages
  const platesEl = document.getElementById('plates');
  platesEl.innerHTML = d.pages.map((pg) => {
    const src = `${BASE}${d.folder}/source-pages/webp/${pg.p}.webp`;
    return `
      <article class="plate">
        <div class="plate-marginalia">
          <span class="pl-no">${pg.p.toUpperCase()}</span>
          <span class="pl-note">${pg.note}</span>
        </div>
        <div class="plate-image">
          <img src="${src}" alt="${d.name} — ${pg.note}" loading="lazy" decoding="async">
        </div>
      </article>
    `;
  }).join('');

  // Reveal-on-scroll
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('.plate').forEach((el) => io.observe(el));
  } else {
    document.querySelectorAll('.plate').forEach((el) => el.classList.add('is-in'));
  }

  // Prev / next
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
