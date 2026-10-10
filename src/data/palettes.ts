/**
 * ============================================================================
 * PALETTES — Colour harmonies & alternate schemes
 * ============================================================================
 *
 * Each entry maps to a style at the same index in STYLES[].
 * Contains a colour harmony description plus two alternate 5-colour palettes.
 *
 * Original variable name: PAL
 * Original format: [harmonyNote, [alt1Name, alt1Colors], [alt2Name, alt2Colors]]
 */

import type { PaletteSet } from '../types/data';

export const PALETTES: PaletteSet[] = [
  /* 0  Claymorphism */
  {
    harmony: 'Analogous pastels with one saturated accent',
    alternates: [
      { name: 'Peach cloud', colors: '#fff0e6 #ffc6a8 #ff8f6b #7a4a3a #b8e0d2' },
      { name: 'Mint pop', colors: '#e6fff4 #a8e6cf #3ecf8e #1f4d3a #ffd3e0' },
    ],
  },
  /* 1  Cybercore */
  {
    harmony: 'Complementary neon on near-black',
    alternates: [
      { name: 'Toxic', colors: '#05070f #b6ff00 #00f0ff #e6f7ff #8a2be2' },
      { name: 'Ice', colors: '#050a14 #7df9ff #3a7bff #cfe8ff #ff4d8d' },
    ],
  },
  /* 2  Neo-Brutalism */
  {
    harmony: 'Primary triad on cream, black as the frame',
    alternates: [
      { name: 'Sunday', colors: '#fffbe6 #000000 #ff90e8 #23a094 #ffc900' },
      { name: 'Poster', colors: '#f4f4f0 #000000 #ff5c5c #4d6bfe #ffe14d' },
    ],
  },
  /* 3  Scrapbook */
  {
    harmony: 'Warm kraft paper with muted craft accents',
    alternates: [
      { name: 'Kraft', colors: '#e9dcc3 #3a2e24 #c8553d #588157 #f2c14e' },
      { name: 'Washi', colors: '#f6efe2 #2f3e46 #e07a5f #81b29a #f2cc8f' },
    ],
  },
  /* 4  Surrealism */
  {
    harmony: 'Split complementary: deep blue, orange and plum',
    alternates: [
      { name: 'Dusk', colors: '#2b1b3d #f3d9b1 #ff7b54 #5e60ce #ffd166' },
      { name: 'Desert', colors: '#3d2c2e #f7e1d7 #e07a5f #3d405b #81b29a' },
    ],
  },
  /* 5  Y2K Aesthetic */
  {
    harmony: 'Baby blue, hot pink and chrome silver',
    alternates: [
      { name: 'Bubblegum', colors: '#ffeaf7 #ff5fd2 #7cc8ff #2b2b6e #d9e2ef' },
      { name: 'Lime soda', colors: '#eaffd9 #a6ff00 #00c2ff #1a1a5e #ff8ad8' },
    ],
  },
  /* 6  Pixel Art */
  {
    harmony: 'Limited 16-color console palette',
    alternates: [
      { name: 'Game Boy', colors: '#0f380f #306230 #8bac0f #9bbc0f #e0f8d0' },
      { name: 'Arcade', colors: '#1a1c2c #5d275d #b13e53 #ef7d57 #ffcd75' },
    ],
  },
  /* 7  Synthwave */
  {
    harmony: 'Magenta and cyan over deep purple',
    alternates: [
      { name: 'Sunset', colors: '#1a0b3b #ff2e97 #ff9a3c #ffd319 #00e5ff' },
      { name: 'Miami', colors: '#0d0221 #f706cf #00fff1 #fdf200 #541388' },
    ],
  },
  /* 8  Glassmorphism */
  {
    harmony: 'Vivid gradient field under white glass',
    alternates: [
      { name: 'Aurora', colors: '#0f2027 #2c5364 #43e97b #38f9d7 #ffffff' },
      { name: 'Sunset glass', colors: '#2d1b69 #ff6a88 #ff99ac #ffd1a9 #ffffff' },
    ],
  },
  /* 9  Neumorphism */
  {
    harmony: 'Monochrome gray-blue with one muted accent',
    alternates: [
      { name: 'Cool gray', colors: '#e0e5ec #a3b1c6 #3d4852 #6d5dfc #ffffff' },
      { name: 'Warm sand', colors: '#ece3d6 #c9bba6 #4a3f35 #e07a5f #fffaf2' },
    ],
  },
  /* 10 Bento Grid */
  {
    harmony: 'Neutral base with three tile accents',
    alternates: [
      { name: 'Soft tiles', colors: '#f2f2f0 #ffd84d #b8e0ff #ffc9d9 #161616' },
      { name: 'Dark tiles', colors: '#111111 #1e1e1e #ffd84d #7cf5c2 #f2f2f2' },
    ],
  },
  /* 11 Editorial */
  {
    harmony: 'Ink and paper with one editorial red',
    alternates: [
      { name: 'Broadsheet', colors: '#faf7f2 #1c1c1c #b3261e #d9d1c3 #6b6b6b' },
      { name: 'Magazine', colors: '#fffdf7 #111111 #1d4ed8 #f4c95d #e5e0d5' },
    ],
  },
  /* 12 Swiss / International */
  {
    harmony: 'Primary red on black and white',
    alternates: [
      { name: 'Classic', colors: '#ffffff #000000 #e3000f #f2f2f2 #767676' },
      { name: 'Cobalt', colors: '#ffffff #000000 #0033a0 #f2f2f2 #767676' },
    ],
  },
  /* 13 Minimalist */
  {
    harmony: 'Neutral grays plus a single ink',
    alternates: [
      { name: 'Paper', colors: '#ffffff #222222 #777777 #cccccc #f5f5f5' },
      { name: 'Bone', colors: '#faf9f6 #1d1d1b #8a8a85 #d6d3cc #ece9e2' },
    ],
  },
  /* 14 Memphis Design */
  {
    harmony: 'Clashing brights in equal weight',
    alternates: [
      { name: 'Carnival', colors: '#ff3d81 #ffe500 #00c2ff #1a0033 #00e0a0' },
      { name: 'Tropic', colors: '#ff6b35 #ffd23f #06d6a0 #7b2cbf #1a1a2e' },
    ],
  },
  /* 15 Art Deco */
  {
    harmony: 'Gold on black, ivory for type',
    alternates: [
      { name: 'Noir dore', colors: '#0e0c09 #c8a45c #e9dcc0 #7a6a40 #1c1812' },
      { name: 'Emerald', colors: '#07140f #c8a45c #e8e2cf #1f5a43 #0d241a' },
    ],
  },
  /* 16 Skeuomorphism */
  {
    harmony: 'Pencil ink with a blue marker',
    alternates: [
      { name: 'Notebook', colors: '#fdfdf8 #223344 #4a6cf7 #fff4a3 #ff8a5b' },
      { name: 'Blueprint', colors: '#0b3d91 #ffffff #9fd3ff #ffd166 #5aa9ff' },
    ],
  },
  /* 17 Vaporwave */
  {
    harmony: 'Analogous pastel haze with light ink',
    alternates: [
      { name: 'Dawn', colors: '#fff0f6 #ffd6f0 #cbbcff #cfe9ff #6c63b5' },
      { name: 'Mist', colors: '#eefaf8 #cdeee8 #cfe0ff #e6d7ff #4a6a7a' },
    ],
  },
  /* 18 Organic / Botanical */
  {
    harmony: 'Earth tones: clay, sage and sand',
    alternates: [
      { name: 'Desert', colors: '#f1e3cf #c1572b #7b8f4e #e8c9a0 #4a2c1a' },
      { name: 'Terracotta', colors: '#f8ede3 #bf6a4a #8c9a6b #d9b99b #5a3a2a' },
    ],
  },
  /* 19 Dark Academia */
  {
    harmony: 'Oxblood, antique gold and deep brown',
    alternates: [
      { name: 'Parlour', colors: '#2b1d1d #8c2f39 #c9a84c #eadfc6 #3a2626' },
      { name: 'Bottle green', colors: '#14231c #2f5d46 #c9a84c #eadfc6 #1f3329' },
    ],
  },
  /* 20 Cyberpunk */
  {
    harmony: 'Yellow, red and cyan on near-black',
    alternates: [
      { name: 'Night city', colors: '#0a0a0f #f5f500 #ff003c #00f0ff #1c1c28' },
      { name: 'Neon rain', colors: '#0b0f1a #ff2a6d #05d9e8 #d1f7ff #01012b' },
    ],
  },
  /* 21 Wabi-Sabi */
  {
    harmony: 'Muted earth tones, low saturation',
    alternates: [
      { name: 'Stone', colors: '#d9d2c3 #3b3a36 #8a7f6a #cfc6b4 #f1ece0' },
      { name: 'Moss', colors: '#d6d8c9 #3a3d34 #7d8467 #bfc3ad #efeee4' },
    ],
  },
];
