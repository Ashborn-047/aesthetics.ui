/**
 * ============================================================================
 * TYPE GUIDE DATA & DEMO ANIMATIONS
 * ============================================================================
 *
 * Detailed typography guides for the 5 font categories (serif, sans, display, mono, hand).
 * Contains curated fonts, variable font info, traits, animation recommendations,
 * modular specs, pairing advice, accessibility tips, and contrast-tested colour pairings.
 *
 * Also includes DEMO_ANIMATIONS — interactive GSAP typography animation presets
 * shown in the type guide's animation lab.
 *
 * Original variable names: TD (type guide data), DM (demo animations)
 */

import type { FontCategoryKey, TypeGuideData, DemoAnimation } from '../types/data';

export const TYPE_GUIDE_DATA: Record<FontCategoryKey, TypeGuideData> = {
  serif: {
    fonts: [
      { name: 'Playfair Display', classification: 'Transitional to Didone serif', bestFor: 'Editorial headlines, luxury brands' },
      { name: 'Fraunces', classification: 'Soft old-style serif', bestFor: 'Friendly brands, long headlines' },
      { name: 'Cormorant Garamond', classification: 'Elegant old-style serif', bestFor: 'Fashion, large display sizes only' },
      { name: 'Lora', classification: 'Contemporary serif', bestFor: 'Article and blog body text' },
      { name: 'Libre Baskerville', classification: 'Transitional serif', bestFor: 'Long reading with a print feel' },
      { name: 'Merriweather', classification: 'Sturdy screen serif', bestFor: 'Small sizes and low-res screens' },
      { name: 'DM Serif Display', classification: 'High-contrast display serif', bestFor: 'Hero headlines' },
      { name: 'Bodoni Moda', classification: 'Didone serif', bestFor: 'Magazine mastheads, fashion' },
    ],
    variableFont: 'Fraunces:wght@100..900',
    fallbackStack: 'Georgia,serif',
    traits: [
      'Small strokes on letter ends',
      'Thick and thin contrast',
      'Warm, trusted tone',
      'Strong at large sizes',
    ],
    animationRec: 'Slow word-by-word reveals and gentle fades. Avoid bouncy motion; it fights the formal tone.',
    specs: [
      '17 to 20px',
      '1.5 to 1.7',
      '0 to 0.01em',
      '60 to 75 characters',
      '400 body, 600 to 900 headlines',
      'Hairline weights below 24px',
    ],
    pairingAdvice: 'Serif headings over a neutral sans body (Inter, DM Sans), or a sturdy serif body under a sans heading.',
    accessibilityTips: [
      'Thin hairlines vanish at small sizes, so use display serifs at 28px or larger.',
      'Use a sturdy text serif (Lora, Merriweather) for body copy.',
      'Avoid all caps for more than a few words; it slows reading.',
    ],
    colorPairs: [
      '#faf7f2 #1c1c1c Ink on paper',
      '#2b1d1d #f1e3cf Cream on espresso',
      '#f6efe0 #1b2a49 Navy on ivory',
      '#0e0c09 #c8a45c Gold on black',
      '#f7e6e6 #8c2f39 Oxblood on blush',
      '#e9e4d8 #4a4036 Sepia on linen',
    ],
    colorTip: 'Serif loves warm neutrals. Pure black on pure white looks harsh; try #1c1c1c on #faf7f2.',
  },

  sans: {
    fonts: [
      { name: 'Inter', classification: 'Neutral UI sans', bestFor: 'Dashboards and product UI' },
      { name: 'Manrope', classification: 'Modern semi-rounded sans', bestFor: 'SaaS and marketing sites' },
      { name: 'DM Sans', classification: 'Low-contrast geometric sans', bestFor: 'Clean brand sites' },
      { name: 'Poppins', classification: 'Geometric sans', bestFor: 'Friendly headlines and buttons' },
      { name: 'Space Grotesk', classification: 'Quirky grotesque', bestFor: 'Tech and startups' },
      { name: 'Work Sans', classification: 'Workhorse grotesque', bestFor: 'Long UI copy' },
      { name: 'Nunito', classification: 'Rounded sans', bestFor: 'Soft, approachable brands' },
      { name: 'Outfit', classification: 'Geometric sans', bestFor: 'Modern headlines' },
    ],
    variableFont: 'Inter:wght@100..900',
    fallbackStack: 'system-ui,sans-serif',
    traits: [
      'No end strokes',
      'Even stroke weight',
      'Neutral, modern tone',
      'Strong at small UI sizes',
    ],
    animationRec: 'Quick, precise motion: short slides and mask reveals. Weight shifts on hover feel natural on variable sans fonts.',
    specs: [
      '15 to 18px',
      '1.45 to 1.6',
      '0 to 0.01em, -0.02em on big headings',
      '55 to 75 characters',
      '400 body, 500 to 700 UI, 800 display',
      'Thin 100 to 200 weights for body',
    ],
    pairingAdvice: 'One sans family can do everything. For contrast, set a serif or display face for headlines.',
    accessibilityTips: [
      'Keep body text at 16px or larger.',
      'Check that I, l and 1 are distinguishable in UI fonts.',
      'Use real weight differences, not only colour, to show hierarchy.',
    ],
    colorPairs: [
      '#ffffff #111111 Black on white',
      '#111111 #f5f5f5 Off-white on black',
      '#f2f2f0 #161616 Charcoal on stone',
      '#0f172a #e2e8f0 Slate on navy',
      '#e8f0ff #1d3a8a Blue on mist',
      '#ffffff #3f3f46 Grey secondary text',
    ],
    colorTip: 'Use one dark ink for headings and a 70 to 80 percent tint for secondary text; keep both above 4.5:1.',
  },

  display: {
    fonts: [
      { name: 'Unbounded', classification: 'Wide geometric display', bestFor: 'Bold hero titles' },
      { name: 'Bowlby One', classification: 'Heavy fat-face display', bestFor: 'Posters and loud headlines' },
      { name: 'Righteous', classification: 'Rounded retro display', bestFor: 'Playful brands' },
      { name: 'Audiowide', classification: 'Techno display', bestFor: 'Gaming and futuristic UI' },
      { name: 'Orbitron', classification: 'Sci-fi display', bestFor: 'HUDs and sci-fi' },
      { name: 'Abril Fatface', classification: 'Didone fat face', bestFor: 'Editorial covers' },
      { name: 'Bungee', classification: 'Signage display', bestFor: 'Labels and signage' },
      { name: 'Press Start 2P', classification: 'Pixel display', bestFor: 'Retro games' },
    ],
    variableFont: 'Unbounded:wght@200..900',
    fallbackStack: 'system-ui,sans-serif',
    traits: [
      'Built for large sizes',
      'Strong personality',
      'Often a single weight',
      'Short text only',
    ],
    animationRec: 'Go big: letter-by-letter entrances, scale pops and stagger waves. Display faces can take dramatic motion.',
    specs: [
      '40px and up',
      '1.0 to 1.15',
      '-0.02 to 0.04em; wide fonts need tighter tracking',
      'Under 8 words per line',
      'Usually one weight (400)',
      'Using it for body text',
    ],
    pairingAdvice: 'Pair with a quiet neutral sans body (Inter, DM Sans). Let the display font be the only loud voice.',
    accessibilityTips: [
      'Keep display text short; it is slow to read.',
      'Do not set it below 24px.',
      'Do not use it for instructions or error messages.',
    ],
    colorPairs: [
      '#ffe500 #1a0033 Violet on yellow',
      '#1a0033 #ffe500 Yellow on violet',
      '#00f0ff #05070f Black on cyan',
      '#05070f #00f0ff Cyan on black',
      '#ff3d81 #ffffff White on hot pink',
      '#111111 #f5f500 Acid on black',
    ],
    colorTip: 'Display text can take saturated colour, but check contrast. Bright on bright usually fails.',
  },

  mono: {
    fonts: [
      { name: 'JetBrains Mono', classification: 'Code monospace', bestFor: 'Code editors and docs' },
      { name: 'Space Mono', classification: 'Quirky geometric mono', bestFor: 'Brand headings, tech' },
      { name: 'Share Tech Mono', classification: 'Techno mono', bestFor: 'HUD and terminal UI' },
      { name: 'IBM Plex Mono', classification: 'Humanist mono', bestFor: 'Documentation' },
      { name: 'Roboto Mono', classification: 'Neutral mono', bestFor: 'Code blocks' },
      { name: 'Fira Code', classification: 'Developer mono', bestFor: 'Developer tools' },
      { name: 'VT323', classification: 'Pixel terminal mono', bestFor: 'Retro terminals' },
      { name: 'Courier Prime', classification: 'Typewriter mono', bestFor: 'Scripts and literary' },
    ],
    variableFont: 'JetBrains Mono:wght@100..800',
    fallbackStack: 'ui-monospace,monospace',
    traits: [
      'Every letter the same width',
      'Technical, honest tone',
      'Great for data',
      'Aligns in columns',
    ],
    animationRec: 'Typewriter reveals and cursor blinks are made for mono. Add scramble or count-up effects for data.',
    specs: [
      '14 to 16px',
      '1.5 to 1.7',
      '0 to 0.02em',
      '60 to 80 characters',
      '400 body, 700 emphasis',
      'Long paragraphs in mono',
    ],
    pairingAdvice: 'Mono for labels, code and data, with a sans body for reading.',
    accessibilityTips: [
      'Wide letters tire eyes in long paragraphs.',
      'Keep lines under 80 characters.',
      'Check that zero and capital O are distinct in code.',
    ],
    colorPairs: [
      '#0d1117 #c9d1d9 Terminal grey on night',
      '#001b0f #39ff88 Green phosphor',
      '#1e1e2e #cdd6f4 Soft pastel on dark',
      '#fdf6e3 #586e75 Solarized light',
      '#000000 #f5f500 Yellow on black',
      '#ffffff #24292f Code on white',
    ],
    colorTip: 'Dark backgrounds suit mono, but avoid pure white text; soften to #c9d1d9 to reduce glare.',
  },

  hand: {
    fonts: [
      { name: 'Caveat', classification: 'Casual brush script', bestFor: 'Quotes and signatures' },
      { name: 'Kalam', classification: 'Marker handwriting', bestFor: 'Notes and captions' },
      { name: 'Patrick Hand', classification: 'Neat print hand', bestFor: 'Readable annotations' },
      { name: 'Shadows Into Light', classification: 'Light marker', bestFor: 'Doodle styles' },
      { name: 'Gloria Hallelujah', classification: 'Loose handwriting', bestFor: 'Playful labels' },
      { name: 'Indie Flower', classification: 'Round friendly hand', bestFor: 'Kids and craft' },
      { name: 'Architects Daughter', classification: 'Drafting hand', bestFor: 'Wireframes and sketches' },
      { name: 'Permanent Marker', classification: 'Bold marker', bestFor: 'Posters and stickers' },
    ],
    variableFont: 'Caveat:wght@400..700',
    fallbackStack: 'cursive',
    traits: [
      'Pen or marker feel',
      'Irregular strokes',
      'Personal tone',
      'Headlines and notes only',
    ],
    animationRec: 'Draw-on and wobble motion suit handwriting. Keep it light: a small rotation or slide, never rigid.',
    specs: [
      '20 to 28px (hand fonts run small)',
      '1.3 to 1.5',
      '0 to 0.02em',
      '30 to 50 characters',
      '400, bold if available',
      'Paragraphs and UI labels',
    ],
    pairingAdvice: 'Hand for accents only, over a clean sans or serif body.',
    accessibilityTips: [
      'Go up one size step; hand fonts look smaller than their pixel size.',
      'Avoid for forms and error messages.',
      'Keep contrast high on textured backgrounds.',
    ],
    colorPairs: [
      '#fdfdf8 #223344 Ink on notebook',
      '#e9dcc3 #3a2e24 Brown on kraft',
      '#fff7d6 #2b2b2b Black on sticky yellow',
      '#1f3a2e #f4f1de Chalk on green',
      '#ffffff #1d4ed8 Blue marker on white',
      '#fde8ef #8c1d3a Berry on blush',
    ],
    colorTip: 'Think pen colours: ink blue, black or brown on paper tones. Skip neon for handwriting.',
  },
};

export const DEMO_ANIMATIONS: DemoAnimation[] = [
  {
    id: 'letters',
    title: 'Letter stagger',
    description: 'Characters rise into place. Good for hero titles.',
    gsapCode: 'gsap.from(chars,{yPercent:110,opacity:0,stagger:.035})',
  },
  {
    id: 'words',
    title: 'Word mask reveal',
    description: 'Words slide up from behind a mask. Calm and editorial.',
    gsapCode: 'gsap.from(words,{yPercent:120,stagger:.12})',
  },
  {
    id: 'weight',
    title: 'Weight on hover',
    description: 'Hover the letters. Needs a variable font, so this one uses the variable font for the family.',
    gsapCode: 'gsap.to(char,{fontWeight:900})',
  },
  {
    id: 'type',
    title: 'Typewriter',
    description: 'Characters appear one at a time.',
    gsapCode: 'gsap.from(chars,{autoAlpha:0,stagger:.06})',
  },
  {
    id: 'wave',
    title: 'Wave',
    description: 'A looping stagger. Use it for playful, short text.',
    gsapCode: 'gsap.to(chars,{yPercent:-28,stagger:{each:.06,repeat:-1,yoyo:true}})',
  },
  {
    id: 'shine',
    title: 'Shimmer',
    description: 'A moving highlight across the text using a gradient clip.',
    gsapCode: "gsap.fromTo(el,{backgroundPosition:'200% 0'},{backgroundPosition:'-200% 0',repeat:-1})",
  },
];
