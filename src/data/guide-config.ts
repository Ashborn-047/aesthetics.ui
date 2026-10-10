/**
 * ============================================================================
 * GUIDE CONFIG — Layout rules and design tokens per style
 * ============================================================================
 *
 * Each entry maps to a style at the same index in STYLES[].
 * Contains the "meta" design information: mood category, border-radius,
 * shadow, spacing, type scale, grid, layout rules, and do/avoid lists.
 *
 * Original variable name: G
 * Original format: [cat, radius, shadow, spacingUnit, typeRatio, maxWidth,
 *                   columns, layoutRule, dos[3], avoid, supportColors[2]]
 */

import type { GuideConfig } from '../types/data';

export const GUIDE_CONFIG: GuideConfig[] = [
  /* 0  Claymorphism */
  { mood: 's', radius: '28px', shadow: '8px 8px 18px #7b5ea733, inset 6px 6px 12px #fff9', spacingUnit: 8, typeRatio: 1.25, maxWidth: 1080, columns: 12, layoutRule: 'Centered, airy sections. One big hero shape; cards float with generous margins.', dos: ['Pair every raised shape with an inset highlight', 'Keep corners above 20px everywhere', 'Stay in 3 to 4 pastels plus one saturated accent'], avoid: 'Dark backgrounds: puffy shadows lose their depth', supportColors: ['#ffd6e8', '#c9b6ff'] },
  /* 1  Cybercore */
  { mood: 'd', radius: '0', shadow: '0 0 24px #00f0ff44', spacingUnit: 8, typeRatio: 1.333, maxWidth: 1200, columns: 12, layoutRule: 'Full-bleed dark. Left-aligned HUD panels with thin cyan frames and angled corners.', dos: ['Glow only on key or interactive elements', 'Cut corners with clip-path, never round them', 'Wide-tracked display type, mono for data'], avoid: 'Glow on body text: it kills readability', supportColors: ['#7a5cff', '#ff2e97'] },
  /* 2  Neo-Brutalism */
  { mood: 'b', radius: '0', shadow: '5px 5px 0 #000', spacingUnit: 8, typeRatio: 1.5, maxWidth: 1100, columns: 12, layoutRule: 'Hard grid. Blocks stack edge to edge with visible borders; slight asymmetry is welcome.', dos: ['3px black borders on every container', 'Shadows are solid offsets, never blurred', 'Flat saturated fills, four colors max'], avoid: 'Gradients and soft shadows', supportColors: ['#8ee3ef', '#a8e66f'] },
  /* 3  Scrapbook */
  { mood: 'r', radius: '4px', shadow: '3px 5px 10px #0004', spacingUnit: 8, typeRatio: 1.25, maxWidth: 980, columns: 6, layoutRule: 'Overlapping pieces on a textured canvas. Rotate cards 2 degrees and let items collide.', dos: ['Tilt elements between -3 and 3 degrees', 'Layer paper, tape and doodle details', 'Use handwritten type for headlines only'], avoid: 'Perfect alignment: it reads as a template', supportColors: ['#fffbe8', '#8a6d4f'] },
  /* 4  Surrealism */
  { mood: 'b', radius: '60% 40% 55% 45%/50% 60% 40% 50%', shadow: '30px 40px 0 -20px #e8743b', spacingUnit: 8, typeRatio: 1.5, maxWidth: 1000, columns: 8, layoutRule: 'Asymmetric compositions anchored by one oversized organic shape.', dos: ['Distort one thing per screen, not everything', 'Use impossible scale: huge object, small text', 'Keep body copy plain so it stays readable'], avoid: 'Distorting form fields: legibility comes first', supportColors: ['#7a2e5a', '#2f4f7f'] },
  /* 5  Y2K Aesthetic */
  { mood: 'r', radius: '30px', shadow: '0 4px 10px #c81fa066', spacingUnit: 8, typeRatio: 1.333, maxWidth: 1040, columns: 12, layoutRule: 'Centered stacks with floating glossy objects; badges and stickers in the margins.', dos: ['Give buttons a bright top highlight gradient', 'Pair baby blue with hot pink and silver', 'Add sparkle or star shapes sparingly'], avoid: 'Flat matte fills: gloss is the whole look', supportColors: ['#4aa8ff', '#c0c8e0'] },
  /* 6  Pixel Art */
  { mood: 'r', radius: '0', shadow: '4px 4px 0 #b13e53', spacingUnit: 8, typeRatio: 1.5, maxWidth: 900, columns: 8, layoutRule: 'Snap everything to an 8px grid. Panels are rectangles with chunky borders.', dos: ['Use a pixel font in 8, 12 or 16px sizes', 'Limit the palette to 8 to 16 colors', 'Shadows are stepped, never blurred'], avoid: 'Smoothing and rounded corners', supportColors: ['#ffcd75', '#29366f'] },
  /* 7  Synthwave */
  { mood: 'd', radius: '4px', shadow: '0 0 18px #ff2e97', spacingUnit: 8, typeRatio: 1.333, maxWidth: 1100, columns: 12, layoutRule: 'Centered hero over a horizon-gradient sky, with grid-floor lines at the base.', dos: ['Magenta and cyan only; purple is the canvas', 'Glow and hard shadow can share one element', 'Put a sun or grid horizon behind the hero'], avoid: 'Light backgrounds: neon needs darkness', supportColors: ['#00e5ff', '#ffd319'] },
  /* 8  Glassmorphism */
  { mood: 's', radius: '22px', shadow: '0 8px 32px #0003', spacingUnit: 8, typeRatio: 1.25, maxWidth: 1100, columns: 12, layoutRule: 'Frosted panels over a vivid blurred gradient, overlapping for depth.', dos: ['Blur 12 to 20px plus a 1px light border', 'Place panels over color, never plain white', 'Keep text white on a subtle scrim'], avoid: 'Stacking more than two glass layers', supportColors: ['#ff6ec4', '#25d9f5'] },
  /* 9  Neumorphism */
  { mood: 's', radius: '14px', shadow: '7px 7px 14px #a3b1c6, -7px -7px 14px #fff', spacingUnit: 8, typeRatio: 1.25, maxWidth: 960, columns: 12, layoutRule: 'Single-surface layouts. Elements are pressed into or pushed out of one gray.', dos: ['Use one fill for page and components', 'Raised means actionable, inset means input', 'Add visible labels: shapes alone are faint'], avoid: 'Low-contrast icons: accessibility is the weak spot', supportColors: ['#a3b1c6', '#ffffff'] },
  /* 10 Bento Grid */
  { mood: 'c', radius: '24px', shadow: '0 1px 0 #0001', spacingUnit: 8, typeRatio: 1.25, maxWidth: 1000, columns: 4, layoutRule: 'Modular tiles on a 4-column grid. Mix 1x1, 2x1 and 2x2 spans.', dos: ['Keep gaps equal at 12 to 16px', 'One tile, one idea', 'Make a single hero tile the largest'], avoid: 'Identical tile sizes: they flatten hierarchy', supportColors: ['#ffffff', '#2b2b2b'] },
  /* 11 Editorial Design */
  { mood: 'c', radius: '0', shadow: 'none', spacingUnit: 8, typeRatio: 1.5, maxWidth: 1100, columns: 12, layoutRule: 'Column-based like print: wide headline, narrow text measure, rules between sections.', dos: ['Serif display with a 60 to 75 character measure', 'Use drop caps and pull quotes', 'Divide with rules, not boxes'], avoid: 'Card grids: they turn an article into a dashboard', supportColors: ['#d9d1c3', '#6b6b6b'] },
  /* 12 Swiss Design */
  { mood: 'c', radius: '0', shadow: 'none', spacingUnit: 8, typeRatio: 1.5, maxWidth: 1280, columns: 12, layoutRule: 'Strict 12-column grid, flush-left ragged-right text, huge scale contrast.', dos: ['Align everything to the grid', 'Use only red, black and white', 'Size creates hierarchy, not decoration'], avoid: 'Centered text and ornamental effects', supportColors: ['#000000', '#ffffff'] },
  /* 13 Minimalism */
  { mood: 'c', radius: '2px', shadow: 'none', spacingUnit: 8, typeRatio: 1.25, maxWidth: 720, columns: 6, layoutRule: 'One narrow centered column. Whitespace does the grouping.', dos: ['Use one accent at most', 'Space sections 96px or more apart', 'Weight 300 to 400; hierarchy by size'], avoid: 'Borders and shadows to separate things', supportColors: ['#777777', '#cccccc'] },
  /* 14 Maximalism */
  { mood: 'b', radius: '50px', shadow: '6px 6px 0 #00c2ff', spacingUnit: 8, typeRatio: 1.5, maxWidth: 1200, columns: 12, layoutRule: 'Dense overlapping layers. No empty background is left.', dos: ['Clash colors on purpose', 'Stack several hard shadows', 'Anchor the chaos with one readable text block'], avoid: 'Subtle palettes: they look unfinished here', supportColors: ['#00c2ff', '#00e0a0'] },
  /* 15 Luxury Typography */
  { mood: 'd', radius: '0', shadow: 'none', spacingUnit: 8, typeRatio: 1.333, maxWidth: 1000, columns: 6, layoutRule: 'Centered and symmetrical, with huge margins and small spaced-out actions.', dos: ['Letter-space labels 0.25em or more', 'Gold for lines and links only', 'Light serif weights at large sizes'], avoid: 'Bright fills and heavy buttons', supportColors: ['#e9dcc0', '#7a6a40'] },
  /* 16 Conceptual Sketch */
  { mood: 'c', radius: '15px 225px 15px 255px/255px 15px 225px 15px', shadow: 'none', spacingUnit: 8, typeRatio: 1.25, maxWidth: 960, columns: 6, layoutRule: 'Wireframe on grid paper. Boxes have uneven outlines, with notes beside them.', dos: ['Irregular radii give the hand-drawn edge', 'One ink color plus one blue marker', 'Add notes and arrows to explain'], avoid: 'Perfect geometry and heavy fills', supportColors: ['#4a6cf7', '#fff4a3'] },
  /* 17 Ethereal */
  { mood: 's', radius: '40px', shadow: '0 0 60px #d9cffa', spacingUnit: 8, typeRatio: 1.333, maxWidth: 1000, columns: 12, layoutRule: 'Floating elements on a soft gradient haze. Sparse and centered.', dos: ['Use glow instead of shadow', 'Weights 200 to 300 for display', 'Keep lavender, pink and sky blue in one hue band'], avoid: 'Hard edges and dark text blocks', supportColors: ['#ffd6f0', '#cfe9ff'] },
  /* 18 Bohemian */
  { mood: 's', radius: '100px 100px 12px 12px', shadow: 'none', spacingUnit: 8, typeRatio: 1.25, maxWidth: 1000, columns: 8, layoutRule: 'Soft centered sections with arch-shaped images and dotted dividers.', dos: ['Arches for images and cards', 'Earth palette: clay, sage, sand', 'Dotted or double rules as trims'], avoid: 'Neon and cold blues', supportColors: ['#7b8f4e', '#e8c9a0'] },
  /* 19 Victorian */
  { mood: 'r', radius: '0', shadow: 'none', spacingUnit: 8, typeRatio: 1.333, maxWidth: 900, columns: 6, layoutRule: 'Symmetrical framed pages with double rules, centered titles and ornamental dividers.', dos: ['Double borders around every panel', 'Italic old-style serif for headings', 'Gold on oxblood or deep brown'], avoid: 'Sans-serif UI and asymmetry', supportColors: ['#c9a84c', '#3a2626'] },
  /* 20 Cyberpunk */
  { mood: 'd', radius: '0', shadow: '6px 6px 0 #ff003c', spacingUnit: 8, typeRatio: 1.25, maxWidth: 1200, columns: 12, layoutRule: 'Dense terminal-like panels with notched corners and glitch accents on titles.', dos: ['Yellow, red and cyan on near-black', 'Offset text-shadows for the glitch', 'Mono type, uppercase headings'], avoid: 'Smooth rounded cards', supportColors: ['#00f0ff', '#f5f500'] },
  /* 21 Wabi-Sabi */
  { mood: 'c', radius: '3px 12px 5px 14px', shadow: 'none', spacingUnit: 8, typeRatio: 1.25, maxWidth: 860, columns: 6, layoutRule: 'Quiet asymmetrical layout with generous empty space. Nothing is perfectly aligned.', dos: ['Muted natural tones', 'Slightly irregular radii', 'Let texture show; avoid pure white'], avoid: 'Glossy or highly saturated effects', supportColors: ['#cfc6b4', '#8a7f6a'] },
];
