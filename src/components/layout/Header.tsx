import { NavLink } from 'react-router-dom';
import { CATEGORIES } from '../../features/assessment/categoryConfig';
import RotorMark from '../ambient/RotorMark';

interface HeaderProps {
  reduceMotion: boolean;
  setReduceMotion: (v: boolean) => void;
}

export default function Header({ reduceMotion, setReduceMotion }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--color-ca-main)]/90 backdrop-blur-md border-b border-[var(--color-ca-panel)]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 h-16 flex items-center justify-between gap-4">
        <NavLink to="/" className="flex items-center gap-2 shrink-0">
          <RotorMark size={32} spin />
          <span className="ca-heading-gradient font-heading text-lg font-medium">Carbon Atlas</span>
        </NavLink>

        <nav className="hidden lg:flex gap-5 text-xs font-medium text-[var(--color-ca-text-secondary)] overflow-x-auto">
          {CATEGORIES.map(category => (
            <NavLink
              key={category.id}
              to={`/assessment/${category.id}`}
              className={({ isActive }) =>
                `whitespace-nowrap transition-colors hover:text-[var(--color-ca-lime)] ${isActive ? 'text-[var(--color-ca-lime)]' : ''}`
              }
            >
              {category.navLabel}
            </NavLink>
          ))}
          <NavLink
            to="/report"
            className={({ isActive }) =>
              `whitespace-nowrap transition-colors hover:text-[var(--color-ca-mint)] ${isActive ? 'text-[var(--color-ca-mint)]' : ''}`
            }
          >
            Carbon Report
          </NavLink>
        </nav>

        <div className="flex items-center shrink-0">
          <label className="flex items-center gap-2 text-xs text-[var(--color-ca-text-secondary)] cursor-pointer">
            <input
              type="checkbox"
              checked={reduceMotion}
              onChange={(e) => setReduceMotion(e.target.checked)}
              className="accent-[var(--color-ca-lime)]"
            />
            <span className="hidden sm:inline">Reduce Motion</span>
          </label>
        </div>
      </div>
    </header>
  );
}