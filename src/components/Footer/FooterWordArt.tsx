/**
 * ============================================================================
 * COMPONENT: FOOTER WORD ART
 * ============================================================================
 *
 * Stylized "Style Handbook" banner where each individual letter is typeset
 * in a distinct Google Font and contrasting colour sampled from the 22 aesthetics.
 *
 * Includes:
 * - GSAP entrance roll-in animation on scroll reveal
 * - Interactive hover lift, tilt, and elastic bounce on mouseover
 */

import React, { useEffect, useRef } from 'react';
import { STYLES } from '../../data/styles';
import { lum, hx } from '../../utils/color';

const WORD_MAP = [11, 2, 4, 0, 17, 12, 15, 5, 9, 16, 3, 18, 10, 19];

export const FooterWordArt: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const words = ['Style', 'Handbook'];

  const pickBrightest = (colors: string[]) => {
    return hx(colors.reduce((best, curr) => (lum(curr) > lum(best) ? curr : best)));
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const gsap = (window as any).gsap;
    const isReduced = window.matchMedia('(prefers-reduced-motion:reduce)').matches;

    const spans = el.querySelectorAll<HTMLElement>('.fwd span');
    if (!spans.length) return;

    if (isReduced || !gsap) {
      spans.forEach((s) => {
        s.style.opacity = '1';
        s.style.transform = 'none';
      });
      return;
    }

    // Set initial off-screen state
    gsap.set(spans, { yPercent: 125, opacity: 0 });

    let hasTriggered = false;

    // IntersectionObserver guarantees trigger when scrolled into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTriggered) {
            hasTriggered = true;
            gsap.fromTo(
              spans,
              { yPercent: 125, opacity: 0 },
              {
                yPercent: 0,
                opacity: 1,
                duration: 0.85,
                stagger: 0.035,
                ease: 'power4.out',
                clearProps: 'transform,opacity', // Essential: clears inline styles so hover micro-interactions work 100%!
              }
            );
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="fw" aria-label="Style Handbook">
      {words.map((word, wordIdx) => (
        <span key={wordIdx} className="fwd">
          {[...word].map((char, charIdx) => {
            const styleIdx = WORD_MAP[(wordIdx * 6 + charIdx) % WORD_MAP.length];
            const style = STYLES[styleIdx];
            const color = pickBrightest([style.background, style.foreground, style.accent]);
            const tiltDeg = (charIdx + wordIdx) % 2 === 0 ? '-6deg' : '6deg';

            return (
              <span
                key={charIdx}
                className="fwd-char"
                style={
                  {
                    fontFamily: `'${style.font}', system-ui, sans-serif`,
                    color: color,
                    '--tilt': tiltDeg,
                  } as React.CSSProperties
                }
              >
                {char}
              </span>
            );
          })}
        </span>
      ))}
    </div>
  );
};
