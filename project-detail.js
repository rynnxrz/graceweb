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
        "Hospitality grafted to the Blackwater River. Slate roofs, dark tones, native vegetation — the architecture retreats into the karst valley rather than imposing on it.",
      folder: 'heishui-river-resort',
      metadata: [
        ['Released', '08 / 2023'],
        ['Type',     'Hospitality design (practice)'],
        ['Site',     'Guangxi, China'],
        ['Phase',    'Concept stage'],
        ['Programme', '≈100 rooms · 50 homestays'],
        ['Status',   'Construction underway'],
      ],
      intro: [
        'The Blackwater River runs through bamboo karst country, dark and slow, with public-house architecture from a now-vanished riverboat trade lining its banks. The brief: graft a 100-room resort and 50 homestays into this landscape without dominating it. The architecture borrows the slate roof, the courtyard tea house, the dim interior — and lets the river decide where buildings sit.',
      ],
      chapters: [
        {
          note: 'Chapter 01 · site & landscape',
          title: 'A masterplan that reads the river first',
          prose: [
            "The masterplan is read as a riverine substrate first, building stock second. Each cluster sits inside a fold of the karst valley, oriented to the river bend, set behind native bamboo and slate retaining walls. Room typologies (one-, two-, four-bedroom) modulate density without changing the roofscape rhythm — every block reads as a piece of the river's edge.",
          ],
          rows: [
            { kind: 'fullbleed', cells: [
              { img: 'heishui-hero-resort', cap: 'Resort across the Blackwater — slate roofs into mountain' },
            ]},
            { kind: 'pair', cells: [
              { img: 'heishui-axo-zone', cap: 'Site axonometric — zone analysis, river substrate' },
              { img: 'heishui-site-map', cap: 'Master plan — Blackwater watershed' },
            ]},
          ],
        },
        {
          note: 'Chapter 02 · public houses',
          title: 'Anchors for the visitor’s day',
          prose: [
            'The public buildings — courtyard tea house, pool house, central reception — work as anchors for the visitor’s day. Each is a quiet inversion of a Wuyuan public-house: black slate roof, deep eaves, courtyard with single tree, inward gaze toward the river. The lighting strategy relies on aperture rather than fixture; at dusk, internal lights spill out as small orange gestures across the dark river.',
          ],
          rows: [
            { kind: 'strip', cells: [
              { img: 'heishui-render-01', cap: 'over-water platform' },
              { img: 'heishui-render-02', cap: 'tea house entry' },
              { img: 'heishui-render-04', cap: 'pool house, dusk' },
            ], cap: 'Three of the public buildings, each at a different hour — the architecture asked to read across light.' },
          ],
        },
        {
          note: 'Chapter 03 · atmosphere',
          title: 'The architecture disappears at dusk',
          prose: [
            'The render set traces the resort’s posture across hours — dawn at the tea house, midday over the pool, dusk along the river path. The brief was to test whether the architecture could disappear into the dusk; the renders, by Dan Lah, were our proof that it could.',
          ],
          rows: [
            { kind: 'pair', cells: [
              { img: 'heishui-render-03', cap: 'Resort house — over-water terrace' },
              { img: 'heishui-render-05', cap: 'Pool house — slate void looking out' },
            ]},
            { kind: 'detail', cells: [
              { img: 'heishui-render-06', cap: 'Aerial — resort cluster across the valley' },
            ]},
          ],
        },
      ],
      reflection: {
        title: 'The masterplan is the project',
        paragraphs: [
          'The competition winning condition was not innovation but restraint. The brief asked for a resort, the site asked for a retreat, and the architecture had to make both legible at once. The masterplan is now under construction; whether it will read as quietly as the renders proposed is the question that comes after the photographs.',
          'What I learned working as part of the design team: the masterplan IS the project. The pictures are evidence; the plan is the argument. Once the masterplan was decided, every room type and detail followed; the masterplan itself was where the design happened.',
        ],
      },
      credits: [
        ['Role',     'Architectural Designer (concept stage)'],
        ['Practice', 'Oliver Andrew Associates'],
        ['Site',     'Guangxi, China'],
        ['Phase',    'Concept design'],
        ['Status',   'Construction underway'],
        ['Renders',  'Dan Lah'],
        ['Year',     '2023'],
      ],
    },

    'les-chardonneuses': {
      no: 'spec.002 / 2026',
      name: 'Les-Chardonneuses',
      binomial: 'Cardus couture',
      kind: 'Couture · Collaboration — Germanier Paris, Haute Couture SS26',
      meta: 'Paris, France · 10 / 2025 – 01 / 2026 · headpiece × 3',
      abstract:
        "A wearable micro-structure for Germanier's SS26 — the floral lifecycle (growth, collapse, decay) translated into runway couture. Lace-like digital textures, controlled deformations, internal frameworks resolved through 3-D-print iteration.",
      folder: 'les-chardonneuses',
      metadata: [
        ['Released', '01 / 2026'],
        ['Type',     'Couture · collaboration'],
        ['Brand',    'Germanier · Haute Couture SS26'],
        ['Studio',   'Ivy J Studio'],
        ['Pieces',   'Headpiece × 3'],
        ['Method',   'Parametric · 3-D-print iteration'],
      ],
      intro: [
        "The brief from Germanier's atelier was a flower in three states: bloom, collapse, decay. The brief in our 3-D printer was harder — how does a 60-gram crystal-resin lattice behave when worn at speed under runway lights, when the model turns sharp, when the camera catches it from below? Three weeks of nightly print cycles and one Paris fitting.",
      ],
      chapters: [
        {
          note: 'Chapter 01 · the brief, the bloom',
          title: 'A flower caught mid-burst',
          prose: [
            'The first headpiece reads as full bloom — translucent thistles caught mid-burst, internal armature hidden behind the resin lace. The challenge was structural: the petals had to fan from a single nape attachment without snagging tulle. Five iterations on the print bed, two failed at the fitting, the third walked SS26 look 13.',
          ],
          rows: [
            { kind: 'fullbleed', cells: [
              { img: 'lc-hero-thistle', cap: 'Final piece — crystal-resin thistle headpiece for SS26 look 13' },
            ]},
            { kind: 'strip', cells: [
              { img: 'lc-process-01', cap: '25 Oct' },
              { img: 'lc-process-02', cap: '25 Oct' },
              { img: 'lc-process-03', cap: '25 Oct' },
              { img: 'lc-process-04', cap: '26 Oct' },
            ], cap: 'October process — atelier sessions translating the floral brief into structural geometry.' },
          ],
        },
        {
          note: 'Chapter 02 · print, fail, refine',
          title: 'The 3-D printer as a fabric loom',
          prose: [
            'The second piece tested a controlled-collapse logic — petals deformed from their idealised geometry by a parametric weathering pass, then re-printed at a density that allowed the lace to flex on impact. Failures were instructive: sections that broke during fitting got reinforced not by adding material but by re-routing internal struts. The print process became part of the design conversation, not its execution stage.',
          ],
          rows: [
            { kind: 'pair', cells: [
              { img: 'lc-proto-black',     cap: 'Black-resin prototype — controlled collapse geometry' },
              { img: 'lc-proto-clear-02',  cap: 'Clear-resin prototype — print bed pre-cure' },
            ]},
            { kind: 'strip', cells: [
              { img: 'lc-proto-clear-01', cap: 'lattice' },
              { img: 'lc-proto-detail',   cap: 'detail' },
              { img: 'lc-final-detail',   cap: 'final' },
            ], cap: 'Three states across the iteration cycle — lattice scaffold, structural detail, and the final printed piece.' },
          ],
        },
        {
          note: 'Chapter 03 · atelier, runway, after',
          title: 'Decay is the absence of frame',
          prose: [
            'The final piece — decay — was about absence. The headpiece’s frame stays whole while the lace opens. We printed it in four parts so the fitting team could swap density mid-rehearsal; the final density landed lighter than expected, almost weightless on the model. After the show, the pieces were archived; the atelier kept one copy, we kept the print files.',
          ],
          rows: [
            { kind: 'pair', cells: [
              { img: 'lc-process-05', cap: 'January refinement — atelier studio shot' },
              { img: 'lc-process-06', cap: 'January refinement — petal articulation test' },
            ]},
          ],
        },
      ],
      reflection: {
        title: 'Where sculpture and architecture meet',
        paragraphs: [
          'Couture is one of the few disciplines that still treats fabrication as performance. There is no maintenance contract, no after-life of a building; the piece exists for the runway and a month of editorial. That short window forced a different kind of rigour — every detail had to read at thirty paces and survive a fitting room. The 3-D printer became a fabric loom — slow, iterative, and deeply unglamorous between renders.',
          'What stayed with me afterward was how thin the line is between sculpture and architecture when the structure is the design. The internal armature of the headpiece is small-scale architecture; the petals are the surface; the brief is the same as a building’s — make a thing that holds itself up under load and reads from the right distance.',
        ],
      },
      credits: [
        ['Role',     'Head of Design Assistant'],
        ['Studio',   'Ivy J Studio'],
        ['Brand',    'Germanier (Haute Couture SS26)'],
        ['Show',     'Paris Couture Week, January 2026'],
        ['Method',   'Parametric design · 3-D-print prototyping'],
        ['Material', 'Resin · photopolymer · internal armature'],
        ['Year',     '2025–2026'],
      ],
    },

    'seeds-of-change': {
      no: 'spec.003 / 2025',
      name: 'Seeds of Change',
      binomial: 'Semina mutabilis',
      kind: 'Spatial · Exhibition design — Curation team',
      meta: 'London, UK · 10 / 2025',
      abstract:
        "Spatial and material setup for an immersive exhibition on the transformative power of nature — a single immersive wall, vitrines, printed graphics, and on-site coordination across a one-week run.",
      folder: 'seeds-of-change',
      metadata: [
        ['Released', '10 / 2025'],
        ['Type',     'Exhibition · spatial design'],
        ['Site',     'London, UK'],
        ['Role',     'Curation team · on-site coordinator'],
        ['Duration', 'October 2025 (pop-up)'],
        ['Output',   'Wall · vitrines · print run'],
      ],
      intro: [
        'Seeds of Change was a pop-up exhibition about transformation — how nature reorganises itself across scales, from algal cluster to forest canopy. My role on the curation team was the physical translation: how do these ideas land in a small London room with a one-week build and a one-week run?',
      ],
      chapters: [
        {
          note: 'Chapter 01 · the room, the wall',
          title: 'One immersive wall, slow-shifting light',
          prose: [
            'The exhibition centred on a single immersive wall — translucent flora, suspended above moss and slow-shifting light. We sourced perspex flowers, glass vitrines, and printed-petal substrate; the wall composition went through three iterations before the opening, with each pass favouring a more legible hierarchy of object → surround → light.',
          ],
          rows: [
            { kind: 'fullbleed', cells: [
              { img: 'seeds-hero-installation', cap: 'Immersive wall — translucent flora on moss substrate' },
            ]},
            { kind: 'pair', cells: [
              { img: 'seeds-doc-01', cap: 'Wall composition — full view, opening night' },
              { img: 'seeds-doc-02', cap: 'Vitrine detail — perspex flora cluster' },
            ]},
          ],
        },
        {
          note: 'Chapter 02 · documentation',
          title: 'What visitors photograph first',
          prose: [
            'The show was photographed on opening night under exhibition lighting only. The image set below documents the wall, the vitrines, and one of the visitor-engagement micro-installations — a perspex-petal cloud that visitors could photograph themselves under, a small interactive moment that ended up generating most of the social-media share.',
          ],
          rows: [
            { kind: 'strip', cells: [
              { img: 'seeds-doc-03', cap: 'wall corner' },
              { img: 'seeds-doc-04', cap: 'vitrine row' },
              { img: 'seeds-doc-05', cap: 'cloud detail' },
            ], cap: 'Three documentation views — wall, vitrines, and the suspended-petal cloud that visitors most often photographed themselves with.' },
          ],
        },
        {
          note: 'Chapter 03 · print run',
          title: 'Posters, postcards, the legible hierarchy',
          prose: [
            'The graphic identity was kept tonal — buff and oat, no high-contrast. Posters, postcards, stickers, and floor stickers were produced for opening week and a small print run sold during the show. The poster shown below was the closing print.',
          ],
          rows: [
            { kind: 'detail', cells: [
              { img: 'seeds-poster', cap: 'Closing-week poster — the show’s graphic anchor' },
            ]},
          ],
        },
      ],
      reflection: {
        title: 'Exhibition design is closer to theatre',
        paragraphs: [
          'Exhibition design is closer to theatre than architecture. The build is fast, the run is short, and most of the work goes into rehearsing what the visitor sees in the first ten seconds. The lessons here were practical: a single immersive moment beats three competing ones; the lighting plot is half the design; visitors photograph themselves before they read the wall text. Plan for that.',
          'What I’d do differently: keep one signature moment, lose two. The wall and the cloud both worked; the table sets in between competed for attention. The most memorable exhibitions I’ve been to do one thing well and let everything else be the room.',
        ],
      },
      credits: [
        ['Role',      'Event Curation & Spatial Design Support'],
        ['Site',      'London, UK'],
        ['Duration',  'October 2025'],
        ['Materials', 'Perspex · glass vitrine · printed substrate'],
        ['Print run', 'Posters · postcards · stickers'],
        ['Year',      '2025'],
      ],
    },

    'tide-rewoven': {
      no: 'spec.004 / 2025',
      name: 'Tide-ReWoven',
      binomial: 'Marina contexta',
      kind: 'Bio-integrated · YR 2 Master · Thesis project',
      meta: 'Aberdeen Harbour, Hong Kong · 10 / 2024 – 06 / 2025',
      abstract:
        "Aberdeen's working waterfront re-imagined as a tidal-breathing market — algae-trained membranes index light, oxygen, and human flow into a single sectional system.",
      folder: 'tide-rewoven',
      metadata: [
        ['Released',   '06 / 2025'],
        ['Type',       'Bio-integrated thesis'],
        ['Site',       'Aberdeen Harbour, HK'],
        ['Programme',  'MArch · Bartlett UCL'],
        ['Year',       'Year 2 (Master’s thesis)'],
        ['Method',     'Conditional GAN · parametric'],
      ],
      intro: [
        "Aberdeen's typhoon-shelter waterfront still works the way it has for half a century — fishermen at dawn, wet floors, tarp roofs hung over the dry market. Tide-ReWoven asks whether the same scaffolding could be tuned by light, salt, and tide instead of by tarp.",
      ],
      chapters: [
        {
          note: 'Chapter 01 · site & vision',
          title: 'A market that breathes with the tide',
          prose: [
            'The market sits at the threshold between fresh-catch trade and the tidal pool that feeds it. The new roofscape is read as a single sectional system — fishnet–chitosan composite stretched between bamboo masts, indexed to tide table and air-quality readings. At low tide the membrane hangs taut; at high tide, slack. The market opens and closes the way the harbour does.',
          ],
          rows: [
            { kind: 'fullbleed', cells: [
              { img: 'tide-hero-section', cap: 'Sectional study — fishnet-chitosan membrane at the harbour edge' },
            ]},
            { kind: 'pair', cells: [
              { img: 'tide-board-01', cap: 'Final review board 01 — site reading' },
              { img: 'tide-board-02', cap: 'Final review board 02 — proposal logic' },
            ]},
          ],
        },
        {
          note: 'Chapter 02 · method',
          title: 'GAN-trained membranes, light as input',
          prose: [
            'The membrane geometry was generated by a conditional GAN trained on Micrasterias diatom morphology and wave-forms sampled from the harbour over a year. Parametric inputs — algal photo-tropism, tidal range, vendor density — were embedded in the latent space; iterations were scored against shading, ventilation, and cleaning-cycle requirements.',
          ],
          rows: [
            { kind: 'pair', cells: [
              { img: 'tide-method-gan',    cap: 'Algae → computation — GAN training set, latent traversal' },
              { img: 'tide-method-render', cap: 'Mid-fidelity render — membrane in motion' },
            ]},
            { kind: 'strip', cells: [
              { img: 'tide-method-wave-01', cap: 'wave 01' },
              { img: 'tide-method-wave-02', cap: 'wave 02' },
              { img: 'tide-method-wave-03', cap: 'wave 03' },
              { img: 'tide-method-wave-04', cap: 'wave 04' },
            ], cap: 'Four wave-form studies — tidal data sampled from Aberdeen across a single lunar cycle, fed back into the GAN as conditioning.' },
          ],
        },
        {
          note: 'Chapter 03 · system',
          title: 'From ornament to tessellation',
          prose: [
            'The final geometry sits at the boundary of computational ornament and structural logic — each panel reads as biomorphic but resolves into a tessellated system that fabricates from a single-curvature net. The render sequence below traces the membrane through dawn, midday, dusk, and typhoon prep — four states of the same envelope.',
          ],
          rows: [
            { kind: 'pair', cells: [
              { img: 'tide-system-01', cap: 'System render 01 — daylight, full porosity' },
              { img: 'tide-system-02', cap: 'System render 02 — dusk, partial closure' },
            ]},
            { kind: 'strip', cells: [
              { img: 'tide-iter-01', cap: '01' },
              { img: 'tide-iter-02', cap: '02' },
              { img: 'tide-iter-03', cap: '03' },
              { img: 'tide-iter-04', cap: '04' },
            ], cap: 'Four iterations of the same membrane field — variation across density, curvature, and tessellation seam logic.' },
          ],
        },
      ],
      reflection: {
        title: 'A city that draws its own weather',
        paragraphs: [
          "Tide-ReWoven asks something quiet — that the city stop drawing its own infrastructure as background and start drawing it as weather. A market that opens and closes is not new; what's new is making the opening a physical answer to data that was always there but never acknowledged.",
          "Hong Kong's harbours will not be the working spaces they were. The project tries to imagine what an honest replacement looks like — not nostalgia, not erasure, but a membrane that registers the trade still happening underneath it.",
        ],
      },
      credits: [
        ['Designer',  'Yu (Grace) Shen'],
        ['Programme', 'MArch Bio-integrated Design — Year 2 Thesis'],
        ['School',    'The Bartlett School of Architecture, UCL'],
        ['Site',      'Aberdeen Harbour, Hong Kong SAR'],
        ['Method',    'Conditional GAN · parametric design'],
        ['Materials', 'Chitosan composite · recycled fishnet · bamboo'],
        ['Year',      '2024–2025'],
      ],
    },

    'mycoterra': {
      no: 'spec.005 / 2024',
      name: 'MycoTerra',
      binomial: 'Mycelium aedificans',
      kind: 'Bio-integrated · YR 1 Master · Group research project',
      meta: 'London, UK · 02–08 / 2024 · with Yingying Yan & Yining Loh',
      abstract:
        'Architecture as a participant in an ecological cycle rather than a sealed shelter — earth, mycelium, and air tuned together so that a living tissue settles into the geometry rather than coating it.',
      folder: 'mycoterra',
      // Editorial metadata strip — 4–6 short keys/values, shown after
      // the abstract in the dossier head.
      metadata: [
        ['Released',     '08 / 2024'],
        ['Type',         'Bio-integrated research'],
        ['Site',         'London, UK'],
        ['Programme',    'MArch · Bartlett UCL'],
        ['Collaborators', 'Yingying Yan · Yining Loh'],
        ['Strain',       'Pleurotus ostreatus'],
      ],
      // A single, punchier opener. The hero render that follows
      // (full-bleed) does most of the establishing work.
      intro: [
        "MycoTerra is not a building so much as a body — a porous threshold structure that admits microbial life as a co-author of its own form. Earth, mycelium, and air are tuned together so that a living tissue settles into the geometry rather than coats it.",
      ],
      chapters: [
        {
          note: 'Chapter 01 · concept',
          title: 'Mycelium as a material participant',
          // Open the chapter with the cinematic hero, then prose, then
          // the supporting section pair. Reads top-down like a film
          // cut to the title plate before the first dialogue.
          prose: [
            "Mycelium is treated here as a fabrication partner, not a finish. Its hyphae bind earth, hemp shiv, and chitosan into a load-bearing composite while leaving a soft, breathable skin. The tunable variables — humidity, light, substrate moisture — make the material behave less like concrete and more like a slow tide.",
          ],
          rows: [
            { kind: 'fullbleed', cells: [
              { img: 'myco-hero-render', cap: 'Entrance perspective — mycelial-earth grove at the threshold' },
            ]},
            { kind: 'pair', cells: [
              { img: 'myco-section-01', cap: 'Long section — modular columns above the grove' },
              { img: 'myco-section-02', cap: 'Perspective section — habitation along the spine' },
            ]},
          ],
        },
        {
          note: 'Chapter 02 · methodology',
          title: 'Computational tuning meets biological growth',
          prose: [
            "The form was iterated in Grasshopper with a Galapagos solver, scoring candidates against CFD simulations of airflow, humidity, and surface temperature. The fitness function rewarded geometry that admitted enough light for the substrate's first life cycle while protecting it from drying winds during the critical 6–14 day bloom window.",
          ],
          rows: [
            { kind: 'strip', cells: [
              { img: 'myco-massing-01', cap: '01' },
              { img: 'myco-massing-02', cap: '02' },
              { img: 'myco-massing-03', cap: '03' },
              { img: 'myco-massing-04', cap: '04' },
              { img: 'myco-massing-05', cap: '05' },
              { img: 'myco-massing-06', cap: '06' },
            ], cap: 'Six massings trace a single substrate logic across morphological permutations — an envelope that "wants" to be eroded, holding its civic posture while admitting weathering as a design layer.' },
          ],
        },
        {
          note: 'Chapter 03 · fabrication',
          title: 'From print to bloom',
          prose: [
            'Each scaffold was 3-D printed in PLA and bio-filament, then inoculated with a Pleurotus ostreatus strain raised in our lab. The print acted both as formwork and as sacrificial nutrient: the mycelium consumed the lignin in the filament during growth, leaving a denser composite skin where the print was thickest.',
          ],
          rows: [
            { kind: 'pair', cells: [
              { img: 'myco-fab-pair-01', cap: '3-D-printed lace scaffold — branching macro detail' },
              { img: 'myco-fab-pair-02', cap: 'Lattice prototype with clear-resin substrate' },
            ]},
            { kind: 'strip', cells: [
              { img: 'myco-fab-detail-01', cap: 'seed' },
              { img: 'myco-fab-detail-02', cap: 'cluster' },
              { img: 'myco-fab-detail-03', cap: 'tower' },
              { img: 'myco-fab-detail-04', cap: 'mesh substrate' },
            ], cap: 'Four states across one iteration cycle. The mesh, in particular, was a structural revelation — under 12 % density the lattice flexes; above 30 % the bloom can\'t penetrate; the working band is narrow.' },
          ],
        },
      ],
      // Closing reflection — two paragraphs, slow.
      reflection: {
        title: 'What the colony asks of us',
        paragraphs: [
          "If a column is alive, the maintenance contract changes. There is no longer a finished structure to inspect; there is a tissue to keep fed, watered, and shaded. Buildings of this kind ask their inhabitants to enter into a small, slow reciprocity — to read the wall's surface for stress as a gardener reads a leaf.",
          'What the colony asks, in the end, is that we widen our idea of who is collaborating. The mycelium is not decoration; it is a member of the design team — with its own rate of work, its own reasons.',
        ],
      },
      // Colophon — production credits in dt/dd pairs.
      credits: [
        ['Designers',  'Yu (Grace) Shen · Yingying Yan · Yining Loh'],
        ['Programme',  'MArch Bio-integrated Design'],
        ['School',     'The Bartlett School of Architecture, UCL'],
        ['Lab',        'Bio-Integrated Design Lab, UCL Here East'],
        ['Substrate',  'Hemp shiv · earth · chitosan'],
        ['Strain',     'Pleurotus ostreatus'],
        ['Year',       '2024'],
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
      metadata: [
        ['Released', '10 / 2022'],
        ['Type',     'Civic · ferry station'],
        ['Site',     'Wynyard Point, Auckland'],
        ['Programme', 'Undergrad YR 3 (UoA)'],
        ['Method',   'Coral-growth simulation · 3-D print'],
        ['Status',   'Design proposal'],
      ],
      intro: [
        "Wynyard Point's six retired fuel silos asked a different question of a ferry station: what if the threshold to the bay reversed the silo's role — capturing CO₂ instead of releasing it, and routing passengers across a slow architectural reef? The proposal grafts a coral-growth lattice onto the silo footprint, with the public programme tucked into the calcifying envelope.",
      ],
      chapters: [
        {
          note: 'Chapter 01 · the threshold',
          title: 'A ferry station that reads as a reef',
          prose: [
            "The dusk render anchors the proposal — an organic silo opening onto the harbour, the silhouette closer to anemone than industry. The structure is meant to be seen first across water, when the colour of the bay does most of the architectural work.",
          ],
          rows: [
            { kind: 'fullbleed', cells: [
              { img: 'silo-hero-dusk', cap: 'Silo at dusk — silhouette against Waitematā harbour' },
            ]},
          ],
        },
        {
          note: 'Chapter 02 · programme',
          title: 'Programme stitched into the calcified envelope',
          prose: [
            'Inside, the sequence is set by the ferry day — arrival path, waiting hall, food court, departure hall — each spliced through the coral lattice so that the structure itself becomes wayfinding. Algal columns inhabit the public room, and the underside of the slab shows water and reflection rather than soffit.',
          ],
          rows: [
            { kind: 'fullbleed', cells: [
              { img: 'silo-interior-program', cap: 'Plan + interior — food court, waiting, departure, arrival' },
            ]},
          ],
        },
        {
          note: 'Chapter 03 · fabrication',
          title: 'Coral as a fabrication strategy',
          prose: [
            'The structural logic was derived from coral-growth simulations, then 3-D printed in clear and white resin to test the lattice at three scales. The lattice resolves into a single curvature net — fragile in the print, structural in aggregate. The fingertip image is the working scale; the larger pieces are the legible ones.',
          ],
          rows: [
            { kind: 'fullbleed', cells: [
              { img: 'silo-fab-hero', cap: '3-D printed lattice — working scale, mushroom-cap detail in fingers' },
            ]},
            { kind: 'strip', cells: [
              { img: 'silo-fab-coral-01', cap: 'branching · low' },
              { img: 'silo-fab-coral-02', cap: 'branching · mid' },
              { img: 'silo-fab-coral-03', cap: 'branching · canopy' },
            ], cap: 'Three scales of the same coral lattice — low cluster, mid section, full canopy at the print envelope.' },
          ],
        },
      ],
      reflection: {
        title: 'Industrial silos, reversed',
        paragraphs: [
          "The proposal's simplest move is the most legible: the silo, retired, doesn't need to be erased to read as architecture. Reverse its purpose — capture instead of release — and the tank becomes a public room with a programme already embedded.",
          'What the project taught me: the most expensive architectural moves are often subtraction. The silo wall stays; the coral fills its breath. Wynyard Point doesn\'t need another iconic building; it needs a new use for the ones it already has.',
        ],
      },
      credits: [
        ['Designer', 'Yu (Grace) Shen'],
        ['Programme', 'BAS YR 3 — University of Auckland'],
        ['Tutors',   'School of Architecture and Planning'],
        ['Site',     'Wynyard Point, Auckland CBD'],
        ['Method',   'Coral-growth simulation · resin 3-D print'],
        ['Year',     '2022'],
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
      metadata: [
        ['Released', '01 / 2024'],
        ['Type',     'Bio-integrated façade'],
        ['Site',     'Oxford St, London'],
        ['Programme', 'MArch YR 1 — Bartlett UCL'],
        ['Output',   'Façade chamber system · moss growth study'],
      ],
      intro: [
        "Oxford Street is a heat-island corridor with no soil to spare and almost no green volume. EcoFlow proposes a re-skinning strategy that turns existing facades into a water-retentive moss substrate — a façade chamber system tuned to slow flow, hold humidity, and let species the city has lost re-attach to its surfaces.",
      ],
      chapters: [
        {
          note: 'Chapter 01 · streetscape',
          title: 'A re-skinned street, not a new building',
          prose: [
            "The proposal works on the existing wall plane: keep the building, change the skin. The collage below tests the read at street scale — moss as architectural element rather than hanging garden. The visual tension is intentional: moss reads soft, the host wall reads hard, the seam between them is where the project lives.",
          ],
          rows: [
            { kind: 'fullbleed', cells: [
              { img: 'p32-img01', cap: 'Streetscape collage — moss-façade prototype on Oxford Street' },
            ]},
          ],
        },
        {
          note: 'Chapter 02 · growth · time',
          title: 'Two stages of the same wall',
          prose: [
            'A façade made of moss is also a façade made of time. The pair below traces a single chamber through two states — early colonisation and mature growth — to make the time axis legible. The finish state isn\'t the picture; the change is.',
          ],
          rows: [
            { kind: 'pair', cells: [
              { img: 'p33-img04', cap: 'Stage 1 — moss-patch perspective, early growth' },
              { img: 'p33-img16', cap: 'Stage 3 — moss-patch perspective, mature growth' },
            ]},
          ],
        },
      ],
      reflection: {
        title: 'A façade is a substrate before it\'s an aesthetic',
        paragraphs: [
          "The lesson the moss kept teaching: a façade is a substrate before it's an aesthetic. The chamber system was the moment the project turned — once we treated the wall as something organisms had to *colonise*, the design questions changed from \"what does this look like\" to \"what does this hold\".",
        ],
      },
      credits: [
        ['Designer',  'Yu (Grace) Shen'],
        ['Programme', 'MArch Bio-integrated Design — Year 1'],
        ['School',    'The Bartlett School of Architecture, UCL'],
        ['Site',      'Oxford St, London, UK'],
        ['Year',      '2023–2024'],
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
      metadata: [
        ['Released', '05 / 2022'],
        ['Type',     'Speculative architecture'],
        ['Site',     'Auckland CBD (post-WW3)'],
        ['Programme', 'BAS YR 3 — University of Auckland'],
        ['Voice',    'Illustrative · narrative comic'],
      ],
      intro: [
        "Ultra-Plant imagines Auckland CBD in the year 2330, after a nuclear war has redrawn the rules of habitation. Survivors live inside modular pods grafted onto plant cores; the building is a co-organism, not a shell. The project is presented in a speculative, illustrated voice — boards below are reproduced as drawn.",
      ],
      chapters: [
        {
          note: 'Chapter 01 · site',
          title: 'Auckland 2330 — a pod network',
          prose: [
            "The site board indexes the post-war CBD as a network of habitable pods anchored to the existing concrete cores. Year 2330 is far enough into the future that the architecture can drop pretence: the city is no longer a dense plane of buildings; it's a sparse field of plant-architecture symbionts.",
          ],
          rows: [
            { kind: 'fullbleed', cells: [
              { img: 'p35-img01', cap: 'Site map — Auckland CBD pod network · year 2330 (illustrative)' },
            ]},
          ],
        },
        {
          note: 'Chapter 02 · core · pod',
          title: 'The core stays, the pod cycles',
          prose: [
            "The core perspective shows the project's mechanic: the concrete tower stays, the modular pods around it cycle — born, used, shed — over generations. The drawing is intentionally illustrative; the work was about the social science fiction more than the construction detail.",
          ],
          rows: [
            { kind: 'fullbleed', cells: [
              { img: 'p37-img01', cap: 'Core perspective section — concrete core, pod cycle (illustrative)' },
            ]},
          ],
        },
      ],
      reflection: {
        title: 'Speculative work as design rehearsal',
        paragraphs: [
          "Looking back at this YR 3 project from 2026, the speculative voice was a rehearsal for the bio-integrated direction the Master's took up later. The lesson: when the brief is impossible (post-nuclear), what stays is the *relationship* you draw between species — and that relationship was the same one MycoTerra and Tide-ReWoven kept investigating with real materials.",
        ],
      },
      credits: [
        ['Designer',  'Yu (Grace) Shen'],
        ['Programme', 'BAS YR 3 — University of Auckland'],
        ['Year',      '2022'],
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
      metadata: [
        ['Released',     '09 / 2024'],
        ['Type',         'Competition · group entry'],
        ['Site',         'Shanghai, China'],
        ['Collaborators', 'Muze Ouyang · Xinning Yu'],
        ['Output',       '2 competition sheets'],
      ],
      intro: [
        "Neptune's Dawn (临海深都) was a Shanghai competition entry developed in two months across a small distributed team. The proposal reads the riverside as a habitat at risk of waterline shift, and translates a hand-drawn sea-creature taxonomy into a partition strategy for a vertical tower cluster. The two boards below are reproduced as submitted.",
      ],
      chapters: [
        {
          note: 'Chapter 01 · concept',
          title: 'A taxonomy of partitions',
          prose: [
            "Sheet 1 sets the conceptual stage: background, concept, partition strategies derived from a hand-drawn sea-creature taxonomy, programme spaces. The illustrated voice is intentional — the entry argued that the conventional vocabulary of mixed-use towers was insufficient for the site's ecological condition, and that a hand-drawn taxonomy could carry the argument better than a render set.",
          ],
          rows: [
            { kind: 'fullbleed', cells: [
              { img: 'p38-img01', cap: 'Background · concept · spaces · partitions — competition sheet 1' },
            ]},
          ],
        },
        {
          note: 'Chapter 02 · site',
          title: 'The towers, indexed',
          prose: [
            "Sheet 2 places the tower cluster on its riverside site — an axonometric mapping each tower to a programme node from sheet 1. The geometry is restrained; the legibility comes from the indexing, which is what the jury was asked to read first.",
          ],
          rows: [
            { kind: 'fullbleed', cells: [
              { img: 'p39-img01', cap: 'Site axonometric — vertical tower cluster — competition sheet 2' },
            ]},
          ],
        },
      ],
      credits: [
        ['Designers', 'Yu (Grace) Shen · Muze Ouyang · Xinning Yu'],
        ['Type',      'Competition entry'],
        ['Site',      'Shanghai, China'],
        ['Year',      '2024'],
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
  function imgSrcLg(folder, stem) {
    return `${BASE}${folder}/images/webp/${stem}-lg.webp`;
  }

  const escapeHtml = (s) => String(s ?? '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

  function findFirstImageStem(d) {
    for (const ch of d.chapters || []) {
      for (const row of ch.rows || []) {
        const isShape = !Array.isArray(row);
        const cells  = isShape ? row.cells : row;
        const c = (cells || [])[0];
        if (c && c.img) return c.img;
      }
    }
    return null;
  }

  /* --- Section builders ------------------------------------------- */

  function mediaTag(cell, d) {
    if (cell.video) {
      const vsrc   = `${BASE}${d.folder}/videos/${cell.video}`;
      const poster = cell.poster ? imgSrc(d.folder, cell.poster) : '';
      return `<video src="${vsrc}" ${poster ? `poster="${poster}"` : ''} autoplay loop muted playsinline preload="metadata" aria-label="${escapeHtml(cell.cap || '')}"></video>`;
    }
    return `<img src="${imgSrc(d.folder, cell.img)}" alt="${escapeHtml(cell.cap || '')}" loading="lazy" decoding="async">`;
  }

  function capHtml(text, plateNo, tag) {
    return `
      <figcaption class="s-cap">
        <span class="s-cap-tag">${escapeHtml(tag)}</span>
        <span class="s-cap-text">${escapeHtml(text)}</span>
      </figcaption>
    `;
  }

  // Render a single image-row as a 100vh section.
  // `plateNo` is the running counter for the "[ PLATE — 0XX ]" tag.
  function rowSection(row, d, plateNo) {
    const isShape = !Array.isArray(row);
    const kind    = isShape ? row.kind : null;
    const cells   = isShape ? row.cells : row;
    const sharedCap = isShape ? row.cap : null;

    if (kind === 'pair' && cells.length === 2) {
      const panes = cells.map((c) => `<div class="pane">${mediaTag(c, d)}</div>`).join('');
      const cap = sharedCap || cells.map((c) => c.cap).filter(Boolean).join('  ·  ');
      return `
        <section class="s-pair">
          <div class="s-pair-media">${panes}</div>
          ${cap ? capHtml(cap, plateNo, '[ PAIR ]') : ''}
        </section>
      `;
    }

    if (kind === 'strip') {
      const panes = cells.map((c) => `<div class="pane">${mediaTag(c, d)}</div>`).join('');
      const cap = sharedCap || '';
      return `
        <section class="s-strip" style="--strip-cols: ${cells.length}">
          <div class="s-strip-media">${panes}</div>
          ${cap ? capHtml(cap, plateNo, '[ SEQUENCE ]') : ''}
        </section>
      `;
    }

    // Single-image rows: fullbleed | hero | pull | detail | (legacy)
    const cell = cells[0];
    const tag  = (kind === 'fullbleed' || plateNo === 1)
      ? '[ HERO ]'
      : `[ PLATE — ${String(plateNo).padStart(3, '0')} ]`;
    return `
      <section class="s-image">
        <div class="s-image-media">${mediaTag(cell, d)}</div>
        ${cell.cap ? capHtml(cell.cap, plateNo, tag) : ''}
      </section>
    `;
  }

  function proseSection(ch) {
    const eyebrow = ch.note  ? `<p class="s-prose-eyebrow">${escapeHtml(ch.note)}</p>` : '';
    const title   = ch.title ? `<h2 class="s-prose-title">${escapeHtml(ch.title)}</h2>` : '';
    const body    = (ch.prose || []).map((p) => `<p>${escapeHtml(p)}</p>`).join('');
    return `
      <section class="s-prose">
        <div class="s-prose-inner">
          ${eyebrow}
          ${title}
          <div class="s-prose-body">${body}</div>
        </div>
      </section>
    `;
  }

  function introSection(d, firstStem) {
    const bgUrl = firstStem ? imgSrcLg(d.folder, firstStem) : '';
    const styleAttr = bgUrl ? `style="--bg-img: url('${bgUrl}');"` : '';
    return `
      <section class="s-intro" ${styleAttr}>
        <p class="s-intro-no">${escapeHtml(d.no || '')}</p>
        <h1 class="s-intro-name">${escapeHtml(d.name)}</h1>
        ${d.binomial ? `<p class="s-intro-binomial">${escapeHtml(d.binomial)}</p>` : ''}
        ${d.meta     ? `<p class="s-intro-meta">${escapeHtml(d.meta)}</p>` : ''}
        ${d.abstract ? `<p class="s-intro-abstract">${escapeHtml(d.abstract)}</p>` : ''}
        <p class="s-intro-scroll-cue">scroll</p>
      </section>
    `;
  }

  function outroSection(d, prevId, nextId) {
    const prev = DOSSIERS[prevId];
    const next = DOSSIERS[nextId];

    const reflectionHtml = d.reflection && Array.isArray(d.reflection.paragraphs) && d.reflection.paragraphs.length
      ? `<div class="s-outro-reflection">
          <p class="s-outro-eyebrow">Reflection</p>
          ${d.reflection.title ? `<h2>${escapeHtml(d.reflection.title)}</h2>` : ''}
          ${d.reflection.paragraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join('')}
         </div>`
      : '<div class="s-outro-reflection"></div>';

    const creditsRows = Array.isArray(d.credits)
      ? d.credits.map(([k, v]) => `<dt>${escapeHtml(k)}</dt><dd>${escapeHtml(v)}</dd>`).join('')
      : '';
    const creditsHtml = creditsRows
      ? `<div class="s-outro-credits"><dl>${creditsRows}</dl></div>`
      : '<div class="s-outro-credits"></div>';

    const navHtml = `
      <nav class="s-outro-nav" aria-label="Project navigation">
        <a class="s-outro-nav-prev" href="project-detail.html?project=${prevId}">
          <span class="s-outro-nav-label">← prev specimen</span>
          <span class="s-outro-nav-name">${escapeHtml(prev?.name || '')}</span>
        </a>
        <a class="s-outro-nav-next" href="project-detail.html?project=${nextId}">
          <span class="s-outro-nav-label">next specimen →</span>
          <span class="s-outro-nav-name">${escapeHtml(next?.name || '')}</span>
        </a>
      </nav>
    `;

    return `
      <section class="s-outro">
        <div class="s-outro-grid">
          ${reflectionHtml}
          ${creditsHtml}
          ${navHtml}
        </div>
      </section>
    `;
  }

  /* --- Render ------------------------------------------------------- */

  const id = qs('project') || ORDER[0];
  const d  = DOSSIERS[id];

  if (!d) {
    document.body.innerHTML =
      '<div style="padding:120px 40px;font-family:Cormorant Garamond,serif;color:#d6d2c4">' +
      '<h1 style="font-style:italic;font-weight:300;font-size:48px;margin-bottom:16px">Specimen not found.</h1>' +
      '<p style="color:#b9b4a2"><a href="index.html" style="color:inherit;border-bottom:1px solid currentColor;text-decoration:none">return to index</a></p>' +
      '</div>';
    return;
  }

  // Title + persistent chip
  document.title = `${d.name} — Grace`;
  const chipNoEl   = document.getElementById('story-chip-no');
  const chipNameEl = document.getElementById('story-chip-name');
  if (chipNoEl)   chipNoEl.textContent   = d.no || '';
  if (chipNameEl) chipNameEl.textContent = d.name;

  // Build sections — intro → (prose? + rows + proseAfter?)* → outro
  const idx = ORDER.indexOf(id);
  const prevId = ORDER[(idx - 1 + ORDER.length) % ORDER.length];
  const nextId = ORDER[(idx + 1) % ORDER.length];

  const firstStem = findFirstImageStem(d);
  const sections = [];
  sections.push(introSection(d, firstStem));

  let plateNo = 0;
  d.chapters.forEach((ch) => {
    if (Array.isArray(ch.prose) && ch.prose.length) {
      sections.push(proseSection(ch));
    }
    (ch.rows || []).forEach((row) => {
      plateNo += 1;
      sections.push(rowSection(row, d, plateNo));
    });
    if (Array.isArray(ch.proseAfter) && ch.proseAfter.length) {
      sections.push(proseSection({ note: (ch.note || '') + ' (cont.)', prose: ch.proseAfter }));
    }
  });

  sections.push(outroSection(d, prevId, nextId));

  document.getElementById('story').innerHTML = sections.join('');

  // Activate intro background image after first paint so it fades in.
  requestAnimationFrame(() => {
    document.querySelector('.s-intro')?.classList.add('is-loaded');
  });

  /* --- Scroll: section-active observer + progress fill ------------ */

  const sectionEls = document.querySelectorAll('.story > section');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && e.intersectionRatio > 0.55) {
          e.target.classList.add('is-active');
        } else if (e.intersectionRatio < 0.2) {
          e.target.classList.remove('is-active');
        }
      });
    }, { threshold: [0.2, 0.55, 0.85] });
    sectionEls.forEach((el) => io.observe(el));
  } else {
    sectionEls.forEach((el) => el.classList.add('is-active'));
  }

  const progressFill = document.getElementById('story-progress-fill');
  if (progressFill) {
    const updateProgress = () => {
      const total = (document.documentElement.scrollHeight - window.innerHeight) || 1;
      const pct = Math.max(0, Math.min(1, window.scrollY / total));
      progressFill.style.bottom = `${(1 - pct) * 100}%`;
    };
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    updateProgress();
  }

  // Esc → exit. Native scroll-snap handles arrows / page keys.
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') window.location.href = 'index.html';
  });

})();
