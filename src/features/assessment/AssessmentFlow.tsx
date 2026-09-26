import { useRef, useState } from 'react';
import { useNavigate, useParams, Navigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { useFormContext } from 'react-hook-form';
import { ArrowLeft, ArrowRight, FileBarChart } from 'lucide-react';
import { CATEGORIES, CATEGORY_ORDER, getCategoryIndex } from './categoryConfig';
import { useAssessment, type AssessmentFormData } from './AssessmentContext';
import CategoryCard from './CategoryCard';
import ProgressNav from './ProgressNav';

const flipVariants = {
  initial: (direction: number) => ({ opacity: 0, rotateY: direction >= 0 ? 90 : -90 }),
  animate: { opacity: 1, rotateY: 0 },
  exit: (direction: number) => ({ opacity: 0, rotateY: direction >= 0 ? -90 : 90 }),
};

export default function AssessmentFlow() {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const { computeResult } = useAssessment();
  const { watch, setValue } = useFormContext<AssessmentFormData>();
  const currentPeriod = watch('period');

  const currentIndex = getCategoryIndex(categoryId);
  const category = CATEGORIES[currentIndex];
  const directionRef = useRef(0);
  const [direction, setDirection] = useState(0);

  if (!categoryId || !CATEGORY_ORDER.includes(categoryId as any)) {
    return <Navigate to={`/assessment/${CATEGORY_ORDER[0]}`} replace />;
  }

  const goTo = (index: number) => {
    const clamped = Math.min(Math.max(index, 0), CATEGORIES.length - 1);
    directionRef.current = clamped >= currentIndex ? 1 : -1;
    setDirection(directionRef.current);
    navigate(`/assessment/${CATEGORY_ORDER[clamped]}`);
  };

  const handleNext = () => {
    if (currentIndex === CATEGORIES.length - 1) {
      computeResult();
      navigate('/report');
      return;
    }
    goTo(currentIndex + 1);
  };

  const handleBack = () => goTo(currentIndex - 1);

  return (
    <div className="max-w-[1200px] mx-auto w-full px-4 md:px-6 py-16">
      <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <p className="text-sm text-[var(--color-ca-text-secondary)]">
          Module {currentIndex + 1} of {CATEGORIES.length}
        </p>
        <div className="flex bg-[var(--color-ca-elevated)] rounded-lg p-1">
          <button
            type="button"
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${currentPeriod === 'monthly' ? 'bg-[#23382D] text-white' : 'text-[var(--color-ca-text-secondary)] hover:text-white'}`}
            onClick={() => setValue('period', 'monthly')}
          >
            Monthly
          </button>
          <button
            type="button"
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${currentPeriod === 'annual' ? 'bg-[#23382D] text-white' : 'text-[var(--color-ca-text-secondary)] hover:text-white'}`}
            onClick={() => setValue('period', 'annual')}
          >
            Annual
          </button>
        </div>
      </div>

      <ProgressNav currentIndex={currentIndex} onSelect={goTo} />

      <div style={{ perspective: 1600 }}>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={category.id}
            custom={direction}
            variants={flipVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' }}
          >
            <CategoryCard category={category} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-between mt-10">
        {currentIndex > 0 ? (
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-[#23382D] text-[var(--color-ca-text-secondary)] hover:text-white hover:bg-[var(--color-ca-elevated)] transition-colors"
          >
            <ArrowLeft size={16} /> Back
          </button>
        ) : (
          <div />
        )}

        <button
          type="button"
          onClick={handleNext}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[var(--color-ca-lime)] text-[var(--color-ca-main)] font-semibold hover:bg-[#c4ff73] transition-colors"
        >
          {currentIndex === CATEGORIES.length - 1 ? (
            <>
              <FileBarChart size={16} /> Generate Carbon Report
            </>
          ) : (
            <>
              Next Module <ArrowRight size={16} />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
