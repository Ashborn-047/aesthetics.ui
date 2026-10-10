/**
 * ============================================================================
 * COMPONENT: COLOR STRIP
 * ============================================================================
 *
 * 22-colour palette strip at the base of the hero.
 * Hovering morphs the preview card in real time; clicking opens the guide.
 */

import React from 'react';
import { STYLES } from '../../data/styles';

interface ColorStripProps {
  onHover: (index: number) => void;
  onClick: (index: number) => void;
}

export const ColorStrip: React.FC<ColorStripProps> = ({ onHover, onClick }) => {
  return (
    <div className="sw">
      <p className="hnt" id="hnt">
        Hover the colour strip to morph the card above. Click to open a guide. Drag the samples.
      </p>
      <div id="sp">
        {STYLES.map((style, idx) => (
          <button
            key={style.name}
            title={style.name}
            aria-label={style.name}
            style={
              {
                '--bg': style.background,
                '--ac': style.accent,
              } as React.CSSProperties
            }
            onPointerEnter={(e) => {
              if (e.pointerType === 'mouse') onHover(idx);
            }}
            onClick={() => onClick(idx)}
          />
        ))}
      </div>
    </div>
  );
};
