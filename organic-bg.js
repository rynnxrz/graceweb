/* =========================================================================
   organic-bg.js — quiet substrate.

   The background previously rendered horizontal flowing isolines plus
   concentric "peak" rings (a topographic field). Both layers were
   removed (request 2026-05-06) so the substrate is now plain dark
   pigment + the global film grain from styles.css. The specimen
   wall and its per-card ink-in-water canvases now carry all the
   visual energy of this page on their own.

   This file remains so that:
   - the leaf-coord readout in the header keeps updating with cursor x/y,
   - the bg-canvas is sized correctly on resize and never flashes white.

   Cursor halo movement is handled globally by cursor.js — no longer
   here.
   ========================================================================= */

(() => {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d', { alpha: false });
  let dpr = Math.min(window.devicePixelRatio || 1, 2);
  let w = 0, h = 0;

  function resize() {
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    paint();
  }

  function paint() {
    ctx.fillStyle = '#070a0b';
    ctx.fillRect(0, 0, w, h);
  }

  function onMove(e) {
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    const y = e.touches ? e.touches[0].clientY : e.clientY;
    const coord = document.getElementById('leaf-coord');
    if (coord) {
      coord.textContent = `${((x / w) * 100).toFixed(1)} · ${((y / h) * 100).toFixed(1)}`;
    }
  }

  window.addEventListener('resize', () => {
    clearTimeout(resize._t);
    resize._t = setTimeout(resize, 120);
  });
  window.addEventListener('mousemove', onMove, { passive: true });
  window.addEventListener('touchmove', onMove, { passive: true });

  resize();
})();
