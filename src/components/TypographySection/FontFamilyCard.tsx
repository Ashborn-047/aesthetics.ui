/**
 * ============================================================================
 * COMPONENT: FONT FAMILY CARD (.kc)
 * ============================================================================
 *
 * Clickable card in the "Choosing type" section representing one of the 5
 * font categories (Serif, Sans-serif, Display, Monospace, Handwriting).
 * Clicking triggers the type guide overlay / popup for that category.
 */

import React from 'react';
import type { FontCategoryKey, FontCategory } from '../../types/data';

interface FontFamilyCardProps {
  categoryKey: FontCategoryKey;
  category: FontCategory;
  usedByStyles: string[];
  fontCount: number;
  onSelect: (key: FontCategoryKey) => void;
}

export const FontFamilyCard: React.FC<FontFamilyCardProps> = ({
  categoryKey,
  category,
  usedByStyles,
  fontCount,
  onSelect,
}) => {
  return (
    <button
      type="button"
      className="kc"
      onClick={() => onSelect(categoryKey)}
      aria-label={`Open ${category.displayName} type guide`}
    >
      <div className="aa" style={{ fontFamily: `'${category.exampleFont}', system-ui, sans-serif` }}>
        Aa
      </div>
      <h3>{category.displayName}</h3>
      <p>{category.description}</p>
      <small>
        {category.exampleFont}. Used by {usedByStyles.length}: {usedByStyles.join(', ')}
      </small>
      <span className="ex">Explore {fontCount} fonts, motion and colour &rarr;</span>
    </button>
  );
};
