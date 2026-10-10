# Contributing to aesthetics.ui

First off, thank you for considering contributing to **aesthetics.ui**! It's people like you that make this living handbook a rich reference for the entire web design and developer community.

---

## 🚀 How to Contribute

### 1. Reporting Bugs
- Search existing [Issues](https://github.com/Ashborn-047/aesthetics.ui/issues) to see if the problem has already been reported.
- If not, open a new issue describing the behavior, steps to reproduce, browser version, and screenshots if applicable.

### 2. Suggesting New Aesthetics or Features
- We welcome proposals for new UI aesthetics! When proposing a new style, consider providing:
  - Aesthetic name and mood code (`Soft`, `Dark`, `Bold`, `Calm`, `Retro`).
  - Core tokens (surface background, ink foreground, accent, primary font).
  - Component CSS overrides (buttons, cards, inputs).
  - Recommended font pairing and motion parameters.

### 3. Submitting Pull Requests

1. **Fork the repository** to your GitHub account.
2. **Clone your fork**:
   ```bash
   git clone https://github.com/<your-username>/aesthetics.ui.git
   cd aesthetics.ui
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Create a topic branch**:
   ```bash
   git checkout -b feature/my-new-aesthetic
   ```
5. **Make your changes** following our project conventions:
   - TypeScript for all application logic (`src/data/`, `src/types/`, `src/components/`).
   - Modular CSS organized under `src/css/base/`, `src/css/layout/`, `src/css/components/`, or `src/css/responsive/`.
   - Maintain type safety across all interfaces in `src/types/data.ts`.
6. **Verify the build and lint**:
   ```bash
   npm run lint
   npm run build
   ```
7. **Commit and push**:
   ```bash
   git commit -m "feat: add Memphis aesthetic guide and motion preset"
   git push origin feature/my-new-aesthetic
   ```
8. **Open a Pull Request** against the `main` branch.

---

## 🎨 Code Style & Guidelines

- **Zero Inline Styles in Components**: Use classes defined in `src/css/` design system files.
- **Self-Contained Generator Functions**: Any generator code serialized for iframes (`src/runtime/`) must remain `@self-contained` without external ES module imports.
- **Clean Commits**: Write descriptive, imperative commit messages (`feat: ...`, `fix: ...`, `docs: ...`).

Thank you for helping make the web more beautiful! ✦
