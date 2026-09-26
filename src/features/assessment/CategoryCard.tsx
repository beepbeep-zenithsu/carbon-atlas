import { useFormContext } from 'react-hook-form';
import type { CategoryConfig, SubsectionConfig } from './categoryConfig';
import type { AssessmentFormData } from './AssessmentContext';

function SubsectionField({ sub }: { sub: SubsectionConfig }) {
  const { register, watch, setValue } = useFormContext<AssessmentFormData>();

  if (sub.kind === 'yesno-number') {
    const flagValue = watch(`flags.${sub.id}` as any) as boolean | undefined;
    return (
      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-[var(--color-ca-text-primary)]">{sub.question}</label>
          {sub.details && sub.details.length > 0 && (
            <ul className="mt-1.5 space-y-0.5 text-xs text-[var(--color-ca-text-secondary)] list-disc list-inside">
              {sub.details.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
          )}
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => setValue(`flags.${sub.id}` as any, true, { shouldValidate: true })}
            className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
              flagValue
                ? 'bg-[var(--color-ca-lime)] text-[var(--color-ca-main)] border-[var(--color-ca-lime)]'
                : 'border-[#23382D] text-[var(--color-ca-text-secondary)] hover:text-white'
            }`}
          >
            Yes
          </button>
          <button
            type="button"
            onClick={() => setValue(`flags.${sub.id}` as any, false, { shouldValidate: true })}
            className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
              flagValue === false
                ? 'bg-[#23382D] text-white border-[#23382D]'
                : 'border-[#23382D] text-[var(--color-ca-text-secondary)] hover:text-white'
            }`}
          >
            No
          </button>
        </div>

        {flagValue && (
          <div className="flex items-center gap-3 pt-2">
            <input
              type="number"
              min="0"
              step="any"
              placeholder={sub.placeholder}
              {...register(`values.${sub.id}` as any, { valueAsNumber: true })}
              className="w-full md:w-1/2 bg-[var(--color-ca-elevated)] border border-[#23382D] rounded-lg px-4 py-2.5 focus:outline-none focus:border-[var(--color-ca-lime)] transition-colors"
            />
            <span className="text-[var(--color-ca-text-secondary)] font-medium text-sm whitespace-nowrap">{sub.unitLabel}</span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <div>
        <label className="block text-sm font-medium text-[var(--color-ca-text-primary)]">{sub.question}</label>
        {sub.details && sub.details.length > 0 && (
          <ul className="mt-1.5 space-y-0.5 text-xs text-[var(--color-ca-text-secondary)] list-disc list-inside">
            {sub.details.map((d, i) => <li key={i}>{d}</li>)}
          </ul>
        )}
      </div>
      <div className="flex items-center gap-3">
        <input
          type="number"
          min="0"
          step="any"
          placeholder={sub.placeholder}
          {...register(`values.${sub.id}` as any, { valueAsNumber: true })}
          className="w-full md:w-1/2 bg-[var(--color-ca-elevated)] border border-[#23382D] rounded-lg px-4 py-2.5 focus:outline-none focus:border-[var(--color-ca-lime)] transition-colors"
        />
        <span className="text-[var(--color-ca-text-secondary)] font-medium text-sm whitespace-nowrap">{sub.unitLabel}</span>
      </div>
    </div>
  );
}

export default function CategoryCard({ category }: { category: CategoryConfig }) {
  const Icon = category.icon;

  return (
    <div className="ca-glass rounded-2xl overflow-hidden">
      {/* The scroll container needs the height cap + overflow-y-auto on
          itself (not on the outer wrapper) — putting max-h/overflow-hidden
          on the outer div instead clips everything past 70vh rather than
          letting you scroll to it, which is why content below "Diesel
          Consumption" (and the equivalent later sections on every other
          module page) was unreachable. */}
      <div className="p-6 md:p-10 overflow-y-auto max-h-[70vh]">
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-12 h-12 rounded-xl bg-[var(--color-ca-elevated)] flex items-center justify-center text-[var(--color-ca-lime)]">
              <Icon size={24} />
            </div>
            <div>
              <h2 className="ca-heading-gradient text-2xl font-heading mb-1">{category.title}</h2>
              <p className="text-sm text-[var(--color-ca-text-secondary)]">{category.description}</p>
            </div>
          </div>

          {/* Category banner image — sized as an actual photo, not a
              passport-sized thumbnail. */}
          <img
            src={category.image}
            alt={category.imageAlt}
            className="shrink-0 hidden sm:block w-28 h-36 md:w-40 md:h-52 object-cover rounded-xl border border-[#23382D] shadow-[0_8px_24px_rgba(0,0,0,0.5)]"
          />
        </div>

        {category.subGroups ? (
          <div className="space-y-10">
            {category.subGroups.map(group => (
              <div key={group.label} className="space-y-6">
                <div className="border-l-2 border-[var(--color-ca-lime)]/40 pl-3">
                  <h3 className="text-base font-semibold text-[var(--color-ca-text-primary)]">{group.label}</h3>
                  {group.description && (
                    <p className="text-xs text-[var(--color-ca-text-secondary)] mt-0.5">{group.description}</p>
                  )}
                </div>
                <div className="space-y-8 pl-3">
                  {group.subsections.map(sub => <SubsectionField key={sub.id} sub={sub} />)}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-8">
            {(category.subsections ?? []).map(sub => <SubsectionField key={sub.id} sub={sub} />)}
          </div>
        )}
      </div>
    </div>
  );
}