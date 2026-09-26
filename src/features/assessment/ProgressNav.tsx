import { Check } from 'lucide-react';
import { CATEGORIES } from './categoryConfig';

interface ProgressNavProps {
  currentIndex: number;
  onSelect: (index: number) => void;
}

export default function ProgressNav({ currentIndex, onSelect }: ProgressNavProps) {
  return (
    <div className="mb-8 overflow-x-auto">
      <div className="flex items-center min-w-max md:min-w-0 md:justify-between gap-1 md:gap-2">
        {CATEGORIES.map((category, index) => {
          const isComplete = index < currentIndex;
          const isCurrent = index === currentIndex;
          const Icon = category.icon;

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => onSelect(index)}
              className="flex items-center gap-2 group"
            >
              <span
                className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-colors ${
                  isCurrent
                    ? 'bg-[var(--color-ca-lime)] border-[var(--color-ca-lime)] text-[var(--color-ca-main)]'
                    : isComplete
                    ? 'bg-[var(--color-ca-mint)]/20 border-[var(--color-ca-mint)] text-[var(--color-ca-mint)]'
                    : 'border-[#23382D] text-[var(--color-ca-text-secondary)] group-hover:border-[var(--color-ca-mint)]'
                }`}
              >
                {isComplete ? <Check size={16} /> : <Icon size={16} />}
              </span>
              <span
                className={`hidden lg:inline text-xs font-medium whitespace-nowrap transition-colors ${
                  isCurrent ? 'text-[var(--color-ca-text-primary)]' : 'text-[var(--color-ca-text-secondary)] group-hover:text-white'
                }`}
              >
                {category.navLabel}
              </span>
              {index < CATEGORIES.length - 1 && <span className="w-4 md:w-8 h-px bg-[#23382D] mx-1" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}
