/**
 * AuroraLayer — ports the portfolio's #veil-aurora / #veil-grain / #veil-vignette
 * stack: soft coloured blobs drifting slowly behind the page, a film-grain
 * overlay, and a vignette that darkens the edges. Pure CSS, mounted once at
 * the app root, sitting behind everything (z-index -20).
 *
 * Unlike the original single-look version, this one takes a `variant` prop
 * (see auroraVariants.ts) so every page/category gets its own colour
 * combination, blob count and drift speed instead of one background reused
 * everywhere. Drift timing is applied via inline `animation` styles rather
 * than Tailwind arbitrary-value classes, since the durations/delays are now
 * computed per variant at runtime (Tailwind's class scanner can only ever
 * see literal strings, not runtime-built ones) — the `ca-aurora-drift`
 * keyframes themselves still live in src/index.css.
 */
import { useEffect, useState, type CSSProperties } from 'react';
import { AURORA_PALETTES, type AuroraVariant } from './auroraVariants';

const NOISE_SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180">' +
  '<filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch"/>' +
  '<feColorMatrix type="saturate" values="0"/></filter>' +
  '<rect width="180" height="180" filter="url(%23n)"/></svg>';

/** Position/size for up to 3 blob slots. A palette with 2 colours just uses the first two. */
const SLOTS = [
  {
    wrapClass: 'absolute -top-[14%] -left-[10%] w-[52vw] h-[52vw] rounded-full blur-[90px]',
    opacity: 0.6,
    gradient: (color: string) => `radial-gradient(circle at 35% 35%, ${color}, transparent 72%)`,
  },
  {
    wrapClass: 'absolute -right-[12%] -bottom-[16%] w-[46vw] h-[46vw] rounded-full blur-[90px]',
    opacity: 0.6,
    gradient: (color: string) => `radial-gradient(circle at 60% 40%, ${color}, transparent 70%)`,
  },
  {
    wrapClass: 'absolute top-[6%] left-[54%] w-[42vw] h-[42vw] rounded-full blur-[90px]',
    opacity: 0.7,
    gradient: (color: string) => `radial-gradient(circle at 50% 50%, ${color}, transparent 74%)`,
  },
];

interface AuroraLayerProps {
  reduceMotion: boolean;
  variant: AuroraVariant;
}

export default function AuroraLayer({ reduceMotion, variant }: AuroraLayerProps) {
  const palette = AURORA_PALETTES[variant];

  // Cross-fade between palettes when the variant changes (e.g. navigating
  // between categories) instead of the colours snapping instantly.
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    setVisible(false);
    const id = window.setTimeout(() => setVisible(true), 20);
    return () => window.clearTimeout(id);
  }, [variant]);

  return (
    <div aria-hidden="true" className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0 transition-opacity duration-700 ease-out"
        style={{ opacity: visible ? 1 : 0 }}
      >
        {/* Full-bleed colour wash, tied to the page's dominant colour. The
            SLOTS blobs below are corner/mid-screen accents — on a wide
            viewport with a centred, fairly narrow content column (the
            assessment cards, for instance), there's a lot of screen real
            estate none of those corner blobs actually reach, which is why
            that space was rendering as flat, static colour instead of
            moving/tinted like the rest of the page. This layer sits behind
            them and guarantees every part of the screen has some of the
            page's colour and motion, not just the corners. */}
        <span
          className="absolute inset-0"
          style={{
            background: `radial-gradient(140% 120% at 50% 35%, ${palette.colors[0]}, transparent 78%)`,
            opacity: 0.55,
            animation: reduceMotion ? undefined : `ca-aurora-drift ${palette.speeds[0] * 1.6}s ease-in-out infinite`,
            animationDelay: reduceMotion ? undefined : `${palette.delays[0]}s`,
          }}
        />

        {palette.colors.map((color, i) => {
          const slot = SLOTS[i % SLOTS.length];
          const style: CSSProperties = {
            background: slot.gradient(color),
            opacity: slot.opacity,
          };
          if (!reduceMotion) {
            style.animation = `ca-aurora-drift ${palette.speeds[i]}s ease-in-out infinite`;
            style.animationDelay = `${palette.delays[i]}s`;
          }
          return <span key={i} className={slot.wrapClass} style={style} />;
        })}
      </div>

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(130% 100% at 50% 0%, transparent 42%, rgba(0,0,0,0.42) 100%), ' +
            'radial-gradient(120% 110% at 50% 100%, transparent 46%, rgba(0,0,0,0.36) 100%)',
        }}
      />

      {/* Film grain */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,${NOISE_SVG}")`,
          backgroundSize: '180px 180px',
        }}
      />
    </div>
  );
}
