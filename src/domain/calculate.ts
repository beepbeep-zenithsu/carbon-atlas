import type { ActivityInput, CalculationResult, CalculationResultItem, EmissionFactor, ReportingPeriod } from './types';
import { ACTIVITY_GROUPS } from './types';
import { normalizeQuantity } from './units';

function emptyTotals(): Record<string, number> {
  const totals: Record<string, number> = {};
  for (const group of ACTIVITY_GROUPS) {
    totals[group] = 0;
  }
  return totals;
}

export function calculateEmissions(
  inputs: ActivityInput[],
  factors: EmissionFactor[],
  period: ReportingPeriod,
  datasetVersion: string,
  isDemo: boolean
): CalculationResult {
  const items: CalculationResultItem[] = [];
  const totalsByGroup = emptyTotals() as CalculationResult['totalsByGroup'];
  let totalEmissionsKg = 0;
  const assumptions: string[] = [];

  for (const input of inputs) {
    if (!Number.isFinite(input.value)) {
      throw new Error(`Non-finite quantity provided for activity: ${input.id}`);
    }

    if (input.value < 0) {
      throw new Error(`Negative quantity provided for activity: ${input.id}`);
    }

    if (input.value === 0) continue; // Exclude zero inputs

    const factor = factors.find(f => f.applicableActivity === input.id);

    if (!factor) {
      throw new Error(`Missing or ambiguous factor for activity: ${input.id}`);
    }

    // Explicit unit normalization
    const normalizedQuantity = normalizeQuantity(input.value, input.unit, factor.unit);

    // The requirement states: If a factor already represents kg CO2e per activity unit, do not multiply by GWP again.
    // Our factors are designed to be kg CO2e per unit natively.
    const emissionsKg = normalizedQuantity * factor.numericValue;

    items.push({
      activityId: input.id,
      group: input.group,
      inputQuantity: input.value,
      inputUnit: input.unit,
      appliedFactor: factor,
      emissionsKg,
    });

    totalsByGroup[input.group] += emissionsKg;
    totalEmissionsKg += emissionsKg;
  }

  const usedFactorIds = new Set(items.map(i => i.appliedFactor.id));
  if (usedFactorIds.size > 0) {
    assumptions.push(`Applied ${usedFactorIds.size} emission factor(s) from dataset ${datasetVersion}.`);
  }

  if (isDemo) {
    assumptions.push('Demonstration — uses sample data. Results are not ready for submission.');
  }

  return {
    period,
    items,
    totalsByGroup,
    totalEmissionsKg,
    datasetVersion,
    isDemo,
    assumptions,
  };
}
