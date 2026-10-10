/**
 * ============================================================================
 * ROOT APP COMPONENT
 * ============================================================================
 *
 * App shell orchestrating:
 * - Top navigation bar
 * - Hero section (Headline, morphing 3D card, draggable samples, 22-colour strip)
 * - Infinite typography marquee
 * - Pinned horizontal showcase carousel with back-and-forth navigation arrows
 * - Typography family section with interactive Type Lab links
 * - Comprehensive footer with mood navigation & "Surprise me" picker
 * - Full-screen accessible modal overlay with prev/next style arrows
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero/Hero';
import { Marquee } from './components/Marquee';
import { Showcase } from './components/Showcase/Showcase';
import { TypographySection } from './components/TypographySection/TypographySection';
import { Footer } from './components/Footer/Footer';
import { GuideOverlay } from './components/GuideOverlay';

import { STYLES } from './data/styles';
import { GUIDE_CONFIG } from './data/guide-config';
import { FONT_CATEGORIES } from './data/font-pairings';

import { generateGuide } from './generators/guide-page';
import { generatePlayground } from './generators/playground-page';
import { generateTypeGuide } from './generators/type-guide-page';
import { pickReadable } from './utils/color';
import type { FontCategoryKey, MoodCode } from './types/data';

interface OverlayState {
  isOpen: boolean;
  type?: 'style' | 'type';
  index?: number;
  typeKey?: FontCategoryKey;
  title: string;
  htmlContent: string;
  cssVars?: Record<string, string>;
  lineCap?: 'round' | 'square';
}

export const App: React.FC = () => {
  const [overlay, setOverlay] = useState<OverlayState>({
    isOpen: false,
    title: '',
    htmlContent: '',
  });

  const handleCloseOverlay = () => {
    setOverlay((prev) => ({ ...prev, isOpen: false, htmlContent: '' }));
  };

  const handleOpenGuide = (index: number, forceOverlay = true) => {
    const style = STYLES[index];
    const config = GUIDE_CONFIG[index];
    const html = generateGuide(index);

    if (!forceOverlay) {
      let popupWindow: Window | null = null;
      try {
        popupWindow = window.open('', '_blank');
      } catch {
        // Popups blocked
      }

      if (popupWindow && popupWindow.document) {
        popupWindow.document.write(html);
        popupWindow.document.close();
        return;
      }
    }

    // Modal overlay view
    const buttonLabelColor = pickReadable([style.background, style.foreground], style.accent);
    const isSquare = parseFloat(config.radius) === 0;

    setOverlay({
      isOpen: true,
      type: 'style',
      index: index,
      title: `${style.name} (${String(index + 1).padStart(2, '0')}/${STYLES.length})`,
      htmlContent: html,
      cssVars: {
        '--bg': style.background,
        '--fg': style.foreground,
        '--ac': style.accent,
        '--f': `'${style.font}'`,
        '--r': config.radius,
        '--sh': config.shadow,
        '--lb': buttonLabelColor,
      },
      lineCap: isSquare ? 'square' : 'round',
    });
  };

  const handleOpenTypeGuide = (key: FontCategoryKey, forceOverlay = true) => {
    const category = FONT_CATEGORIES[key];
    const html = generateTypeGuide(key);

    if (!forceOverlay) {
      let popupWindow: Window | null = null;
      try {
        popupWindow = window.open('', '_blank');
      } catch {
        // Popups blocked
      }

      if (popupWindow && popupWindow.document) {
        popupWindow.document.write(html);
        popupWindow.document.close();
        return;
      }
    }

    setOverlay({
      isOpen: true,
      type: 'type',
      typeKey: key,
      title: `${category.displayName} type guide`,
      htmlContent: html,
      cssVars: {
        '--bg': '#232323',
        '--fg': '#f1eee8',
        '--ac': '#f1eee8',
        '--f': 'system-ui',
        '--r': '20px',
        '--sh': 'none',
        '--lb': '#232323',
      },
      lineCap: 'round',
    });
  };

  const handlePrevOverlay = () => {
    if (overlay.type === 'style' && typeof overlay.index === 'number') {
      const prevIndex = (overlay.index - 1 + STYLES.length) % STYLES.length;
      handleOpenGuide(prevIndex, true);
    } else if (overlay.type === 'type' && overlay.typeKey) {
      const keys = Object.keys(FONT_CATEGORIES) as FontCategoryKey[];
      const idx = keys.indexOf(overlay.typeKey);
      const prevKey = keys[(idx - 1 + keys.length) % keys.length];
      handleOpenTypeGuide(prevKey, true);
    }
  };

  const handleNextOverlay = () => {
    if (overlay.type === 'style' && typeof overlay.index === 'number') {
      const nextIndex = (overlay.index + 1) % STYLES.length;
      handleOpenGuide(nextIndex, true);
    } else if (overlay.type === 'type' && overlay.typeKey) {
      const keys = Object.keys(FONT_CATEGORIES) as FontCategoryKey[];
      const idx = keys.indexOf(overlay.typeKey);
      const nextKey = keys[(idx + 1) % keys.length];
      handleOpenTypeGuide(nextKey, true);
    }
  };

  // Attach global functions to window so generated iframe pages can trigger sub-pages (e.g. playground)
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).pgHTML = (i: number) => generatePlayground(i);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).generateGuide = (i: number) => generateGuide(i);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).generateTypeGuide = (k: FontCategoryKey) => generateTypeGuide(k);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).handleOpenGuide = (i: number, force?: boolean) => handleOpenGuide(i, force);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).closeGuide = handleCloseOverlay;
  }, []);

  const handleJumpToMood = (mood: MoodCode) => {
    const targetIndex = GUIDE_CONFIG.findIndex((c) => c.mood === mood);
    if (targetIndex !== -1) {
      handleOpenGuide(targetIndex);
    }
  };

  return (
    <>
      <Navbar />
      <main>
        <Hero onOpenGuide={handleOpenGuide} />
        <Marquee />
        <Showcase onOpenGuide={handleOpenGuide} />
        <TypographySection onSelectCategory={handleOpenTypeGuide} />
      </main>
      <Footer onOpenGuide={handleOpenGuide} onJumpToMood={handleJumpToMood} />

      <GuideOverlay
        isOpen={overlay.isOpen}
        title={overlay.title}
        htmlContent={overlay.htmlContent}
        cssVars={overlay.cssVars}
        lineCap={overlay.lineCap}
        onClose={handleCloseOverlay}
        onPrev={handlePrevOverlay}
        onNext={handleNextOverlay}
      />
    </>
  );
};

export default App;
