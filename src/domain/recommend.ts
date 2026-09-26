import type { ActivityGroup, CalculationResult, EmissionFactor } from './types';
import { calculateEmissions } from './calculate';

export interface Recommendation {
  title: string;
  description: string;
  estimatedSavingKg?: number;
}

interface RecommendationCopy {
  title: string;
  description: string;
}

// Static guidance per module. Kept free of any accounting/GHG terminology —
// this is exactly the copy the user sees on the Carbon Report page.
const GROUP_RECOMMENDATIONS: Record<ActivityGroup, RecommendationCopy> = {
  fuel_combustion: {
    title: 'Reduce Fuel & Combustion Use',
    description: 'Reducing diesel generator usage can decrease fuel-related emissions. Regular boiler servicing and load-matching generators to demand also help.',
  },
  vehicle_operations: {
    title: 'Optimize Vehicle Operations',
    description: 'Route optimization, scheduled maintenance, and driver behaviour programs can meaningfully cut fuel use across company-owned and field vehicles.',
  },
  gas_leakage: {
    title: 'Tighten Gas Leakage & Releases',
    description: 'Routine leak detection and repair (LDAR) on valves, seals, and connections is the fastest way to bring down leakage and release volumes.',
  },
  production_activities: {
    title: 'Improve Production Efficiency',
    description: 'Process optimization and preventive maintenance on gas processing equipment can lower operational release volumes over time.',
  },
  electricity_utilities: {
    title: 'Improve Electricity Efficiency',
    description: 'Improving electricity efficiency can reduce operational emissions. LED retrofits, HVAC scheduling, and load management are practical first steps.',
  },
  purchased_energy: {
    title: 'Review Purchased Energy Contracts',
    description: 'Where possible, switch purchased steam or heating/cooling to lower-carbon suppliers, or explore on-site recovery to cut reliance on external supply.',
  },
};

export function generateRecommendations(
  result: CalculationResult,
  allFactors: EmissionFactor[]
): Recommendation[] {
  if (result.totalEmissionsKg === 0) {
    return [
      {
        title: 'Check for omitted activity',
        description: 'Your calculated footprint is zero. Please review your answers to ensure no activities were missed.',
      },
    ];
  }

  const [maxGroup] = (Object.entries(result.totalsByGroup) as [ActivityGroup, number][]).sort(
    ([, a], [, b]) => b - a
  )[0];

  const copy = GROUP_RECOMMENDATIONS[maxGroup];
  const recommendations: Recommendation[] = [];

  // For the leading category, model a 10% reduction scenario on just that
  // category's inputs to give a concrete estimated saving.
  const scenarioInputs = result.items.map(item => ({
    id: item.activityId,
    group: item.group,
    value: item.group === maxGroup ? item.inputQuantity * 0.9 : item.inputQuantity,
    unit: item.inputUnit,
  }));

  try {
    const scenarioResult = calculateEmissions(
      scenarioInputs,
      allFactors,
      result.period,
      result.datasetVersion,
      result.isDemo
    );
    const saving = result.totalEmissionsKg - scenarioResult.totalEmissionsKg;

    recommendations.push({
      title: copy.title,
      description: `${copy.description} A 10% reduction in this area is a realistic starting target.`,
      estimatedSavingKg: saving,
    });
  } catch {
    recommendations.push({ title: copy.title, description: copy.description });
  }

  // Add a secondary, lighter-touch recommendation for the runner-up
  // category so the report never reads as single-issue.
  const sorted = (Object.entries(result.totalsByGroup) as [ActivityGroup, number][])
    .filter(([, value]) => value > 0)
    .sort(([, a], [, b]) => b - a);

  if (sorted.length > 1) {
    const [secondGroup] = sorted[1];
    const secondCopy = GROUP_RECOMMENDATIONS[secondGroup];
    recommendations.push({ title: secondCopy.title, description: secondCopy.description });
  }

  return recommendations;
}
