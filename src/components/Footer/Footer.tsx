/**
 * ============================================================================
 * COMPONENT: FOOTER CONTAINER
 * ============================================================================
 *
 * Distinct two-part footer structure:
 * - Part 1: Interactive Deck (Discovery Card with Surprise me & Mood Chips,
 *           Directory Card with Navigation & Guide Specs)
 * - Part 2: Signature Typography Banner (multi-font "Style Handbook") & Colophon
 */

import React, { useEffect, useRef } from 'react';
import { FooterWordArt } from './FooterWordArt';
import { GUIDE_CONFIG } from '../../data/guide-config';
import type { MoodCode } from '../../types/data';

interface FooterProps {
  onOpenGuide: (index: number) => void;
  onJumpToMood: (mood: MoodCode) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenGuide, onJumpToMood }) => {
  const footerRef = useRef<HTMLElement>(null);

  const handleRandomStyle = () => {
    const randomIndex = Math.floor(Math.random() * GUIDE_CONFIG.length);
    onOpenGuide(randomIndex);
  };

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia('(prefers-reduced-motion:reduce)').matches ? 'auto' : 'smooth',
    });
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const gsap = (window as any).gsap;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ScrollTrigger = (window as any).ScrollTrigger;
    const isReduced = window.matchMedia('(prefers-reduced-motion:reduce)').matches;

    if (!gsap || !ScrollTrigger || isReduced) return;

    gsap.registerPlugin(ScrollTrigger);

    const cardsAnim = gsap.from('.ft-card', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      clearProps: 'transform,opacity',
      scrollTrigger: {
        trigger: '.ft-deck',
        start: 'top 88%',
      },
    });

    return () => {
      cardsAnim.scrollTrigger?.kill();
      cardsAnim.kill();
    };
  }, []);

  return (
    <footer ref={footerRef} className="ft">
      <div className="wrap">
        {/* ================================================================= */}
        {/* PART 1: INTERACTIVE DECK (Discovery Card & Directory Card)        */}
        {/* ================================================================= */}
        <div className="ft-deck">
          {/* Card 1: Random Discovery & Mood Selectors */}
          <div className="ft-card ft-card-discovery">
            <div>
              <span className="ft-badge">✦ RANDOM DISCOVERY</span>
              <h3 className="ft-card-title">Not sure where to start?</h3>
              <p className="ft-card-desc">
                Let the handbook pick an interface style for you, or jump directly into a curated mood category.
              </p>
            </div>

            <div className="ft-cta-action">
              <button
                type="button"
                className="cb ft-surprise-btn"
                id="rnd"
                onClick={handleRandomStyle}
                title="Pick a random style"
              >
                <span>Surprise me</span>
                <span className="ft-sparkle" aria-hidden="true">✦</span>
              </button>
            </div>

            <div className="ft-mood-section">
              <h4 className="ft-col-title">JUMP TO A MOOD</h4>
              <div className="ft-mood-chips">
                <button
                  type="button"
                  className="ft-mood-btn"
                  onClick={() => onJumpToMood('s')}
                  title="Soft aesthetics (Claymorphism, Ethereal, Pastel)"
                >
                  <i className="mood-dot" style={{ background: '#ff9ec7' }} />
                  <span>Soft</span>
                </button>
                <button
                  type="button"
                  className="ft-mood-btn"
                  onClick={() => onJumpToMood('d')}
                  title="Dark aesthetics (Cybercore, Synthwave, Dark Minimal)"
                >
                  <i className="mood-dot" style={{ background: '#00f0ff' }} />
                  <span>Dark</span>
                </button>
                <button
                  type="button"
                  className="ft-mood-btn"
                  onClick={() => onJumpToMood('b')}
                  title="Bold aesthetics (Neo-Brutalism, Swiss, Maximalism)"
                >
                  <i className="mood-dot" style={{ background: '#ff6b6b' }} />
                  <span>Bold</span>
                </button>
                <button
                  type="button"
                  className="ft-mood-btn"
                  onClick={() => onJumpToMood('c')}
                  title="Calm aesthetics (Minimalism, Bento, Editorial)"
                >
                  <i className="mood-dot" style={{ background: '#c8a45c' }} />
                  <span>Calm</span>
                </button>
                <button
                  type="button"
                  className="ft-mood-btn"
                  onClick={() => onJumpToMood('r')}
                  title="Retro aesthetics (Y2K, Pixel Art, Scrapbook)"
                >
                  <i className="mood-dot" style={{ background: '#ff2e97' }} />
                  <span>Retro</span>
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Handbook Directory & Specs */}
          <div className="ft-card ft-card-directory">
            <div>
              <span className="ft-badge">DIRECTORY & SPECS</span>
              <div className="ft-directory-cols">
                <div className="ft-col">
                  <h4 className="ft-col-title">EXPLORE</h4>
                  <nav className="ft-links">
                    <a className="ft-link" href="#top">
                      <span className="ft-arrow">↑</span> Top Overview
                    </a>
                    <a className="ft-link" href="#showcase">
                      <span className="ft-arrow">→</span> Style Showcase (22)
                    </a>
                    <a className="ft-link" href="#fonts">
                      <span className="ft-arrow">→</span> Choosing Type & Lab
                    </a>
                  </nav>
                </div>

                <div className="ft-col">
                  <h4 className="ft-col-title">EVERY GUIDE INCLUDES</h4>
                  <ul className="ft-pill-list">
                    <li>Tokens</li>
                    <li>Palettes</li>
                    <li>Font pairings</li>
                    <li>Similar fonts</li>
                    <li>Components</li>
                    <li>Motion</li>
                    <li>Layout</li>
                    <li>Code playground</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="ft-stat-badge">
              <span>✦ 22 Web Design Aesthetics</span>
              <span>·</span>
              <span>66 Color Harmonies</span>
              <span>·</span>
              <span>Interactive Type Lab</span>
            </div>
          </div>
        </div>

        {/* ================================================================= */}
        {/* PART 2: SIGNATURE TYPOGRAPHY BANNER & COLOPHON                    */}
        {/* ================================================================= */}
        <div className="ft-part-signature">
          <FooterWordArt />

          <div className="fb">
            <span className="fb-copy">Interface Style Handbook · 2026</span>
            <span className="fb-tech">Built with GSAP, ScrollTrigger, SVG, React & TypeScript</span>
            <button type="button" id="up" className="fb-up" onClick={handleBackToTop} title="Scroll back to top">
              <span>Back to top</span>
              <span aria-hidden="true">↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
