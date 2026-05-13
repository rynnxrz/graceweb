/* =========================================================================
   project-detail.js  ·  v4 (2026-05-11)
   Cinematic scroll dossiers — all images from curated originals.
   ========================================================================= */

(() => {

  const BASE = 'public/images/projects/extracted-portfolio/';

  const DOSSIERS = {

    /* ================================================================
       HEISHUI RIVER RESORT
       ================================================================ */
    'heishui-river-resort': {
      no: 'spec.001 / 2023',
      name: 'Heishui River Resort',
      binomial: 'Aqua Nigra',
      kind: 'Hospitality · Practice — Concept stage, design team, Under Construction',
      meta: 'Guangxi, China · 03–08 / 2023 · ≈100 rooms, 50 homestays',
      abstract: 'A riverside resort that withdraws into the karst valley, allowing water, mountain and vegetation to remain the primary architecture. ',
      folder: 'heishui-river-resort',
      metadata: [
        ['Released',    '08 / 2023'],
        ['Type',        'Hospitality design (practice)'],
        ['Site',        'Guangxi, China'],
        ['Phase',       'Concept stage'],
        ['Programme',   '≈100 rooms · 50 homestays'],
        ['Status',      'Construction underway'],
      ],
      intro: { img: 'heishui-river-resort' },
      chapters: [
        {
          note: 'Chapter 01 · site & landscape',
          title: 'A resort masterplan shaped by river and terrain',
          prose: ['Located along the Heishui River in Guangxi, the site is defined by karst mountains, dense vegetation and a sequence of river views. The masterplan arranges villas, homestays and public facilities as low-rise courtyard clusters, following the natural terrain rather than imposing a singular landmark. Each cluster is positioned in response to topography, daylight, ventilation and proximity to water, creating a resort embedded within the valley landscape.'],
          rows: [
            { cells: [
                { img: 'heishui-hero-resort', cap: 'Resort across the Blackwater — slate roofs into mountain', crop: { x: 0, y: 11.7, w: 99.7, h: 75.2, nat: [1400, 1045], bg: 'transparent' } },
              ] },
            { cells: [
                { img: 'heishui-axo-zone', cap: 'Site axonometric — zone analysis, river substrate', crop: { x: -4.7, y: -5.9, w: 111.8, h: 113.1, nat: [1390, 1400], bg: 'transparent' } },
                { img: 'heishui-axo-zone-2', cap: '', crop: { x: 0.1, y: 10.4, w: 98.7, h: 83.5, nat: [1185, 1400], bg: 'transparent' } },
              ] },
          ],
        },
        {
          note: 'Chapter 02 · public FACILITIES',
          title: 'Shared anchors within the resort landscape',
          prose: ['The public facilities are positioned as shared anchors within the resort, connecting arrival, dining, tea, leisure and river-view experiences. Rather than standing as isolated objects, each building is arranged around courtyards, shaded thresholds and framed views, creating a sequence of social spaces embedded in the landscape.'],
          rows: [
            { cells: [
                { img: 'heishui-render-waterfall', cap: 'Angular stone buildings with waterfall feature, karst mountains beyond', crop: { x: 7.5, y: 0.5, w: 86.9, h: 86.9, nat: [1063, 1064], bg: 'transparent' } },
                { img: 'img-4257', cap: '', crop: { x: 4.9, y: 0, w: 82.4, h: 100, nat: [1274, 1400], bg: 'transparent' } },
              ] },
            { cells: [
                { img: 'heishui-render-01', cap: 'glass pavilions, riverbank', crop: { x: 0, y: 6, w: 100, h: 90, nat: [1400, 875], bg: 'transparent' } },
                { img: 'heishui-render-02', cap: 'pathway through trees', crop: { x: 8.9, y: 6.1, w: 80.4, h: 68.1, nat: [1400, 930], bg: 'transparent' } },
              ] },
          ],
        },
        {
          note: 'Chapter 03 · STAY EXPERIENCE',
          title: 'Room typologies shaped by terrain, privacy and light',
          prose: ['The accommodation is developed through one-, two- and four-bedroom villa typologies that adjust courtyard proportion, room depth and orientation according to terrain, privacy and river views. Rendered scenes test how these spaces are experienced across the day, using shaded interiors, low rooflines and warm lighting to soften the buildings into the valley landscape.'],
          rows: [
            { cells: [
                { img: 'heishui-render-05', cap: 'Courtyard, dark angular roof, karst behind', crop: { x: 0.7, y: 6.3, w: 79.6, h: 81.2, nat: [1400, 772], bg: 'transparent' } },
                { img: 'heishui-render-06', cap: 'Guest pavilion — garden path, wooden deck bridge', crop: { x: 12.6, y: 0, w: 69.4, h: 84.6, nat: [1280, 1400], bg: 'transparent' } },
              ] },
            { cells: [
                { img: 'heishui-render-03', cap: 'Two pavilions, mountain mist' },
              ] },
            { cells: [
                { img: 'heishui-interior', cap: 'Interior — dramatic stone opening with pool and mountain view', crop: { x: 4.7, y: -0.4, w: 99.8, h: 100.4, nat: [1400, 1044], bg: 'transparent' } },
                { img: '2025-10-09-11-13-31', cap: '', crop: { x: 1.5, y: 0, w: 102.6, h: 90.5, nat: [1400, 1190], bg: 'transparent' } },
                { img: '2025-10-09-11-14-00', cap: '', crop: { x: 0.9, y: 0.3, w: 88.9, h: 100, nat: [1400, 933], bg: 'transparent' } },
                { img: '2023-03-27-3-06-51', cap: '', crop: { x: -3, y: 0.2, w: 90.6, h: 100, nat: [1400, 951], bg: 'transparent' } },
              ] },
          ],
        },
      ],
      reflection: {
        title: 'From site attitude to design coordination',
        paragraphs: ['The project began with a simple design position: architecture should respect the scale of the river valley and recede into the surrounding landscape. This attitude informed the masterplan, roof language, courtyard organisation, public routes and accommodation layouts, allowing each design decision to reinforce a quieter relationship between resort, terrain and vegetation.', 'My role sat within the early design development process. I contributed to massing studies, villa typology layouts, public building arrangements, roof form exploration, environmental considerations and presentation material for client reporting. The fast iteration process required each option to be translated quickly into plans, diagrams, models and visuals, then adjusted through feedback without losing the central concept of restraint..'],
      },
      credits: [
        ['Role',        'Architectural Designer (concept stage)'],
        ['Practice',    'Oliver Andrew Associates'],
        ['Site',        'Guangxi, China'],
        ['Phase',       'Concept design'],
        ['Status',      'Construction underway'],
        ['Renders',     'Dan Lab'],
        ['Year',        '2023'],
      ],
    },

    /* ================================================================
       LES-CHARDONNEUSES
       ================================================================ */
    'les-chardonneuses': {
      no: 'spec.002 / 2026',
      name: 'Les-Chardonneuses',
      binomial: 'Cardus couture',
      kind: 'Couture · Collaboration — Germanier Paris, Haute Couture SS26',
      meta: 'Paris, France · 10 / 2025 – 01 / 2026 · headpiece × 3',
      abstract: 'A wearable micro-structure for Germanier\'s SS26 — the floral lifecycle (growth, collapse, decay) translated into runway couture. Lace-like digital textures, controlled deformations, internal frameworks resolved through 3-D-print iteration.',
      folder: 'les-chardonneuses',
      metadata: [
        ['Released',    '01 / 2026'],
        ['Type',        'Couture · collaboration'],
        ['Brand',       'Germanier · Haute Couture SS26'],
        ['Studio',      'Ivy J Studio'],
        ['Pieces',      'Headpiece × 3'],
        ['Method',      'Parametric · 3-D-print iteration'],
      ],
      intro: ['The brief from Germanier\'s atelier was a flower in three states: bloom, collapse, decay. The brief in our 3-D printer was harder — how does a 60-gram crystal-resin lattice behave when worn at speed under runway lights, when the model turns sharp, when the camera catches it from below?'],
      chapters: [
        {
          note: 'Chapter 01 · concept',
          title: 'From hydrangea skeleton to digital lattice',
          prose: ['The work began with a dried hydrangea — its skeletal vein network the template for the headpiece\'s lattice. Digital sculpts translated the organic decay into a branching system that could be 3-D printed in crystal resin.'],
          rows: [
            { cells: [
                { img: 'lc-render-bloom', cap: 'Digital sculpt — full-bloom headpiece, grey-clay render on mannequin' },
              ] },
            { cells: [
                { img: 'lc-render-detail', cap: 'lattice close-up' },
                { img: 'lc-render-branch', cap: 'branching variant' },
                { img: 'lc-render-sculpture', cap: 'organic sculpture' },
              ], cap: 'Three digital sculpts testing density, branch length, and silhouette from below.' },
            { cells: [
                { img: 'lc-concept-01', cap: 'Concept render — perforated membrane wings' },
                { img: 'lc-concept-02', cap: 'Concept render — smooth thistle variant' },
              ] },
          ],
        },
        {
          note: 'Chapter 02 · process',
          title: 'The atelier sessions',
          prose: ['Nightly print cycles and studio sessions across three months. The clear resin caught the light differently at every angle; the black resin absorbed it. Both had to read on the runway — the choice of material was a lighting decision as much as a structural one.'],
          rows: [
            { cells: [
                { img: 'lc-hero-thistle', cap: 'Clear-resin thistle leaf detail against black — translucent, spiky' },
              ] },
          ],
        },
        {
          note: 'Chapter 03 · prototyping',
          title: 'The 3-D printer as a fabric loom',
          prose: ['Failures were instructive: sections that broke during fitting got reinforced not by adding material but by re-routing internal struts. The print process became part of the design conversation, not its execution stage.'],
          rows: [
            { cells: [
                { img: 'lc-proto-black-top', cap: 'Top-down view — seed-pod form with ferns' },
                { img: 'lc-resin-sphere', cap: 'Clear-resin thistle sphere — casting shadows' },
              ] },
            { cells: [
                { img: 'lc-resin-hand', cap: 'Hand-held clear-resin pod — testing translucency' },
                { img: 'lc-ref-hydrangea', cap: 'Reference — dried hydrangea skeleton, the original template' },
              ] },
            { cells: [
                { img: 'lc-proto-full', cap: 'Full clear-resin headpiece on dress form — branching silhouette against concrete' },
              ] },
          ],
        },
        {
          note: 'Chapter 04 · January refinement',
          title: 'The last mile before the runway',
          prose: ['January sessions dialled in the final density — lighter than expected, almost weightless on the model. The backstage fitting was where the piece stopped being a print and became a garment.'],
          rows: [
            { cells: [
                { img: 'lc-process-05', cap: 'January — black-resin headpiece, gallery setting' },
                { img: 'lc-process-06', cap: 'January — petal articulation, person in background' },
              ] },
            { cells: [
                { img: 'lc-final-detail', cap: 'Backstage fitting — hands placing headpiece on model' },
                { img: 'lc-render-sculpture', cap: 'Digital sculpt — organic form study' },
              ] },
          ],
        },
        {
          note: 'Chapter 05 · runway',
          title: 'Paris Couture Week, January 2026',
          prose: ['Two looks walked — one in dark navy with the black-resin piece, one in neon yellow-green tulle with the clear thistle branch. The pieces survived; the photographs proved the silhouette read at thirty paces.'],
          rows: [
            { cells: [
                { img: 'lc-proto-detail', cap: 'Runway — dark gown with black-resin floral headpiece' },
                { img: 'lc-proto-clear-01', cap: 'Runway — neon tulle with silver thistle branch' },
              ] },
            { cells: [
                { img: 'lc-wall-install', cap: 'Gallery installation — botanical forms on white cards, archival grid' },
                { img: 'lc-backstage', cap: 'Backstage — clear-resin detail, model partially visible' },
              ] },
          ],
        },
      ],
      reflection: {
        title: 'Where sculpture and architecture meet',
        paragraphs: ['Couture is one of the few disciplines that still treats fabrication as performance. The piece exists for the runway and a month of editorial. That short window forced a different kind of rigour — every detail had to read at thirty paces and survive a fitting room.', 'What stayed with me afterward was how thin the line is between sculpture and architecture when the structure is the design.'],
      },
      credits: [
        ['Role',        'Head of Design Assistant'],
        ['Studio',      'Ivy J Studio'],
        ['Brand',       'Germanier (Haute Couture SS26)'],
        ['Show',        'Paris Couture Week, January 2026'],
        ['Method',      'Parametric design · 3-D-print prototyping'],
        ['Material',    'Resin · photopolymer · internal armature'],
        ['Year',        '2025–2026'],
      ],
    },

    /* ================================================================
       SEEDS OF CHANGE
       ================================================================ */
    'seeds-of-change': {
      no: 'spec.003 / 2025',
      name: 'Seeds of Change',
      binomial: 'Semina mutabilis',
      kind: 'Spatial · Exhibition design — Curation team',
      meta: 'London, UK · 10 / 2025',
      abstract: 'Spatial and material setup for an immersive exhibition on the transformative power of nature — a single immersive wall, vitrines, printed graphics, and on-site coordination across a one-week run.',
      folder: 'seeds-of-change',
      metadata: [
        ['Released',    '10 / 2025'],
        ['Type',        'Exhibition · spatial design'],
        ['Site',        'London, UK'],
        ['Role',        'Curation team · on-site coordinator'],
        ['Duration',    'October 2025 (pop-up)'],
        ['Output',      'Wall · vitrines · print run'],
      ],
      intro: ['Seeds of Change was a pop-up exhibition about transformation — how nature reorganises itself across scales, from algal cluster to forest canopy. My role on the curation team was the physical translation: how do these ideas land in a small London room with a one-week build and a one-week run?'],
      chapters: [
        {
          note: 'Chapter 01 · the room, the wall',
          title: 'One immersive wall, slow-shifting light',
          prose: ['The exhibition centred on a single immersive wall — translucent flora, suspended above moss and slow-shifting light. The wall composition went through three iterations before the opening, each pass favouring a more legible hierarchy of object, surround, light.'],
          rows: [
            { cells: [
                { img: 'seeds-hero-installation', cap: 'Close-up — translucent 3-D-printed flora specimens on moss' },
              ] },
            { cells: [
                { img: 'seeds-doc-01', cap: 'Table display — gradient-coloured translucent flora, glass vessels' },
                { img: 'seeds-doc-02', cap: 'Detail — translucent flowers on moss beds' },
              ] },
          ],
        },
        {
          note: 'Chapter 02 · documentation',
          title: 'What visitors photograph first',
          prose: ['The show was photographed on opening night under exhibition lighting only. The visitor-engagement micro-installations — the perspex-petal cloud, the headpiece try-on — ended up generating most of the social-media share.'],
          rows: [
            { cells: [
                { img: 'seeds-doc-03', cap: 'wider angle' },
                { img: 'seeds-doc-04', cap: 'visitor viewing' },
                { img: 'seeds-doc-05', cap: 'specimens' },
              ], cap: 'Three documentation views — the installation at widening focal lengths.' },
            { cells: [
                { img: 'seeds-headpiece', cap: 'Wearable headpiece — tulle-wrapped with 3-D-printed floral elements' },
                { img: 'seeds-wall-display', cap: 'Wall display — pressed flower specimens in watercolour gradient' },
              ] },
          ],
        },
        {
          note: 'Chapter 03 · making',
          title: 'Studio process — resin, print, assembly',
          prose: ['The translucent flora specimens started as resin and filament experiments in the studio. Each piece went through hand-finishing before installation.'],
          rows: [
            { cells: [
                { img: 'seeds-process-01', cap: '25 Oct' },
                { img: 'seeds-process-02', cap: '25 Oct' },
                { img: 'seeds-process-03', cap: '25 Oct' },
                { img: 'seeds-process-04', cap: '26 Oct' },
              ], cap: 'Studio sessions — material experiments, assembly, and finishing.' },
          ],
        },
        {
          note: 'Chapter 04 · design & print',
          title: 'Flora studies and the graphic identity',
          prose: ['The flora forms were designed as silhouette studies first — black-on-white — then resolved into translucent 3-D-printed specimens with gradient colouring. The graphic identity stayed tonal: buff, oat, no high-contrast.'],
          rows: [
            { cells: [
                { img: 'seeds-flora-study', cap: 'Silhouette studies and 3-D renderings of translucent flora variants' },
              ] },
            { cells: [
                { img: 'seeds-poster', cap: 'poster' },
                { img: 'seeds-poster-03', cap: 'variant' },
                { img: 'seeds-poster-04', cap: 'closing' },
                { img: 'seeds-sticker-sheet', cap: 'stickers' },
              ], cap: 'Print run — posters, postcards, and the sticker sheet that visitors took home.' },
          ],
        },
      ],
      reflection: {
        title: 'Exhibition design is closer to theatre',
        paragraphs: ['Exhibition design is closer to theatre than architecture. The build is fast, the run is short, and most of the work goes into rehearsing what the visitor sees in the first ten seconds.', 'What I\'d do differently: keep one signature moment, lose two. The wall and the cloud both worked; the table sets in between competed for attention.'],
      },
      credits: [
        ['Role',        'Event Curation & Spatial Design Support'],
        ['Site',        'London, UK'],
        ['Duration',    'October 2025'],
        ['Materials',   'Perspex · glass vitrine · printed substrate'],
        ['Print run',   'Posters · postcards · stickers'],
        ['Year',        '2025'],
      ],
    },

    /* ================================================================
       TIDE-REWOVEN
       ================================================================ */
    'tide-rewoven': {
      no: 'spec.004 / 2025',
      name: 'Tide-ReWoven',
      binomial: 'Marina contexta',
      kind: 'Bio-integrated · YR 2 Master · Thesis project',
      meta: 'Aberdeen Harbour, Hong Kong · 10 / 2024 – 06 / 2025',
      abstract: 'Aberdeen\'s working waterfront re-imagined as a tidal-breathing market — algae-trained membranes index light, oxygen, and human flow into a single sectional system.',
      folder: 'tide-rewoven',
      metadata: [
        ['Released',    '06 / 2025'],
        ['Type',        'Bio-integrated thesis'],
        ['Site',        'Aberdeen Harbour, HK'],
        ['Programme',   'MArch · Bartlett UCL'],
        ['Year',        'Year 2 (Master\'s thesis)'],
        ['Method',      'Conditional GAN · parametric'],
      ],
      intro: { video: '01-harbour-as-input-curated-01.mp4' },
      chapters: [
        {
          note: 'Chapter 01 · site',
          title: 'A working harbour under ecological and spatial pressure',
          prose: ['Located in Aberdeen, Hong Kong, the project begins with a working fish market where seafood trade, boat activity, waterfront circulation and informal public life overlap. The existing market is compressed into a narrow linear edge, while parking and operational zones interrupt the relationship between city, water and fishing community. The proposal treats these conflicts not as background conditions, but as the starting point for a new spatial system.'],
          rows: [
            { cells: [
                { img: 'tide-site-analysis', cap: 'Site analysis board — Hong Kong / Aberdeen maps, environmental data, urban planning iterations', crop: { x: 12.6, y: 14.1, w: 36.9, h: 84, nat: [2929, 1716], bg: 'transparent' } },
                { img: '02-portfolio-current-system-overview', cap: '', crop: { x: 50, y: 14.1, w: 35.1, h: 79.9, nat: [2929, 1716], bg: 'transparent' } },
                { img: '02-portfolio-current-system-overview-2', cap: 'Aberdeen wholesale fish market — existing conditions, six views', crop: { x: 85.4, y: 15.3, w: 12.6, h: 80.5, nat: [2929, 1716], bg: 'transparent' } },
              ] },
            { cells: [
                { cap: '', video: '01-harbour-as-input-curated-03.mp4' },
              ] },
          ],
        },
        {
          note: 'Chapter 02 · BIOLOGICAL TRANSLATION',
          title: 'Circulation drawn by boats, tide and users',
          prose: ['The planning strategy is developed from changing movement rather than fixed zoning. User routes, boat routes and tidal conditions are translated into spatial patterns through pathfinding and particle-based simulations. Low tide, high tide and inter-tide conditions generate different occupancy zones, allowing the market to shift between trade, loading, gathering and informal waterfront use.'],
          rows: [],
        },
        {
          note: 'Chapter 03 · method',
          title: 'GAN-trained membranes, light as input',
          prose: ['The membrane geometry was generated by a conditional GAN trained on Micrasterias diatom morphology and wave-forms sampled from the harbour. Parametric inputs — algal photo-tropism, tidal range, vendor density — were embedded in the latent space.'],
          rows: [
            { cells: [
                { img: 'tide-method-gan', cap: 'Algae to computation — GAN training pipeline, morphological analysis' },
              ] },
            { cells: [
                { img: 'tide-method-wave-01', cap: 'wave 01' },
                { img: 'tide-method-wave-02', cap: 'wave 02' },
                { img: 'tide-method-wave-03', cap: 'wave 03' },
                { img: 'tide-method-wave-04', cap: 'wave 04' },
              ], cap: 'Four wave-form studies — tidal data across a single lunar cycle, fed back into the GAN.' },
          ],
        },
        {
          note: 'Chapter 04 · iteration',
          title: 'From ornament to tessellation',
          prose: ['Each panel reads as biomorphic but resolves into a tessellated system that fabricates from a single-curvature net. The iteration sequence tested density, curvature, and seam logic.'],
          rows: [
            { cells: [
                { img: 'tide-iter-01', cap: '01' },
                { img: 'tide-iter-02', cap: '02' },
                { img: 'tide-iter-03', cap: '03' },
              ], cap: 'Three iterations — variation across density, curvature, and tessellation.' },
            { cells: [
                { img: 'tide-wave-terrain-01', cap: '01' },
                { img: 'tide-wave-terrain-02', cap: '02' },
                { img: 'tide-wave-terrain-03', cap: '03' },
                { img: 'tide-wave-terrain-04', cap: '04' },
              ], cap: 'Wave-terrain mesh studies — colourful topographic surfaces from GAN output.' },
          ],
        },
        {
          note: 'Chapter 05 · system & render',
          title: 'The market under the membrane',
          prose: ['The render sequence traces the membrane through dawn, midday, dusk — the same envelope in different states. The exploded isometric breaks the system into its twelve fabrication layers.'],
          rows: [
            { cells: [
                { img: 'tide-system-01', cap: 'Interior — bamboo structure, algae-membrane roof, dappled light' },
                { img: 'tide-system-02', cap: 'Interior — monochrome, membrane casting patterned light on stalls' },
              ] },
            { cells: [
                { img: 'tide-explode', cap: 'Exploded isometric — 12 layers from roof tiles to dock foundations' },
              ] },
            { cells: [
                { img: 'tide-method-render', cap: 'Unreal render — turquoise water lapping against calcified edge structure' },
              ] },
          ],
        },
        {
          note: 'Chapter 06 · fabrication',
          title: 'Material tests — tension and weave',
          prose: ['Membrane tension tests and weaving experiments at bench scale. The chitosan composite had to hold its geometry at low tide while flexing enough to survive a harbour gust.'],
          rows: [
            { cells: [
                { img: 'tide-fab-01', cap: 'weave 01' },
                { img: 'tide-fab-02', cap: 'weave 02' },
                { img: 'tide-fab-03', cap: 'weave 03' },
              ], cap: 'Fabrication studies — material and weaving experiments.' },
            { cells: [
                { img: 'tide-fab-macro', cap: 'Macro detail — chitosan composite texture' },
                { img: 'tide-algae-micro', cap: 'Micrasterias algae — biological inspiration at high magnification' },
              ] },
            { cells: [
                { img: 'tide-tension-01', cap: 'Tension test — membrane study 01' },
                { img: 'tide-tension-02', cap: 'Tension test — membrane study 02' },
              ] },
          ],
        },
        {
          note: 'Chapter 07 · boards',
          title: 'Final review',
          prose: ['The thesis was presented across two boards — site reading and proposal logic — synthesising a year of research into a single argument about what a working harbour could become.'],
          rows: [
            { cells: [
                { img: 'tide-board-01', cap: 'Final review board 01 — site reading' },
                { img: 'tide-board-02', cap: 'Final review board 02 — proposal logic' },
              ] },
          ],
        },
      ],
      reflection: {
        title: 'A city that draws its own weather',
        paragraphs: ['Tide-ReWoven asks something quiet — that the city stop drawing its own infrastructure as background and start drawing it as weather.', 'Hong Kong\'s harbours will not be the working spaces they were. The project tries to imagine what an honest replacement looks like — not nostalgia, not erasure, but a membrane that registers the trade still happening underneath it.'],
      },
      credits: [
        ['Designer',    'Yu (Grace) Shen'],
        ['Programme',   'MArch Bio-integrated Design — Year 2 Thesis'],
        ['School',      'The Bartlett School of Architecture, UCL'],
        ['Site',        'Aberdeen Harbour, Hong Kong SAR'],
        ['Method',      'Conditional GAN · parametric design'],
        ['Materials',   'Chitosan composite · recycled fishnet · bamboo'],
        ['Year',        '2024–2025'],
      ],
    },

    /* ================================================================
       MYCOTERRA
       ================================================================ */
    'mycoterra': {
      no: 'spec.005 / 2024',
      name: 'MycoTerra',
      binomial: 'Mycelium aedificans',
      kind: 'Bio-integrated · YR 1 Master · Group research project',
      meta: 'London, UK · 02–08 / 2024 · with Yingying Yan & Yining Loh',
      abstract: 'Architecture as a participant in an ecological cycle rather than a sealed shelter — earth, mycelium, and air tuned together so that a living tissue settles into the geometry rather than coating it.',
      folder: 'mycoterra',
      metadata: [
        ['Released',    '08 / 2024'],
        ['Type',        'Bio-integrated research'],
        ['Site',        'London, UK'],
        ['Programme',   'MArch · Bartlett UCL'],
        ['Collaborators', 'Yingying Yan · Yining Loh'],
        ['Strain',      'Pleurotus ostreatus'],
      ],
      intro: ['MycoTerra is not a building so much as a body — a porous threshold structure that admits microbial life as a co-author of its own form. Earth, mycelium, and air are tuned together so that a living tissue settles into the geometry rather than coats it.'],
      chapters: [
        {
          note: 'Chapter 01 · concept',
          title: 'Mycelium as a material participant',
          prose: ['Mycelium is treated here as a fabrication partner, not a finish. Its hyphae bind earth, hemp shiv, and chitosan into a load-bearing composite while leaving a soft, breathable skin.'],
          rows: [
            { cells: [
                { img: 'myco-hero-render', cap: 'Street-level perspective — people walking through mycelium wall corridor' },
              ] },
            { cells: [
                { img: 'myco-section-01', cap: 'Section — wall zone, growth zone, seating zone, ecology zone' },
              ] },
          ],
        },
        {
          note: 'Chapter 02 · methodology',
          title: 'Computational tuning meets biological growth',
          prose: ['The form was iterated in Grasshopper with a Galapagos solver, scoring candidates against CFD simulations of airflow, humidity, and surface temperature.'],
          rows: [
            { cells: [
                { img: 'myco-massing-01', cap: '01' },
                { img: 'myco-massing-02', cap: '02' },
                { img: 'myco-massing-03', cap: '03' },
                { img: 'myco-massing-04', cap: '04' },
                { img: 'myco-massing-05', cap: '05' },
                { img: 'myco-massing-06', cap: '06' },
              ], cap: 'Six massings — an envelope that "wants" to be eroded, holding civic posture while admitting weathering.' },
            { cells: [
                { img: 'myco-voxel-board', cap: 'Computational design board — voxel aggregation, population iterations' },
                { img: 'myco-lifecycle', cap: 'Mycelium growth lifecycle — aggregation diagram with massing studies' },
              ] },
          ],
        },
        {
          note: 'Chapter 03 · render',
          title: 'The mycelium city',
          prose: ['The urban-scale render tested whether the mycelium wall logic could hold at city scale — a misty corridor where people and structure share the same substrate.'],
          rows: [
            { cells: [
                { img: 'myco-render-urban', cap: 'Urban render — people walking through mycelium wall landscape, city backdrop' },
              ] },
          ],
        },
        {
          note: 'Chapter 04 · research',
          title: 'The Y1 Almanac — from lab to site',
          prose: ['The Y1 Almanac documented the full arc from material cultivation to site proposal. Mycelium samples were raised in the Bio-Integrated Design Lab over 15-day growth cycles, then tested for structural performance.'],
          rows: [
            { cells: [
                { img: 'myco-almanac-038', cap: 'Material studies — mycelium cultivation in petri dishes, 15-day growth' },
                { img: 'myco-almanac-045', cap: 'Lab documentation — growth cycle studies' },
              ] },
            { cells: [
                { img: 'myco-almanac-065', cap: 'Material research — substrate experiments' },
                { img: 'myco-almanac-068', cap: 'Computational analysis — structural performance' },
              ] },
            { cells: [
                { img: 'myco-almanac-069', cap: 'Growth documentation — colony development' },
                { img: 'myco-almanac-071', cap: 'Fabrication testing — composite assembly' },
              ] },
            { cells: [
                { img: 'myco-almanac-074', cap: 'Prototyping — computation evaluation, extrudability / adhesion / stability' },
                { img: 'myco-almanac-075', cap: 'Material catalogue — substrate and binding agents' },
              ] },
            { cells: [
                { img: 'myco-almanac-076', cap: 'Lab process — inoculation and curing' },
                { img: 'myco-almanac-087', cap: 'Site proposal — aggregation pattern, solar study comparison' },
              ] },
            { cells: [
                { img: 'myco-almanac-088', cap: 'Environmental analysis — airflow and humidity' },
                { img: 'myco-almanac-089', cap: 'Structural analysis — load paths through mycelium composite' },
              ] },
            { cells: [
                { img: 'myco-almanac-090', cap: 'Assembly sequence — growth to inhabitation' },
                { img: 'myco-almanac-091', cap: 'Lifecycle diagram — from spore to structure' },
              ] },
            { cells: [
                { img: 'myco-almanac-096', cap: 'Mycelium block wall — lit to show aggregate surface texture' },
                { img: 'myco-almanac-097', cap: 'Final render — inhabited mycelium landscape' },
              ] },
            { cells: [
                { img: 'myco-almanac-098', cap: 'Almanac closing — project synthesis' },
              ] },
          ],
        },
      ],
      reflection: {
        title: 'What the colony asks of us',
        paragraphs: ['If a column is alive, the maintenance contract changes. There is no longer a finished structure to inspect; there is a tissue to keep fed, watered, and shaded.', 'What the colony asks, in the end, is that we widen our idea of who is collaborating. The mycelium is not decoration; it is a member of the design team.'],
      },
      credits: [
        ['Designers',   'Yu (Grace) Shen · Yingying Yan · Yining Loh'],
        ['Programme',   'MArch Bio-integrated Design'],
        ['School',      'The Bartlett School of Architecture, UCL'],
        ['Lab',         'Bio-Integrated Design Lab, UCL Here East'],
        ['Substrate',   'Hemp shiv · earth · chitosan'],
        ['Strain',      'Pleurotus ostreatus'],
        ['Year',        '2024'],
      ],
    },

    /* ================================================================
       CO-SILO FERRY STATION
       ================================================================ */
    'co-silo-ferry-station': {
      no: 'spec.006 / 2022',
      name: 'Co-Silo Ferry Station',
      binomial: 'Silo coralinus',
      kind: 'Civic · YR 3 Undergraduate design project',
      meta: 'Wynyard Point, Auckland, New Zealand · 07–10 / 2022',
      abstract: 'Six existing fuel silos on reclaimed land, reversed: rather than producing CO₂, they capture it. The ferry station becomes a threshold between human and reef — passengers asked to read the decay of coral as the architecture itself slowly opens, calcifies, and re-attaches to the bay.',
      folder: 'co-silo-ferry-station',
      metadata: [
        ['Released',    '10 / 2022'],
        ['Type',        'Civic · ferry station'],
        ['Site',        'Wynyard Point, Auckland'],
        ['Programme',   'Undergrad YR 3 (UoA)'],
        ['Method',      'Coral-growth simulation · 3-D print'],
        ['Status',      'Design proposal'],
      ],
      intro: ['Wynyard Point\'s six retired fuel silos asked a different question of a ferry station: what if the threshold to the bay reversed the silo\'s role — capturing CO₂ instead of releasing it, and routing passengers across a slow architectural reef?'],
      chapters: [
        {
          note: 'Chapter 01 · the threshold',
          title: 'A ferry station that reads as a reef',
          prose: ['The dusk render anchors the proposal — an organic silo opening onto the harbour, the silhouette closer to anemone than industry. The structure is meant to be seen first across water, then entered through a calcified lattice that doubles as wayfinding.'],
          rows: [
            { cells: [
                { img: 'silo-hero-dusk', cap: 'Silo at dusk — sculptural organic form on waterfront pier' },
              ] },
            { cells: [
                { img: 'silo-hero-underwater', cap: 'Underwater perspective — the silo meets the reef below the waterline' },
              ] },
            { cells: [
                { img: 'silo-hero-glow', cap: 'Night render — glowing translucent shell forms with figures on the pier' },
              ] },
          ],
        },
        {
          note: 'Chapter 02 · site & ecology',
          title: 'Co-habitation: coral, marine, and CO₂',
          prose: ['The project began with research into coral reef decline under rising CO₂ — bleaching, calcification loss, species displacement. The site at Wynyard Point, a reclaimed fuel-storage peninsula, offered an inversion: use the retired silos to capture what they once released.'],
          rows: [
            { cells: [
                { img: 'silo-co2-site', cap: 'CO-habitation & CO₂e — site analysis and emissions mapping at Wynyard Point' },
              ] },
            { cells: [
                { img: 'silo-coral-ecology', cap: 'Coral structure — physical model and digital simulation' },
                { img: 'silo-reef-analysis', cap: 'Coral reef life cycle, marine ecology, and environmental analysis' },
              ] },
          ],
        },
        {
          note: 'Chapter 03 · coral logic',
          title: 'Coral growth as design method',
          prose: ['Coral growth pattern simulations drove the formal logic — iterative branching algorithms producing structural lattices that could be read as both reef and architecture. The design logic translates biological growth into spatial sequence.'],
          rows: [
            { cells: [
                { img: 'silo-coral-sim', cap: 'Coral growth pattern simulation — iterative branching studies and plan evolution' },
              ] },
            { cells: [
                { img: 'silo-design-logic', cap: 'Design logic — from coral growth simulation to architectural envelope' },
              ] },
          ],
        },
        {
          note: 'Chapter 04 · programme & section',
          title: 'Programme stitched into the calcified envelope',
          prose: ['The ferry-day sequence — arrival, waiting, food court, departure — is spliced through the coral lattice. The structure itself becomes wayfinding; the perspective section reveals how programme nests inside the organic shell.'],
          rows: [
            { cells: [
                { img: 'silo-interior-program', cap: 'Plan + interior — food court, waiting, departure, arrival' },
              ] },
            { cells: [
                { img: 'silo-section-dark', cap: 'Section drawing — organic forms, underwater elements, teal accent lighting' },
              ] },
            { cells: [
                { img: 'silo-perspective-section', cap: 'Perspective section 1:300 — programme, coral structure, and reef below' },
              ] },
          ],
        },
        {
          note: 'Chapter 05 · fabrication',
          title: 'Coral as a fabrication strategy',
          prose: ['The structural logic was derived from coral-growth simulations, then 3-D printed in clear and white resin at three scales. The lattice resolves into a single curvature net — fragile in the print, structural in aggregate.'],
          rows: [
            { cells: [
                { img: 'silo-fab-hero', cap: '3-D printed lattice — mushroom-cap detail held in fingers' },
              ] },
            { cells: [
                { img: 'silo-fab-coral-01', cap: 'branching · low' },
                { img: 'silo-fab-coral-02', cap: 'branching · mid' },
                { img: 'silo-fab-coral-03', cap: 'branching · canopy' },
                { img: 'silo-fab-coral-04', cap: 'branching · detail' },
              ], cap: 'Four scales of the same coral lattice — low cluster, mid section, canopy, and detail.' },
            { cells: [
                { img: 'silo-resin-model', cap: 'Clear resin 3-D prints — internal structure model at three views' },
                { img: 'silo-render-exterior', cap: 'Exterior render — silo structure on waterfront' },
              ] },
            { cells: [
                { img: 'silo-preform-slicer', cap: 'PreForm slicer — coral model ready for SLA printing' },
                { img: 'silo-model-topdown', cap: 'Model top-down — resin print on dark surface' },
              ] },
          ],
        },
        {
          note: 'Chapter 06 · production & evolution',
          title: 'Coral and building growth production',
          prose: ['The traveling handbook maps the journey through the station — from the exploded axonometric of programme to the robotic 3-D printing process that would deposit coral-calcium structure on site. Over time, the building evolves as sea level rises and marine life reclaims the submerged lattice.'],
          rows: [
            { cells: [
                { img: 'silo-handbook-axo', cap: 'Traveling handbook — exploded axonometric of programme and shell' },
              ] },
            { cells: [
                { img: 'silo-handbook-fab', cap: 'Coral & building growth production — robotic printing and material storage' },
              ] },
            { cells: [
                { img: 'silo-evolution-render', cap: 'Logic of evolution — sea-level rise sequence and elevation render' },
              ] },
          ],
        },
        {
          note: 'Chapter 07 · inhabited spaces',
          title: 'Interior atmospheres',
          prose: ['The final renders place people inside the coral — food court, waiting hall, departure lounge, lobby. The facade detail reveals the lattice at close range, translucent and veined.'],
          rows: [
            { cells: [
                { img: 'silo-ext-perspective', cap: 'External perspective — passengers approaching at sunset' },
              ] },
            { cells: [
                { img: 'silo-facade-detail', cap: 'Facade detail — coral lattice close-up at golden hour' },
                { img: 'silo-interiors-strip', cap: 'Interior renders — food court, waiting hall, departure, lobby' },
              ] },
          ],
        },
      ],
      reflection: {
        title: 'Industrial silos, reversed',
        paragraphs: ['The proposal\'s simplest move is the most legible: the silo, retired, doesn\'t need to be erased to read as architecture. Reverse its purpose — capture instead of release — and the tank becomes a public room.', 'What the project taught me: the most expensive architectural moves are often subtraction. The silo wall stays; the coral fills its breath.'],
      },
      credits: [
        ['Designer',    'Yu (Grace) Shen'],
        ['Programme',   'BAS YR 3 — University of Auckland'],
        ['Tutors',      'School of Architecture and Planning'],
        ['Site',        'Wynyard Point, Auckland CBD'],
        ['Method',      'Coral-growth simulation · resin 3-D print'],
        ['Year',        '2022'],
      ],
    },

    /* ================================================================
       PROJECT ECOFLOW
       ================================================================ */
    'project-ecoflow': {
      no: 'spec.007 / 2023',
      name: 'Project EcoFlow',
      binomial: 'Bryophyta aedicula',
      kind: 'Bio-integrated · YR 1 Master · Individual research project',
      meta: 'Oxford St, London, UK · 09 / 2023 – 01 / 2024',
      abstract: 'A water-retaining moss facade for dense urban skin — tested against the heat-island of Oxford Street. Surface area, not floor area, becomes the unit. Architecture as metabolic system.',
      folder: 'project-ecoflow',
      metadata: [
        ['Released',    '01 / 2024'],
        ['Type',        'Bio-integrated facade'],
        ['Site',        'Oxford St, London'],
        ['Programme',   'MArch YR 1 — Bartlett UCL'],
        ['Output',      'Facade chamber system · moss growth study'],
      ],
      intro: ['Oxford Street is a heat-island corridor with no soil to spare and almost no green volume. EcoFlow proposes a re-skinning strategy that turns existing facades into a water-retentive moss substrate.'],
      chapters: [
        {
          note: 'Chapter 01 · streetscape',
          title: 'A re-skinned street, not a new building',
          prose: ['The proposal works on the existing wall plane: keep the building, change the skin. The hero collage places the moss-chamber facade onto Oxford Street — dense urban context, zero soil, maximum surface area.'],
          rows: [
            { cells: [
                { img: 'eco-hero-collage', cap: 'Streetscape collage — moss-facade prototype on Oxford Street, London' },
              ] },
            { cells: [
                { img: 'eco-moss-structure', cap: 'Central facade structure — water-retaining moss substrate at building scale' },
              ] },
          ],
        },
        {
          note: 'Chapter 02 · chamber system',
          title: 'Facade chamber system',
          prose: ['The facade is built from interlocking clay chambers designed to hold moisture and host moss colonisation. Petri-dish studies tested growth rates on different substrates; the exploded axonometric maps how the chamber units aggregate into a continuous skin.'],
          rows: [
            { cells: [
                { img: 'eco-moss-petri', cap: 'Moss growth on various surfaces — petri dish cultivation tests' },
                { img: 'eco-chamber-exploded', cap: 'Facade chamber system — exploded axonometric and assembly logic' },
              ] },
            { cells: [
                { img: 'eco-chamber-system', cap: 'Full research plate — moss growth studies, chamber typology, and section details' },
              ] },
          ],
        },
        {
          note: 'Chapter 03 · growth & erosion',
          title: 'Long-term evolution: growth and erosion',
          prose: ['A facade made of moss is also a facade made of time. Wind and water erosion simulations model how the chamber units degrade, while moss colonisation maps their biological succession — two clocks running against the same surface.'],
          rows: [
            { cells: [
                { img: 'eco-moss-patch', cap: 'Stage 2 — front perspective of moss patches, mid-growth' },
              ] },
            { cells: [
                { img: 'eco-moss-stages', cap: 'Moss colonisation stages — from early growth to mature coverage and water mapping' },
              ] },
            { cells: [
                { img: 'eco-wind-erosion', cap: 'Wind and water erosion simulation — progressive degradation sequence' },
                { img: 'eco-rainwater-sim', cap: 'Rainwater flow simulation — eight stages of water distribution' },
              ] },
            { cells: [
                { img: 'eco-evolution', cap: 'Long-term evolution — growth and erosion on the full facade system' },
              ] },
          ],
        },
      ],
      reflection: {
        title: 'A facade is a substrate before it\'s an aesthetic',
        paragraphs: ['The lesson the moss kept teaching: a facade is a substrate before it\'s an aesthetic. Once we treated the wall as something organisms had to colonise, the design questions changed from "what does this look like" to "what does this hold".', 'Wind and water don\'t care about the architect\'s intent — they erode on their own schedule. The project learned to design with that timeline, not against it.'],
      },
      credits: [
        ['Designer',    'Yu (Grace) Shen'],
        ['Programme',   'MArch Bio-integrated Design — Year 1'],
        ['School',      'The Bartlett School of Architecture, UCL'],
        ['Site',        'Oxford St, London, UK'],
        ['Year',        '2023–2024'],
      ],
    },

    /* ================================================================
       PROJECT ULTRA-PLANT
       ================================================================ */
    'project-ultra-plant': {
      no: 'spec.008 / 2022',
      name: 'Project Ultra-Plant',
      binomial: 'Symbiosis postnuclearis',
      kind: 'Speculative · YR 3 Undergraduate design project',
      meta: 'Auckland CBD, New Zealand (post-WW3) · 03–05 / 2022',
      abstract: 'A modular living system in a post-nuclear Auckland: humans and plants share expandable habitats whose vein networks transfer energy, resources, and slowly restore the surrounding ecology. The project is presented in a speculative, illustrative voice.',
      folder: 'project-ultra-plant',
      metadata: [
        ['Released',    '05 / 2022'],
        ['Type',        'Speculative architecture'],
        ['Site',        'Auckland CBD (post-WW3)'],
        ['Programme',   'BAS YR 3 — University of Auckland'],
        ['Voice',       'Illustrative · narrative comic'],
      ],
      intro: ['Ultra-Plant imagines Auckland CBD in the year 2330, after a nuclear war has redrawn the rules of habitation. Survivors live inside modular pods grafted onto plant cores; the building is a co-organism, not a shell.'],
      chapters: [
        {
          note: 'Chapter 01 · narrative section',
          title: 'The building as a comic',
          prose: ['The project is presented in a speculative, illustrated voice — perspective sections with comic-style annotations, where each floor tells its own story of symbiosis between human and plant.'],
          rows: [
            { cells: [
                { img: 'ultra-section-comic', cap: 'Perspective section — post-nuclear tower with programme annotations' },
                { img: 'new-image', cap: '' },
              ] },
            { cells: [
                { img: 'ultra-perspective', cap: 'Narrative perspective — organic building with annotated programme, illustrated elements' },
              ] },
          ],
        },
        {
          note: 'Chapter 02 · system',
          title: 'Pod typologies and funding logic',
          prose: ['Three pod typologies — each a blob-formed habitable unit with its own plan, section, and material logic. The funding system imagines blockchain, meta-life, and nuclear energy as infrastructural layers.'],
          rows: [
            { cells: [
                { img: 'ultra-typology-sheet', cap: 'Three pod typologies — plans, sections, and material panels' },
              ] },
            { cells: [
                { img: 'ultra-flowchart', cap: 'Ultra-Plant Funding System — blockchain, meta-life, robotic collection' },
              ] },
          ],
        },
        {
          note: 'Chapter 03 · computation & form',
          title: 'Subdivision surfaces — finding the organism',
          prose: ['The pod geometry was developed through subdivision surface iterations — organic blob forms resolved through parametric variation. The 3-D modelling process produced the final forms that populate the speculative city.'],
          rows: [
            { cells: [
                { img: 'ultra-subd-07', cap: 'Subdivision iterations — six blob-form variations, pink-mauve gradient' },
                { img: 'ultra-subd-08', cap: 'Subdivision iterations — alternate angle' },
              ] },
            { cells: [
                { img: 'ultra-model-01', cap: '3-D modelling environment — organic blob building form' },
                { img: 'ultra-model-02', cap: '3-D modelling — alternate view' },
              ] },
          ],
        },
        {
          note: 'Chapter 04 · fabrication',
          title: 'Pod prototypes — resin and wax',
          prose: ['Physical prototypes tested the pod forms at model scale — dark metallic resin, translucent wax, and white shell prints. Each material revealed different structural and aesthetic qualities of the organism logic.'],
          rows: [
            { cells: [
                { img: 'ultra-print-dark', cap: 'dark metallic' },
                { img: 'ultra-print-wax', cap: 'translucent wax' },
                { img: 'ultra-print-shell', cap: 'white shell' },
                { img: 'ultra-crystal', cap: 'crystal resin' },
              ], cap: 'Four pod prototypes — each material reads the organism differently.' },
            { cells: [
                { img: 'ultra-perspective-02', cap: 'Alternate perspective section — comic-style annotations, building section' },
              ] },
          ],
        },
      ],
      reflection: {
        title: 'Speculative work as design rehearsal',
        paragraphs: ['Looking back at this YR 3 project from 2026, the speculative voice was a rehearsal for the bio-integrated direction the Master\'s took up later. When the brief is impossible, what stays is the relationship you draw between species.'],
      },
      credits: [
        ['Designer',    'Yu (Grace) Shen'],
        ['Programme',   'BAS YR 3 — University of Auckland'],
        ['Year',        '2022'],
      ],
    },

    /* ================================================================
       NEPTUNE'S DAWN
       ================================================================ */
    'neptunes-dawn': {
      no: 'spec.009 / 2024',
      name: 'Neptune\'s Dawn',
      binomial: 'Neptuni aurora',
      kind: 'Competition · Group project',
      meta: 'Shanghai, China · 08–09 / 2024 · with Muze Ouyang & Xinning Yu',
      abstract: 'A Shanghai competition entry — submerged ecologies and shifting waterlines translated into a riverside vertical-tower scheme. Hand-drawn sea-creature taxonomy informs partition strategy.',
      folder: 'neptunes-dawn',
      metadata: [
        ['Released',    '09 / 2024'],
        ['Type',        'Competition · group entry'],
        ['Site',        'Shanghai, China'],
        ['Collaborators', 'Muze Ouyang · Xinning Yu'],
        ['Output',      '2 competition sheets'],
      ],
      intro: ['Neptune\'s Dawn was a Shanghai competition entry developed in two months. The proposal reads the riverside as a habitat at risk of waterline shift, and translates a hand-drawn sea-creature taxonomy into a partition strategy for a vertical tower cluster.'],
      chapters: [
        {
          note: 'Chapter 01 · concept',
          title: 'A taxonomy of partitions',
          prose: ['Sheet 1 sets the conceptual stage: background, concept, partition strategies derived from a hand-drawn sea-creature taxonomy, programme spaces. The illustrated voice argued that the conventional vocabulary of mixed-use towers was insufficient for the site\'s ecological condition.'],
          rows: [
            { cells: [
                { img: 'neptune-sheet-01', cap: 'Background · concept · spaces · partitions — competition sheet 1' },
              ] },
          ],
        },
        {
          note: 'Chapter 02 · site',
          title: 'The towers, indexed',
          prose: ['Sheet 2 places the tower cluster on its riverside site — an axonometric mapping each tower to a programme node from sheet 1.'],
          rows: [
            { cells: [
                { img: 'neptune-sheet-02', cap: 'Site axonometric — vertical tower cluster — competition sheet 2' },
              ] },
          ],
        },
      ],
      credits: [
        ['Designers',   'Yu (Grace) Shen · Muze Ouyang · Xinning Yu'],
        ['Type',        'Competition entry'],
        ['Site',        'Shanghai, China'],
        ['Year',        '2024'],
      ],
    },
  };

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

  function findFirstImageCell(d) {
    for (const ch of d.chapters || []) {
      for (const row of ch.rows || []) {
        const isShape = !Array.isArray(row);
        const cells  = isShape ? row.cells : row;
        const c = (cells || [])[0];
        if (c && (c.img || c.video)) return c;
      }
    }
    return null;
  }

  /* --- Section builders ------------------------------------------- */

  function mediaTag(cell, d) {
    if (cell.video) {
      const vsrc   = cell._vsrc || `${BASE}${d.folder}/videos/${cell.video}`;
      const poster = cell.poster ? imgSrc(d.folder, cell.poster) : '';
      const trim = cell.videoTrim || null;
      const trimAttrs = trim ? ` data-vstart="${trim.start || 0}" data-vend="${trim.end || 0}"` : '';
      if (/\.gif$/i.test(cell.video)) {
        return `<img src="${vsrc}" alt="${escapeHtml(cell.cap || '')}" loading="lazy" decoding="async">`;
      }
      return `<video src="${vsrc}" ${poster ? `poster="${poster}"` : ''}${trimAttrs} autoplay loop muted playsinline preload="metadata" aria-label="${escapeHtml(cell.cap || '')}"></video>`;
    }
    const src = cell._src || imgSrc(d.folder, cell.img);
    const cr = cell.crop;

    if (cr && cr.w !== undefined) {
      const [nw, nh] = cr.nat || [];
      const ratio = nw && nh ? ((cr.w * nw) / (cr.h * nh)).toFixed(4) : 'auto';
      const imgW = (100 / cr.w * 100).toFixed(2);
      const imgL = (-cr.x / cr.w * 100).toFixed(2);
      const imgT = (-cr.y / cr.h * 100).toFixed(2);
      const bg = (cr.bg === 'white' || cr.bg === 'black' || cr.bg === 'transparent') ? cr.bg : 'transparent';
      return `<div class="s-crop" style="--ar:${ratio};--crop-bg:${bg}"><img src="${src}" alt="${escapeHtml(cell.cap || '')}" style="width:${imgW}%;left:${imgL}%;top:${imgT}%" loading="lazy" decoding="async"></div>`;
    }

    let cropAttr = '';
    if (cr) {
      const s = cr.s || 1, x = cr.x ?? 50, y = cr.y ?? 50;
      cropAttr = ` class="crop" style="object-fit:cover;transform:scale(${s});transform-origin:${x}% ${y}%"`;
    }
    return `<img src="${src}" alt="${escapeHtml(cell.cap || '')}"${cropAttr} loading="lazy" decoding="async">`;
  }

  function mediaCapHtml(text) {
    if (!text) return '';
    return `<figcaption class="s-media-cap"><p>${escapeHtml(text)}</p></figcaption>`;
  }

  function rowCapHtml(text, tag) {
    if (!text) return '';
    return `
      <div class="s-row-cap">
        <span class="s-cap-tag">${escapeHtml(tag)}</span>
        <span class="s-cap-text">${escapeHtml(text)}</span>
      </div>
    `;
  }

  function rowSection(row, d, plateNo) {
    const isShape = !Array.isArray(row);
    const cells     = isShape ? row.cells : row;
    const sharedCap = isShape ? row.cap   : null;

    if (cells.length === 1) {
      const cell = cells[0];
      return `
        <section class="s-image">
          <figure class="s-media-figure">
            <div class="s-image-media">${mediaTag(cell, d)}</div>
            ${mediaCapHtml(cell.explain || cell.cap)}
          </figure>
        </section>
      `;
    }

    const panes = cells.map((c) => `
      <figure class="pane">
        <div class="pane-media">${mediaTag(c, d)}</div>
        ${mediaCapHtml(c.explain || c.cap)}
      </figure>
    `).join('');
    const cap   = sharedCap || cells.map((c) => c.explain || c.cap).filter(Boolean).join(' ');
    const tag   = cells.length === 2 ? '[ PAIR ]' : '[ SEQUENCE ]';
    return `
      <section class="s-row" style="--cols: ${cells.length}">
        <div class="s-row-media">${panes}</div>
        ${rowCapHtml(cap, tag)}
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

  function introSection(d, firstCell) {
    const introVideo = firstCell?.video;
    if (introVideo) {
      const vsrc = firstCell._vsrc || `${BASE}${d.folder}/videos/${introVideo}`;
      const trim = firstCell.videoTrim || null;
      const trimAttrs = trim ? ` data-vstart="${trim.start || 0}" data-vend="${trim.end || 0}"` : '';
      return `
        <section class="s-intro">
          <video class="s-intro-video" src="${vsrc}"${trimAttrs} autoplay loop muted playsinline preload="metadata"></video>
          <p class="s-intro-no">${escapeHtml(d.no || '')}</p>
          <h1 class="s-intro-name">${escapeHtml(d.name)}</h1>
          ${d.binomial ? `<p class="s-intro-binomial">${escapeHtml(d.binomial)}</p>` : ''}
          ${d.meta     ? `<p class="s-intro-meta">${escapeHtml(d.meta)}</p>` : ''}
          ${d.abstract ? `<p class="s-intro-abstract">${escapeHtml(d.abstract)}</p>` : ''}
          <p class="s-intro-scroll-cue">scroll</p>
        </section>
      `;
    }
    const bgUrl = firstCell ? (firstCell._src || imgSrcLg(d.folder, firstCell.img)) : '';
    const cr = firstCell?.crop;
    let cssVars = bgUrl ? `--bg-img: url('${bgUrl}');` : '';
    if (cr) {
      if (cr.w !== undefined) {
        const cx = (cr.x + cr.w / 2).toFixed(2);
        const cy = (cr.y + cr.h / 2).toFixed(2);
        cssVars += `--bg-scale: 1; --bg-pos: ${cx}% ${cy}%; --bg-size: cover;`;
      } else {
        cssVars += `--bg-scale: ${cr.s || 1};`;
        cssVars += `--bg-pos: ${cr.x ?? 50}% ${cr.y ?? 50}%;`;
      }
    }
    const styleAttr = cssVars ? `style="${cssVars}"` : '';
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

  let _activeDossiers = DOSSIERS;

  function outroSection(d, prevId, nextId) {
    const prev = _activeDossiers[prevId];
    const next = _activeDossiers[nextId];

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

  function renderProject(dossiers, orderArr) {
    _activeDossiers = dossiers;
    const id = qs('project') || orderArr[0];
    const d  = dossiers[id];

    if (!d) {
      document.body.innerHTML =
        '<div style="padding:120px 40px;font-family:Cormorant Garamond,serif;color:#d6d2c4">' +
        '<h1 style="font-style:italic;font-weight:300;font-size:48px;margin-bottom:16px">Specimen not found.</h1>' +
        '<p style="color:#b9b4a2"><a href="index.html" style="color:inherit;border-bottom:1px solid currentColor;text-decoration:none">return to index</a></p>' +
        '</div>';
      return;
    }

    document.title = `${d.name} — Grace`;
    const chipNoEl   = document.getElementById('story-chip-no');
    const chipNameEl = document.getElementById('story-chip-name');
    if (chipNoEl)   chipNoEl.textContent   = d.no || '';
    if (chipNameEl) chipNameEl.textContent = d.name;

    const idx = orderArr.indexOf(id);
    const prevId = orderArr[(idx - 1 + orderArr.length) % orderArr.length];
    const nextId = orderArr[(idx + 1) % orderArr.length];

    const firstCell = (d.intro?.img || d.intro?.video)
      ? { img: d.intro.img, video: d.intro.video, crop: d.intro.crop, videoTrim: d.intro.videoTrim, _src: d.intro._src, _vsrc: d.intro._vsrc }
      : findFirstImageCell(d);
    const sections = [];
    sections.push(introSection(d, firstCell));

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

    const storyEl = document.getElementById('story');
    storyEl.setAttribute('aria-busy', 'true');
    storyEl.innerHTML = sections.join('');
    storyEl.setAttribute('aria-busy', 'false');
    setupVideoTrimLoops(storyEl);

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

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') window.location.href = 'index.html';
    });
  }

  function setupVideoTrimLoops(root) {
    root.querySelectorAll('video[data-vstart], video[data-vend]').forEach(v => {
      const start = Number(v.dataset.vstart || 0);
      const end = Number(v.dataset.vend || 0);
      if (!Number.isFinite(start) || start < 0) return;
      const applyStart = () => {
        if (v.currentTime < start || Math.abs(v.currentTime - start) > 3) {
          try { v.currentTime = start; } catch {}
        }
      };
      v.addEventListener('loadedmetadata', applyStart, { once: true });
      if (end > start) {
        v.addEventListener('timeupdate', () => {
          if (v.currentTime >= end) v.currentTime = start;
        });
      }
    });
  }

  const isPreview = qs('preview') === '1';
  if (isPreview) {
    if (window.opener) window.opener.postMessage({ type: 'preview-ready' }, '*');
    window.addEventListener('message', function handler(e) {
      if (e.data?.type === 'editor-preview') {
        window.removeEventListener('message', handler);
        renderProject(e.data.dossiers, e.data.order);
      }
    });
  } else {
    renderProject(DOSSIERS, ORDER);
  }

})();
