/**
 * RotorMark — the circle + crosshair glyph used throughout the issmam
 * portfolio (logo monogram, boot loader, cursor). Ported here as one
 * shared component so every place that needs the "brand rotor" draws
 * the exact same shape.
 *
 * Pass `spin` to give it the slow always-on rotation used for the brand
 * mark in the portfolio's header (26s, linear, paused under reduced motion).
 */
interface RotorMarkProps {
  size?: number;
  spin?: boolean;
  className?: string;
}

export default function RotorMark({ size = 32, spin = false, className = '' }: RotorMarkProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      aria-hidden="true"
      className={className}
    >
      <g
        stroke="var(--color-ca-lime)"
        strokeWidth={1.8}
        fill="none"
        className={spin ? 'motion-safe:animate-spin [animation-duration:26s]' : ''}
        style={{ transformOrigin: '50% 50%' }}
      >
        <circle cx="32" cy="32" r="23" />
        <circle cx="32" cy="32" r="17.5" />
        <path d="M32 9v46M9 32h46M15.7 15.7l32.6 32.6M48.3 15.7L15.7 48.3" />
      </g>
      <circle cx="32" cy="32" r="8.6" fill="var(--color-ca-main)" />
      <text
        x="32"
        y="36.4"
        textAnchor="middle"
        fontFamily="var(--font-heading)"
        fontSize="10.5"
        fontWeight="700"
        fill="var(--color-ca-lime)"
      >
        CA
      </text>
    </svg>
  );
}
