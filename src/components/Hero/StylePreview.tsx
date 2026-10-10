/**
 * ============================================================================
 * COMPONENT: STYLE PREVIEW CARD
 * ============================================================================
 *
 * Morphing preview card that responds to user navigation and colour strip hover.
 * Themed via dynamic CSS custom properties (--bg, --fg, --ac, --f, --r, --sh, --lb).
 * Features back-and-forth navigation arrows (‹ and ›) to cycle through the 22 aesthetics.
 */

import React from 'react';
import { MOOD_LABELS } from '../../types/data';
import type { StyleDefinition, GuideConfig } from '../../types/data';

interface StylePreviewProps {
  style: StyleDefinition;
  config: GuideConfig;
  index: number;
  total: number;
  onOpenGuide: (index: number) => void;
  onPrev: () => void;
  onNext: () => void;
  cardRef?: React.Ref<HTMLDivElement>;
}

export const StylePreview: React.FC<StylePreviewProps> = ({
  style,
  config,
  index,
  total,
  onOpenGuide,
  onPrev,
  onNext,
  cardRef,
}) => {
  const moodLabel = MOOD_LABELS[config.mood] || 'Style';

  return (
    <div
      ref={cardRef}
      className="mp"
      id="mp"
      style={
        {
          '--bg': style.background,
          '--fg': style.foreground,
          '--ac': style.accent,
          '--f': `'${style.font}'`,
          '--r': config.radius,
          '--sh': config.shadow,
        } as React.CSSProperties
      }
    >
      <div className="mph" id="mcat">
        {moodLabel} · {String(index + 1).padStart(2, '0')} / {total}
      </div>
      <h2 className="mn" id="mn">
        {style.name}
      </h2>
      <p className="mtx" id="mtx">
        {style.description}
      </p>

      {/* Interactive preview elements */}
      <div className="mu">
        <span className="mb" aria-hidden="true">
          Button
        </span>
        <span className="mc" aria-hidden="true" />
        <span className="mi" aria-hidden="true">
          you@studio.com
        </span>
      </div>

      {/* Navigation buttons: Previous arrow, Next arrow, Open guide */}
      <div className="mpn">
        <button
          type="button"
          className="ar"
          id="mpv"
          aria-label="Previous style"
          title="Previous style"
          onClick={onPrev}
        >
          &#8249;
        </button>
        <button
          type="button"
          className="ar"
          id="mnx"
          aria-label="Next style"
          title="Next style"
          onClick={onNext}
        >
          &#8250;
        </button>
        <button
          type="button"
          className="go"
          id="mgo"
          onClick={() => onOpenGuide(index)}
        >
          Open guide
        </button>
      </div>
    </div>
  );
};
