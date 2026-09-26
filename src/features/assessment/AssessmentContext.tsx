import { createContext, useContext, useState, type ReactNode } from 'react';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ALL_SUBSECTIONS, DEMO_VALUES, DEMO_FLAGS } from './categoryConfig';
import { calculateEmissions } from '../../domain/calculate';
import type { ActivityInput, CalculationResult } from '../../domain/types';
import activityDefinitions from '../../data/activities.json';
import demoFactors from '../../data/demo/factors.json';
import projectData from '../../data/project.json';

const valuesShape = Object.fromEntries(
  ALL_SUBSECTIONS.map(s => [s.id, z.number().min(0, 'Must be zero or greater').optional()])
);

const flagsShape = Object.fromEntries(
  ALL_SUBSECTIONS
    .filter(s => s.kind === 'yesno-number')
    .map(s => [s.id, z.boolean().optional()])
);

export const assessmentFormSchema = z.object({
  period: z.enum(['monthly', 'annual']),
  values: z.object(valuesShape),
  flags: z.object(flagsShape),
});

export type AssessmentFormData = z.infer<typeof assessmentFormSchema>;

function buildDefaultValues(): AssessmentFormData {
  return {
    period: 'monthly',
    values: Object.fromEntries(ALL_SUBSECTIONS.map(s => [s.id, undefined])) as AssessmentFormData['values'],
    flags: Object.fromEntries(
      ALL_SUBSECTIONS.filter(s => s.kind === 'yesno-number').map(s => [s.id, false])
    ) as AssessmentFormData['flags'],
  };
}

interface AssessmentContextValue {
  result: CalculationResult | null;
  computeResult: () => CalculationResult | null;
  loadDemoData: () => void;
  restart: () => void;
}

const AssessmentContext = createContext<AssessmentContextValue | null>(null);

export function AssessmentProvider({ children }: { children: ReactNode }) {
  const methods = useForm<AssessmentFormData>({
    resolver: zodResolver(assessmentFormSchema),
    defaultValues: buildDefaultValues(),
    mode: 'onChange',
  });

  const [result, setResult] = useState<CalculationResult | null>(null);

  const computeResult = (): CalculationResult | null => {
    const data = methods.getValues();
    const inputs: ActivityInput[] = [];

    for (const activity of activityDefinitions as { id: string; group: ActivityInput['group']; defaultUnit: string }[]) {
      const rawValue = data.values[activity.id as keyof AssessmentFormData['values']];
      const flag = (data.flags as Record<string, boolean | undefined>)[activity.id];
      const isYesNo = flag !== undefined;

      if (isYesNo && !flag) continue; // "No" selected — exclude even if a stale number remains
      if (rawValue === undefined || rawValue === null || Number.isNaN(rawValue)) continue;

      inputs.push({
        id: activity.id,
        group: activity.group,
        value: rawValue,
        unit: activity.defaultUnit,
      });
    }

    try {
      const isDemo = projectData.activeMode === 'demo';
      const factors = isDemo ? demoFactors : [];
      const calcResult = calculateEmissions(
        inputs,
        factors as any,
        data.period,
        projectData.datasetVersion,
        isDemo
      );
      setResult(calcResult);
      return calcResult;
    } catch (e) {
      console.error(e);
      return null;
    }
  };

  const loadDemoData = () => {
    methods.reset({
      period: 'monthly',
      values: { ...buildDefaultValues().values, ...DEMO_VALUES },
      flags: { ...buildDefaultValues().flags, ...DEMO_FLAGS },
    });
    setResult(null);
  };

  const restart = () => {
    methods.reset(buildDefaultValues());
    setResult(null);
  };

  return (
    <AssessmentContext.Provider value={{ result, computeResult, loadDemoData, restart }}>
      <FormProvider {...methods}>{children}</FormProvider>
    </AssessmentContext.Provider>
  );
}

export function useAssessment() {
  const ctx = useContext(AssessmentContext);
  if (!ctx) throw new Error('useAssessment must be used within AssessmentProvider');
  return ctx;
}

// Re-exported so consuming components only need one import for both the
// shared assessment state and the underlying form.
export { useFormContext as useAssessmentForm };