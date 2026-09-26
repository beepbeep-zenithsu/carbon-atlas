import { describe, it, expect } from 'vitest';
import { calculateEmissions } from '../../src/domain/calculate';
import { generateRecommendations } from '../../src/domain/recommend';
import { ActivityInput, EmissionFactor } from '../../src/domain/types';

describe('Calculation Engine', () => {
  const mockFactors: EmissionFactor[] = [
    {
      id: 'f_grid_electricity',
      applicableActivity: 'grid_electricity',
      numericValue: 0.5,
      unit: 'kWh',
      outputBasis: 'kgCO2e',
      sourceReference: 'synthetic',
      verificationStatus: 'synthetic'
    },
    {
      id: 'f_boiler_fuel',
      applicableActivity: 'boiler_fuel',
      numericValue: 2,
      unit: 'litres',
      outputBasis: 'kgCO2e',
      sourceReference: 'synthetic',
      verificationStatus: 'synthetic'
    },
    {
      id: 'f_company_vehicles_fuel',
      applicableActivity: 'company_vehicles_fuel',
      numericValue: 3,
      unit: 'litres',
      outputBasis: 'kgCO2e',
      sourceReference: 'synthetic',
      verificationStatus: 'synthetic'
    }
  ];

  it('runs the independent synthetic arithmetic test correctly', () => {
    const inputs: ActivityInput[] = [
      { id: 'grid_electricity', group: 'electricity_utilities', value: 100, unit: 'kWh' },
      { id: 'boiler_fuel', group: 'fuel_combustion', value: 10, unit: 'litres' },
      { id: 'company_vehicles_fuel', group: 'vehicle_operations', value: 5, unit: 'litres' },
    ];

    const result = calculateEmissions(inputs, mockFactors, 'monthly', 'v1', true);

    expect(result.totalsByGroup.electricity_utilities).toBe(50);
    expect(result.totalsByGroup.fuel_combustion).toBe(20);
    expect(result.totalsByGroup.vehicle_operations).toBe(15);
    expect(result.totalEmissionsKg).toBe(85);

    const recs = generateRecommendations(result, mockFactors);
    const elecRec = recs.find(r => r.title === 'Improve Electricity Efficiency');
    expect(elecRec).toBeDefined();
    expect(elecRec?.estimatedSavingKg).toBe(5); // 85 - 80 = 5kg
  });

  it('rejects negative inputs', () => {
    const inputs: ActivityInput[] = [
      { id: 'grid_electricity', group: 'electricity_utilities', value: -10, unit: 'kWh' }
    ];
    expect(() => calculateEmissions(inputs, mockFactors, 'monthly', 'v1', true)).toThrow('Negative quantity');
  });

  it('handles zero inputs gracefully by excluding them', () => {
    const inputs: ActivityInput[] = [
      { id: 'grid_electricity', group: 'electricity_utilities', value: 0, unit: 'kWh' }
    ];
    const result = calculateEmissions(inputs, mockFactors, 'monthly', 'v1', true);
    expect(result.totalEmissionsKg).toBe(0);
    expect(result.items.length).toBe(0);
  });

  it('throws on missing factors', () => {
    const inputs: ActivityInput[] = [
      { id: 'missing_activity', group: 'electricity_utilities', value: 10, unit: 'kWh' }
    ];
    expect(() => calculateEmissions(inputs, mockFactors, 'monthly', 'v1', true)).toThrow('Missing or ambiguous factor');
  });
});
