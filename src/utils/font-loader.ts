/**
 * ============================================================================
 * FONT LOADER & PREVIEW BINDER
 * ============================================================================
 *
 * Dynamically loads Google Fonts on-demand by injecting a <link> stylesheet,
 * and binds preview chips (`.fch`) inside cards to update the card's font live.
 */

/**
 * Loads a Google Font dynamically by injecting a `<link rel="stylesheet">`
 * into `<head>` if not already present.
 *
 * @param fontName - Google Font family name, e.g. "Space Grotesk"
 */
export function loadGoogleFont(fontName: string): void {
  if (typeof document === 'undefined') return;
  const existing = document.querySelector(`link[data-f="${fontName}"]`);
  if (!existing) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.dataset.f = fontName;
    link.href = `https://fonts.googleapis.com/css2?family=${fontName.replace(/ /g, '+')}&display=swap`;
    document.head.appendChild(link);
  }
}

/**
 * Attaches click handlers to all `.fch` font preview chips within a root element.
 * When clicked, loads the font on demand, updates `.fsp` font-family and `.fnm` label,
 * and sets `aria-pressed="true"` on the clicked chip.
 *
 * @param root - Optional container element or document
 */
export function bindFontChips(root: HTMLElement | Document = document): void {
  root.querySelectorAll<HTMLButtonElement>('.fch').forEach((button) => {
    button.onclick = () => {
      const font = button.dataset.f;
      if (!font) return;
      const card = button.closest<HTMLElement>('.fcard, .slide');
      if (!card) return;

      loadGoogleFont(font);

      const preview = card.querySelector<HTMLElement>('.fsp');
      if (preview) {
        preview.style.fontFamily = `'${font}', system-ui, sans-serif`;
      }

      const fontNameLabel = card.querySelector<HTMLElement>('.fnm');
      if (fontNameLabel) {
        fontNameLabel.textContent = font;
      }

      card.querySelectorAll<HTMLButtonElement>('.fch').forEach((chip) => {
        chip.setAttribute('aria-pressed', chip === button ? 'true' : 'false');
      });
    };
  });
}

/**
 * Self-contained version of fontBind serialized into generated pages.
 * Keep this self-contained with no external imports!
 */
export const fontBindFnString = `function fontBind(root){(root||document).querySelectorAll('.fch').forEach(b=>b.onclick=()=>{const f=b.dataset.f,c=b.closest('.fcard,.slide');if(!c)return;if(!document.querySelector('link[data-f="'+f+'"]')){const l=document.createElement('link');l.rel='stylesheet';l.dataset.f=f;l.href='https://fonts.googleapis.com/css2?family='+f.replace(/ /g,'+')+'&display=swap';document.head.appendChild(l)}const sp=c.querySelector('.fsp');if(sp)sp.style.fontFamily="'"+f+"',system-ui,sans-serif";const nm=c.querySelector('.fnm');if(nm)nm.textContent=f;c.querySelectorAll('.fch').forEach(x=>x.setAttribute('aria-pressed',x===b))})}`;
