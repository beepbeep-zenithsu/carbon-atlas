import { useEffect, useRef } from 'react';

/**
 * CustomCursor — ports the portfolio's `initCursor()` behaviour:
 * a small lime dot that snaps to the pointer, and a rotor ring that
 * eases toward it (lerp factor 0.17, same as the source), growing when
 * it crosses an interactive element.
 *
 * Skips itself entirely on touch devices and under reduced motion,
 * exactly like the source guarded on `(hover: hover) and (pointer: fine)`.
 */
const HOT_SELECTOR = 'a, button, input, textarea, select, [role="button"], [data-cursor-hot]';

interface CustomCursorProps {
  reduceMotion: boolean;
}

export default function CustomCursor({ reduceMotion }: CustomCursorProps) {
  const sliceRef = useRef<SVGSVGElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduceMotion) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const slice = sliceRef.current;
    const dot = dotRef.current;
    if (!slice || !dot) return;

    document.body.classList.add('ca-cursor-on');

    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let sx = tx;
    let sy = ty;
    let raf: number | null = null;

    function follow() {
      sx += (tx - sx) * 0.17;
      sy += (ty - sy) * 0.17;
      slice!.style.transform = `translate3d(${sx}px, ${sy}px, 0)`;
      if (Math.abs(tx - sx) > 0.4 || Math.abs(ty - sy) > 0.4) {
        raf = requestAnimationFrame(follow);
      } else {
        raf = null;
      }
    }

    function onMove(e: MouseEvent) {
      tx = e.clientX;
      ty = e.clientY;
      dot!.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;

      const hot = (e.target as Element | null)?.closest(HOT_SELECTOR);
      document.body.classList.toggle('ca-cursor-hot', !!hot);

      if (!raf) raf = requestAnimationFrame(follow);
    }

    function onLeave() {
      document.body.classList.remove('ca-cursor-on');
    }
    function onEnter() {
      document.body.classList.add('ca-cursor-on');
    }

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      document.body.classList.remove('ca-cursor-on', 'ca-cursor-hot');
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduceMotion]);

  if (reduceMotion) return null;

  return (
    <>
      <svg
        ref={sliceRef}
        viewBox="0 0 40 40"
        aria-hidden="true"
        className="ca-cursor pointer-events-none fixed top-0 left-0 z-[9000] w-[34px] h-[34px] -mt-[17px] -ml-[17px] opacity-0 transition-[opacity,width,height,margin] duration-[400ms]"
      >
        <g stroke="var(--color-ca-lime)" strokeWidth={1.3} fill="none" opacity={0.95}>
          <circle cx="20" cy="20" r="14" />
          <circle cx="20" cy="20" r="11" />
          <path d="M20 6v28M6 20h28M10.1 10.1l19.8 19.8M29.9 10.1L10.1 29.9" />
        </g>
      </svg>
      <div
        ref={dotRef}
        aria-hidden="true"
        className="ca-cursor pointer-events-none fixed top-0 left-0 z-[9000] w-[5px] h-[5px] -mt-[2.5px] -ml-[2.5px] rounded-full opacity-0 transition-opacity duration-[400ms] bg-[var(--color-ca-lime)]"
      />
    </>
  );
}
