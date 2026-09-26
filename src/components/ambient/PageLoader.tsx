import { useEffect, useState } from 'react';
import RotorMark from './RotorMark';

/**
 * PageLoader — ports the portfolio's #loader: a spinning rotor over a
 * thin progress bar, fading out once the app is ready. The source drives
 * its bar from real asset-load progress; here there's nothing async to
 * wait on, so it runs a short fixed fill and unmounts itself.
 */
interface PageLoaderProps {
  reduceMotion: boolean;
  onDone?: () => void;
}

export default function PageLoader({ reduceMotion, onDone }: PageLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (reduceMotion) {
      setDone(true);
      onDone?.();
      return;
    }

    const fillTimer = window.setTimeout(() => setProgress(100), 30);
    const doneTimer = window.setTimeout(() => {
      setDone(true);
      onDone?.();
    }, 700);

    return () => {
      window.clearTimeout(fillTimer);
      window.clearTimeout(doneTimer);
    };
  }, [reduceMotion, onDone]);

  if (reduceMotion) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[9500] grid place-items-center bg-[var(--color-ca-main)] transition-opacity duration-700 ${
        done ? 'opacity-0 invisible' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center gap-5">
        <RotorMark size={62} spin />
        <div className="w-[148px] h-[2px] rounded-full bg-[var(--color-ca-panel)] overflow-hidden">
          <i
            className="block h-full bg-[var(--color-ca-lime)] transition-[width] duration-300 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="font-mono text-[0.6rem] tracking-[0.28em] uppercase text-[var(--color-ca-text-secondary)]">
          Loading
        </span>
      </div>
    </div>
  );
}
