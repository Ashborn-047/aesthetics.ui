/**
 * ============================================================================
 * COMPONENT: HERO CONTENT
 * ============================================================================
 *
 * Left column of the hero section:
 * - Animated headline
 * - Description paragraph
 * - Call to Action buttons
 * - Live animated stat counters
 */

import React from 'react';

export const HeroContent: React.FC = () => {
  return (
    <div className="in">
      <h1>
        <span className="ln">
          <span>Design that</span>
        </span>
        <span className="ln">
          <span>feels like</span>
        </span>
        <span className="ln">
          <span>something.</span>
        </span>
      </h1>
      <p>
        Tokens, palettes, font pairings, component CSS, motion presets and live code for 22 interface aesthetics.
        Built for designers and engineers who care how software looks.
      </p>
      <div className="cta">
        <a className="cb" href="#showcase">
          Explore showcase
        </a>
        <a className="cb g" href="#fonts">
          Choosing type
        </a>
      </div>
      <div className="st">
        <div>
          <b data-n="22">22</b>
          <span>Aesthetics</span>
        </div>
        <div>
          <b data-n="44">44</b>
          <span>Palettes</span>
        </div>
        <div>
          <b data-n="34">34</b>
          <span>Fonts</span>
        </div>
        <div>
          <b data-n="100">100%</b>
          <span>Free &amp; Open</span>
        </div>
      </div>
    </div>
  );
};
