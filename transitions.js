/* =========================================================================
   transitions.js — soft cross-page fades.

   Multi-page static site, no SPA. We intercept internal nav clicks
   and fade the page content out before letting the browser navigate;
   the destination fades back in via CSS @keyframes on load. Reduces
   the hard cut between index / work / project-detail to a single,
   herbarium-page-turn beat.

   Excluded: external links, mailto/tel, same-page anchors, modifier
   clicks (cmd/ctrl/shift/alt — preserve "open in new tab"), middle
   mouse, and target="_blank". Reduced-motion users get plain nav.
   ========================================================================= */

(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const FADE_MS = 420;
  const VEIL_HOLD_MS = 850;     // time the veil sits before lifting
  const VEIL_LIFT_MS = 900;     // how long the veil takes to disappear

  /* --- Loading veil lifecycle -------------------------------------- */
  /* Markup is in <body> on first paint; we just decide when to lift.
     The veil signals "page is ready" by adding .is-loaded to <body>,
     which triggers the CSS opacity/transform transition. After the
     transition completes the element is detached from the DOM. */

  const veil = document.querySelector('[data-veil]');
  function liftVeil() {
    if (!veil) {
      document.body.classList.add('is-loaded');
      return;
    }
    document.body.classList.add('is-loaded');
    setTimeout(() => {
      if (veil.parentNode) veil.parentNode.removeChild(veil);
    }, reduced ? 250 : VEIL_LIFT_MS + 100);
  }

  // We wait for `load` (all subresources, fonts, images) so the
  // content underneath is settled before we reveal it. If `load` is
  // already past (cached navigation), we still hold for the full
  // duration so the entry choreography stays consistent.
  const start = performance.now();
  function scheduleLift() {
    const elapsed = performance.now() - start;
    const wait = Math.max(0, VEIL_HOLD_MS - elapsed);
    setTimeout(liftVeil, reduced ? 200 : wait);
  }
  if (document.readyState === 'complete') {
    scheduleLift();
  } else {
    window.addEventListener('load', scheduleLift, { once: true });
  }

  if (reduced) return;

  document.addEventListener('click', (e) => {
    if (e.defaultPrevented) return;
    if (e.button !== 0) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

    const a = e.target.closest && e.target.closest('a[href]');
    if (!a) return;
    if (a.target === '_blank') return;

    const href = a.getAttribute('href');
    if (!href) return;
    if (href.startsWith('#'))      return;
    if (href.startsWith('mailto:')) return;
    if (href.startsWith('tel:'))   return;

    let url;
    try { url = new URL(href, location.href); }
    catch (_) { return; }
    if (url.origin !== location.origin) return;
    // Same exact URL — let the browser's reload behaviour handle it
    if (url.href === location.href) return;

    e.preventDefault();
    document.body.classList.add('is-leaving');
    // Hand off after the fade completes. Use a slight buffer so the
    // last frame is fully painted before navigation tears the page.
    setTimeout(() => { window.location.href = href; }, FADE_MS);
  });

  // BFCache restore — clear any leftover leaving state when the user
  // hits Back and the page is brought back from cache.
  window.addEventListener('pageshow', (e) => {
    if (e.persisted) {
      document.body.classList.remove('is-leaving');
    }
  });
})();
