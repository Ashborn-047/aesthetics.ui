/**
 * ============================================================================
 * COMPONENT: STYLE SLIDE
 * ============================================================================
 *
 * Individual carousel slide card within the pinned showcase section.
 * Themed with dynamic CSS variables for background, text, accent, font,
 * border-radius, and box-shadow.
 *
 * Supports live font switching via interactive preview chips.
 */

import React, { useState } from 'react';
import { MOOD_LABELS } from '../../types/data';
import { FONT_CATEGORIES } from '../../data/font-pairings';
import { loadGoogleFont } from '../../utils/font-loader';
import { pickReadable } from '../../utils/color';
import type { StyleDefinition, GuideConfig, FontPairing, FontType } from '../../types/data';

interface StyleSlideProps {
  style: StyleDefinition;
  config: GuideConfig;
  pairing: FontPairing;
  fontType: FontType;
  index: number;
  total: number;
  isActive?: boolean;
  onOpenGuide: (index: number) => void;
}

export const StyleSlide: React.FC<StyleSlideProps> = ({
  style,
  config,
  pairing,
  fontType,
  index,
  total,
  isActive = false,
  onOpenGuide,
}) => {
  const [activeFont, setActiveFont] = useState(style.font);

  const moodName = MOOD_LABELS[config.mood] || 'Style';
  const categoryName = FONT_CATEGORIES[fontType.category]?.displayName || 'Sans-serif';
  const buttonLabelColor = pickReadable([style.background, style.foreground], style.accent);

  const fontOptions: [string, string][] = [
    [style.font, fontType.headingClass],
    ...fontType.similar.map((s): [string, string] => [s.name, s.classification]),
  ];

  const handleFontSelect = (fontName: string) => {
    loadGoogleFont(fontName);
    setActiveFont(fontName);
  };

  const paletteDots = [style.background, style.accent, style.foreground, ...config.supportColors];

  return (
    <article
      className={`slide ${isActive ? 'is-active' : ''}`}
      style={
        {
          '--bg': style.background,
          '--fg': style.foreground,
          '--ac': style.accent,
          '--f': `'${activeFont}'`,
          '--r': config.radius,
          '--sh': config.shadow,
          '--lb': buttonLabelColor,
        } as React.CSSProperties
      }
    >
      <span className="idx">
        {String(index + 1).padStart(2, '0')} / {total} · {moodName} · {categoryName}
      </span>

      <div>
        <h3 className="nm fsp">{style.name}</h3>
        <p className="ds">{style.description}</p>
      </div>

      <div className="tb">
        <span className="tl2">
          Type: <span className="fnm">{activeFont}</span>
        </span>
        <p className="tcl">
          {fontType.headingClass}. Body font: {pairing.bodyFont}, {fontType.bodyClass}. Click a similar font to preview it.
        </p>
        <div className="cs">
          {fontOptions.map(([fName, fLabel]) => (
            <button
              key={fName}
              type="button"
              className="fch"
              data-f={fName}
              aria-pressed={activeFont === fName}
              onClick={() => handleFontSelect(fName)}
            >
              {fName}
              <small>{fLabel}</small>
            </button>
          ))}
        </div>
      </div>

      <div className="mu">
        <span className="mb" aria-hidden="true">
          Button
        </span>
        <span className="mc" aria-hidden="true" />
        <span className="dots" aria-hidden="true">
          {paletteDots.map((c, i) => (
            <i key={i} style={{ background: c }} />
          ))}
        </span>
        <button type="button" className="go" onClick={() => onOpenGuide(index)}>
          Open guide
        </button>
      </div>
    </article>
  );
};
