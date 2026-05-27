/* ============================================================
   AIKASA Pretext-native layout bootstrap
   Loads Pretext via CDN and wires resize-aware + content-editable.
   Pages should mark text elements with `data-pretext`.
   ============================================================ */

import { prepare, layout } from 'https://esm.sh/@chenglou/pretext';

const prepared = new Map();

async function bootstrapPretext() {
  await document.fonts.ready;

  const elements = document.querySelectorAll('[data-pretext]');
  for (const el of elements) {
    const text = el.textContent;
    const font = getComputedStyle(el).font;
    prepared.set(el, prepare(text, font));
  }

  relayoutAll();

  // Resize-aware re-layout
  const ro = new ResizeObserver(() => relayoutAll());
  ro.observe(document.body);

  // Content-editable re-prepare
  for (const el of elements) {
    if (el.isContentEditable) {
      new MutationObserver(() => {
        const font = getComputedStyle(el).font;
        prepared.set(el, prepare(el.textContent, font));
        relayoutForElement(el);
      }).observe(el, { characterData: true, subtree: true, childList: true });
    }
  }
}

function relayoutAll() {
  for (const [el, handle] of prepared) {
    relayoutForElement(el, handle);
  }
}

function relayoutForElement(el, handle = prepared.get(el)) {
  if (!handle) return;
  const cs = getComputedStyle(el);
  const lineHeight = parseFloat(cs.lineHeight) || (parseFloat(cs.fontSize) * 1.6);
  const width = el.clientWidth;
  try {
    const { height } = layout(handle, width, lineHeight);
    if (el.dataset.pretext === 'height') {
      el.style.minHeight = `${height}px`;
    }
  } catch {}
}

bootstrapPretext().catch(err => console.warn('Pretext init failed:', err));
