/**
 * ============================================================================
 * FONT PAIRINGS & CATEGORIES
 * ============================================================================
 *
 * Each entry in FONT_PAIRINGS and FONT_TYPES maps to a style at the same index
 * in STYLES[].
 *
 * FONT_CATEGORIES defines the 5 overarching font families shown in the "Choosing type" section.
 * FONT_PAIRINGS defines the body font and rationale for pairing with the style's heading font.
 * FONT_TYPES classifies the heading and body fonts, plus similar alternatives on Google Fonts.
 *
 * Original variable names: KD (categories), FP (pairings), FT (font types)
 */

import type {
  FontCategoryKey,
  FontCategory,
  FontPairing,
  FontType,
} from '../types/data';

export const FONT_CATEGORIES: Record<FontCategoryKey, FontCategory> = {
  serif: {
    displayName: 'Serif',
    description: 'Small strokes on the ends of letters. Reads as classic, editorial and elegant.',
    exampleFont: 'Playfair Display',
  },
  sans: {
    displayName: 'Sans-serif',
    description: 'No end strokes, often just called sans. Clean and modern, the safe default for interfaces.',
    exampleFont: 'Manrope',
  },
  display: {
    displayName: 'Display',
    description: 'Loud decorative faces for big headlines only, never for long text.',
    exampleFont: 'Bowlby One',
  },
  mono: {
    displayName: 'Monospace',
    description: 'Every letter takes the same width. Used for code, terminals and data.',
    exampleFont: 'Share Tech Mono',
  },
  hand: {
    displayName: 'Handwriting',
    description: 'Pen and marker looks. Personal and playful, so use it sparingly.',
    exampleFont: 'Caveat',
  },
};

export const FONT_PAIRINGS: FontPairing[] = [
  /* 0  Claymorphism */
  { bodyFont: 'Nunito', reason: 'One rounded family: weight 800 for headings and 400 for body keeps the soft feel.' },
  /* 1  Cybercore */
  { bodyFont: 'Share Tech Mono', reason: 'Wide geometric display over a mono body gives the HUD look and stays readable.' },
  /* 2  Neo-Brutalism */
  { bodyFont: 'DM Sans', reason: 'Loud grotesk headings need a quiet, neutral body to balance them.' },
  /* 3  Scrapbook */
  { bodyFont: 'Lora', reason: 'Handwriting works for headlines only; a serif body keeps long text readable.' },
  /* 4  Surrealism */
  { bodyFont: 'DM Sans', reason: 'A dramatic display serif over a plain sans keeps the surreal moment in the headline.' },
  /* 5  Y2K Aesthetic */
  { bodyFont: 'Nunito', reason: 'A rounded body softens the glossy display face without competing with it.' },
  /* 6  Pixel Art */
  { bodyFont: 'Share Tech Mono', reason: 'Use the pixel font for headings and labels only; a mono body avoids eye strain.' },
  /* 7  Synthwave */
  { bodyFont: 'Jost', reason: 'Audiowide is loud; a light geometric sans keeps body copy calm.' },
  /* 8  Glassmorphism */
  { bodyFont: 'Plus Jakarta Sans', reason: 'One clean family. Text sits on blurred color, so use 400 to 500 weights, never thin.' },
  /* 9  Neumorphism */
  { bodyFont: 'Manrope', reason: 'Soft low-contrast surfaces need clear letterforms: Poppins headings over Manrope at 400 to 500.' },
  /* 10 Bento Grid */
  { bodyFont: 'Manrope', reason: 'One family at 800 and 400. The tiles do the hierarchy work.' },
  /* 11 Editorial */
  { bodyFont: 'Lora', reason: 'Classic print pairing: high-contrast serif display over a sturdy serif body.' },
  /* 12 Swiss / International */
  { bodyFont: 'Archivo', reason: 'One grotesque family; scale and weight make the hierarchy.' },
  /* 13 Minimalist */
  { bodyFont: 'DM Sans', reason: 'Light weights only: 300 for body, 400 for headings. Size creates the hierarchy.' },
  /* 14 Memphis Design */
  { bodyFont: 'Space Grotesk', reason: 'A heavy display face needs a restrained grotesk body to hold the chaos.' },
  /* 15 Art Deco */
  { bodyFont: 'Jost', reason: 'Light high-contrast serif display with a geometric sans for small, spaced labels.' },
  /* 16 Skeuomorphism */
  { bodyFont: 'DM Sans', reason: 'Hand-drawn headings with a clean sans body keep the notes legible.' },
  /* 17 Vaporwave */
  { bodyFont: 'Cormorant Garamond', reason: 'Ultra-light sans display over a delicate serif body for a dreamy tone.' },
  /* 18 Organic / Botanical */
  { bodyFont: 'Jost', reason: 'Warm italic serif headings with a friendly geometric sans body.' },
  /* 19 Dark Academia */
  { bodyFont: 'Lora', reason: 'Engraved-style display with a readable modern serif body.' },
  /* 20 Cyberpunk */
  { bodyFont: 'Archivo', reason: 'Mono headings for the terminal look; a grotesk body for long reading.' },
  /* 21 Wabi-Sabi */
  { bodyFont: 'Lora', reason: 'Soft Mincho display with a gentle serif body and generous line height.' },
];

export const FONT_TYPES: FontType[] = [
  /* 0  Claymorphism */
  {
    category: 'sans',
    headingClass: 'Rounded sans-serif',
    bodyClass: 'Rounded sans-serif',
    similar: [
      { name: 'Quicksand', classification: 'Rounded sans-serif' },
      { name: 'Fredoka', classification: 'Rounded display sans' },
      { name: 'Baloo 2', classification: 'Rounded sans-serif' },
    ],
  },
  /* 1  Cybercore */
  {
    category: 'display',
    headingClass: 'Techno display sans',
    bodyClass: 'Monospace',
    similar: [
      { name: 'Exo 2', classification: 'Techno sans-serif' },
      { name: 'Rajdhani', classification: 'Condensed techno sans' },
      { name: 'Michroma', classification: 'Wide display sans' },
    ],
  },
  /* 2  Neo-Brutalism */
  {
    category: 'sans',
    headingClass: 'Grotesque sans-serif',
    bodyClass: 'Geometric sans-serif',
    similar: [
      { name: 'Archivo Black', classification: 'Heavy grotesque sans' },
      { name: 'Bricolage Grotesque', classification: 'Grotesque sans-serif' },
      { name: 'Work Sans', classification: 'Grotesque sans-serif' },
    ],
  },
  /* 3  Scrapbook */
  {
    category: 'hand',
    headingClass: 'Marker handwriting',
    bodyClass: 'Serif',
    similar: [
      { name: 'Kalam', classification: 'Handwriting' },
      { name: 'Shadows Into Light', classification: 'Handwriting' },
      { name: 'Special Elite', classification: 'Typewriter slab' },
    ],
  },
  /* 4  Surrealism */
  {
    category: 'serif',
    headingClass: 'High-contrast display serif',
    bodyClass: 'Geometric sans-serif',
    similar: [
      { name: 'Abril Fatface', classification: 'Didone display serif' },
      { name: 'Playfair Display', classification: 'Transitional serif' },
      { name: 'Bodoni Moda', classification: 'Didone serif' },
    ],
  },
  /* 5  Y2K Aesthetic */
  {
    category: 'display',
    headingClass: 'Rounded display sans',
    bodyClass: 'Rounded sans-serif',
    similar: [
      { name: 'Fredoka', classification: 'Rounded display sans' },
      { name: 'Lilita One', classification: 'Chunky display sans' },
      { name: 'Titan One', classification: 'Bubble display' },
    ],
  },
  /* 6  Pixel Art */
  {
    category: 'display',
    headingClass: 'Pixel display',
    bodyClass: 'Monospace',
    similar: [
      { name: 'VT323', classification: 'Pixel monospace' },
      { name: 'Silkscreen', classification: 'Pixel display' },
      { name: 'Pixelify Sans', classification: 'Pixel sans-serif' },
    ],
  },
  /* 7  Synthwave */
  {
    category: 'display',
    headingClass: 'Techno display sans',
    bodyClass: 'Geometric sans-serif',
    similar: [
      { name: 'Monoton', classification: 'Neon line display' },
      { name: 'Orbitron', classification: 'Techno display sans' },
      { name: 'Michroma', classification: 'Wide display sans' },
    ],
  },
  /* 8  Glassmorphism */
  {
    category: 'sans',
    headingClass: 'Modern sans-serif',
    bodyClass: 'Modern sans-serif',
    similar: [
      { name: 'Inter', classification: 'Neutral sans-serif' },
      { name: 'Outfit', classification: 'Geometric sans-serif' },
      { name: 'Figtree', classification: 'Friendly sans-serif' },
    ],
  },
  /* 9  Neumorphism */
  {
    category: 'sans',
    headingClass: 'Geometric sans-serif',
    bodyClass: 'Modern sans-serif',
    similar: [
      { name: 'Montserrat', classification: 'Geometric sans-serif' },
      { name: 'Nunito Sans', classification: 'Soft sans-serif' },
      { name: 'Lexend', classification: 'Wide sans-serif' },
    ],
  },
  /* 10 Bento Grid */
  {
    category: 'sans',
    headingClass: 'Modern grotesque sans',
    bodyClass: 'Modern grotesque sans',
    similar: [
      { name: 'Inter', classification: 'Neutral sans-serif' },
      { name: 'Sora', classification: 'Geometric sans-serif' },
      { name: 'Onest', classification: 'Neo-grotesque sans' },
    ],
  },
  /* 11 Editorial */
  {
    category: 'serif',
    headingClass: 'Didone serif',
    bodyClass: 'Serif',
    similar: [
      { name: 'Fraunces', classification: 'Soft old-style serif' },
      { name: 'Cormorant', classification: 'Old-style serif' },
      { name: 'Libre Baskerville', classification: 'Transitional serif' },
    ],
  },
  /* 12 Swiss / International */
  {
    category: 'sans',
    headingClass: 'Neo-grotesque sans (Helvetica style)',
    bodyClass: 'Neo-grotesque sans',
    similar: [
      { name: 'Inter', classification: 'Neutral sans-serif' },
      { name: 'Public Sans', classification: 'Neo-grotesque sans' },
      { name: 'Instrument Sans', classification: 'Neo-grotesque sans' },
    ],
  },
  /* 13 Minimalist */
  {
    category: 'sans',
    headingClass: 'Light geometric sans',
    bodyClass: 'Light geometric sans',
    similar: [
      { name: 'Inter', classification: 'Neutral sans-serif' },
      { name: 'Hanken Grotesk', classification: 'Grotesque sans' },
      { name: 'Outfit', classification: 'Geometric sans-serif' },
    ],
  },
  /* 14 Memphis Design */
  {
    category: 'display',
    headingClass: 'Heavy fat-face display',
    bodyClass: 'Grotesque sans-serif',
    similar: [
      { name: 'Rubik Mono One', classification: 'Heavy mono display' },
      { name: 'Titan One', classification: 'Bubble display' },
      { name: 'Abril Fatface', classification: 'Didone display serif' },
    ],
  },
  /* 15 Art Deco */
  {
    category: 'serif',
    headingClass: 'Old-style display serif',
    bodyClass: 'Geometric sans-serif',
    similar: [
      { name: 'Cinzel', classification: 'Roman capitals serif' },
      { name: 'Bodoni Moda', classification: 'Didone serif' },
      { name: 'Marcellus', classification: 'Flared display serif' },
    ],
  },
  /* 16 Skeuomorphism */
  {
    category: 'hand',
    headingClass: 'Casual handwriting',
    bodyClass: 'Geometric sans-serif',
    similar: [
      { name: 'Gloria Hallelujah', classification: 'Handwriting' },
      { name: 'Indie Flower', classification: 'Handwriting' },
      { name: 'Architects Daughter', classification: 'Drafting handwriting' },
    ],
  },
  /* 17 Vaporwave */
  {
    category: 'sans',
    headingClass: 'Light geometric sans',
    bodyClass: 'Old-style serif',
    similar: [
      { name: 'Josefin Sans', classification: 'Vintage geometric sans' },
      { name: 'Raleway', classification: 'Elegant sans-serif' },
      { name: 'Quicksand', classification: 'Rounded sans-serif' },
    ],
  },
  /* 18 Organic / Botanical */
  {
    category: 'serif',
    headingClass: 'Calligraphic serif',
    bodyClass: 'Geometric sans-serif',
    similar: [
      { name: 'Crimson Pro', classification: 'Old-style serif' },
      { name: 'Merriweather', classification: 'Sturdy serif' },
      { name: 'Cormorant', classification: 'Old-style serif' },
    ],
  },
  /* 19 Dark Academia */
  {
    category: 'serif',
    headingClass: 'Historical old-style serif',
    bodyClass: 'Serif',
    similar: [
      { name: 'Cinzel Decorative', classification: 'Ornate roman display' },
      { name: 'Libre Caslon Text', classification: 'Old-style serif' },
      { name: 'UnifrakturCook', classification: 'Blackletter' },
    ],
  },
  /* 20 Cyberpunk */
  {
    category: 'mono',
    headingClass: 'Monospace',
    bodyClass: 'Grotesque sans-serif',
    similar: [
      { name: 'Space Mono', classification: 'Quirky monospace' },
      { name: 'JetBrains Mono', classification: 'Code monospace' },
      { name: 'VT323', classification: 'Pixel monospace' },
    ],
  },
  /* 21 Wabi-Sabi */
  {
    category: 'serif',
    headingClass: 'Japanese Mincho serif',
    bodyClass: 'Serif',
    similar: [
      { name: 'Shippori Mincho', classification: 'Japanese serif' },
      { name: 'EB Garamond', classification: 'Old-style serif' },
      { name: 'Noto Serif', classification: 'Neutral serif' },
    ],
  },
];
