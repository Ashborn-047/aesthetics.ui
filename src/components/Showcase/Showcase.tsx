/**
 * ============================================================================
 * COMPONENT: SHOWCASE SECTION
 * ============================================================================
 *
 * Horizontal scroll carousel showcasing all 22 styles.
 * Features back-and-forth navigation arrows in the header and floating side controls,
 * alongside GSAP ScrollTrigger pinned scrub animations and background tinting.
 */

import React, { useEffect, useRef, useState } from 'react';
import { StyleSlide } from './StyleSlide';
import { STYLES } from '../../data/styles';
import { GUIDE_CONFIG } from '../../data/guide-config';
import { FONT_PAIRINGS, FONT_TYPES } from '../../data/font-pairings';
import { cr, hx } from '../../utils/color';

interface ShowcaseProps {
  onOpenGuide: (index: number) => void;
}

const N = STYLES.length;

export const Showcase: React.FC<ShowcaseProps> = ({ onOpenGuide }) => {
  const showcaseRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const scrollTriggerInstance = useRef<any>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const tint = (k: number) => {
    const sc = showcaseRef.current;
    if (!sc) return;
    const { background: bg, foreground: fg, accent: ac } = STYLES[k];
    const bd = +cr(ac, bg) < 1.5 ? fg : ac;
    const tx = +cr('#111111', bd) > +cr('#ffffff', bd) ? '#111111' : '#ffffff';
    setActiveIndex(k);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const gsap = (window as any).gsap;
    if (gsap) {
      gsap.to(sc, { backgroundColor: hx(bd), color: tx, duration: 0.6, overwrite: 'auto' });
    }
  };

  const goToSlide = (targetIndex: number) => {
    const target = Math.min(N - 1, Math.max(0, targetIndex));
    const st = scrollTriggerInstance.current;
    const isReduced = window.matchMedia('(prefers-reduced-motion:reduce)').matches;

    if (st && typeof st.start === 'number' && typeof st.end === 'number') {
      const scrollPos = st.start + ((st.end - st.start) * target) / (N - 1);
      window.scrollTo({
        top: scrollPos,
        behavior: isReduced ? 'auto' : 'smooth',
      });
    } else {
      const trk = trackRef.current;
      if (trk && trk.children[target]) {
        trk.children[target].scrollIntoView({
          behavior: isReduced ? 'auto' : 'smooth',
          inline: 'center',
          block: 'nearest',
        });
      }
    }
    tint(target);
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const gsap = (window as any).gsap;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ScrollTrigger = (window as any).ScrollTrigger;
    const isReduced = window.matchMedia('(prefers-reduced-motion:reduce)').matches;

    if (!gsap || !ScrollTrigger || isReduced) return;

    gsap.registerPlugin(ScrollTrigger);

    const sc = showcaseRef.current;
    const trk = trackRef.current;
    const pr = progressBarRef.current;
    if (!sc || !trk) return;

    sc.classList.add('pin');

    let cur = -1;

    const dist = () => trk.scrollWidth - window.innerWidth;

    const tw = gsap.to(trk, {
      x: () => -dist(),
      ease: 'none',
      scrollTrigger: {
        trigger: sc,
        start: 'top top',
        end: () => '+=' + dist(),
        pin: true,
        scrub: 0.5,
        invalidateOnRefresh: true,
        onUpdate: (s: any) => {
          if (pr) pr.style.transform = `scaleX(${s.progress})`;
          const k = Math.min(N - 1, Math.max(0, Math.round(s.progress * (N - 1))));
          if (k !== cur) {
            cur = k;
            tint(k);
          }
        },
      },
    });

    scrollTriggerInstance.current = tw.scrollTrigger;
    tint(0);

    // Slide parallax animations: slide 0 is already in view and must be highlighted immediately!
    const slides = trk.querySelectorAll<HTMLElement>('.slide');
    slides.forEach((s, idx) => {
      if (idx === 0) {
        // First slide starts 100% active and highlighted
        gsap.set(s, { scale: 1, opacity: 1 });
        gsap.to(s, {
          scale: 0.86,
          opacity: 0.45,
          ease: 'none',
          scrollTrigger: {
            trigger: s,
            containerAnimation: tw,
            start: 'right 75%',
            end: 'right 30%',
            scrub: true,
          },
        });
      } else {
        // Subsequent slides scale up & fade in as they scroll in from the right
        gsap.fromTo(
          s,
          { scale: 0.86, opacity: 0.45 },
          {
            scale: 1,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: s,
              containerAnimation: tw,
              start: 'left 85%',
              end: 'left 45%',
              scrub: true,
            },
          }
        );
      }

      // Parallax on slide title
      const nm = s.querySelector('.nm');
      if (nm) {
        gsap.fromTo(
          nm,
          { x: 80 },
          {
            x: -40,
            ease: 'none',
            scrollTrigger: {
              trigger: s,
              containerAnimation: tw,
              start: 'left right',
              end: 'right left',
              scrub: true,
            },
          }
        );
      }
    });

    return () => {
      tw.scrollTrigger?.kill();
      tw.kill();
      scrollTriggerInstance.current = null;
    };
  }, []);

  const activeStyle = STYLES[activeIndex];

  return (
    <section ref={showcaseRef} className="sc" id="showcase" aria-label="Style showcase carousel">
      {/* Header indicator row with back and forth navigation arrows */}
      <div className="shd">
        <div className="shd-nav">
          <button
            type="button"
            className="ar shd-btn"
            aria-label="Previous style"
            title="Previous style"
            onClick={() => goToSlide(activeIndex - 1)}
            disabled={activeIndex === 0}
          >
            &#8249;
          </button>
          <span id="cnt">
            {String(activeIndex + 1).padStart(2, '0')} / {N}
          </span>
          <button
            type="button"
            className="ar shd-btn"
            aria-label="Next style"
            title="Next style"
            onClick={() => goToSlide(activeIndex + 1)}
            disabled={activeIndex === N - 1}
          >
            &#8250;
          </button>
        </div>
        <span id="nm">{activeStyle.name}</span>
      </div>

      {/* Horizontal slides track */}
      <div ref={trackRef} className="track" id="track">
        {STYLES.map((style, idx) => (
          <StyleSlide
            key={style.name}
            style={style}
            config={GUIDE_CONFIG[idx]}
            pairing={FONT_PAIRINGS[idx]}
            fontType={FONT_TYPES[idx]}
            index={idx}
            total={N}
            isActive={activeIndex === idx}
            onOpenGuide={onOpenGuide}
          />
        ))}
      </div>

      {/* Scroll progress bar */}
      <div className="pgb">
        <i ref={progressBarRef} id="pr" />
      </div>
    </section>
  );
};
