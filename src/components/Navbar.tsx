/**
 * ============================================================================
 * COMPONENT: NAVBAR
 * ============================================================================
 *
 * Fixed top navigation header with branding and navigation anchors.
 */

import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="top">
      <div className="wrap tin">
        <b>Style Handbook</b>
        <a href="#showcase">Showcase</a>
        <a href="#fonts">Fonts</a>
      </div>
    </nav>
  );
};
