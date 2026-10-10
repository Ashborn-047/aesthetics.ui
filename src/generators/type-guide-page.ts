/**
 * ============================================================================
 * GENERATOR: TYPE GUIDE HTML PAGE
 * ============================================================================
 *
 * Builds the standalone HTML string for a typography family guide
 * (Serif, Sans-serif, Display, Monospace, Handwriting).
 *
 * Includes:
 * - Interactive Type Lab with live sliders (Size, Weight, Tracking, Line Height)
 * - Typography animation demos with live GSAP replays
 * - Contrast-tested background and text colour pairings
 * - Font pairings and accessibility guidelines
 * - Starter CSS export
 */

import { FONT_CATEGORIES, FONT_TYPES } from '../data/font-pairings';
import { TYPE_GUIDE_DATA, DEMO_ANIMATIONS } from '../data/type-guide-data';
import { STYLES } from '../data/styles';
import { TYPE_GUIDE_CSS } from './css-templates';
import { typeGuideController } from '../runtime/type-guide-controller';
import { cr, ok, esc } from '../utils/color';
import type { FontCategoryKey } from '../types/data';

export function generateTypeGuide(categoryKey: FontCategoryKey): string {
  const category = FONT_CATEGORIES[categoryKey];
  const data = TYPE_GUIDE_DATA[categoryKey];
  const { displayName: nm, description: desc } = category;

  const fontList = data.fonts;
  const leadFont = fontList[0].name;
  const variableFontFamily = data.variableFont.split(':')[0];

  const usedByStyles = STYLES.map((s, i) => (FONT_TYPES[i].category === categoryKey ? s.name : null)).filter(
    Boolean
  ) as string[];

  const uniqueFamilies = [...new Set([...fontList.map((f) => f.name), variableFontFamily])];
  const familiesQuery = uniqueFamilies
    .map((f) => 'family=' + (f === variableFontFamily ? data.variableFont : f).replace(/ /g, '+'))
    .join('&');
  const googleFontsUrl = `https://fonts.googleapis.com/css2?${familiesQuery}&display=swap`;
  const formatFontStack = (font: string) => `'${font}',${data.fallbackStack}`;

  // Font cards in Type Lab
  const cardsHtml = fontList
    .map(
      (f) =>
        `<article class="fc2"><div class="sp" style="font-family:${formatFontStack(
          f.name
        )}">Design that feels like something</div><div class="fi"><b>${f.name}</b><span class="cl">${
          f.classification
        }</span><p>Best for: ${f.bestFor}</p><div class="ac"><button class="tb" data-cp="${esc(
          'font-family:' + formatFontStack(f.name) + ';'
        )}">Copy CSS</button><button class="tb" data-an="${f.name}">Animate</button></div></div></article>`
    )
    .join('');

  // Chips for font animation picker
  const chipsHtml = fontList
    .map((f, j) => `<button class="mfc" data-f="${f.name}" aria-pressed="${j === 0}">${f.name}</button>`)
    .join('');

  // Animation demos
  const demosHtml = DEMO_ANIMATIONS.map(
    (dm) =>
      `<div class="dm"><h3>${dm.title}</h3><p>${dm.description}</p><div class="stg${
        dm.id === 'shine' ? ' shine' : ''
      }" data-d="${dm.id}" data-t="Typography in motion"></div><button class="tb rp" data-d="${
        dm.id
      }">Replay</button><code>${esc(dm.gsapCode)}</code></div>`
  ).join('');

  // Contrast colour pairs
  const colorCardsHtml = data.colorPairs
    .map((s) => {
      const [b, f, ...labelParts] = s.split(' ');
      const ratio = +cr(f, b);
      return `<div class="cc" style="background:${b};color:${f}"><span class="aa" style="font-family:${formatFontStack(
        leadFont
      )}">Aa</span><div><b>${labelParts.join(' ')}</b><small>${f} on ${b}<br>${ratio}:1, ${ok(
        ratio,
        3
      )}</small></div></div>`;
    })
    .join('');

  const specLabels = ['Body size', 'Line height', 'Tracking', 'Line length', 'Weights', 'Watch out for'];
  const starterCssCode = `<link href="${googleFontsUrl}" rel="stylesheet">\n\nbody{\n  font-family:${formatFontStack(
    leadFont
  )};\n  font-size:${data.specs[0].split(' ')[0]}px;\n  line-height:${data.specs[1].split(' ')[0]};\n}`;

  const clientConfig = {
    fonts: fontList.map((f) => f.name),
    vf: variableFontFamily,
    s: data.fallbackStack,
  };

  return `<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${nm} type guide</title><link rel="stylesheet" href="${googleFontsUrl}"><style>${TYPE_GUIDE_CSS}</style><body>
<nav class="tn"><b>${nm}</b><a href="#lab">Type lab</a><a href="#fonts">Fonts</a><a href="#motion">Animation</a><a href="#color">Colour</a><a href="#spec">Specs</a></nav>
<div class="w"><header class="th"><span class="eb">Type family</span><h1 style="font-family:${formatFontStack(
    leadFont
  )}">${nm}</h1><p class="lead">${desc}</p><div class="cp">${data.traits
    .map((x) => `<span>${x}</span>`)
    .join('')}</div><p class="lead">Used by ${usedByStyles.length} styles: ${usedByStyles.join(', ')}.</p></header>
<section id="lab"><h2>Type lab</h2><p class="sub">Change the text, size, weight, spacing and colours. Every font below updates live.</p>
<div class="lab"><label style="grid-column:1/-1">Sample text<input id="ltx" type="text" value="Design that feels like something"></label>
<label>Size <output id="lszv">40</output><input id="lsz" type="range" min="16" max="96" value="40"></label><label>Weight <output id="lwtv">400</output><input id="lwt" type="range" min="100" max="900" step="100" value="400"></label>
<label>Tracking (em) <output id="ltrv">0</output><input id="ltr" type="range" min="-0.05" max="0.3" step="0.01" value="0"></label><label>Line height <output id="llhv">1.15</output><input id="llh" type="range" min="0.9" max="2" step="0.05" value="1.15"></label>
<label>Text colour<input id="lfc" type="color" value="#f1eee8"></label><label>Background<input id="lbg" type="color" value="#2b2b2b"></label>
<label>Contrast<output id="lro" style="opacity:1;font-size:14px"></output><button id="lrs" type="button">Reset</button></label></div>
<div class="fg" id="fg">${cardsHtml}</div></section>
<section id="fonts"><h2>Where each font fits</h2><p class="sub">Weight only changes fonts that ship several weights; the rest use their nearest one.</p><dl>${data.specs
    .map((v, j) => `<div><dt>${specLabels[j]}</dt><dd>${v}</dd></div>`)
    .join('')}</dl></section>
<section id="motion"><h2>Typography animation</h2><p class="sub">${
    data.animationRec
  } Pick a font, then replay any effect.</p><div class="mfs">${chipsHtml}</div><div class="dg">${demosHtml}</div></section>
<section id="color"><h2>Typography colour</h2><p class="sub">Six text and background pairs that suit ${nm.toLowerCase()} type, with real contrast ratios. Text needs 4.5:1; large text needs 3:1.</p><div class="cg">${colorCardsHtml}</div><div class="tip"><b>Colour tip.</b> ${
    data.colorTip
  }</div></section>
<section id="spec"><h2>Pairing and accessibility</h2><div class="two"><div><h3>Pairing</h3><p>${
    data.pairingAdvice
  }</p></div><div><h3>Accessibility</h3><ul>${data.accessibilityTips
    .map((x) => `<li>${x}</li>`)
    .join('')}</ul></div></div>
<pre>${esc(starterCssCode)}</pre><button class="tb" data-cp="${esc(
    starterCssCode
  )}">Copy starter CSS</button></section></div>
<footer>${nm} type guide. Fonts load from Google Fonts.</footer>
<script>
document.addEventListener('click',e=>{const a=e.target.closest&&e.target.closest('a[href^="#"]');if(a){e.preventDefault();const t=document.querySelector(a.getAttribute('href'));if(t)t.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth'})}});
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>(${typeGuideController.toString()})(${JSON.stringify(clientConfig)})</script>
</body></html>`;
}
