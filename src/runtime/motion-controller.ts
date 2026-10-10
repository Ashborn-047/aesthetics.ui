/**
 * ============================================================================
 * RUNTIME: MOTION CONTROLLER
 * ============================================================================
 *
 * @self-contained
 * This function runs INSIDE the style guide window/iframe. It is serialized
 * via Function.prototype.toString() into the guide's HTML string.
 *
 * DO NOT import external modules inside this function.
 * It expects window.gsap to be loaded globally via CDN.
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function motionController(c: any): void {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const g = (window as any).gsap;
  if (!g) return;
  if (matchMedia('(prefers-reduced-motion:reduce)').matches) {
    g.globalTimeline.timeScale(50);
  }

  const $ = (s: string) => document.querySelector(s) as HTMLElement;
  const b = $('#mb');
  const lab = b.querySelector('span') as HTMLElement;
  const ck = b.querySelector('path') as SVGPathElement;
  const mc = $('#mc');
  const mi = $('#mi');
  const st = (t: string) => {
    const el = $('#ms');
    if (el) el.textContent = 'State: ' + t;
  };

  b.style.position = 'relative';
  b.style.overflow = 'hidden';
  g.set(ck, { strokeDashoffset: 1 });

  const bs = getComputedStyle(b).boxShadow;
  const ib = getComputedStyle(mi).boxShadow;
  const r0 = g.getProperty(b, 'rotation');
  const isn =
    c.fx === 'inset'
      ? c.sh
          .split(', ')
          .map((s: string) => 'inset ' + s)
          .join(', ')
      : '';

  if (c.fx === 'glow') {
    g.set(b, { filter: 'drop-shadow(0 0 0px ' + c.ac + ')' });
  }

  let on = 0;

  b.onpointerenter = () => {
    on = 1;
    st('hover');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const v: any = { y: c.hy, scale: c.hs, duration: c.d, ease: c.e };
    if (c.fx === 'glow') v.filter = 'drop-shadow(0 0 12px ' + c.ac + ')';
    if (c.fx === 'tilt') v.rotation = r0 + g.utils.random(-3, 3);
    g.to(b, v);
  };

  b.onpointerleave = () => {
    on = 0;
    st('idle');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const v: any = { y: 0, x: 0, scaleX: 1, scaleY: 1, duration: c.d, ease: c.e };
    if (c.fx === 'glow') v.filter = 'drop-shadow(0 0 0px ' + c.ac + ')';
    if (c.fx === 'tilt') v.rotation = r0;
    if (c.fx === 'inset') v.boxShadow = bs;
    g.to(b, v);
  };

  b.onpointerdown = () => {
    st('pressed');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const v: any = { x: c.px, y: (on ? c.hy : 0) + c.px, duration: 0.1, ease: 'power2.out' };
    if (c.fx === 'squish') {
      v.scaleX = 1.1;
      v.scaleY = c.ps;
    } else {
      v.scaleX = v.scaleY = c.ps;
    }
    if (c.fx === 'inset') v.boxShadow = isn;
    g.to(b, v);

    if (c.fx === 'glitch') {
      g.fromTo(b, { x: -5 }, { x: 5, duration: 0.04, repeat: 7, yoyo: true, ease: 'none', onComplete: () => g.set(b, { x: 0 }) });
    }
  };

  b.onpointerup = () => {
    st(on ? 'hover' : 'idle');
    const s = on ? c.hs : 1;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const v: any = { x: 0, y: on ? c.hy : 0, scaleX: s, scaleY: s, duration: c.d, ease: c.e };
    if (c.fx === 'inset') v.boxShadow = bs;
    g.to(b, v);
  };

  b.addEventListener('click', (e: MouseEvent) => {
    const r = b.getBoundingClientRect();
    const d = document.createElement('i');
    d.style.cssText =
      'position:absolute;pointer-events:none;border-radius:50%;background:currentColor;width:40px;height:40px;margin:-20px;left:' +
      (e.clientX - r.left) +
      'px;top:' +
      (e.clientY - r.top) +
      'px';
    b.appendChild(d);
    g.fromTo(d, { scale: 0, opacity: 0.35 }, { scale: 6, opacity: 0, duration: 0.6, ease: 'power2.out', onComplete: () => d.remove() });
    st('success');
    lab.textContent = 'Saved';
    g.to(ck, { strokeDashoffset: 0, duration: 0.4, ease: 'power2.out' });
    setTimeout(() => {
      lab.textContent = 'Save changes';
      g.to(ck, { strokeDashoffset: 1, duration: 0.2 });
      st(on ? 'hover' : 'idle');
    }, 1600);
  });

  mc.onpointerenter = () => g.to(mc, { y: -8, duration: c.d, ease: c.e });
  mc.onpointerleave = () => g.to(mc, { y: 0, duration: c.d, ease: c.e });
  mi.onfocus = () => g.to(mi, { scale: 1.03, boxShadow: '0 0 0 4px ' + c.rg, duration: c.d, ease: c.e });
  mi.onblur = () => g.to(mi, { scale: 1, boxShadow: ib, duration: c.d, ease: c.e });

  const sl = [...document.querySelectorAll<HTMLElement>('.car .card')];
  const dt = [...document.querySelectorAll<HTMLElement>('.dt')];
  let cur = 0;
  let busy = 0;
  g.set(sl, { autoAlpha: 0 });
  if (sl[0]) g.set(sl[0], { autoAlpha: 1 });

  const go = (n: number, dir: number) => {
    if (busy || n === cur) return;
    const f = { ...(c.t.from || c.t[0]) };
    const o = { ...(c.t.out || c.t[2]) };
    const dd = Math.max(c.d, 0.35);
    if (c.c === 'slide') {
      f.x *= dir;
      o.x *= dir;
    }
    if (c.c === 'stack') {
      f.rotation *= dir;
      o.rotation *= dir;
    }
    if (c.c === 'flip') {
      f.rotationY *= dir;
      o.rotationY *= dir;
    }
    busy = 1;
    g.to(sl[cur], { ...o, duration: dd, ease: c.e });
    g.fromTo(sl[n], f, { ...(c.t.to || c.t[1]), duration: dd, ease: c.e, onComplete: () => (busy = 0) });
    if (dt[cur]) dt[cur].style.opacity = '0.3';
    if (dt[n]) dt[n].style.opacity = '1';
    cur = n;
  };

  const nx = $('#nx');
  if (nx) nx.onclick = () => go((cur + 1) % 3, 1);
  const pv = $('#pv');
  if (pv) pv.onclick = () => go((cur + 2) % 3, -1);
  dt.forEach((d, k) => (d.onclick = () => go(k, k > cur ? 1 : -1)));

  const pgb = $('#pgb');
  if (pgb) {
    pgb.onclick = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const win = (window.opener || window.parent) as any;
      if (!win || !win.pgHTML) return;
      const h = win.pgHTML(c.i);
      const w = window.open('', '_blank');
      if (w) {
        w.document.write(h);
        w.document.close();
      } else {
        document.open();
        document.write(h);
        document.close();
      }
    };
  }
}
