import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useAssessment } from '../assessment/AssessmentContext';
import { CATEGORY_ORDER } from '../assessment/categoryConfig';
import HeroVideoBackground from './HeroVideoBackground';

gsap.registerPlugin(useGSAP);

export default function LandingFeature({ reduceMotion }: { reduceMotion: boolean }) {
  const container = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { loadDemoData } = useAssessment();

  useGSAP(() => {
    if (reduceMotion) return;

    gsap.fromTo('.hero-text',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" }
    );
  }, { scope: container, dependencies: [reduceMotion] });

  return (
    <div
      ref={container}
      className="relative w-full min-h-[calc(100vh-4rem)] flex items-center border-b border-[var(--color-ca-panel)] overflow-hidden"
    >
      <HeroVideoBackground reduceMotion={reduceMotion} />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-ca-panel)] to-transparent opacity-50 pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-16 md:py-20 relative z-10 w-full">
        <div className="max-w-2xl">
          <h1 className="hero-text ca-heading-gradient text-4xl md:text-6xl font-heading font-bold leading-tight mb-6">
            Understand your facility's carbon footprint.
          </h1>
          <p className="hero-text text-lg md:text-xl text-[var(--color-ca-text-secondary)] mb-8">
            Answer a short set of operational questions across six areas of your business and get a clear footprint report with practical ways to reduce it.
          </p>
          <div className="hero-text flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              onClick={() => navigate(`/assessment/${CATEGORY_ORDER[0]}`)}
              className="inline-flex justify-center items-center h-11 px-6 rounded-lg bg-[var(--color-ca-lime)] text-[var(--color-ca-main)] font-semibold hover:bg-[#ff4d78] transition-colors"
            >
              Start Assessment
            </button>
            <button
              type="button"
              className="inline-flex justify-center items-center h-11 px-6 rounded-lg border border-[var(--color-ca-panel)] bg-[var(--color-ca-elevated)] text-[var(--color-ca-text-primary)] font-medium hover:border-[var(--color-ca-mint)] transition-colors"
              onClick={() => {
                loadDemoData();
                navigate(`/assessment/${CATEGORY_ORDER[0]}`);
              }}
            >
              Try an example
            </button>
          </div>
        </div>
      </div>

      {/* Decorative wireframe orb fallback for missing 3D */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-64 h-64 border border-[var(--color-ca-panel)] rounded-full hidden lg:block opacity-20 pointer-events-none">
        <div className="absolute inset-4 border border-[var(--color-ca-panel)] rounded-full"></div>
        <div className="absolute inset-10 border border-[var(--color-ca-panel)] rounded-full"></div>
      </div>
    </div>
  );
}