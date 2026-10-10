/**
 * ============================================================================
 * COLOR UTILITIES — Luminance, Contrast Ratio, Chroma & Role Assignment
 * ============================================================================
 *
 * Implements WCAG 2.1 relative luminance and contrast ratio calculations.
 * Used across the landing page, style guides, and type guides to guarantee
 * accessibility and pick readable inks dynamically.
 */

/**
 * Normalises a 3-, 4-, 6- or 8-digit hex code into a standard 6-digit '#rrggbb'.
 *
 * @param hex - Hex color string, e.g. '#fff', '#f3e8ff', '#00f0ff44'
 * @returns 6-digit hex string with leading '#'
 */
export function formatHex(hex: string): string {
  const clean = hex.slice(0, 7);
  if (clean.length === 4) {
    return '#' + [...clean.slice(1)].map((c) => c + c).join('');
  }
  return clean;
}

/** Alias matching original short name `hx` */
export const hx = formatHex;

/**
 * Calculates WCAG 2.1 relative luminance for a given hex colour.
 *
 * Converts sRGB channels to linear RGB, then computes:
 * L = 0.2126 * R + 0.7152 * G + 0.0722 * B
 *
 * @param hex - Hex colour string
 * @returns Relative luminance value between 0.0 (pitch black) and 1.0 (pure white)
 */
export function getLuminance(hex: string): number {
  const formatted = formatHex(hex);
  const channels = [1, 3, 5].map((k) => {
    const v = parseInt(formatted.substr(k, 2), 16) / 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
}

/** Alias matching original short name `lum` */
export const lum = getLuminance;

/**
 * Calculates the WCAG contrast ratio between two hex colours.
 *
 * Ratio = (L_lighter + 0.05) / (L_darker + 0.05)
 *
 * @param colA - First hex colour
 * @param colB - Second hex colour
 * @returns Contrast ratio string formatted to 1 decimal place, e.g. "4.5"
 */
export function getContrastRatio(colA: string, colB: string): string {
  const lumA = getLuminance(colA);
  const lumB = getLuminance(colB);
  const max = Math.max(lumA, lumB);
  const min = Math.min(lumA, lumB);
  return ((max + 0.05) / (min + 0.05)).toFixed(1);
}

/** Alias matching original short name `cr` */
export const cr = getContrastRatio;

/**
 * Calculates the chroma (saturation proxy) of a hex color:
 * max(R, G, B) - min(R, G, B)
 *
 * @param hex - Hex colour string
 * @returns Chroma value between 0 and 255
 */
export function getChroma(hex: string): number {
  const formatted = formatHex(hex);
  const channels = [1, 3, 5].map((k) => parseInt(formatted.substr(k, 2), 16));
  return Math.max(...channels) - Math.min(...channels);
}

/** Alias matching original short name `chroma` */
export const chroma = getChroma;

/**
 * Selects the most readable text colour from a candidate pool against a surface colour.
 *
 * Prefers colours with contrast >= 4.5:1 and moderate chroma (<= 110),
 * falling back to black or white if no candidate meets criteria.
 *
 * @param pool - Candidate hex colours
 * @param bg - Surface background hex colour
 * @returns The most readable hex colour
 */
export function pickReadable(pool: string[], bg: string): string {
  const contrastWithBg = (c: string) => +getContrastRatio(c, bg);
  const passing = pool.filter((c) => contrastWithBg(c) >= 4.5);
  const lowChroma = passing.filter((c) => getChroma(c) <= 110);
  const list = lowChroma.length
    ? lowChroma
    : passing.length
    ? passing
    : ['#111111', '#ffffff'];

  return list.reduce((best, curr) =>
    contrastWithBg(curr) > contrastWithBg(best) ? curr : best
  );
}

/** Alias matching original short name `pick` */
export const pick = pickReadable;

/**
 * Assigns readable UI roles (ink, accent, button-label) from a palette.
 * `colors[0]` is assumed to be the surface/background.
 *
 * @param colors - Array of hex colors where index 0 is surface
 * @returns [ink, accent, buttonLabel] hex colours
 */
export function assignRoles(colors: string[]): [string, string, string] {
  const surface = colors[0];
  const candidates = colors.slice(1);
  const ink = pickReadable(candidates, surface);
  const remaining = candidates.filter((c) => c !== ink);
  const accent = remaining.reduce(
    (max, curr) => (getChroma(curr) > getChroma(max) ? curr : max),
    remaining[0] || candidates[0]
  );
  const buttonLabel = pickReadable(
    colors.filter((c) => c !== accent),
    accent
  );

  return [ink, accent, buttonLabel];
}

/** Alias matching original short name `roles` */
export const roles = assignRoles;

/**
 * WCAG rating string based on contrast ratio value.
 *
 * @param ratio - Contrast ratio number
 * @param threshold - Secondary threshold (usually 3.0)
 * @returns 'AAA' | 'AA' | 'Large text / UI only' | 'Fails'
 */
export function checkContrastLevel(ratio: number, threshold = 3.0): string {
  if (ratio >= 7.0) return 'AAA';
  if (ratio >= 4.5) return 'AA';
  if (ratio >= threshold) return 'Large text / UI only';
  return 'Fails';
}

/** Alias matching original short name `ok` */
export const ok = checkContrastLevel;

/**
 * Escapes HTML characters for safe template string interpolation.
 */
export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Alias matching original short name `esc` */
export const esc = escapeHtml;
