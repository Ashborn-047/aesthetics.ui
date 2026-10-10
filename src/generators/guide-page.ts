/**
 * ============================================================================
 * GENERATOR: STYLE GUIDE HTML PAGE
 * ============================================================================
 *
 * Builds the complete standalone HTML string for a specific style guide.
 * Injected into an iframe via srcdoc or opened in a new tab.
 *
 * Includes:
 * - Back to handbook button
 * - Back-and-forth navigation arrows (‹ Previous Style / Next Style ›) & keyboard navigation
 * - Color swatches & contrast checks
 * - Modular type scale preview
 * - Spacing units, radius & shadow demonstrations
 * - Alternate palette harmonies with contrast-tested button & text roles
 * - Font pairing & similar fonts with on-demand font switching
 * - Exportable tokens (CSS Custom Properties, JSON, Tailwind config)
 * - Interactive motion preview (Button states, Card lift, Field focus, Carousel)
 * - Grid layout visualizer & rules (Dos and Avoids)
 */

import { STYLES } from '../data/styles';
import { GUIDE_CONFIG } from '../data/guide-config';
import { MOTION_PRESETS, TRANSITIONS } from '../data/motion-presets';
import { PALETTES } from '../data/palettes';
import { FONT_PAIRINGS, FONT_TYPES, FONT_CATEGORIES } from '../data/font-pairings';
import { TYPE_GUIDE_DATA } from '../data/type-guide-data';
import { FONTS_URL, BASE_CSS, GUIDE_CSS } from './css-templates';
import { motionController } from '../runtime/motion-controller';
import { fontBindFnString } from '../utils/font-loader';
import { copyTxtFnString } from '../utils/clipboard';
import { cr, hx, ok, roles, esc } from '../utils/color';

export function generateGuide(index: number): string {
  const style = STYLES[index];
  const config = GUIDE_CONFIG[index];
  const motion = MOTION_PRESETS[index];
  const pal = PALETTES[index];
  const fp = FONT_PAIRINGS[index];
  const ft = FONT_TYPES[index];
  const tr = TRANSITIONS[motion.carousel];

  const prevIndex = (index - 1 + STYLES.length) % STYLES.length;
  const nextIndex = (index + 1) % STYLES.length;
  const prevStyleName = STYLES[prevIndex].name;
  const nextStyleName = STYLES[nextIndex].name;

  const { name: n, background: bg, foreground: fg, accent: ac, font: f, componentCSS: css, description: dna } = style;
  const { radius: r, shadow: sh, spacingUnit: u, typeRatio: ts, maxWidth: w, columns: cols, layoutRule: lay, dos, avoid: av, supportColors: x } = config;

  // Swatches
  const sw = [
    ['Surface', bg],
    ['Ink', fg],
    ['Accent', ac],
    ['Support 1', x[0]],
    ['Support 2', x[1]],
  ]
    .map(([l, h]) => `<div class="pn c"><i style="background:${h}"></i><b>${l}</b><br><code>${h}</code></div>`)
    .join('');

  // Modular Type Scale
  const ty = [
    ['Display', 3],
    ['Title', 1],
    ['Body', 0],
    ['Caption', -1],
  ]
    .map(([l, e]) => {
      const px = Math.round(16 * Math.pow(ts, e as number));
      return `<div><span style="font-size:${px}px;line-height:1.1">Aa Qy</span><small>${l} ${px}px</small></div>`;
    })
    .join('');

  // Spacing Units
  const sp = [1, 2, 3, 5, 8]
    .map((m) => `<div class="sp"><u style="width:${u * m}px"></u><small>${u * m}px</small></div>`)
    .join('');

  // Contrast check
  const inkContrast = cr(fg, bg);
  const accentContrast = cr(ac, bg);

  // Runtime config passed into serialized motion controller
  const cfg = {
    i: index,
    e: motion.ease,
    d: motion.duration,
    hy: motion.hoverY,
    hs: motion.hoverScale,
    ps: motion.pressScale,
    px: motion.pressShift,
    fx: motion.specialFX,
    c: motion.carousel,
    t: tr,
    ac: hx(ac),
    rg: hx(fg) + '66',
    sh: sh,
  };

  // Palette preview generator
  const pr = (paletteName: string, colorList: string[]) => {
    const [ik, ac2, lb] = roles(colorList);
    const ra = +cr(ik, colorList[0]);
    const rb = +cr(lb, ac2);
    return `<h4 style="margin:12px 0 6px;font:600 13px system-ui,sans-serif;opacity:.8">${paletteName}</h4><div class="pl">${colorList
      .map((h) => `<div><i style="background:${h}"></i><code>${h}</code></div>`)
      .join('')}</div><div class="ps" style="background:${colorList[0]};color:${ik}"><span>Text ${ik} on ${colorList[0]}: ${ra}:1, ${ok(
      ra,
      3
    )}</span><b style="background:${ac2};color:${lb}">Button text ${lb}: ${rb}:1</b></div>`;
  };

  const palh = `<h2 style="font-size:1em;margin-top:24px">Palette schemes</h2><p>${pal.harmony}. Each strip shows the text and button-label colours that stay readable on that palette, picked by contrast.</p>${pr(
    'Core',
    [bg, fg, ac, x[0], x[1]]
  )}${pr(pal.alternates[0].name, pal.alternates[0].colors.split(' '))}${pr(
    pal.alternates[1].name,
    pal.alternates[1].colors.split(' ')
  )}`;

  // Font pairing and similar alternatives
  const bst =
    fp.bodyFont === 'Share Tech Mono'
      ? 'ui-monospace,monospace'
      : ['Lora', 'Cormorant Garamond'].includes(fp.bodyFont)
      ? 'Georgia,serif'
      : 'system-ui,sans-serif';
  const typeCategoryData = TYPE_GUIDE_DATA[ft.category];
  const hs = `'${f}',${typeCategoryData.fallbackStack}`;
  const bs = `'${fp.bodyFont}',${bst}`;

  const similarList: [string, string][] = [
    [f, ft.headingClass],
    ...ft.similar.map((s): [string, string] => [s.name, s.classification]),
    [fp.bodyFont, 'Body: ' + ft.bodyClass],
  ];

  const fph = `<h2 style="font-size:1em;margin-top:24px">Font pairing</h2><div class="k2"><div class="pn"><h4>Heading: ${f}, ${ft.headingClass}</h4><div style="font:26px/1.15 '${f}',system-ui,sans-serif;overflow-wrap:anywhere">Design that feels like something</div></div><div class="pn"><h4>Body: ${fp.bodyFont}, ${ft.bodyClass}</h4><div style="font:16px/1.6 '${fp.bodyFont}',system-ui,sans-serif">Same words, different world. Body text sets the reading rhythm, so choose it for legibility first.</div></div></div><p>${fp.reason}</p><div class="pn fcard" style="margin-top:12px"><h4>Similar fonts you can use. Family type: ${FONT_CATEGORIES[ft.category].displayName}. Click one to preview it.</h4><div class="fsp" style="font:34px/1.15 '${f}',system-ui,sans-serif;overflow-wrap:anywhere;margin:8px 0">Design that feels like something</div><p class="fnm" style="margin:0 0 10px">${f}</p><div class="cs">${similarList
    .map(
      ([nm, lb], j) =>
        `<button class="fch" data-f="${nm}" aria-pressed="${j === 0}">${nm}<small>${lb}</small></button>`
    )
    .join('')}</div></div>`;

  // Design Token Exports
  const J = JSON.stringify;
  const fa = (s: string) => J(s.replace(/'/g, '').split(',').map((v) => v.trim()));

  const tkc = `:root{\n  --color-surface:${bg};\n  --color-ink:${fg};\n  --color-accent:${ac};\n  --color-support-1:${x[0]};\n  --color-support-2:${x[1]};\n  --font-heading:${hs};\n  --font-body:${bs};\n  --radius:${r};\n  --shadow:${sh};\n  --space-unit:${u}px;\n  --type-ratio:${ts};\n}`;
  const tkj = J(
    {
      name: n,
      colors: { surface: bg, ink: fg, accent: ac, support1: x[0], support2: x[1] },
      fonts: { heading: hs, body: bs },
      radius: r,
      shadow: sh,
      spacing: { unit: u + 'px' },
      typeScale: { ratio: ts },
    },
    null,
    2
  );
  const tkt = `// tailwind.config.js (${n})\nmodule.exports={\n  theme:{extend:{\n    colors:{surface:'${bg}',ink:'${fg}',accent:'${ac}','support-1':'${x[0]}','support-2':'${x[1]}'},\n    fontFamily:{heading:${fa(
    hs
  )},body:${fa(bs)}},\n    borderRadius:{brand:'${r}'},\n    boxShadow:{brand:'${sh}'},\n    spacing:{unit:'${u}px'}\n  }}\n};`;

  const exp = `<div class="pn"><h4>Export tokens</h4><p style="margin:0 0 10px">Copy this style's colours, fonts, radius, shadow and spacing straight into your project.</p><div class="cs"><button class="xb" data-cp="${esc(
    tkc
  )}">Copy CSS variables</button><button class="xb" data-cp="${esc(
    tkj
  )}">Copy JSON</button><button class="xb" data-cp="${esc(tkt)}">Copy Tailwind config</button></div></div>`;

  // Motion section
  const mot = `<h2 id="mot">Motion and states</h2><p class="lead">Hover, press and focus the pieces below. Hover: y ${motion.hoverY}, scale ${motion.hoverScale}. Press: scale ${motion.pressScale}, shift ${motion.pressShift}px. Ease ${motion.ease}, ${motion.duration}s. Carousel: ${motion.carousel}. Built with GSAP and an SVG check mark.</p><div class="k2"><div class="pn"><h4>Button: hover, press, click, success</h4><button class="btn" id="mb"><span>Save changes</span><svg viewBox="0 0 24 24" width="18" height="18" style="vertical-align:-3px;margin-left:8px"><path d="M4 12l5 5L20 6" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" pathLength="1" stroke-dasharray="1" stroke-dashoffset="1"/></svg></button><br><small id="ms">State: idle</small></div><div class="pn"><h4>Card: hover lift</h4><div class="card" id="mc" style="margin:8px 0"><h3>Harbour Café</h3><p>Hover to lift.</p></div></div><div class="pn"><h4>Field: focus</h4><input id="mi" placeholder="Click to focus"></div><div class="pn s2"><h4>Carousel: ${motion.carousel} transition</h4><div class="car"><div class="card"><h3>Harbour Café</h3><p>Identity and signage for a corner café.</p></div><div class="card"><h3>Studio Loft</h3><p>A booking site for a photo studio.</p></div><div class="card"><h3>Night Market</h3><p>Posters and wayfinding for a street fair.</p></div></div><div class="cc"><button class="btn alt" id="pv">Prev</button><button class="btn alt" id="nx">Next</button><button class="dt" aria-label="Slide 1"></button><button class="dt" aria-label="Slide 2"></button><button class="dt" aria-label="Slide 3"></button></div></div></div>`;

  return `<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${n} guide</title><link rel="stylesheet" href="${FONTS_URL}"><style>:root{--bg:${bg};--fg:${fg};--ac:${ac};--f:'${f}'}${BASE_CSS}${GUIDE_CSS}${css}</style><body>
<nav>
  <div class="nav-brand">
    <button class="nav-back" id="btn-back" title="Back to handbook">&#8592; Handbook</button>
    <div class="nav-arrows">
      <button class="nav-arrow" id="btn-prev" title="Previous aesthetic: ${prevStyleName}">&#8249; ${prevStyleName}</button>
      <b class="nav-title">${n} <small class="nav-counter">(${index + 1}/${STYLES.length})</small></b>
      <button class="nav-arrow" id="btn-next" title="Next aesthetic: ${nextStyleName}">${nextStyleName} &#8250;</button>
    </div>
  </div>
  <div class="nav-sections">
    <a class="btn nv" href="#tok">Tokens</a>
    <a class="btn nv" href="#cmp">Components</a>
    <a class="btn nv" href="#mot">Motion</a>
    <a class="btn nv" href="#lay">Layout</a>
    <a class="btn nv" href="#rul">Rules</a>
    <a class="btn nv" href="#code">Code</a>
  </div>
</nav>

<!-- Floating side navigation arrows for effortless flipping while scrolling -->
<button class="side-nav-arrow prev" id="side-prev" aria-label="Previous aesthetic: ${prevStyleName} (Left Arrow key)" title="Previous aesthetic: ${prevStyleName} (Left Arrow key)">&#8249;</button>
<button class="side-nav-arrow next" id="side-next" aria-label="Next aesthetic: ${nextStyleName} (Right Arrow key)" title="Next aesthetic: ${nextStyleName} (Right Arrow key)">&#8250;</button>

<div class="gd"><h1>${n}</h1><p class="lead">${dna}</p>
<h2 id="tok">Design tokens</h2><div class="k">${sw}</div>
<div class="k2"><div class="pn ty"><h4>Type scale, ratio ${ts}, font ${f}</h4>${ty}</div>
<div class="pn"><h4>Spacing, base unit ${u}px</h4>${sp}<h4 style="margin-top:14px">Radius ${r} and shadow</h4><span class="bx" style="border-radius:${r}"></span><span class="bx" style="box-shadow:${sh};background:var(--bg)"></span></div>
<div class="pn"><h4>Contrast check</h4>Ink on surface: <b>${inkContrast}:1</b> ${ok(+inkContrast, 3)}<br>Accent on surface: <b>${accentContrast}:1</b> ${ok(+accentContrast, 3)}<br><small>Text needs 4.5:1, large text and UI parts need 3:1.</small></div>${exp}</div>
${palh}${fph}
<h2 id="cmp">Components</h2>
<main><p>Buttons, card and field, built from the starter CSS below.</p><button class="btn">Primary action</button><button class="btn alt">Secondary</button><div class="card"><h3>Card title</h3><p>Body text sits inside the card at the body size.</p></div><input placeholder="Text field"><button class="btn">Submit</button></main>
${mot}
<h2 id="lay">Layout</h2><p class="lead">${lay}</p><div class="gr" style="grid-template-columns:repeat(${cols},1fr);gap:${u * 2}px">${'<i></i>'.repeat(cols)}</div><p>${cols} columns, ${w}px max width, ${u * 2}px gutter, ${u}px base unit.</p>
<h2 id="rul">Rules</h2><div class="dd"><div class="pn"><h4>Do</h4><ul>${dos.map((d) => `<li>${d}</li>`).join('')}</ul></div><div class="pn"><h4>Avoid</h4><ul><li>${av}</li></ul></div></div>
<h2 id="code">Code playground</h2><p class="lead">The token CSS, base layout, component CSS and GSAP motion for ${n}. Edit any of it and watch the preview update live.</p><p><button class="btn" id="pgb">Open code playground</button></p>

<!-- Bottom footer navigation between aesthetics -->
<div class="guide-foot-nav">
  <button class="guide-foot-btn" id="foot-prev">&#8249; Previous aesthetic: ${prevStyleName}</button>
  <button class="guide-foot-btn" id="foot-back">&#8592; Back to Handbook</button>
  <button class="guide-foot-btn" id="foot-next">Next aesthetic: ${nextStyleName} &#8250;</button>
</div>
</div>
<footer class="dna"><b>${n}</b>: ${dna}</footer>
<script>
document.addEventListener('click',e=>{const a=e.target.closest&&e.target.closest('a[href^="#"]');if(a){e.preventDefault();const t=document.querySelector(a.getAttribute('href'));if(t)t.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth'})}});
(${fontBindFnString})(document);
const cpy=${copyTxtFnString};
document.addEventListener('click',e=>{const b=e.target.closest&&e.target.closest('[data-cp]');if(b)cpy(b.dataset.cp,b)});

// Back to handbook and style switcher logic
const win = window.opener || (window.parent !== window ? window.parent : null);

const goBack = () => {
  if (window.parent && window.parent !== window && window.parent.closeGuide) {
    window.parent.closeGuide();
  } else if (window.opener) {
    window.close();
  } else if (win && win.closeGuide) {
    win.closeGuide();
  } else {
    window.location.href = '/';
  }
};

const switchStyle = (idx) => {
  if (window.opener && window.opener.generateGuide) {
    document.open();
    document.write(window.opener.generateGuide(idx));
    document.close();
    return;
  }
  if (window.parent && window.parent !== window && window.parent.handleOpenGuide) {
    window.parent.handleOpenGuide(idx, true);
    return;
  }
  if (win && win.generateGuide) {
    document.open();
    document.write(win.generateGuide(idx));
    document.close();
    return;
  }
  window.location.search = '?style=' + idx;
};

['btn-prev', 'side-prev', 'foot-prev'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.onclick = () => switchStyle(${prevIndex});
});

['btn-next', 'side-next', 'foot-next'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.onclick = () => switchStyle(${nextIndex});
});

['btn-back', 'foot-back'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.onclick = goBack;
});

document.addEventListener('keydown', (e) => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
  if (e.key === 'ArrowLeft') switchStyle(${prevIndex});
  if (e.key === 'ArrowRight') switchStyle(${nextIndex});
  if (e.key === 'Escape') goBack();
});
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>(${motionController.toString()})(${J(cfg)})</script>
</body></html>`;
}
