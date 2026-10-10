/**
 * ============================================================================
 * COMPONENT: TYPOGRAPHY SECTION ("CHOOSING TYPE")
 * ============================================================================
 *
 * Section presenting the 5 core font categories (Serif, Sans-serif, Display,
 * Monospace, Handwriting). Users can click any card to inspect the interactive
 * Type Lab and animation lab for that classification.
 */

import React from 'react';
import { FontFamilyCard } from './FontFamilyCard';
import { FONT_CATEGORIES, FONT_TYPES } from '../../data/font-pairings';
import { TYPE_GUIDE_DATA } from '../../data/type-guide-data';
import { STYLES } from '../../data/styles';
import type { FontCategoryKey } from '../../types/data';

interface TypographySectionProps {
  onSelectCategory: (key: FontCategoryKey) => void;
}

export const TypographySection: React.FC<TypographySectionProps> = ({ onSelectCategory }) => {
  const categoryKeys = Object.keys(FONT_CATEGORIES) as FontCategoryKey[];

  return (
    <section className="wrap ty" id="fonts">
      <h2>Choosing type</h2>
      <p>
        Every aesthetic starts with a voice. Five families, with rules for when to pick them, pairings that work,
        and fonts you can use today from Google Fonts.
      </p>

      <div className="kd" id="kd">
        {categoryKeys.map((key) => {
          const category = FONT_CATEGORIES[key];
          const usedByStyles = STYLES.map((s, i) => (FONT_TYPES[i].category === key ? s.name : null)).filter(
            Boolean
          ) as string[];
          const fontCount = TYPE_GUIDE_DATA[key].fonts.length;

          return (
            <FontFamilyCard
              key={key}
              categoryKey={key}
              category={category}
              usedByStyles={usedByStyles}
              fontCount={fontCount}
              onSelect={onSelectCategory}
            />
          );
        })}
      </div>
    </section>
  );
};
