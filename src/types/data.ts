/**
 * ============================================================================
 * TYPE DEFINITIONS — Interface Style Handbook
 * ============================================================================
 *
 * These types give names to every field in the original data arrays.
 * The original code used positional arrays like S[i][4] for the font name;
 * now it's STYLES[i].font — self-documenting.
 *
 * All data arrays are INDEX-ALIGNED:
 *   STYLES[i], GUIDE_CONFIG[i], MOTION_PRESETS[i], PALETTES[i],
 *   FONT_PAIRINGS[i], FONT_TYPES[i] all describe the SAME design aesthetic.
 */

// ─── Mood Categories ────────────────────────────────────────────────────────

/** Mood code used to classify each design aesthetic */
export type MoodCode = 's' | 'd' | 'b' | 'c' | 'r';

/** Human-readable mood labels */
export const MOOD_LABELS: Record<MoodCode, string> = {
  s: 'Soft',
  d: 'Dark',
  b: 'Bold',
  c: 'Calm',
  r: 'Retro',
};

// ─── Style Definition ───────────────────────────────────────────────────────

/**
 * One of the 22 design aesthetics.
 * Corresponds to a single entry in the original `S` array.
 *
 * Original format: [name, bg, fg, accent, font, componentCSS, description]
 */
export interface StyleDefinition {
  /** Display name, e.g. "Claymorphism" */
  name: string;
  /** Surface/background colour as hex, e.g. "#f3e8ff" */
  background: string;
  /** Text/ink colour as hex, e.g. "#3b2a5a" */
  foreground: string;
  /** Accent colour as hex, e.g. "#ff9ec7" */
  accent: string;
  /** Primary Google Font family name, e.g. "Nunito" */
  font: string;
  /** CSS overrides for .btn, .card, input, h1, nav, etc. */
  componentCSS: string;
  /** One-line aesthetic description */
  description: string;
}

// ─── Guide Configuration ────────────────────────────────────────────────────

/**
 * Layout and design rules for a style guide page.
 * Corresponds to a single entry in the original `G` array.
 *
 * Original format: [cat, radius, shadow, spacingUnit, typeRatio, maxWidth,
 *                   columns, layoutRule, dos[3], avoid, supportColors[2]]
 */
export interface GuideConfig {
  /** Mood category: 's'=Soft, 'd'=Dark, 'b'=Bold, 'c'=Calm, 'r'=Retro */
  mood: MoodCode;
  /** CSS border-radius value, e.g. "28px" or "0" */
  radius: string;
  /** CSS box-shadow value, e.g. "8px 8px 18px #7b5ea733" */
  shadow: string;
  /** Base spacing unit in pixels (multiplied for gutters, padding) */
  spacingUnit: number;
  /** Modular type scale ratio, e.g. 1.25 (Major Third) */
  typeRatio: number;
  /** Max content width in pixels */
  maxWidth: number;
  /** Grid column count (6 or 12 typically) */
  columns: number;
  /** Layout rule — describes how to arrange elements */
  layoutRule: string;
  /** Three "do" design rules */
  dos: [string, string, string];
  /** One "avoid" design rule */
  avoid: string;
  /** Two support palette colours as hex */
  supportColors: [string, string];
}

// ─── Motion Presets ─────────────────────────────────────────────────────────

/**
 * Motion/animation preset for a style.
 * Corresponds to a single entry in the original `M` array.
 *
 * Original format: [ease, duration, hoverY, hoverScale, pressScale,
 *                   pressShift, specialFX, carousel]
 */
export interface MotionPreset {
  /** GSAP ease string, e.g. "elastic.out(1,.5)" */
  ease: string;
  /** Animation duration in seconds */
  duration: number;
  /** Y offset in px on hover (usually negative = upward) */
  hoverY: number;
  /** Scale factor on hover, e.g. 1.04 */
  hoverScale: number;
  /** Scale factor on press, e.g. 0.9 */
  pressScale: number;
  /** X shift in px on press (0 for most styles) */
  pressShift: number;
  /** Special effect name: 'squish'|'glow'|'tilt'|'inset'|'glitch'|'' */
  specialFX: '' | 'squish' | 'glow' | 'tilt' | 'inset' | 'glitch';
  /** Carousel transition type */
  carousel: 'slide' | 'fade' | 'zoom' | 'flip' | 'stack';
}

/**
 * Carousel transition keyframes — from, active, and exit states.
 * Used by GSAP to animate slide enter/exit in the guide page carousel.
 */
export interface TransitionKeyframes {
  /** Entry state (element starts here) */
  from: Record<string, number>;
  /** Active/visible state */
  to: Record<string, number>;
  /** Exit state (element leaves to here) */
  out: Record<string, number>;
}

// ─── Palettes ───────────────────────────────────────────────────────────────

/**
 * A named alternate colour palette.
 */
export interface PaletteAlternate {
  /** Palette name, e.g. "Peach cloud" */
  name: string;
  /** Space-separated hex colours, e.g. "#fff0e6 #ffc6a8 #ff8f6b #7a4a3a #b8e0d2" */
  colors: string;
}

/**
 * Palette set for a style — a harmony note plus two alternate schemes.
 * Corresponds to a single entry in the original `PAL` array.
 *
 * Original format: [harmonyNote, [alt1Name, alt1Colors], [alt2Name, alt2Colors]]
 */
export interface PaletteSet {
  /** Colour harmony description, e.g. "Analogous pastels with one saturated accent" */
  harmony: string;
  /** Two alternate palette schemes */
  alternates: [PaletteAlternate, PaletteAlternate];
}

// ─── Font Pairings & Types ──────────────────────────────────────────────────

/**
 * Font pairing for a style — heading font comes from StyleDefinition.font,
 * this specifies the body font and why they work together.
 * Corresponds to a single entry in the original `FP` array.
 *
 * Original format: [bodyFont, reason]
 */
export interface FontPairing {
  /** Google Font family name for body text */
  bodyFont: string;
  /** Rationale for why this heading + body pairing works */
  reason: string;
}

/**
 * A similar font recommendation.
 */
export interface SimilarFont {
  /** Google Font family name */
  name: string;
  /** Classification description, e.g. "Rounded sans-serif" */
  classification: string;
}

/**
 * Font type classification for a style.
 * Corresponds to a single entry in the original `FT` array.
 *
 * Original format: [category, headingClass, bodyClass, [[name, class], ...]]
 */
export interface FontType {
  /** Category key: 'serif'|'sans'|'display'|'mono'|'hand' */
  category: FontCategoryKey;
  /** Heading font classification, e.g. "Rounded sans-serif" */
  headingClass: string;
  /** Body font classification, e.g. "Rounded sans-serif" */
  bodyClass: string;
  /** Similar fonts to try (all available on Google Fonts) */
  similar: SimilarFont[];
}

// ─── Font Categories ────────────────────────────────────────────────────────

/** Valid font category keys */
export type FontCategoryKey = 'serif' | 'sans' | 'display' | 'mono' | 'hand';

/**
 * Font category definition — displayed in the "Choosing type" section.
 * Corresponds to entries in the original `KD` object.
 *
 * Original format: {key: [displayName, description, exampleFont]}
 */
export interface FontCategory {
  /** Human-readable name, e.g. "Serif" */
  displayName: string;
  /** Description of what this category means */
  description: string;
  /** Representative example font name on Google Fonts */
  exampleFont: string;
}

// ─── Type Guide Data ────────────────────────────────────────────────────────

/**
 * Data for a font in the type guide — shown in the font card grid.
 */
export interface TypeGuideFont {
  /** Font family name */
  name: string;
  /** Classification, e.g. "Transitional to Didone serif" */
  classification: string;
  /** Best-use description, e.g. "Editorial headlines, luxury brands" */
  bestFor: string;
}

/**
 * Full type guide data for a font category.
 * Corresponds to an entry in the original `TD` object.
 */
export interface TypeGuideData {
  /** Fonts in this category with their classifications */
  fonts: TypeGuideFont[];
  /** Variable font axis string for Google Fonts API, e.g. "Fraunces:wght@100..900" */
  variableFont: string;
  /** CSS fallback stack, e.g. "Georgia,serif" */
  fallbackStack: string;
  /** Four distinguishing traits of this category */
  traits: [string, string, string, string];
  /** Animation recommendation text */
  animationRec: string;
  /**
   * Typography specs: [bodySize, lineHeight, tracking, lineLength, weights, watchOut]
   */
  specs: [string, string, string, string, string, string];
  /** Font pairing advice */
  pairingAdvice: string;
  /** Accessibility tips (array of strings) */
  accessibilityTips: string[];
  /**
   * Colour pairs as strings: "bgHex fgHex Label"
   * Used to show text/background combos with contrast ratios.
   */
  colorPairs: string[];
  /** Colour tip paragraph */
  colorTip: string;
}

/**
 * A typography animation demo shown in the type guide.
 * Corresponds to entries in the original `DM` array.
 *
 * Original format: [id, title, description, gsapCode]
 */
export interface DemoAnimation {
  /** Unique ID used for data attributes, e.g. "letters" */
  id: string;
  /** Display title, e.g. "Letter stagger" */
  title: string;
  /** Description of what the animation does */
  description: string;
  /** GSAP code snippet shown to the user */
  gsapCode: string;
}

// ─── CSS Variable Set ───────────────────────────────────────────────────────

/**
 * The CSS custom properties that drive a style's visual identity.
 * Used to theme the morphing preview card and carousel slides.
 */
export interface StyleCSSVars {
  '--bg': string;
  '--fg': string;
  '--ac': string;
  '--f': string;
  '--r': string;
  '--sh': string;
  '--lb': string;  // Button label colour (readable on accent)
}
