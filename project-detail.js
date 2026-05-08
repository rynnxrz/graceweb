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

  // Editorial metadata strip — rendered into dossier-head if the
  // dossier provides a `metadata` array. Older dossiers without
  // metadata fall through and render nothing here.
  const headEl = document.querySelector('.dossier-head');
  if (headEl && Array.isArray(d.metadata) && d.metadata.length) {
    const dl = document.createElement('dl');
    dl.className = 'dossier-meta-grid';
    dl.innerHTML = d.metadata.map(([key, val]) => `
      <div><dt>${key}</dt><dd>${val}</dd></div>
    `).join('');
    // Insert before the closing rule so the strip lives inside the
    // head card.
    const rules = headEl.querySelectorAll('.dossier-rule');
    const lastRule = rules[rules.length - 1];
    if (lastRule) headEl.insertBefore(dl, lastRule);
    else headEl.appendChild(dl);
  }

  // Plates — chapter sequence (each chapter optionally has title +
  // prose preceding its plates).
  const platesEl = document.getElementById('plates');

  // Flat list of {src, cap} for lightbox navigation
  const lbItems = [];

  // Helpers for editorial blocks ----------------------------------
  const escapeHtml = (s) => String(s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

  const proseBlock = (paragraphs, klass) => {
    if (!Array.isArray(paragraphs) || !paragraphs.length) return '';
    const ps = paragraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join('');
    return `<div class="${klass}">${ps}</div>`;
  };

  // Optional intro section — sits between dossier-head and chapter 1.
  const introHtml = proseBlock(d.intro, 'dossier-prose dossier-prose--intro');

  const chaptersHtml = d.chapters.map((ch) => {
    const titleHtml = ch.title
      ? `<h2 class="plate-chapter-title">${escapeHtml(ch.title)}</h2>`
      : '';
    const proseHtml = proseBlock(ch.prose, 'plate-chapter-prose');
    const proseAfterHtml = proseBlock(ch.proseAfter, 'plate-chapter-prose');

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
        const isVideo = !!it.video;
        const src   = isVideo ? `${BASE}${d.folder}/videos/${it.video}` : imgSrc(d.folder, it.img);
        const srcLg = isVideo ? src : imgSrcLg(d.folder, it.img);
        const poster = it.poster ? imgSrc(d.folder, it.poster) : '';
        const lbIdx = lbItems.length;
        lbItems.push({ src, srcLg, cap: it.cap, isVideo });
        const safeCap = it.cap.replace(/"/g, '&quot;');
        const styleAttr = it.span ? `style="grid-column: span ${it.span};"` : '';
        const cursorLabel = isVideo ? 'play' : 'view';
        const mediaHtml = isVideo
          ? `<video src="${src}" ${poster ? `poster="${poster}"` : ''} autoplay loop muted playsinline preload="metadata" aria-label="${safeCap}"></video>`
          : `<img src="${src}" alt="${safeCap}" loading="lazy" decoding="async">`;
        return `
          <figure class="plate-cell" ${styleAttr} data-lb="${lbIdx}">
            <button class="plate-img-btn" type="button" data-cursor="${cursorLabel}" aria-label="${isVideo ? 'Watch' : 'Open'} ${safeCap}">
              ${mediaHtml}
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
        ${titleHtml}
        ${proseHtml}
        ${rowsHtml}
        ${proseAfterHtml}
      </section>
    `;
  }).join('');

  // Reflection / artist statement — sits after the last chapter.
  let reflectionHtml = '';
  if (d.reflection && Array.isArray(d.reflection.paragraphs) && d.reflection.paragraphs.length) {
    const refTitle = d.reflection.title
      ? `<h2 class="dossier-reflection-title">${escapeHtml(d.reflection.title)}</h2>`
      : '';
    reflectionHtml = `
      <aside class="dossier-reflection-wrap" aria-label="Reflection">
        ${refTitle}
        ${proseBlock(d.reflection.paragraphs, 'dossier-reflection')}
      </aside>
    `;
  }

  // Colophon / credits — closes the dossier.
  let colophonHtml = '';
  if (Array.isArray(d.credits) && d.credits.length) {
    const rows = d.credits.map(([key, val]) => `
      <div><dt>${escapeHtml(key)}</dt><dd>${escapeHtml(val)}</dd></div>
    `).join('');
    colophonHtml = `
      <aside class="dossier-colophon" aria-label="Colophon">
        <h2 class="dossier-colophon-title">Colophon</h2>
        <dl class="dossier-credits">${rows}</dl>
      </aside>
    `;
  }

  platesEl.innerHTML = introHtml + chaptersHtml + reflectionHtml + colophonHtml;

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
