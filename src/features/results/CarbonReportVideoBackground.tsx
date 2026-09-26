import { useEffect, useRef } from 'react';

/**
 * Full-bleed background video for the carbon report page.
 *
 * Mirrors HeroVideoBackground from the landing feature: a silent, looping,
 * self-hosted video that covers the entire page area with a brand-tinted
 * overlay on top so the report content stays readable.
 *
 * Autoplay is only allowed by browsers when the video is muted, so the
 * video is always muted + looped + playsInline. If the user has
 * "prefers-reduced-motion" enabled, we pause on the first frame instead.
 *
 * The video file lives at: public/videos/report.mp4
 * The BASE_URL prefix keeps the path correct both in dev and after
 * deploying to GitHub Pages (base: '/carbon-atlas/' in vite.config.ts).
 */
export default function CarbonReportVideoBackground({ reduceMotion }: { reduceMotion: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (reduceMotion) {
      video.pause();
      video.currentTime = 0;
      return;
    }

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
        src={`${import.meta.env.BASE_URL}videos/report.mp4`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      {/* Darken/tint so report content stays readable over the video. */}
      <div className="absolute inset-0 bg-[var(--color-ca-main)]/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-ca-main)]/30 via-transparent to-[var(--color-ca-main)]" />
    </div>
  );
}