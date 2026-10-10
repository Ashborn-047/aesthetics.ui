/**
 * ============================================================================
 * COMPONENT: FLOATING CARDS
 * ============================================================================
 *
 * Draggable floating sample cards scattered around the morphing style preview.
 * Rendered with authentic tokens for Cybercore, Glassmorphism, Claymorphism,
 * Neo-Brutalism, and Pixel Art.
 */

import React from 'react';
import { STYLES } from '../../data/styles';
import { GUIDE_CONFIG } from '../../data/guide-config';

interface FloatingCardDef {
  styleIndex: number;
  left: string;
  top: string;
  rotation: number;
}

const FLOATING_DEFS: FloatingCardDef[] = [
  { styleIndex: 1, left: '8%', top: '-4%', rotation: -5 },
  { styleIndex: 8, left: '94%', top: '10%', rotation: 4 },
  { styleIndex: 0, left: '2%', top: '62%', rotation: -3 },
  { styleIndex: 2, left: '92%', top: '88%', rotation: 5 },
  { styleIndex: 6, left: '46%', top: '106%', rotation: -4 },
];

export const FloatingCards: React.FC = () => {
  return (
    <>
      {FLOATING_DEFS.map((def, idx) => {
        const style = STYLES[def.styleIndex];
        const config = GUIDE_CONFIG[def.styleIndex];
        return (
          <div
            key={idx}
            className="fc"
            style={
              {
                '--bg': style.background,
                '--fg': style.foreground,
                '--ac': style.accent,
                '--f': `'${style.font}'`,
                '--r': config.radius,
                '--sh': config.shadow,
                left: def.left,
                top: def.top,
                rotate: `${def.rotation}deg`,
              } as React.CSSProperties
            }
          >
            <span>{style.name}</span>
            <i className="s" />
          </div>
        );
      })}
    </>
  );
};
