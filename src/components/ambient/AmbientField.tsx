import { useEffect, useRef } from 'react';

/**
 * AmbientField — ports the portfolio's `Field` object: a lattice of dots,
 * each orbiting its home slot on its own phase, with a spotlight that
 * lifts a local pool of alpha near the cursor. Resting alpha stays low
 * on purpose so page content always wins.
 *
 * Reads the CSS colour variable named by `hueVar` (default --color-ca-lime)
 * at mount time so the dots always match the current theme without
 * hardcoding a colour here. Pass a different `hueVar` per page/section to
 * give the dot field its own tint alongside AuroraLayer's per-page palette.
 */
const GAP = 28; // lattice spacing
const SWING = 5; // orbit radius
const BASE = 0.045; // resting alpha
const PEAK = 0.55; // extra alpha at the cursor
const REACH = 300; // spotlight radius

interface Dot {
  hx: number;
  hy: number;
  ph: number;
}

interface AmbientFieldProps {
  reduceMotion: boolean;
  hueVar?: string;
}

export default function AmbientField({ reduceMotion, hueVar = '--color-ca-lime' }: AmbientFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let dots: Dot[] = [];
    let mx = -9999;
    let my = -9999;
    let raf: number | null = null;

    const themeColor = getComputedStyle(document.documentElement).getPropertyValue(hueVar).trim();
    const hue = hexToRgbTriplet(themeColor) ?? '183,255,90';

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      dots = [];
      for (let y = GAP * 0.5; y < height; y += GAP) {
        for (let x = GAP * 0.5; x < width; x += GAP) {
          dots.push({ hx: x, hy: y, ph: (x * 0.021 + y * 0.017) % 6.283 });
        }
      }
      draw(0);
    }

    function draw(t: number) {
      ctx!.clearRect(0, 0, width, height);
      for (const d of dots) {
        const w = t * 0.55 + d.ph;
        const x = d.hx + Math.cos(w) * SWING;
        const y = d.hy + Math.sin(w * 1.3) * SWING;
        const prox = Math.max(0, 1 - Math.hypot(x - mx, y - my) / REACH);
        const e = prox * prox;
        ctx!.fillStyle = `rgba(${hue},${(BASE + e * PEAK).toFixed(3)})`;
        const r = 0.65 + e * 1.9;
        ctx!.fillRect(x - r, y - r, r * 2, r * 2);
      }
    }

    function tick(ms: number) {
      draw(ms / 1000);
      raf = requestAnimationFrame(tick);
    }

    function onMove(e: MouseEvent) {
      const overContent = (e.target as Element | null)?.closest(
        'a, button, input, textarea, [role="button"], [data-cursor-hot], .no-ambient-spotlight',
      );
      if (overContent) {
        mx = -9999;
        my = -9999;
      } else {
        mx = e.clientX;
        my = e.clientY;
      }
    }

    function onLeave() {
      mx = -9999;
      my = -9999;
    }

    resize();
    window.addEventListener('resize', resize);
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);

    if (!reduceMotion) {
      raf = requestAnimationFrame(tick);
    }

    return () => {
      window.removeEventListener('resize', resize);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduceMotion, hueVar]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
}

/** Accepts either a `#rrggbb` hex colour or an `rgb(a)(...)` string and
 *  returns a bare "r,g,b" triplet, since AURORA_PALETTES' glow variables
 *  are defined as rgba(...) rather than hex. */
function hexToRgbTriplet(color: string): string | null {
  const value = color.trim();

  const hexMatch = /^#([0-9a-f]{6})$/i.exec(value);
  if (hexMatch) {
    const n = parseInt(hexMatch[1], 16);
    return `${(n >> 16) & 255},${(n >> 8) & 255},${n & 255}`;
  }

  const rgbMatch = /^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/i.exec(value);
  if (rgbMatch) {
    return `${rgbMatch[1]},${rgbMatch[2]},${rgbMatch[3]}`;
  }

  return null;
}
