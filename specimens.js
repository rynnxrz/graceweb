/* =========================================================================
   specimens.js
   Renders the specimen wall and gives each card a quiet ink-in-water
   micro-motion on hover. Click → project dossier.
   ========================================================================= */

(() => {

  /* --- Specimen data ------------------------------------------------ */

  const BASE = 'public/images/projects/extracted-portfolio/';
  const HERO_BASE = 'public/images/projects/hero image/';

  // A small accidental Latinity. Keeps with the herbarium tone without
  // taking itself too seriously.
  const SPECIMENS = [
    {
      id: 'heishui-river-resort',
      no: 'spec.001 / 2023',
      name: 'Heishui River Resort',
      binomial: 'Aquaria nigra',
      year: '2023',
      site: 'China',
      kind: 'Hospitality · Practice',
      aspect: '4-5',
      stagger: 0,
      tick: 'pl. 04 — riverine substrate',
      hero: HERO_BASE + 'herishui river resort.JPG',
      abstract:
        'Hospitality grafted to the Blackwater. Dark stone, mountain-form, native vegetation — seasonal rooms set into the riparian edge.',
    },
    {
      id: 'les-chardonneuses',
      no: 'spec.002 / 2026',
      name: 'Les-Chardonneuses',
      binomial: 'Cardus couture',
      year: '2026',
      site: 'Paris',
      kind: 'Couture · Collaboration',
      aspect: '3-4',
      stagger: 1,
      tick: 'pl. 08 — wearable micro-structure',
      hero: BASE + 'les-chardonneuses/images/webp/p08-img02.webp',
      abstract:
        'Headpiece for Germanier SS26. A wearable lifecycle — growth, collapse, decay — translated into a structurally stable, lightweight construction.',
    },
    {
      id: 'seeds-of-change',
      no: 'spec.003 / 2025',
      name: 'Seeds of Change',
      binomial: 'Semina mutabilis',
      year: '2025',
      site: 'Exhibition',
      kind: 'Spatial · Exhibition Design',
      aspect: '4-3',
      stagger: 2,
      tick: 'pl. 11 — display ecology',
      hero: HERO_BASE + 'seeds of change.JPG',
      abstract:
        'Spatial and material setup of an immersive environment — wall display layouts, mounting, and sourced organic materials co-developed with the curatorial team.',
    },
    {
      id: 'tide-rewoven',
      no: 'spec.004 / 2025',
      name: 'Tide-ReWoven',
      binomial: 'Marina contexta',
      year: '2025',
      site: 'Aberdeen, Hong Kong',
      kind: 'Adaptive Architecture · Academic',
      aspect: '4-5',
      stagger: 1,
      tick: 'pl. 15 — chitosan membrane study',
      hero: HERO_BASE + 'tide rewoven.jpeg',
      abstract:
        'Aberdeen waterfront re-imagined as a floating market that breathes with the tide. Fishnet-chitosan composites, indexed to Micrasterias, shift in porosity through the day.',
    },
    {
      id: 'mycoterra',
      no: 'spec.005 / 2024',
      name: 'MycoTerra',
      binomial: 'Mycelium aedificans',
      year: '2024',
      site: 'London',
      kind: 'Bio-integrated · Bartlett',
      aspect: '3-4',
      stagger: 2,
      tick: 'pl. 19 — mycelial substrate',
      hero: BASE + 'mycoterra/images/webp/p19-img01.webp',
      abstract:
        'Architecture as participant in ecological cycle. Mycelium and earth, computationally tuned for airflow and humidity, sized to grow into the building.',
    },
    {
      id: 'co-silo-ferry-station',
      no: 'spec.006 / 2022',
      name: 'Co-Silo Ferry Station',
      binomial: 'Silo coralinus',
      year: '2022',
      site: 'Wynyard Point, Auckland',
      kind: 'Civic · Academic',
      aspect: '4-3',
      stagger: 0,
      tick: 'pl. 27 — reef–quay interface',
      hero: HERO_BASE + 'co-slio ferry station.png',
      abstract:
        'Reclaimed fuel silos translated into a ferry threshold between human and reef. CO₂-driven acidification taught the form: porous, decaying, slowly opening to the bay.',
    },
    {
      id: 'project-ecoflow',
      no: 'spec.007 / 2023',
      name: 'Project EcoFlow',
      binomial: 'Bryophyta aedicula',
      year: '2023',
      site: 'Oxford St, London',
      kind: 'Façade · Academic',
      aspect: '3-4',
      stagger: 1,
      tick: 'pl. 33 — moss-vault detail',
      hero: HERO_BASE + 'project ecoflow.png',
      abstract:
        'A water-retaining moss façade for dense urban skin — tested against the heat-island of Oxford Street. Surface area, not floor area, becomes the unit.',
    },
    {
      id: 'project-ultra-plant',
      no: 'spec.008 / 2022',
      name: 'Project Ultra-Plant',
      binomial: 'Symbiosis postnuclearis',
      year: '2022',
      site: 'Auckland (post-WW3)',
      kind: 'Speculative · Undergraduate',
      aspect: '4-5',
      stagger: 2,
      tick: 'pl. 36 — modular living organism',
      hero: HERO_BASE + 'project ultra plant 2.png',
      abstract:
        'Buildings as living organisms. Humans and plants share a modular system that grows and dies; survivors of nuclear loss find a quieter, symbiotic role.',
    },
    {
      id: 'neptunes-dawn',
      no: 'spec.009 / 2024',
      name: "Neptune's Dawn",
      binomial: 'Neptuni aurora',
      year: '2024',
      site: 'Shanghai',
      kind: 'Competition · Group',
      aspect: '4-5',
      stagger: 0,
      tick: 'pl. 38 — submerged dawn',
      hero: HERO_BASE + "neptune's dawn.png",
      abstract:
        'A Shanghai competition entry — a quieter, marine-rooted sunrise. With Muze Ouyang and Xinning Yu.',
    },
  ];

  /* --- Render the wall --------------------------------------------- */

  const root = document.getElementById('specimens');
  if (!root) return;

  const html = SPECIMENS.map((s, i) => `
    <a class="specimen"
       href="project-detail.html?project=${s.id}"
       data-id="${s.id}"
       data-aspect="${s.aspect}"
       data-stagger="${s.stagger}"
       aria-label="${s.name} — open dossier">
      <div class="specimen-plate">
        <div class="specimen-plate-inner">
          <img src="${s.hero}" alt="${s.name}" loading="${i < 3 ? 'eager' : 'lazy'}" decoding="async">
          <canvas aria-hidden="true"></canvas>
          <span class="plate-corner tl"></span>
          <span class="plate-corner tr"></span>
          <span class="plate-corner bl"></span>
          <span class="plate-corner br"></span>
          <span class="plate-tick">${s.tick}</span>
        </div>
      </div>
      <div class="specimen-caption">
        <span class="specimen-no">${s.no} · ${s.kind}</span>
        <span class="specimen-name">${s.name}</span>
        <span class="specimen-binomial">${s.binomial}</span>
        <span class="specimen-meta">
          <span>${s.site}</span>
          <span class="dot">·</span>
          <span>${s.year}</span>
        </span>
        <span class="specimen-abstract">${s.abstract}</span>
      </div>
    </a>
  `).join('');

  root.innerHTML = html;

  /* --- Per-card hover micro-motion (ink-in-water) ------------------ */

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const halo = document.getElementById('cursor-halo');

  const cards = Array.from(root.querySelectorAll('.specimen'));

  cards.forEach((card) => {
    const canvas = card.querySelector('canvas');
    if (!canvas) return;

    let ctx = null;
    let raf = 0;
    let active = false;
    let seeds = [];
    let frame = 0;
    let lastW = 0, lastH = 0;

    function ensureSize() {
      const r = canvas.getBoundingClientRect();
      const W = Math.round(r.width);
      const H = Math.round(r.height);
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      if (W === lastW && H === lastH && ctx) return;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx = canvas.getContext('2d');
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      lastW = W;
      lastH = H;
    }

    function makeSeeds() {
      const r = canvas.getBoundingClientRect();
      const n = 3 + Math.floor(Math.random() * 3); // 3–5 ink sources
      seeds = new Array(n).fill(0).map(() => ({
        x: Math.random() * r.width,
        y: Math.random() * r.height,
        // slow drift
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        // base radius pulses slowly
        baseR: 50 + Math.random() * 80,
        phase: Math.random() * Math.PI * 2,
        // subtle hue split — mostly bone, occasional coral
        coral: Math.random() < 0.25,
      }));
    }

    function draw() {
      if (!active) return;
      raf = requestAnimationFrame(draw);
      frame++;

      ensureSize();
      const r = canvas.getBoundingClientRect();
      const W = r.width, H = r.height;

      // Slow trail-fade — keeps soft halo bloom but lets it dissipate
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = 'rgba(0,0,0,0.04)';
      ctx.fillRect(0, 0, W, H);

      ctx.globalCompositeOperation = 'lighter';

      const t = frame * 0.012;

      for (const s of seeds) {
        // drift + soft bounce off edges
        s.x += s.vx;
        s.y += s.vy;
        if (s.x < 0 || s.x > W) s.vx *= -1;
        if (s.y < 0 || s.y > H) s.vy *= -1;

        // pulse radius — like ink in water, expanding then settling
        const pulse = 0.6 + 0.4 * Math.sin(t + s.phase);
        const rad = s.baseR * pulse;

        const grad = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, rad);
        if (s.coral) {
          grad.addColorStop(0,    'rgba(201, 122, 85, 0.18)');
          grad.addColorStop(0.45, 'rgba(201, 122, 85, 0.05)');
          grad.addColorStop(1,    'rgba(0, 0, 0, 0)');
        } else {
          grad.addColorStop(0,    'rgba(160, 190, 170, 0.20)');
          grad.addColorStop(0.45, 'rgba(160, 190, 170, 0.06)');
          grad.addColorStop(1,    'rgba(0, 0, 0, 0)');
        }
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(s.x, s.y, rad, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function start() {
      if (reduced) return;
      active = true;
      ensureSize();
      if (seeds.length === 0) makeSeeds();
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(draw);
    }

    function stop() {
      active = false;
      cancelAnimationFrame(raf);
      // Don't clear instantly — let the CSS opacity transition fade the canvas out.
      // Reset seeds for next hover.
      seeds = [];
      // Clear the canvas after the CSS fade finishes
      setTimeout(() => {
        if (!active && ctx) ctx.clearRect(0, 0, lastW, lastH);
      }, 1300);
    }

    card.addEventListener('mouseenter', () => {
      start();
      if (halo) halo.classList.add('over-specimen');
    });
    card.addEventListener('mouseleave', () => {
      stop();
      if (halo) halo.classList.remove('over-specimen');
    });

    // touch — show then dismiss
    card.addEventListener('touchstart', start, { passive: true });
    card.addEventListener('touchend', () => setTimeout(stop, 800));
  });

  /* --- Subtle pointer parallax on the whole wall ------------------- */
  /* Each specimen drifts a few px against the cursor — the wall feels
     like a microscope slide in shallow fluid. Very small magnitude. */

  if (!reduced) {
    let targetX = 0, targetY = 0, curX = 0, curY = 0;

    window.addEventListener('mousemove', (e) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      targetX = (e.clientX - cx) / cx;
      targetY = (e.clientY - cy) / cy;
    }, { passive: true });

    function loop() {
      curX += (targetX - curX) * 0.04;
      curY += (targetY - curY) * 0.04;
      cards.forEach((card, i) => {
        const depth = 1 + (i % 3) * 0.6;       // staggered depth feel
        const tx = -curX * 6 * depth;
        const ty = -curY * 6 * depth;
        card.style.transform = `translate3d(${tx.toFixed(2)}px, ${ty.toFixed(2)}px, 0)`;
      });
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  }

  /* --- Reveal on scroll ------------------------------------------- */

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.filter = 'blur(0px)';
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -10% 0px' });

    cards.forEach((card, i) => {
      card.style.opacity = '0';
      card.style.filter = 'blur(6px)';
      card.style.transition =
        'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1) ' + (i * 80) + 'ms, ' +
        'filter  1.2s cubic-bezier(0.16, 1, 0.3, 1) ' + (i * 80) + 'ms, ' +
        'transform 0.6s cubic-bezier(0.22, 0.61, 0.36, 1), ' +
        'border-color 0.6s cubic-bezier(0.16, 1, 0.3, 1), ' +
        'background 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
      io.observe(card);
    });
  }

})();
