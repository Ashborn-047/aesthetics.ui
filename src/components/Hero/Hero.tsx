/**
 * ============================================================================
 * COMPONENT: HERO CONTAINER
 * ============================================================================
 *
 * Hero section assembling:
 * - Glowing ambient background orbs with pointer parallax tracking
 * - Left column text & animated stats counters
 * - Right column 3D morphing preview card with floating draggable sample cards
 * - 22-button palette swatch strip
 */

import React, { useState, useEffect, useRef } from 'react';
import { HeroContent } from './HeroContent';
import { StylePreview } from './StylePreview';
import { FloatingCards } from './FloatingCards';
import { ColorStrip } from './ColorStrip';
import { STYLES } from '../../data/styles';
import { GUIDE_CONFIG } from '../../data/guide-config';

interface HeroProps {
  onOpenGuide: (index: number) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenGuide }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const morphCardRef = useRef<HTMLDivElement>(null);

  // Autoplay through the 22 styles unless the user manually interacted
  useEffect(() => {
    if (isLocked) return;
    const isReduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion:reduce)').matches;
    if (isReduced) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % STYLES.length);
    }, 3200);

    return () => clearInterval(timer);
  }, [isLocked]);

  const handleManualSelect = (index: number) => {
    setIsLocked(true);
    setCurrentIndex(index);
  };

  const handlePrev = () => {
    setIsLocked(true);
    setCurrentIndex((prev) => (prev + STYLES.length - 1) % STYLES.length);
  };

  const handleNext = () => {
    setIsLocked(true);
    setCurrentIndex((prev) => (prev + 1) % STYLES.length);
  };

  const currentStyle = STYLES[currentIndex];
  const currentConfig = GUIDE_CONFIG[currentIndex];

  return (
    <header ref={heroRef} className="hero" id="top">
      {/* Ambient background glow orbs */}
      <div className="orb o1" style={{ backgroundColor: currentStyle.accent }} />
      <div className="orb o2" style={{ backgroundColor: currentStyle.background }} />

      {/* Headline & statistics */}
      <HeroContent />

      {/* Morphing preview card container */}
      <div
        className="mo"
        onPointerEnter={() => setIsLocked(true)}
        onPointerLeave={() => setIsLocked(false)}
      >
        <StylePreview
          cardRef={morphCardRef}
          style={currentStyle}
          config={currentConfig}
          index={currentIndex}
          total={STYLES.length}
          onOpenGuide={onOpenGuide}
          onPrev={handlePrev}
          onNext={handleNext}
        />
        <FloatingCards />
      </div>

      {/* 22-colour palette strip */}
      <ColorStrip onHover={handleManualSelect} onClick={onOpenGuide} />
    </header>
  );
};
