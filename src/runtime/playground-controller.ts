/**
 * ============================================================================
 * RUNTIME: PLAYGROUND CONTROLLER
 * ============================================================================
 *
 * @self-contained
 * This function runs INSIDE the live code playground window. It is serialized
 * via Function.prototype.toString() into the playground HTML string.
 *
 * Provides tab switching between CSS and GSAP motion code, debounced live preview,
 * tab indentation support, reset, run, and copy functionality.
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function playgroundController(css: string, js: string, pvh: string, shell: string): void {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const $ = (s: string) => document.querySelector(s) as any;
  const ta = $('#ta') as HTMLTextAreaElement;
  const fr = $('#fr') as HTMLIFrameElement;
  const er = $('#er') as HTMLElement;
  const tabs = [...document.querySelectorAll<HTMLButtonElement>('.tabs button')];

  const src = [css, js];
  const val = [css, js];
  let k = 0;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let t: any;
  ta.value = css;
  fr.srcdoc = shell;

  const runCss = () => {
    er.textContent = '';
    const styleEl = fr.contentDocument?.getElementById('u');
    if (styleEl) styleEl.textContent = val[0];
  };

  const runJs = () => {
    er.textContent = '';
    const w = fr.contentWindow as any;
    const d = fr.contentDocument;
    if (!w || !d) return;
    const g = w.gsap;
    if (!g) {
      er.textContent = 'GSAP did not load';
      return;
    }

    g.globalTimeline.clear();
    g.globalTimeline.timeScale(matchMedia('(prefers-reduced-motion:reduce)').matches ? 50 : 1);
    const root = d.getElementById('root');
    if (root) root.innerHTML = pvh;
    const q = (s: string) => d.querySelector(s);
    const sl = [...d.querySelectorAll<HTMLElement>('.car .card')];
    g.set(sl, { autoAlpha: 0 });
    if (sl[0]) g.set(sl[0], { autoAlpha: 1 });

    try {
      new w.Function('gsap', 'btn', 'card', 'check', 'slides', 'next', 'prev', val[1])(
        g,
        q('#b'),
        q('#c'),
        q('#b path'),
        sl,
        q('#nx'),
        q('#pb')
      );
    } catch (e: any) {
      er.textContent = 'Motion: ' + e.message;
    }
  };

  const go = () => (k ? runJs() : runCss());

  fr.onload = () => {
    runCss();
    runJs();
  };

  tabs.forEach((b, j) => {
    b.onclick = () => {
      val[k] = ta.value;
      k = j;
      ta.value = val[k];
      tabs.forEach((x, m) => x.setAttribute('aria-selected', m === j ? 'true' : 'false'));
      er.textContent = '';
    };
  });

  ta.oninput = () => {
    val[k] = ta.value;
    clearTimeout(t);
    t = setTimeout(go, k ? 350 : 120);
  };

  ta.onkeydown = (e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      document.execCommand('insertText', false, '  ');
    }
  };

  const rn = $('#rn');
  if (rn) rn.onclick = go;
  const rs = $('#rs');
  if (rs) {
    rs.onclick = () => {
      val[k] = src[k];
      ta.value = src[k];
      go();
    };
  }
  const cp = $('#cp');
  if (cp) {
    cp.onclick = () => {
      try {
        navigator.clipboard.writeText(ta.value);
        er.textContent = 'Copied';
      } catch {
        er.textContent = 'Select the text and copy it';
      }
    };
  }
}
