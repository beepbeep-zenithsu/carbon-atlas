import { useEffect, useRef } from 'react';

/**
 * Full-bleed hero background for the landing page.
 *
 * Uses a self-hosted looping video (silent) that covers the entire hero
 * area, with a brand-tinted overlay on top so the hero text stays readable.
 *
 * Autoplay is only allowed by browsers when the video is muted, so the
 * video is always muted + looped + playsInline. If the user has
 * "prefers-reduced-motion" enabled we pause the video on the first frame
 * instead of animating it — the hero still looks intentional, just static.
 *
 * The video file lives at: public/videos/landing.mp4
 * The BASE_URL prefix keeps the path correct both in dev and after
 * deploying to GitHub Pages (base: '/carbon-atlas/' in vite.config.ts).
 */
export default function HeroVideoBackground({ reduceMotion }: { reduceMotion: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (reduceMotion) {
      // Freeze on the first frame.
      video.pause();
      video.currentTime = 0;
      return;
    }

    // Some browsers ignore the `autoPlay` attribute after a remount or
    // route change, so nudge it explicitly. The catch swallows the
    // "play() was blocked" rejection — the first frame is still visible.
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        /* Autoplay was blocked; leave the first frame visible. */
      });
    }
  }, [reduceMotion]);

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src={`${import.meta.env.BASE_URL}videos/landing.mp4`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      {/* Darken/tint so hero text stays readable over the video. */}
      <div className="absolute inset-0 bg-[var(--color-ca-main)]/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-ca-main)]/20 via-transparent to-[var(--color-ca-main)]" />
    </div>
  );
}