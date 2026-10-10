/**
 * ============================================================================
 * STYLES — The 22 Design Aesthetics
 * ============================================================================
 *
 * Each entry defines one visual aesthetic with its core design tokens:
 * surface colour, ink colour, accent, font, component CSS overrides,
 * and a one-line description.
 *
 * The component CSS is raw CSS text that gets injected into generated
 * style guide pages to theme buttons, cards, inputs, headings, and nav.
 *
 * Original variable name: S
 * Original format: [name, bg, fg, accent, font, componentCSS, description]
 */

import type { StyleDefinition } from '../types/data';

export const STYLES: StyleDefinition[] = [
  {
    name: 'Claymorphism',
    background: '#f3e8ff',
    foreground: '#3b2a5a',
    accent: '#ff9ec7',
    font: 'Nunito',
    componentCSS: `.btn{color:#3b2a5a;border-radius:26px;font-weight:800;box-shadow:inset -6px -6px 12px #0002,inset 6px 6px 12px #fff9,8px 8px 18px #7b5ea733}.card{border-radius:36px;background:#f8d7ff;box-shadow:inset -8px -8px 16px #0001,inset 8px 8px 16px #fffa,12px 12px 28px #7b5ea740}input{border:0;border-radius:20px;background:#fff8;box-shadow:inset 4px 4px 8px #0002}h1{font-weight:800}.dna{border:0}`,
    description: 'Puffy 3D shapes from paired inset and outer shadows. Soft pastels, fat rounded type.',
  },
  {
    name: 'Cybercore',
    background: '#05070f',
    foreground: '#c7f9ff',
    accent: '#00f0ff',
    font: 'Orbitron',
    componentCSS: `.btn{color:#001;clip-path:polygon(12px 0,100% 0,calc(100% - 12px) 100%,0 100%);text-transform:uppercase;letter-spacing:.1em}h1{text-shadow:0 0 18px #00f0ff;letter-spacing:.04em}.card{border:1px solid #00f0ff;box-shadow:0 0 24px #00f0ff44,inset 0 0 24px #00f0ff22}input{border-color:#00f0ff}nav{border-bottom:1px solid #00f0ff55}`,
    description: 'Near-black base, cyan glow, angled cut corners, wide geometric type.',
  },
  {
    name: 'Neo-Brutalism',
    background: '#fff3c4',
    foreground: '#000',
    accent: '#ff6b6b',
    font: 'Space Grotesk',
    componentCSS: `.btn{color:#000;border:3px solid #000;box-shadow:5px 5px 0 #000;font-weight:700}.card{background:#8ee3ef;border:3px solid #000;box-shadow:8px 8px 0 #000}input{border:3px solid #000;background:#fff}h1{font-weight:700}nav{border-bottom:3px solid #000}`,
    description: 'Thick black outlines, hard offset shadows, flat loud colors, no blur.',
  },
  {
    name: 'Scrapbook',
    background: '#e9dcc3',
    foreground: '#3a2e24',
    accent: '#f2c14e',
    font: 'Caveat',
    componentCSS: `body{font-size:22px;background-image:radial-gradient(#0001 1px,transparent 1px);background-size:14px 14px}.btn{color:#3a2e24;transform:rotate(-2deg);box-shadow:2px 3px 6px #0004;font-size:22px}.card{background:#fffbe8;transform:rotate(2deg);box-shadow:3px 5px 10px #0004;border-top:18px solid #f2c14e99}input{background:#fff;border:2px dashed #3a2e24;transform:rotate(-1deg)}h1{transform:rotate(-1.5deg);background:#f2c14e;display:inline-block;padding:0 14px}`,
    description: 'Paper textures, tilted pieces, tape strips, handwritten type.',
  },
  {
    name: 'Surrealism',
    background: '#1b2a49',
    foreground: '#f6e7c8',
    accent: '#e8743b',
    font: 'DM Serif Display',
    componentCSS: `.btn{border-radius:50% 50% 50% 0;padding:18px 26px}h1{font-style:italic;transform:skewX(-6deg)}.card{border-radius:60% 40% 55% 45%/50% 60% 40% 50%;background:radial-gradient(circle at 30% 30%,#e8743b,#7a2e5a);padding:48px}input{border-radius:40px 4px 40px 4px}main::before{content:'';display:block;width:90px;height:90px;border-radius:50%;background:#f6e7c8;box-shadow:30px 40px 0 -20px #e8743b;margin-bottom:20px}`,
    description: 'Dreamlike organic shapes, warped proportions, unexpected object pairings.',
  },
  {
    name: 'Y2K Aesthetic',
    background: '#d8f0ff',
    foreground: '#1a1a5e',
    accent: '#ff5fd2',
    font: 'Righteous',
    componentCSS: `.btn{color:#fff;border-radius:30px;border:2px solid #fff;background:linear-gradient(#ff9ae6,#ff5fd2 50%,#c81fa0);box-shadow:0 4px 10px #c81fa066,inset 0 8px 8px #fff7}h1{background:linear-gradient(90deg,#ff5fd2,#4aa8ff,#1a1a5e);-webkit-background-clip:text;background-clip:text;color:transparent}.card{background:linear-gradient(135deg,#fff,#bfe6ff 50%,#f0d4ff);border:2px solid #fff;border-radius:22px;box-shadow:0 6px 20px #4aa8ff66}input{border-radius:20px;border:2px solid #4aa8ff;background:#fff}`,
    description: 'Glossy gel buttons, chrome gradients, baby blue and hot pink, bubbly type.',
  },
  {
    name: 'Pixel Art',
    background: '#1a1c2c',
    foreground: '#f4f4f4',
    accent: '#ef7d57',
    font: 'Press Start 2P',
    componentCSS: `body{font-size:12px;line-height:1.9}.btn{color:#1a1c2c;border-radius:0;box-shadow:4px 4px 0 #b13e53;font-size:12px}h1{font-size:clamp(22px,5vw,44px);color:#ffcd75;line-height:1.3}.card{border:4px solid #f4f4f4;box-shadow:6px 6px 0 #29366f;font-size:11px}input{font-size:11px;border:4px solid #f4f4f4;border-radius:0}`,
    description: 'Bitmap font, hard square edges, limited palette, stepped shadows.',
  },
  {
    name: 'Synthwave',
    background: '#1a0b3b',
    foreground: '#ffe9ff',
    accent: '#ff2e97',
    font: 'Audiowide',
    componentCSS: `body{background:linear-gradient(#1a0b3b 55%,#ff2e9755 100%) fixed}.btn{color:#fff;border-radius:4px;box-shadow:0 0 18px #ff2e97}h1{text-shadow:3px 3px 0 #ff2e97,6px 6px 0 #00e5ff}.card{border:2px solid #00e5ff;box-shadow:0 0 20px #00e5ff66}input{border-color:#00e5ff}footer{background:repeating-linear-gradient(90deg,#ff2e9733 0 2px,transparent 2px 40px)}`,
    description: '80s neon: magenta and cyan, sunset gradient, retro-futurist grid.',
  },
  {
    name: 'Glassmorphism',
    background: '#4b3fd8',
    foreground: '#fff',
    accent: '#ffffff40',
    font: 'Plus Jakarta Sans',
    componentCSS: `body{background:radial-gradient(circle at 20% 20%,#ff6ec4,transparent 40%),radial-gradient(circle at 80% 70%,#25d9f5,transparent 45%),#4b3fd8}.btn{color:#fff;border:1px solid #fff6;backdrop-filter:blur(10px);border-radius:14px}.card{background:#ffffff26;backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border:1px solid #ffffff55;border-radius:22px;box-shadow:0 8px 32px #0003}input{background:#ffffff22;border:1px solid #fff6;border-radius:12px}nav{background:#ffffff1a}`,
    description: 'Frosted translucent panels over vivid blurred color, thin light borders.',
  },
  {
    name: 'Neumorphism',
    background: '#e0e5ec',
    foreground: '#3d4852',
    accent: '#e0e5ec',
    font: 'Poppins',
    componentCSS: `.btn{color:#3d4852;border-radius:14px;box-shadow:7px 7px 14px #a3b1c6,-7px -7px 14px #fff}.card{border-radius:24px;box-shadow:9px 9px 18px #a3b1c6,-9px -9px 18px #fff}input{border:0;border-radius:14px;box-shadow:inset 5px 5px 10px #a3b1c6,inset -5px -5px 10px #fff}`,
    description: 'Elements extruded from one surface: a dark and a light shadow, same-color fills.',
  },
  {
    name: 'Bento Grid',
    background: '#f2f2f0',
    foreground: '#161616',
    accent: '#ffd84d',
    font: 'Manrope',
    componentCSS: `main{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;max-width:1000px}main>*{background:#fff;border-radius:24px;padding:24px;margin:0}main>h1{grid-column:span 3;grid-row:span 2;background:#ffd84d;font-size:clamp(30px,5vw,56px)}main>.card{max-width:none}.btn{color:#161616;border-radius:14px}@media(max-width:600px){main{grid-template-columns:1fr}main>h1{grid-column:auto}}`,
    description: 'Content packed into a modular grid of rounded tiles with mixed spans.',
  },
  {
    name: 'Editorial Design',
    background: '#faf7f2',
    foreground: '#1c1c1c',
    accent: '#b3261e',
    font: 'Playfair Display',
    componentCSS: `.btn{color:#fff;border-radius:0}h1{font-weight:900;letter-spacing:-.02em;border-top:6px double #1c1c1c;padding-top:14px}main>p:first-of-type::first-letter{font-size:3.4em;float:left;line-height:.9;padding-right:8px}.card{border-top:3px solid #1c1c1c;border-bottom:1px solid #1c1c1c;padding:16px 0}input{border:0;border-bottom:1px solid;border-radius:0}`,
    description: 'Magazine logic: serif headlines, drop caps, ruled sections.',
  },
  {
    name: 'Swiss Design',
    background: '#fff',
    foreground: '#000',
    accent: '#e3000f',
    font: 'Archivo',
    componentCSS: `.btn{color:#fff;border-radius:0}h1{font-weight:800;letter-spacing:-.04em;font-size:clamp(44px,10vw,120px);line-height:.9}nav{border-bottom:4px solid #000}.card{border-left:12px solid #e3000f;padding:0 16px}input{border-radius:0;border:2px solid #000}main{max-width:none}`,
    description: 'Grid discipline, flush-left sans, huge scale contrast, red/black/white.',
  },
  {
    name: 'Minimalism',
    background: '#fff',
    foreground: '#222',
    accent: '#222',
    font: 'DM Sans',
    componentCSS: `body{font-weight:300}main{padding-top:12vw}.btn{color:#fff;border-radius:2px;font-size:15px}h1{font-weight:400;font-size:clamp(30px,5vw,52px)}.card{padding:0;margin:56px 0}input{border:0;border-bottom:1px solid #ccc;border-radius:0}nav,.dna{border:0;color:#777}`,
    description: 'Almost nothing: one color, light weight, generous whitespace.',
  },
  {
    name: 'Maximalism',
    background: '#ff3d81',
    foreground: '#1a0033',
    accent: '#ffe500',
    font: 'Bowlby One',
    componentCSS: `nav{background:#00c2ff;font-size:20px}.btn{color:#1a0033;border:4px solid #1a0033;border-radius:50px;box-shadow:6px 6px 0 #00c2ff;transform:rotate(-2deg)}h1{color:#ffe500;-webkit-text-stroke:2px #1a0033;text-shadow:6px 6px 0 #00c2ff,12px 12px 0 #1a0033;font-size:clamp(40px,9vw,96px)}.card{background:repeating-linear-gradient(45deg,#ffe500 0 14px,#00e0a0 14px 28px);border:5px solid #1a0033;box-shadow:10px 10px 0 #1a0033}input{border:4px solid #1a0033;background:#fff}`,
    description: 'More is more: clashing colors, stacked shadows, patterns on patterns.',
  },
  {
    name: 'Luxury Typography',
    background: '#0e0c09',
    foreground: '#e9dcc0',
    accent: '#c8a45c',
    font: 'Cormorant Garamond',
    componentCSS: `main{text-align:center}.btn{background:transparent;color:#c8a45c;border:1px solid #c8a45c;border-radius:0;letter-spacing:.3em;text-transform:uppercase;font-size:14px}h1{font-weight:300;font-size:clamp(40px,8vw,92px);letter-spacing:.08em}.card{border:1px solid #c8a45c55;padding:32px;margin:40px auto}input{border-color:#c8a45c88;border-radius:0}`,
    description: 'Light high-contrast serif, wide tracking, gold on black, centered calm.',
  },
  {
    name: 'Conceptual Sketch',
    background: '#fdfdf8',
    foreground: '#223',
    accent: '#fff',
    font: 'Patrick Hand',
    componentCSS: `body{font-size:21px;background-image:linear-gradient(#4a6cf722 1px,transparent 1px);background-size:100% 28px}.btn{color:#223;border:2px solid #223;border-radius:255px 15px 225px 15px/15px 225px 15px 255px}h1{text-decoration:underline wavy #4a6cf7;text-underline-offset:8px}.card{border:2px solid #223;border-radius:15px 225px 15px 255px/255px 15px 225px 15px;background:#fff}input{background:#fff;border:2px solid #223;border-radius:15px 225px 15px 255px/255px 15px 225px 15px}`,
    description: 'Wobbly hand-drawn outlines on notebook paper, wireframe-in-progress feel.',
  },
  {
    name: 'Ethereal',
    background: '#eef0ff',
    foreground: '#4a4766',
    accent: '#cbbcff',
    font: 'Jost',
    componentCSS: `body{font-weight:300;background:radial-gradient(circle at 20% 10%,#ffd6f0,transparent 45%),radial-gradient(circle at 85% 40%,#cfe9ff,transparent 45%),#eef0ff}.btn{color:#4a4766;border-radius:40px;box-shadow:0 0 30px #cbbcff}h1{font-weight:200;color:#6c63b5;text-shadow:0 0 30px #fff,0 0 60px #cbbcff}.card{background:#ffffffaa;border-radius:40px;box-shadow:0 0 60px #d9cffa}input{border:0;border-radius:30px;background:#fff9;box-shadow:0 0 24px #d9cffa}`,
    description: 'Pastel haze, glows instead of shadows, ultra-light type, dreamy softness.',
  },
  {
    name: 'Bohemian',
    background: '#f1e3cf',
    foreground: '#4a2c1a',
    accent: '#c1572b',
    font: 'Lora',
    componentCSS: `.btn{color:#fff;border-radius:40px 40px 4px 4px}h1{font-style:italic;color:#8a3b1c}.card{background:#e8c9a0;border:3px double #7b8f4e;border-radius:100px 100px 12px 12px;text-align:center;padding:48px 24px}input{border:2px solid #7b8f4e;background:#fff8;border-radius:12px}nav{border-bottom:3px dotted #c1572b}.dna{border-top:3px dotted #7b8f4e}`,
    description: 'Earthy terracotta and sage, arched shapes, dotted trims, warm serif.',
  },
  {
    name: 'Victorian',
    background: '#2b1d1d',
    foreground: '#eadfc6',
    accent: '#8c2f39',
    font: 'IM Fell English',
    componentCSS: `.btn{color:#eadfc6;border:2px double #c9a84c;border-radius:0}h1{text-align:center;color:#c9a84c;font-weight:400;font-style:italic;border-top:3px double #c9a84c;border-bottom:3px double #c9a84c;padding:10px 0}.card{border:6px double #c9a84c;background:#3a2626;text-align:center}input{border:2px solid #c9a84c;background:#1e1414;border-radius:0}nav{border-bottom:3px double #c9a84c}`,
    description: 'Oxblood and gold, double-rule frames, old-style engraved lettering.',
  },
  {
    name: 'Cyberpunk',
    background: '#0a0a0f',
    foreground: '#f5f500',
    accent: '#ff003c',
    font: 'Share Tech Mono',
    componentCSS: `.btn{color:#fff;border-radius:0;clip-path:polygon(0 0,100% 0,100% 70%,92% 100%,0 100%);text-transform:uppercase}h1{text-shadow:3px 0 #ff003c,-3px 0 #00f0ff;text-transform:uppercase}.card{border:2px solid #f5f500;box-shadow:6px 6px 0 #ff003c}input{border:2px solid #00f0ff;border-radius:0;background:#000}nav{border-bottom:2px solid #ff003c}`,
    description: 'Yellow terminal text, red/cyan glitch offsets, notched panels, mono type.',
  },
  {
    name: 'Wabi-Sabi',
    background: '#d9d2c3',
    foreground: '#3b3a36',
    accent: '#8a7f6a',
    font: 'Zen Old Mincho',
    componentCSS: `body{background-image:radial-gradient(#8a7f6a14 1px,transparent 1px);background-size:5px 5px}main{padding-top:10vw}.btn{color:#f1ece0;border-radius:46% 54% 50% 50%/55% 45% 55% 45%}h1{font-weight:400;letter-spacing:.05em}.card{background:#cfc6b4;border-radius:3px 12px 5px 14px;box-shadow:inset 0 0 40px #8a7f6a33;border:1px solid #8a7f6a88}input{border:0;border-bottom:2px solid #8a7f6a;border-radius:0}`,
    description: 'Muted stone tones, irregular edges, quiet space, beauty in imperfection.',
  },
];

/** Total number of design aesthetics */
export const STYLE_COUNT = STYLES.length;

/**
 * The Google Fonts stylesheet URL loaded in the document head.
 * Grabbed at runtime from the <link> tag so generated pages can reuse it.
 */
export const getFontsURL = (): string => {
  const link = document.querySelector('link[href*="family=Nunito"]');
  return link ? (link as HTMLLinkElement).href : '';
};
