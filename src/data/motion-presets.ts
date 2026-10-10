/**
 * ============================================================================
 * MOTION PRESETS — Animation parameters per style
 * ============================================================================
 *
 * Each entry maps to a style at the same index in STYLES[].
 * Defines how buttons hover, press, and click, plus the carousel transition.
 *
 * Original variable names: M (motion array), T (transition keyframes)
 */

import type { MotionPreset, TransitionKeyframes } from '../types/data';

export const MOTION_PRESETS: MotionPreset[] = [
  /* 0  Claymorphism  */ { ease: 'elastic.out(1,.5)', duration: 0.6, hoverY: -4, hoverScale: 1.04, pressScale: 0.9, pressShift: 0, specialFX: 'squish', carousel: 'zoom' },
  /* 1  Cybercore     */ { ease: 'power3.out', duration: 0.2, hoverY: 0, hoverScale: 1, pressScale: 0.97, pressShift: 0, specialFX: 'glow', carousel: 'slide' },
  /* 2  Neo-Brutalism  */ { ease: 'power1.out', duration: 0.12, hoverY: -3, hoverScale: 1, pressScale: 1, pressShift: 4, specialFX: '', carousel: 'slide' },
  /* 3  Scrapbook     */ { ease: 'back.out(2)', duration: 0.3, hoverY: -4, hoverScale: 1.04, pressScale: 0.96, pressShift: 0, specialFX: 'tilt', carousel: 'stack' },
  /* 4  Surrealism    */ { ease: 'sine.inOut', duration: 0.9, hoverY: -8, hoverScale: 1.05, pressScale: 0.95, pressShift: 0, specialFX: '', carousel: 'fade' },
  /* 5  Y2K Aesthetic */ { ease: 'back.out(1.7)', duration: 0.35, hoverY: -3, hoverScale: 1.06, pressScale: 0.94, pressShift: 0, specialFX: 'glow', carousel: 'zoom' },
  /* 6  Pixel Art     */ { ease: 'steps(4)', duration: 0.3, hoverY: -4, hoverScale: 1, pressScale: 1, pressShift: 4, specialFX: '', carousel: 'slide' },
  /* 7  Synthwave     */ { ease: 'power2.out', duration: 0.3, hoverY: -2, hoverScale: 1.02, pressScale: 0.97, pressShift: 0, specialFX: 'glow', carousel: 'fade' },
  /* 8  Glassmorphism */ { ease: 'power2.out', duration: 0.4, hoverY: -3, hoverScale: 1.02, pressScale: 0.98, pressShift: 0, specialFX: 'glow', carousel: 'fade' },
  /* 9  Neumorphism   */ { ease: 'power2.inOut', duration: 0.3, hoverY: 0, hoverScale: 1, pressScale: 0.97, pressShift: 0, specialFX: 'inset', carousel: 'fade' },
  /* 10 Bento Grid    */ { ease: 'power3.out', duration: 0.35, hoverY: -4, hoverScale: 1.02, pressScale: 0.98, pressShift: 0, specialFX: '', carousel: 'zoom' },
  /* 11 Editorial     */ { ease: 'power2.out', duration: 0.5, hoverY: 0, hoverScale: 1, pressScale: 0.99, pressShift: 0, specialFX: '', carousel: 'slide' },
  /* 12 Swiss Design  */ { ease: 'power4.out', duration: 0.25, hoverY: 0, hoverScale: 1, pressScale: 0.98, pressShift: 0, specialFX: '', carousel: 'slide' },
  /* 13 Minimalism    */ { ease: 'power1.out', duration: 0.4, hoverY: 0, hoverScale: 1, pressScale: 0.99, pressShift: 0, specialFX: '', carousel: 'fade' },
  /* 14 Maximalism    */ { ease: 'elastic.out(1,.4)', duration: 0.5, hoverY: -5, hoverScale: 1.08, pressScale: 0.92, pressShift: 0, specialFX: 'tilt', carousel: 'flip' },
  /* 15 Luxury Typo   */ { ease: 'power2.inOut', duration: 0.8, hoverY: 0, hoverScale: 1, pressScale: 0.99, pressShift: 0, specialFX: '', carousel: 'fade' },
  /* 16 Sketch        */ { ease: 'power1.inOut', duration: 0.3, hoverY: -2, hoverScale: 1, pressScale: 0.97, pressShift: 0, specialFX: 'tilt', carousel: 'stack' },
  /* 17 Ethereal      */ { ease: 'sine.inOut', duration: 1, hoverY: -5, hoverScale: 1.02, pressScale: 0.98, pressShift: 0, specialFX: '', carousel: 'fade' },
  /* 18 Bohemian      */ { ease: 'power2.out', duration: 0.5, hoverY: -3, hoverScale: 1.02, pressScale: 0.98, pressShift: 0, specialFX: '', carousel: 'slide' },
  /* 19 Victorian     */ { ease: 'power2.inOut', duration: 0.7, hoverY: 0, hoverScale: 1, pressScale: 0.99, pressShift: 0, specialFX: '', carousel: 'fade' },
  /* 20 Cyberpunk     */ { ease: 'power4.out', duration: 0.15, hoverY: 0, hoverScale: 1, pressScale: 0.96, pressShift: 0, specialFX: 'glitch', carousel: 'flip' },
  /* 21 Wabi-Sabi     */ { ease: 'sine.inOut', duration: 0.9, hoverY: 0, hoverScale: 1, pressScale: 0.99, pressShift: 0, specialFX: '', carousel: 'fade' },
];

/**
 * Carousel transition keyframes — defines enter, active, and exit states
 * for each transition type. GSAP tweens between these.
 *
 * Original variable name: T
 */
export const TRANSITIONS: Record<string, TransitionKeyframes> = {
  slide: {
    from: { x: 60, autoAlpha: 0 },
    to:   { x: 0, autoAlpha: 1 },
    out:  { x: -60, autoAlpha: 0 },
  },
  fade: {
    from: { autoAlpha: 0 },
    to:   { autoAlpha: 1 },
    out:  { autoAlpha: 0 },
  },
  zoom: {
    from: { scale: 0.85, autoAlpha: 0 },
    to:   { scale: 1, autoAlpha: 1 },
    out:  { scale: 1.1, autoAlpha: 0 },
  },
  flip: {
    from: { rotationY: 90, transformPerspective: 600, autoAlpha: 0 },
    to:   { rotationY: 0, autoAlpha: 1 },
    out:  { rotationY: -90, autoAlpha: 0 },
  },
  stack: {
    from: { y: 30, rotation: 6, autoAlpha: 0 },
    to:   { y: 0, rotation: 0, autoAlpha: 1 },
    out:  { y: -20, rotation: -6, autoAlpha: 0 },
  },
};
