export const CONVERSION_FACTORS: Record<string, Record<string, number>> = {
  // Volume
  'litres': { 'litres': 1, 'gallons': 0.264172, 'm3': 0.001 },
  'gallons': { 'gallons': 1, 'litres': 3.78541, 'm3': 0.00378541 },
  'm3': { 'm3': 1, 'litres': 1000, 'gallons': 264.172 },
  // Energy
  'kWh': { 'kWh': 1, 'MWh': 0.001, 'GJ': 0.0036 },
  'MWh': { 'MWh': 1, 'kWh': 1000, 'GJ': 3.6 },
  'GJ': { 'GJ': 1, 'kWh': 277.778, 'MWh': 0.277778 },
  // Mass
  'kg': { 'kg': 1, 'tonnes': 0.001 },
  'tonnes': { 'tonnes': 1, 'kg': 1000 },
  // Generic count used for process/activity-data style questions that
  // don't map to a physical unit of volume/energy/mass.
  'units': { 'units': 1 },
};

export function normalizeQuantity(value: number, fromUnit: string, toUnit: string): number {
  if (fromUnit === toUnit) return value;

  // Try direct conversion
  const factor = CONVERSION_FACTORS[fromUnit]?.[toUnit];
  if (factor !== undefined) {
    return value * factor;
  }

  throw new Error(`Incompatible units: Cannot convert ${fromUnit} to ${toUnit}`);
}
