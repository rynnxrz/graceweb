/* =========================================================================
   cursor.js — global custom cursor.

   Shared by every page (index / work / project-detail). Replaces the
   native cursor with a lerp-followed halo that has three states:

     - default     : tiny dot + soft halo glow
     - hovering    : halo expands, dot grows, label slot visible
     - typing      : reverts to native cursor (text inputs)

   The halo is rendered into the existing <div class="cursor-halo"> in
   each page's HTML; the inner structure (dot, ring, label) is created
   here so we don't have to touch every page's markup.

   Touch-only and reduced-motion users keep the native cursor.
   ========================================================================= */

(() => {
  const halo = document.getElementById('cursor-halo');
  if (!halo) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouchOnly = matchMedia('(hover: none), (pointer: coarse)').matches;
  if (reduced || isTouchOnly) {
    halo.style.display = 'none';
    document.body.style.cursor = 'auto';
    return;
  }

  // Build halo internals once. Re-running across pages is safe because
  // the halo div is fresh on every load.
  halo.innerHTML = `
    <span class="cursor-halo-ring" aria-hidden="true"></span>
    <span class="cursor-halo-dot"  aria-hidden="true"></span>
    <span class="cursor-halo-label" aria-hidden="true"></span>
  `;
  const labelEl = halo.querySelector('.cursor-halo-label');

  // Pointer state — `t*` is the raw pointer, `*` is the lerp-followed
  // halo position. We deliberately do NOT seed x/y to viewport centre:
  // the halo stays off-screen (and `body.no-halo` keeps it visually
  // hidden) until the user actually moves the cursor, so it never
  // appears centred on page load.
  let tx = -9999, ty = -9999;
  let x = tx, y = ty;
  let visible = false;
  let raf = 0;

  // Body starts with `no-halo` in markup so the halo is invisible on
  // first paint. We only remove it after the first real mousemove.
  document.body.classList.add('no-halo');

  // Header coord readout — leaf-coord exists on every page; we keep it
  // in sync from here so all pages get the same behaviour.
  const coordEl = document.getElementById('leaf-coord');

  function onMove(e) {
    tx = e.clientX;
    ty = e.clientY;
    if (!visible) {
      x = tx; y = ty;
      visible = true;
      document.body.classList.remove('no-halo');
    }
    if (coordEl) {
      const w = window.innerWidth || 1;
      const h = window.innerHeight || 1;
      coordEl.textContent =
        `${((tx / w) * 100).toFixed(1)} · ${((ty / h) * 100).toFixed(1)}`;
    }
  }

  function onLeave() {
    document.body.classList.add('no-halo');
  }
  function onEnter() {
    document.body.classList.remove('no-halo');
  }

  function frame() {
    raf = requestAnimationFrame(frame);
    // Don't paint the halo until the user has actually moved the
    // mouse at least once. Prevents the halo from showing centred
    // (or anywhere) before there's a real pointer position to track.
    if (!visible) return;
    // Two-stage viscous lerp — fast for the dot, slower for the ring.
    // We translate the wrapper at the dot speed and rely on CSS
    // transitions inside the ring for a softer trail.
    x += (tx - x) * 0.22;
    y += (ty - y) * 0.22;
    halo.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) translate(-50%, -50%)`;
  }

  /* --- Hover targets — link-like elements get the "open" affordance */

  // Selectors that should make the halo expand into its "pointing" state.
  // Specimen marks, specimen cards, kinship threads, internal links.
  const HOVER_SELECTOR = [
    '.net-mark',
    '.specimen',
    '.net-thread',
    '.net-thread-label',
    'a[href]',
    'button',
    '.view-toggle-item',
  ].join(',');

  function onOver(e) {
    const target = e.target.closest(HOVER_SELECTOR);
    if (!target) return;
    halo.classList.add('is-pointing');
    // Pick a label that fits the target. .net-mark / .specimen → "open"
    // for the dossier; threads → "kinship"; everything else → "+".
    let label = '+';
    if (target.matches('.net-mark, .specimen')) label = 'open';
    else if (target.matches('.net-thread, .net-thread-label')) label = 'kin';
    else if (target.matches('a[href^="mailto:"]')) label = 'write';
    labelEl.textContent = label;
  }

  function onOut(e) {
    const next = e.relatedTarget && e.relatedTarget.closest
      ? e.relatedTarget.closest(HOVER_SELECTOR)
      : null;
    if (!next) {
      halo.classList.remove('is-pointing');
    }
  }

  /* --- Hide on text inputs so the user can see what they're typing -- */
  function onFocusIn(e) {
    if (e.target.matches('input, textarea, [contenteditable="true"]')) {
      halo.classList.add('is-typing');
    }
  }
  function onFocusOut() {
    halo.classList.remove('is-typing');
  }

  window.addEventListener('mousemove', onMove, { passive: true });
  document.addEventListener('mouseenter', onEnter);
  document.addEventListener('mouseleave', onLeave);
  document.addEventListener('mouseover',  onOver);
  document.addEventListener('mouseout',   onOut);
  document.addEventListener('focusin',    onFocusIn);
  document.addEventListener('focusout',   onFocusOut);

  raf = requestAnimationFrame(frame);
})();
