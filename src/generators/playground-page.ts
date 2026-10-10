/**
 * ============================================================================
 * GENERATOR: PLAYGROUND HTML PAGE
 * ============================================================================
 *
 * Builds the complete standalone HTML string for the live code playground.
 * Provides a split-screen live editor for tokens, layout, CSS components,
 * and GSAP motion code with real-time iframe preview.
 * Includes back-to-guide navigation and style switching arrows.
 */

import { STYLES } from '../data/styles';
import { GUIDE_CONFIG } from '../data/guide-config';
import { MOTION_PRESETS, TRANSITIONS } from '../data/motion-presets';
import { FONTS_URL, BASE_CSS, GUIDE_CSS, PLAYGROUND_CSS } from './css-templates';
import { playgroundController } from '../runtime/playground-controller';

/** Formats CSS for human readability in the playground text editor */
function formatCssPretty(code: string): string {
  return code
    .replace(/\{/g, ' {\n  ')
    .replace(/;/g, ';\n  ')
    .replace(/\}/g, '\n}\n')
    .replace(/\n  \n\}/g, '\n}');
}

/** Generates starter GSAP JavaScript code for the playground */
export function makePlaygroundCode(index: number): string {
  const style = STYLES[index];
  const motion = MOTION_PRESETS[index];
  const tr = TRANSITIONS[motion.carousel];
  const J = JSON.stringify;

  return `// ${style.name}: edit any value and the preview updates as you type
const cfg={y:${motion.hoverY},scale:${motion.hoverScale},press:${motion.pressScale},shift:${motion.pressShift},dur:${motion.duration},ease:'${motion.ease}'};
  const slide = {
    from: ${J(tr.from)},
    to: ${J(tr.to)},
    out: ${J(tr.out)}
  };

// button: hover, press, click draws the check
btn.onpointerenter=()=>gsap.to(btn,{y:cfg.y,scale:cfg.scale,duration:cfg.dur,ease:cfg.ease});
btn.onpointerleave=()=>gsap.to(btn,{y:0,scale:1,duration:cfg.dur,ease:cfg.ease});
btn.onpointerdown=()=>gsap.to(btn,{scale:cfg.press,x:cfg.shift,y:cfg.y+cfg.shift,duration:.1});
btn.onpointerup=()=>gsap.to(btn,{scale:cfg.scale,x:0,y:cfg.y,duration:cfg.dur,ease:cfg.ease});
btn.onclick=()=>{\n  gsap.fromTo(check,{strokeDashoffset:1},{strokeDashoffset:0,duration:.4});\n  gsap.to(check,{strokeDashoffset:1,delay:1.4,duration:.2});\n};

// card: hover lift
card.onpointerenter=()=>gsap.to(card,{y:-8,duration:cfg.dur,ease:cfg.ease});
card.onpointerleave=()=>gsap.to(card,{y:0,duration:cfg.dur,ease:cfg.ease});

// carousel: slides[], next, prev are provided
let i=0;
const go=d=>{\n  const n=(i+d+slides.length)%slides.length;\n  gsap.to(slides[i],{...slide.out,duration:.5,ease:cfg.ease});\n  gsap.fromTo(slides[n],slide.from,{...slide.to,duration:.5,ease:cfg.ease});\n  i=n;\n};
next.onclick=()=>go(1);
prev.onclick=()=>go(-1);`;
}

/** Generates starter CSS for the playground */
export function makePlaygroundCss(index: number): string {
  const style = STYLES[index];
  const config = GUIDE_CONFIG[index];

  return `/* ${style.name}: tokens. --bg, --fg, --ac and --f drive the base styles.\n   The other tokens are reference values used by the component styles below. */
:root{\n  --bg:${style.background};\n  --fg:${style.foreground};\n  --ac:${style.accent};\n  --f:'${style.font}';\n  --support-1:${config.supportColors[0]};\n  --support-2:${config.supportColors[1]};\n  --radius:${config.radius};\n  --shadow:${config.shadow};\n  --space:${config.spacingUnit}px;\n  --type-ratio:${config.typeRatio};\n}\n\n/* Base layout */\n${formatCssPretty(BASE_CSS)}\n/* ${style.name}: component styles */\n${formatCssPretty(style.componentCSS)}`;
}

export function generatePlayground(index: number): string {
  const style = STYLES[index];
  const prevIndex = (index - 1 + STYLES.length) % STYLES.length;
  const nextIndex = (index + 1) % STYLES.length;
  const prevStyleName = STYLES[prevIndex].name;
  const nextStyleName = STYLES[nextIndex].name;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const escapeJson = (v: any) => JSON.stringify(v).replace(/<\//g, '<\\/');

  const pvh = `<nav><b>Studio North</b><span>Work</span><span>About</span><span>Contact</span></nav><main><h1>Design that feels like something</h1><p>Same words, different world. Compare how ${style.name} shapes type, color and form.</p><button class="btn" id="b"><span>Save changes</span><svg viewBox="0 0 24 24" width="18" height="18" style="vertical-align:-3px;margin-left:8px"><path d="M4 12l5 5L20 6" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" pathLength="1" stroke-dasharray="1" stroke-dashoffset="1"/></svg></button><button class="btn alt">Secondary</button><div class="card" id="c"><h3>Harbour Café</h3><p>Hover to lift.</p></div><input placeholder="Your email"><div class="car"><div class="card"><h3>Harbour Café</h3><p>Identity and signage for a corner café.</p></div><div class="card"><h3>Studio Loft</h3><p>A booking site for a photo studio.</p></div><div class="card"><h3>Night Market</h3><p>Posters and wayfinding for a street fair.</p></div></div><div class="cc"><button class="btn alt" id="pb">Prev</button><button class="btn alt" id="nx">Next</button></div></main>`;

  const shell = `<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="stylesheet" href="${FONTS_URL}"><style>${GUIDE_CSS}</style><style id="u"></style><body><div id="root">${pvh}</div><script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>`;

  return `<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${style.name} code playground</title><style>${PLAYGROUND_CSS}</style><body>
<!-- Floating side navigation arrows -->
<button type="button" class="pg-side-arrow prev" id="pg-side-prev" aria-label="Previous aesthetic: ${prevStyleName}" title="Previous aesthetic: ${prevStyleName} (Left Arrow)">&#8249;</button>
<button type="button" class="pg-side-arrow next" id="pg-side-next" aria-label="Next aesthetic: ${nextStyleName}" title="Next aesthetic: ${nextStyleName} (Right Arrow)">&#8250;</button>

<div class="pg"><section class="ed"><header><div class="pg-brand"><button type="button" class="pg-back" id="pg-back" title="Back to guide">&#8592; Guide</button><div class="pg-nav"><button type="button" class="pg-arrow" id="pg-prev" title="Previous aesthetic: ${prevStyleName}">&#8249;</button><b>${style.name} <small style="opacity:0.6;font-size:12px;font-weight:normal">(${index + 1}/${STYLES.length})</small></b><button type="button" class="pg-arrow" id="pg-next" title="Next aesthetic: ${nextStyleName}">&#8250;</button></div></div><span id="er"></span><button class="tb" id="rn">Run</button><button class="tb" id="rs">Reset</button><button class="tb" id="cp">Copy</button></header><div class="tabs"><button aria-selected="true">CSS</button><button aria-selected="false">Motion (GSAP)</button></div><textarea id="ta" spellcheck="false" aria-label="Code"></textarea></section><iframe id="fr" title="Live preview"></iframe></div>
<script>
(${playgroundController.toString()})(${escapeJson(makePlaygroundCss(index))},${escapeJson(makePlaygroundCode(index))},${escapeJson(pvh)},${escapeJson(shell)});

const win = window.opener || (window.parent !== window ? window.parent : null);

const getPgHtmlFn = () => {
  return (window.opener && window.opener.pgHTML) ||
         (window.parent && window.parent.pgHTML) ||
         (win && win.pgHTML);
};

const getGuideFn = () => {
  return (window.opener && window.opener.generateGuide) ||
         (window.parent && window.parent.generateGuide) ||
         (win && win.generateGuide);
};

const switchPlayground = (targetIdx) => {
  const fn = getPgHtmlFn();
  if (fn) {
    document.open();
    document.write(fn(targetIdx));
    document.close();
  }
};

const handlePgBack = () => {
  const gFn = getGuideFn();
  if (gFn) {
    document.open();
    document.write(gFn(${index}));
    document.close();
  } else if (window.opener) {
    window.close();
  } else if (window.parent && window.parent.closeGuide) {
    window.parent.closeGuide();
  } else {
    window.location.href = '/';
  }
};

const pgBack = document.getElementById('pg-back');
if (pgBack) pgBack.onclick = handlePgBack;

['pg-prev', 'pg-side-prev'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.onclick = () => switchPlayground(${prevIndex});
});

['pg-next', 'pg-side-next'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.onclick = () => switchPlayground(${nextIndex});
});

document.addEventListener('keydown', (e) => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
  if (e.key === 'ArrowLeft') switchPlayground(${prevIndex});
  if (e.key === 'ArrowRight') switchPlayground(${nextIndex});
  if (e.key === 'Escape') handlePgBack();
});
</script></body></html>`;
}
