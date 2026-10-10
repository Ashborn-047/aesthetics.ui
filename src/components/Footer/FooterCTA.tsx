/**
 * ============================================================================
 * COMPONENT: FOOTER CTA
 * ============================================================================
 *
 * "Not sure where to start?" callout card with "Surprise me" random generator button.
 */

import React from 'react';

interface FooterCTAProps {
  onSurpriseMe: () => void;
}

export const FooterCTA: React.FC<FooterCTAProps> = ({ onSurpriseMe }) => {
  return (
    <div className="fcta">
      <div>
        <h3>Not sure where to start?</h3>
        <p>Let the handbook pick an interface style for you.</p>
      </div>
      <button type="button" className="cb" id="rnd" onClick={onSurpriseMe}>
        Surprise me
      </button>
    </div>
  );
};
