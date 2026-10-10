/**
 * ============================================================================
 * RUNTIME: TYPE GUIDE CONTROLLER
 * ============================================================================
 *
 * @self-contained
 * This function runs INSIDE the typography family guide window. It is serialized
 * via Function.prototype.toString() into the type guide HTML string.
 *
 * Drives the interactive Type Lab (sliders for size, weight, tracking, line-height,
 * live contrast checker) and typography animation demos (letter stagger, word reveal,
 * weight shifts on variable fonts, typewriter, wave, shine).
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function typeGuideController(c: any): void {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const $ = (s: string) => document.querySelector(s) as any;
  const $$ = (s: string) => [...document.querySelectorAll(s)] as HTMLElement[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const g = (window as any).gsap;

  const L = (h: string) => {
    const v = [1, 3, 5].map((k) => {
      const x = parseInt(h.substr(k, 2), 16) / 255;
      return x <= 0.03928 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * v[0] + 0.7152 * v[1] + 0.0722 * v[2];
  };

  const R = (a: string, b: string) => {
    const x = L(a);
    const y = L(b);
    return ((Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05)).toFixed(1);
  };

  const grid = $('#fg');
  const set = (k: string, v: string) => grid.style.setProperty(k, v);
  const ids = ['lsz', 'lwt', 'ltr', 'llh', 'lfc', 'lbg'];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const def: Record<string, any> = { lsz: 40, lwt: 400, ltr: 0, llh: 1.15, lfc: '#f1eee8', lbg: '#2b2b2b' };

  const upd = () => {
    const v = (id: string) => $('#' + id).value;
    set('--sz', v('lsz') + 'px');
    set('--wt', v('lwt'));
    set('--tr', v('ltr') + 'em');
    set('--lh', v('llh'));
    set('--fc', v('lfc'));
    set('--bg2', v('lbg'));

    const r = +R(v('lfc'), v('lbg'));
    const statusText = r >= 7 ? 'AAA' : r >= 4.5 ? 'AA' : r >= 3 ? 'large text only' : 'fails';
    $('#lro').textContent = r + ':1, ' + statusText;
    ['lsz', 'lwt', 'ltr', 'llh'].forEach((id) => {
      const el = $('#' + id + 'v');
      if (el) el.textContent = v(id);
    });
  };

  ids.forEach((id) => {
    const el = $('#' + id);
    if (el) el.oninput = upd;
  });

  const ltx = $('#ltx');
  if (ltx) {
    ltx.oninput = (e: any) => {
      $$('.sp').forEach((s) => (s.textContent = e.target.value || 'Type something'));
    };
  }

  const lrs = $('#lrs');
  if (lrs) {
    lrs.onclick = () => {
      ids.forEach((id) => {
        const el = $('#' + id);
        if (el) el.value = def[id];
      });
      if (ltx) ltx.value = 'Design that feels like something';
      $$('.sp').forEach((s) => (s.textContent = 'Design that feels like something'));
      upd();
    };
  }
  upd();

  const cp = (t: string, b: HTMLElement) => {
    const done = () => {
      const o = b.textContent;
      b.textContent = 'Copied';
      setTimeout(() => {
        b.textContent = o;
      }, 1200);
    };
    const fb = () => {
      const a = document.createElement('textarea');
      a.value = t;
      document.body.appendChild(a);
      a.select();
      try {
        document.execCommand('copy');
      } catch {}
      a.remove();
      done();
    };
    try {
      navigator.clipboard.writeText(t).then(done, fb);
    } catch {
      fb();
    }
  };

  $$('[data-cp]').forEach((b) => (b.onclick = () => cp(b.dataset.cp || '', b)));

  let cur = c.fonts[0];

  const split = (el: HTMLElement, m?: string) => {
    const t = el.dataset.t || '';
    const out: HTMLElement[] = [];
    el.innerHTML = '';
    if (m === 'w') {
      t.split(' ').forEach((w) => {
        const k = document.createElement('span');
        const i = document.createElement('span');
        k.style.cssText = 'display:inline-block;overflow:hidden;vertical-align:bottom';
        i.style.display = 'inline-block';
        i.textContent = w + '\u00a0';
        k.appendChild(i);
        el.appendChild(k);
        out.push(i);
      });
    } else {
      [...t].forEach((ch) => {
        const s = document.createElement('span');
        s.style.display = 'inline-block';
        s.textContent = ch === ' ' ? '\u00a0' : ch;
        el.appendChild(s);
        out.push(s);
      });
    }
    return out;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const D: Record<string, (el: HTMLElement) => void> = {
    letters: (el) => g.from(split(el), { yPercent: 110, opacity: 0, stagger: 0.035, duration: 0.7, ease: 'power4.out' }),
    words: (el) => g.from(split(el, 'w'), { yPercent: 120, stagger: 0.12, duration: 0.9, ease: 'power4.out' }),
    weight: (el) => {
      split(el).forEach((s) => {
        s.style.fontWeight = '300';
        s.onpointerenter = () => g.to(s, { fontWeight: 900, duration: 0.25 });
        s.onpointerleave = () => g.to(s, { fontWeight: 300, duration: 0.6 });
      });
    },
    type: (el) => g.from(split(el), { autoAlpha: 0, duration: 0.01, stagger: 0.06 }),
    wave: (el) => g.to(split(el), { yPercent: -28, duration: 0.5, ease: 'sine.inOut', stagger: { each: 0.06, repeat: -1, yoyo: true } }),
    shine: (el) => {
      el.textContent = el.dataset.t || '';
      g.fromTo(el, { backgroundPosition: '200% 0' }, { backgroundPosition: '-200% 0', duration: 2.6, repeat: -1, ease: 'none' });
    },
  };

  $$('.stg').forEach((s) => (s.textContent = s.dataset.t || ''));

  const rm = matchMedia('(prefers-reduced-motion:reduce)').matches;
  const run = (el: HTMLElement) => {
    if (!g || !el) return;
    g.killTweensOf([el, ...el.querySelectorAll('span')]);
    el.style.fontFamily = "'" + (el.dataset.d === 'weight' ? c.vf : cur) + "'," + c.s;
    if (rm && el.dataset.d !== 'weight') {
      el.textContent = el.dataset.t || '';
      return;
    }
    const fn = D[el.dataset.d || ''];
    if (fn) fn(el);
  };

  $$('.rp').forEach((b) => (b.onclick = () => run($('.stg[data-d="' + b.dataset.d + '"]'))));

  const pickF = (f: string) => {
    cur = f;
    $$('.mfc').forEach((x) => x.setAttribute('aria-pressed', x.dataset.f === f ? 'true' : 'false'));
    $$('.stg').forEach(run);
  };

  $$('.mfc').forEach((b) => (b.onclick = () => pickF(b.dataset.f || '')));

  $$('[data-an]').forEach((b) => {
    b.onclick = () => {
      pickF(b.dataset.an || '');
      $('#motion').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion:reduce)').matches ? 'auto' : 'smooth' });
    };
  });

  if (typeof IntersectionObserver !== 'undefined') {
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          const target = e.target as HTMLElement;
          if (e.isIntersecting && !target.dataset.ran) {
            target.dataset.ran = '1';
            run(target);
          }
        }),
      { threshold: 0.4 }
    );
    $$('.stg').forEach((s) => io.observe(s));
  } else {
    $$('.stg').forEach(run);
  }
}
