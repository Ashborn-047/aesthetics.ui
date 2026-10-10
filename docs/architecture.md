# Architecture: Interface Style Handbook — Vite + React + TypeScript

> **Reference document** — this file describes the project structure, design decisions,
> TypeScript types, and constraints. Keep it updated as the project evolves.

---

## Original Source

The project was originally a single 105KB monolithic HTML file: `design-aesthetics.html`

It contains:
- **22 design aesthetics** (Claymorphism, Cybercore, Neo-Brutalism, etc.)
- Each with: tokens, palettes, font pairings, component CSS, motion settings
- A landing page with hero, horizontal carousel, font family section, footer
- Dynamically generated pages: **style guides**, **code playgrounds**, **type guides**
- GSAP 3.12.5 animations (ScrollTrigger, Draggable)

---

## Project Structure

```
design-aesthetics/              ← Vite project root
├── index.html                  ← Vite entry point (minimal)
├── vite.config.ts
├── tsconfig.json
├── package.json
│
├── docs/
│   └── architecture.md         ← THIS FILE
│
├── src/
│   ├── main.tsx                ← React entry point
│   ├── App.tsx                 ← Root component, overlay state
│   │
│   ├── css/
│   │   ├── base/
│   │   │   ├── reset.css           # Box-sizing, html/body margin reset
│   │   │   ├── variables.css       # :root custom properties (--pad, --edge)
│   │   │   └── typography.css      # Base font, body text defaults
│   │   │
│   │   ├── layout/
│   │   │   ├── hero.css            # Hero grid, orbs, stats counter
│   │   │   ├── showcase.css        # Horizontal carousel, pinned scroll, slides
│   │   │   ├── marquee.css         # Infinite scrolling text rows
│   │   │   ├── typography-section.css  # "Choosing type" font family grid
│   │   │   └── footer.css          # Footer CTA, links grid, word art, bottom bar
│   │   │
│   │   ├── components/
│   │   │   ├── navbar.css          # Fixed top nav bar
│   │   │   ├── buttons.css         # .cb, .go, .ar buttons
│   │   │   ├── cards.css           # .slide, .fc floating cards, .kc font cards
│   │   │   ├── color-strip.css     # #sp colour swatch strip
│   │   │   ├── style-preview.css   # .mp morphing preview card
│   │   │   ├── overlay.css         # #ov full-screen guide overlay + iframe
│   │   │   ├── progress-bar.css    # .pgb scroll progress bar
│   │   │   └── font-chips.css      # .fch font preview chips
│   │   │
│   │   └── responsive/
│   │       ├── tablet.css          # @media max-width: 980px
│   │       ├── mobile.css          # @media max-width: 700px, 560px
│   │       └── reduced-motion.css  # @media prefers-reduced-motion
│   │
│   ├── types/
│   │   └── data.ts                 # TypeScript interfaces for all data shapes
│   │
│   ├── data/
│   │   ├── styles.ts               # STYLES array (was `S`) — fully typed & commented
│   │   ├── guide-config.ts         # GUIDE_CONFIG array (was `G`)
│   │   ├── motion-presets.ts       # MOTION_PRESETS (was `M`), TRANSITIONS (was `T`)
│   │   ├── palettes.ts             # PALETTES array (was `PAL`)
│   │   ├── font-pairings.ts        # FONT_PAIRINGS (was `FP`), FONT_TYPES (was `FT`), FONT_CATEGORIES (was `KD`)
│   │   └── type-guide-data.ts      # TYPE_GUIDE_DATA (was `TD`), DEMO_ANIMATIONS (was `DM`)
│   │
│   ├── utils/
│   │   ├── color.ts                # luminance(), contrastRatio(), chroma(), pickReadable(), assignRoles()
│   │   ├── clipboard.ts            # copyToClipboard() utility
│   │   └── font-loader.ts          # loadGoogleFont() on-demand loader
│   │
│   ├── generators/
│   │   ├── guide-page.ts           # generateGuide(i) — builds full guide HTML string
│   │   ├── playground-page.ts      # generatePlayground(i) — builds playground HTML
│   │   ├── type-guide-page.ts      # generateTypeGuide(key) — builds type guide HTML
│   │   └── css-templates.ts        # BASE_CSS, GUIDE_CSS, PLAYGROUND_CSS, TYPE_GUIDE_CSS constants
│   │
│   ├── runtime/
│   │   ├── motion-controller.ts    # motion() — SELF-CONTAINED, serialized into guide
│   │   ├── playground-controller.ts # play() — SELF-CONTAINED, serialized into playground
│   │   └── type-guide-controller.ts # tyPage() — SELF-CONTAINED, serialized into type guide
│   │
│   └── components/
│       ├── Navbar.tsx              # Top fixed navigation
│       ├── Hero/
│       │   ├── Hero.tsx            # Hero section container
│       │   ├── HeroContent.tsx     # Title, subtitle, CTA, stats
│       │   ├── StylePreview.tsx    # Morphing style preview card
│       │   ├── ColorStrip.tsx      # 22-color swatch strip
│       │   └── FloatingCards.tsx   # Draggable floating sample cards
│       ├── Marquee.tsx             # Infinite scrolling style names
│       ├── Showcase/
│       │   ├── Showcase.tsx        # Horizontal carousel section (GSAP ScrollTrigger)
│       │   └── StyleSlide.tsx      # Individual carousel slide
│       ├── TypographySection/
│       │   ├── TypographySection.tsx # "Choosing type" section
│       │   └── FontFamilyCard.tsx  # Clickable font family card
│       ├── Footer/
│       │   ├── Footer.tsx          # Footer container
│       │   ├── FooterCTA.tsx       # "Not sure where to start?" CTA
│       │   └── FooterWordArt.tsx   # Multi-font "Style Handbook" text
│       └── GuideOverlay.tsx        # Full-screen overlay with iframe for guides
│
└── README.md
```

## Key Decisions

1. **GSAP integration with React** — Imperative animations using `useRef` and `useEffect`.
2. **Generated pages stay as string builders** — Injected into iframes via `srcdoc` or popup windows.
3. **Runtime functions marked `@self-contained`** — Serialized with `.toString()` into generated pages.
