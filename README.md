<div align="center">

# ✦ aesthetics.ui

### The Interface Style Handbook & Living Design System

<p align="center">
  A comprehensive UI/UX reference, design token system, and live code playground exploring <b>22 iconic web design aesthetics</b>.
</p>

[![Deploy to GitHub Pages](https://github.com/Ashborn-047/aesthetics.ui/actions/workflows/deploy.yml/badge.svg)](https://github.com/Ashborn-047/aesthetics.ui/actions/workflows/deploy.yml)
[![CI Check](https://github.com/Ashborn-047/aesthetics.ui/actions/workflows/ci.yml/badge.svg)](https://github.com/Ashborn-047/aesthetics.ui/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![React 19](https://img.shields.io/badge/React-19.2-61dafb?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646cff?logo=vite&logoColor=white)](https://vitejs.dev/)
[![GSAP](https://img.shields.io/badge/GSAP-3.12-88ce02?logo=greensock&logoColor=white)](https://greensock.com/)

**[🚀 Live Demo](https://ashborn-047.github.io/aesthetics.ui/)** · **[📖 Architecture Docs](docs/architecture.md)** · **[🤝 Contributing](CONTRIBUTING.md)** · **[🐛 Report a Bug](https://github.com/Ashborn-047/aesthetics.ui/issues)**

</div>

---

## 🌟 What is aesthetics.ui?

**aesthetics.ui** is a living design handbook and developer reference built to demystify web styling. Rather than generic templates, it deconstructs **22 distinct design movements** into actionable tokens, color harmonies, typographic pairings, motion curves, and starter CSS components.

Whether you're building a futuristic Cybercore dashboard, a retro Y2K landing page, a clean Swiss Design portal, or a warm tactile Scrapbook app, this handbook gives you instant specifications, WCAG contrast checks, and live sandboxes to experiment in real-time.

---

## 🎨 The 22 Curated Aesthetics

| # | Aesthetic | Mood | Primary Font | Visual Signature |
|---|-----------|------|--------------|-------------------|
| **01** | **Claymorphism** | Soft | Nunito | Puffy 3D shapes from paired inset and outer shadows with pastel tones. |
| **02** | **Cybercore** | Dark | Orbitron | Cyan glow, angled cut corners, near-black surfaces, techno type. |
| **03** | **Neo-Brutalism** | Bold | Space Grotesk | Thick black outlines, hard offset shadows, high saturation, zero blur. |
| **04** | **Scrapbook** | Retro | Caveat | Paper textures, tilted cards, tape strips, handwritten fonts. |
| **05** | **Surrealism** | Calm | DM Serif Display | Dreamlike organic curves, warped proportions, unexpected geometries. |
| **06** | **Y2K Aesthetic** | Retro | Righteous | Glossy gel buttons, chrome gradients, baby blue, magenta and bubble type. |
| **07** | **Pixel Art** | Retro | Press Start 2P | Bitmap fonts, hard stepping shadows, 8-bit limited palettes. |
| **08** | **Synthwave** | Dark | Audiowide | 80s neon magenta and cyan, sunset gradients, retro-futurist perspective. |
| **09** | **Glassmorphism** | Soft | Plus Jakarta Sans | Frosted translucent glass panels, vivid backdrop blur, thin light borders. |
| **10** | **Neumorphism** | Soft | Poppins | Soft extruded surfaces with paired dark/light shadows on monochromatic backgrounds. |
| **11** | **Bento Grid** | Calm | Manrope | Modular grid of rounded tiles with mixed column spans and high information density. |
| **12** | **Editorial Design** | Calm | Playfair Display | High-contrast serif headlines, elegant rules, drop caps, magazine structure. |
| **13** | **Swiss Design** | Bold | Archivo | Strict grid discipline, flush-left typography, massive scale contrast (red/black/white). |
| **14** | **Minimalism** | Calm | DM Sans | Extreme whitespace, ultra-light typographic weights, single-accent restraint. |
| **15** | **Maximalism** | Bold | Bowlby One | Loud clashing palettes, heavy patterned borders, stacked pop shadows. |
| **16** | **Luxury Typography** | Dark | Cormorant Garamond | Gold on deep black, letter-spaced serif type, centered balance, quiet restraint. |
| **17** | **Conceptual Sketch** | Soft | Patrick Hand | Wobbly hand-drawn outlines on ruled notebook paper, wireframe sketches. |
| **18** | **Ethereal** | Soft | Jost | Dreamy pastel haze, ambient glows instead of shadows, ultra-light typography. |
| **19** | **Dark Academia** | Dark | IM Fell English | Classical antique serif type, muted sepia tones, bookish textures, warm candlelight. |
| **20** | **Terminal / Hacker** | Dark | Share Tech Mono | Green phosphorus glow on monochrome black, monospace scanlines, CLI prompts. |
| **21** | **Japanese Minimal** | Calm | Zen Old Mincho | Asymmetric breathing space, organic serenity, earth-toned ink harmonies. |
| **22** | **Bauhaus** | Bold | Archivo | Primary geometric shapes (circle, square, triangle), stark red/yellow/blue palettes. |

---

## ⚡ Core Features

### 🕹️ 1. Interactive 3D Hero Preview & Palette Strip
* **Morphing Card**: Real-time CSS custom property interpolation morphs background, ink, accent, font, radius, and shadows instantly.
* **Autoplay & Manual Controls**: Auto-cycles through aesthetics or jump manually with previous/next buttons.
* **Draggable Swatches**: Interactive GSAP Draggable style swatches you can toss around the screen.
* **22-Color Strip**: Hover any swatch to immediately morph the preview card.

### 📜 2. Horizontal Pinned Carousel (`Showcase`)
* **GSAP ScrollTrigger**: Pinned viewport track scrubbing smoothly through all 22 aesthetic slides.
* **Dynamic Background Tinting**: Smooth background color transitions based on each active style.
* **Interactive Typography Chips**: Switch heading fonts live on any card to preview pairing options.
* **Slide Counter & Navigation**: Quick previous/next navigation buttons (`‹ 01 / 22 ›`).

### 🛠️ 3. Full Style Guides & Live Code Playground
Every aesthetic includes an in-depth standalone guide and live playground:
* **Token Exporter**: One-click copying for CSS Custom Properties, JSON tokens, and Tailwind configuration.
* **Modular Type Scale**: Visual preview of Display, Title, Body, and Caption ratios.
* **Color Harmony & WCAG Contrast**: Real-time contrast ratios calculated against WCAG 2.1 AA/AAA thresholds.
* **Interactive Motion Lab**: Real-time GSAP hover, press, focus, and carousel transitions with configurable ease and duration.
* **Split-Screen Playground**: Edit tokens, CSS components, and motion code live in an interactive sandbox with real-time preview updates.
* **Effortless Navigation**: Floating side arrows, top nav bar, and keyboard shortcuts (<kbd>←</kbd> / <kbd>→</kbd>) to cycle between styles.

### 🔤 4. Choosing Type & Typography Lab
* **Curated Type Categories**: Humanist Sans, Geometric Sans, Modern Serif, Monospace, and Display scripts.
* **Interactive Type Lab**: Sliders for font-size, weight, letter-spacing, line-height, text color, and background color.
* **Font Fallback Stacks**: Production-ready CSS font-family fallback chains.

### 🎭 5. Two-Part Footer & Word Art Colophon
* **Part 1 (Interactive Deck)**: 
  * *Discovery Card*: "Surprise me" random aesthetic picker and instant mood buttons (`Soft`, `Dark`, `Bold`, `Calm`, `Retro`).
  * *Directory Card*: Quick links and full feature overview.
* **Part 2 (Signature Colophon)**:
  * The iconic **Style Handbook** multi-font typography banner featuring hover tilt, lift, and scroll reveal animations.

---

## 🏗️ Architecture & Technology Stack

Built with a modular, scalable architecture separating content, styling, and runtimes:

```
aesthetics.ui/
├── index.html                      # Entry HTML with Google Fonts & GSAP CDN
├── vite.config.ts                  # Vite config with relative base for GitHub Pages
├── tsconfig.json                   # Strict TypeScript compiler options
├── package.json                    # Scripts & dependencies
├── docs/
│   └── architecture.md             # In-depth architectural decisions
│
└── src/
    ├── main.tsx                    # React application root
    ├── App.tsx                     # Top-level state & modal overlay manager
    │
    ├── css/                        # Deeply modular CSS architecture
    │   ├── index.css               # Central stylesheet importing all modules
    │   ├── base/                   # Reset, CSS variables, typography defaults
    │   ├── layout/                 # Hero, showcase, marquee, type-section, footer
    │   ├── components/             # Navbar, buttons, cards, swatches, overlay
    │   └── responsive/             # Tablet, mobile, and prefers-reduced-motion
    │
    ├── types/
    │   └── data.ts                 # Strongly typed TypeScript interfaces
    │
    ├── data/                       # Structured aesthetic databases
    │   ├── styles.ts               # Core tokens & component CSS overrides
    │   ├── guide-config.ts         # Moods, radius, shadows, grid rules, dos/avoids
    │   ├── motion-presets.ts       # GSAP eases, durations, hover/press parameters
    │   ├── palettes.ts             # 66 curated color harmonies
    │   ├── font-pairings.ts        # Typography pairings & similar fonts
    │   └── type-guide-data.ts      # Specs, variable fonts, contrast pairings
    │
    ├── utils/                      # Helper libraries
    │   ├── color.ts                # WCAG luminance, contrast ratio & role pickers
    │   ├── clipboard.ts            # One-click copy with visual feedback
    │   └── font-loader.ts          # On-demand Google Fonts dynamic injector
    │
    ├── generators/                 # Standalone HTML string builders
    │   ├── css-templates.ts        # Base CSS and guide stylesheet templates
    │   ├── guide-page.ts           # Standalone style guide generator
    │   ├── playground-page.ts      # Split-screen code playground generator
    │   └── type-guide-page.ts      # Interactive Type Lab page generator
    │
    ├── runtime/                    # Self-contained iframe execution engines
    │   ├── motion-controller.ts    # GSAP motion engine for style guides
    │   ├── playground-controller.ts# Live CSS/JS code editor & preview engine
    │   └── type-guide-controller.ts# Type Lab variable controls engine
    │
    └── components/                 # Clean, focused React components
        ├── Navbar.tsx
        ├── Hero/                   # Hero, StylePreview, ColorStrip, FloatingCards
        ├── Marquee.tsx             # Infinite typography marquee
        ├── Showcase/               # Pinned horizontal carousel & StyleSlide
        ├── TypographySection/      # Type family categories & TypeCard
        ├── GuideOverlay.tsx        # Accessible modal iframe overlay
        └── Footer/                 # Interactive deck & FooterWordArt
```

---

## 🚀 Getting Started

### Prerequisites
* **Node.js** (v18.0.0 or higher)
* **npm** (v9.0.0 or higher)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Ashborn-047/aesthetics.ui.git
   cd aesthetics.ui
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173/](http://localhost:5173/) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview the production build**:
   ```bash
   npm run preview
   ```

---

## 🌐 Deploying to GitHub Pages

This repository is pre-configured with a zero-config GitHub Actions workflow (`.github/workflows/deploy.yml`):

1. **Push your code to GitHub**:
   ```bash
   git push origin main
   ```
2. **Enable GitHub Pages**:
   * Navigate to your repository on GitHub: **Settings** $\rightarrow$ **Pages**.
   * Under **Build and deployment** $\rightarrow$ **Source**, select **GitHub Actions**.
3. **Live Deployment**:
   * Every commit pushed to `main` automatically triggers the build and deploys to:
     ```
     https://<your-username>.github.io/aesthetics.ui/
     ```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! If you have an aesthetic you'd like to add or an enhancement to propose:

1. Check the [Contributing Guidelines](CONTRIBUTING.md).
2. Open an issue using the [Aesthetic Proposal Template](.github/ISSUE_TEMPLATE/aesthetic_request.md).
3. Submit a pull request!

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

<div align="center">
  <sub>Crafted with passion for the web design community · 2026</sub>
</div>
