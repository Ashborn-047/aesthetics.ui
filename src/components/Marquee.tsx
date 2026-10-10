/**
 * ============================================================================
 * COMPONENT: MARQUEE
 * ============================================================================
 *
 * Infinite bidirectional scrolling typography banner.
 * Displays all 22 style names in their primary Google Font.
 * Row 1 scrolls forward; Row 2 scrolls reverse with hollow stroke lettering.
 */

import React from 'react';
import { STYLES } from '../data/styles';
import { lum, hx } from '../utils/color';

export const Marquee: React.FC = () => {
  const pickBrightest = (colors: string[]) => {
    return hx(colors.reduce((best, curr) => (lum(curr) > lum(best) ? curr : best)));
  };

  const items = STYLES.map((style) => ({
    name: style.name,
    font: style.font,
    color: pickBrightest([style.background, style.foreground, style.accent]),
  }));

  // Duplicate items for seamless continuous CSS animation
  const renderRow = (isReverse: boolean) => (
    <div className={`mqr ${isReverse ? 'r1' : 'r0'}`}>
      <div className="mqt">
        {items.concat(items).map((item, idx) => (
          <React.Fragment key={idx}>
            <span style={{ fontFamily: `'${item.font}', system-ui, sans-serif`, color: item.color }}>
              {item.name}
            </span>
            <b>✦</b>
          </React.Fragment>
        ))}
      </div>
    </div>
  );

  return (
    <section className="mq" aria-label="Style showcase ticker">
      {renderRow(false)}
      {renderRow(true)}
    </section>
  );
};
