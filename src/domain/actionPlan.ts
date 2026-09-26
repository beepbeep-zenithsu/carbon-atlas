import type { CalculationResult } from './types';

export interface ActionPlanItem {
  title: string;
  description: string;
}

interface ActionCopy {
  title: string;
  /** What to actually do, written for a real garment-factory operations team. */
  action: string;
  /** Typical, realistic impact range for this specific intervention. */
  impact: string;
}

/**
 * Real-world, subsection-specific guidance — one entry per assessment
 * question (48 total). This is what makes the Action Plan concrete instead
 * of generic: every recommendation names the actual equipment category the
 * factory reported emissions from, plus a realistic (not fixed 10%)
 * improvement range for that specific intervention.
 */
const ACTION_LIBRARY: Record<string, ActionCopy> = {
  // ---- Stationary Combustion ----
  boiler_fuel: {
    title: 'Boiler & Steam System Efficiency',
    action:
      'Insulate steam lines, recover condensate, and retune burners on your boilers. Fit a flue-gas oxygen sensor so combustion air is not over-supplied.',
    impact: 'Well-tuned boilers with condensate recovery typically save 12-18% of associated fuel use.',
  },
  gas_generators: {
    title: 'Backup Generator Load Management',
    action:
      'Load-match your gas generators to actual demand instead of running them at fixed output, and shift non-critical loads to grid hours where possible.',
    impact: 'Right-sizing generator dispatch usually cuts backup-power fuel burn by 10-20%.',
  },
  thermal_oil_heaters: {
    title: 'Thermal Oil Heater Tune-Up',
    action:
      'Clean heat-exchanger surfaces and check for oil degradation on your thermal oil heaters — fouled coils force the burner to work harder for the same drying temperature.',
    impact: 'Routine descaling and oil replacement typically recovers 8-15% of heater fuel efficiency.',
  },
  heating_systems: {
    title: 'Process Heating Controls',
    action:
      'Add timers and setpoint controls to your industrial heating systems so they don\u2019t run at full temperature between production batches.',
    impact: 'Basic scheduling controls generally reduce heating fuel use by 10-15%.',
  },
  diesel_generators: {
    title: 'Diesel Backup Reduction',
    action:
      'Track grid outage hours and evaluate whether battery storage or a smaller, right-sized diesel generator can cover your actual backup load.',
    impact: 'Right-sizing backup diesel capacity typically cuts diesel consumption by 10-20%.',
  },
  industrial_equipment: {
    title: 'Fuel-Powered Machinery Maintenance',
    action:
      'Put fuel-powered production support machinery on a fixed maintenance interval — clogged filters and worn injectors are the most common cause of excess fuel burn.',
    impact: 'Preventive maintenance on combustion equipment usually saves 8-12% of fuel.',
  },
  utility_equipment: {
    title: 'Facility Utility Equipment Servicing',
    action:
      'Service fuel-powered maintenance and utility equipment on a fixed schedule and retire units older than their rated service life.',
    impact: 'Scheduled servicing typically improves fuel efficiency by 8-12%.',
  },

  // ---- Mobile Combustion ----
  employee_transport_buses: {
    title: 'Employee Transport Route Optimization',
    action:
      'Consolidate overlapping bus routes for worker transport, right-size vehicles to actual ridership, and add basic driver eco-training (smooth acceleration, correct tyre pressure).',
    impact: 'Route optimization and driver training typically cut transport fuel use by 8-12%.',
  },
  company_cars: {
    title: 'Administrative Fleet Policy',
    action:
      'Set a trip-approval policy for management and administrative vehicles, and pool vehicles for overlapping destinations instead of dispatching separately.',
    impact: 'Trip consolidation typically reduces admin-fleet fuel use by 10-15%.',
  },
  delivery_vehicles: {
    title: 'Delivery Route Consolidation',
    action:
      'Batch finished-garment and materials deliveries by destination and time window rather than dispatching as orders arrive, and maintain correct tyre pressure and engine tuning.',
    impact: 'Load consolidation and route planning typically save 10-15% of delivery fuel.',
  },
  forklifts_material_handling: {
    title: 'Material Handling Fleet Upgrade',
    action:
      'Phase out the oldest fuel forklifts for electric or LPG units where floor charging infrastructure allows, and enforce idle shut-off between moves.',
    impact: 'Electrifying material handling typically cuts related fuel emissions by 20-35% over a phase-in period.',
  },

  // ---- Fugitive Emissions ----
  air_conditioning_systems: {
    title: 'AC Refrigerant Leak Detection & Repair',
    action:
      'Run a leak detection and repair (LDAR) pass on factory and office air conditioning units — check service ports, joints, and coil seals first, as these fail most often.',
    impact: 'A single LDAR pass on AC systems typically removes 25-40% of refrigerant leakage.',
  },
  chillers_cooling_equipment: {
    title: 'Chiller Seal & Valve Maintenance',
    action:
      'Inspect industrial chiller valves, gaskets, and compressor seals quarterly, and log refrigerant top-ups so recurring leak points are flagged instead of just refilled.',
    impact: 'Proactive chiller maintenance typically cuts refrigerant losses by 25-35%.',
  },
  refrigeration_units: {
    title: 'Refrigeration Unit Servicing',
    action:
      'Replace aging door seals and check compressor connections on storage and preservation refrigeration units, which are common but overlooked leak points.',
    impact: 'Seal replacement and servicing typically reduces refrigerant leakage by 20-30%.',
  },
  fire_suppression_systems: {
    title: 'Fire Suppression System Integrity Checks',
    action:
      'Schedule certified inspection of fire suppression cylinders and piping — most leakage in these systems comes from aging valve seats, which are inexpensive to replace once identified.',
    impact: 'Valve and seal replacement typically eliminates 30-50% of fire-suppressant leakage.',
  },
  refrigerant_gas_leakage: {
    title: 'HVAC Refrigerant Management Program',
    action:
      'Introduce a formal refrigerant handling log across all HVAC and refrigeration equipment, and train technicians on proper recovery practice during servicing to stop avoidable venting.',
    impact: 'A formal LDAR program typically cuts HVAC refrigerant emissions by 30-45% within a year.',
  },

  // ---- Process Emissions ----
  textile_processing: {
    title: 'Textile Processing Optimization',
    action:
      'Review chemical dosing and cycle times in fabric treatment and finishing lines — over-dosing and over-long cycles are the main avoidable sources of process emissions.',
    impact: 'Process optimization in textile treatment typically reduces related emissions by 10-18%.',
  },
  fabric_treatment: {
    title: 'Fabric Treatment Process Review',
    action:
      'Audit fabric treatment recipes against supplier specification sheets — many factories run legacy recipes with more chemical and energy input than current equipment needs.',
    impact: 'Recipe optimization typically saves 10-15% of process-related emissions.',
  },
  industrial_finishing: {
    title: 'Finishing Line Efficiency',
    action:
      'Right-size batch sizes on garment finishing lines to avoid part-loaded runs, which use nearly the same energy and chemical input as full loads.',
    impact: 'Batch optimization typically reduces finishing emissions by 8-15%.',
  },
  chemical_processing: {
    title: 'Chemical Process Input Control',
    action:
      'Introduce metered dosing systems for chemical processing activities instead of manual measurement, which commonly over-doses by 10-20% out of caution.',
    impact: 'Metered dosing typically cuts chemical-process emissions by 12-20%.',
  },
  washing_finishing_operations: {
    title: 'Wash-Finish Cycle Optimization',
    action:
      'Combine washing and finishing steps where product specs allow, and switch to lower-temperature wash cycles validated for your fabric types.',
    impact: 'Cycle consolidation and lower wash temperatures typically save 10-18% of related emissions.',
  },
  garment_washing: {
    title: 'Garment Washing Load Efficiency',
    action:
      'Run garment washing machines only at full load and standardize wash programs by fabric type to cut unnecessary re-wash cycles.',
    impact: 'Full-load scheduling typically reduces washing-related emissions by 10-15%.',
  },
  heat_chemical_processing: {
    title: 'Heat & Chemical Process Tuning',
    action:
      'Lower process temperatures to the minimum validated for product quality, and recover waste heat from these processes for pre-heating where feasible.',
    impact: 'Temperature tuning and heat recovery typically save 10-20% of process emissions.',
  },
  chemical_treatment_process: {
    title: 'Chemical Treatment Substitution',
    action:
      'Work with your chemical supplier to trial lower-emission-intensity treatment agents for equivalent product outcomes, starting with your highest-volume treatment line.',
    impact: 'Substituting to lower-intensity agents typically cuts this source by 10-20%.',
  },
  wastewater_treatment: {
    title: 'Wastewater Methane Capture',
    action:
      'Cover anaerobic wastewater treatment lagoons/tanks and route captured biogas to a flare or boiler for energy recovery instead of releasing it to atmosphere.',
    impact: 'Biogas capture from wastewater treatment typically removes 40-60% of associated methane emissions.',
  },
  organic_waste_decomposition: {
    title: 'Organic Waste Diversion',
    action:
      'Separate organic waste streams before they reach anaerobic conditions in effluent treatment, reducing the load that decomposes into methane on-site.',
    impact: 'Waste segregation typically cuts organic decomposition emissions by 20-35%.',
  },
  methane_generation: {
    title: 'Methane Flaring or Recovery',
    action:
      'Install a simple flare stack (or biogas-to-boiler line) on your wastewater treatment system so generated methane is combusted to CO\u2082 rather than vented as methane, which has a far higher warming effect.',
    impact: 'Flaring or energy recovery typically cuts the CO\u2082e impact of this source by 50-70%.',
  },
  nitrous_oxide_emissions: {
    title: 'Nitrous Oxide Process Control',
    action:
      'Review aeration control in your treatment process — poorly controlled aeration is the most common driver of excess N\u2082O formation during nitrification.',
    impact: 'Improved aeration control typically reduces N\u2082O emissions by 15-25%.',
  },

  // ---- Purchased Electricity ----
  sewing_machines: {
    title: 'Sewing Line Motor Upgrade',
    action:
      'Replace clutch motors on sewing machines with energy-efficient servo motors, which only draw power while stitching instead of running continuously.',
    impact: 'Servo motor retrofits typically cut sewing-line electricity use by 25-40%.',
  },
  cutting_machines: {
    title: 'Cutting System Scheduling',
    action:
      'Batch cutting jobs to minimize machine idle-on time, and calibrate computer-controlled cutters to reduce re-cut passes.',
    impact: 'Scheduling and calibration typically save 10-15% of cutting-line electricity.',
  },
  washing_machines: {
    title: 'Industrial Washer Efficiency',
    action:
      'Run industrial garment washing machines at full rated load and install auto-shutoff on idle cycles between batches.',
    impact: 'Load optimization typically cuts washing-machine electricity use by 12-18%.',
  },
  dryers: {
    title: 'Drying System Heat Recovery',
    action:
      'Recover exhaust heat from garment dryers to pre-warm incoming air, and clean lint filters daily — restricted airflow is a major hidden driver of dryer electricity use.',
    impact: 'Heat recovery and filter maintenance typically save 15-25% of drying electricity.',
  },
  compressors: {
    title: 'Compressed Air Leak Program',
    action:
      'Run an ultrasonic leak survey on your compressed air network — industry data consistently shows 20-30% of generated compressed air is lost to leaks in ageing factory piping.',
    impact: 'Fixing compressed-air leaks typically cuts related electricity use by 20-30%.',
  },
  lighting_systems: {
    title: 'LED Lighting Retrofit',
    action:
      'Retrofit factory floor, warehouse, and outdoor lighting to LED fixtures with occupancy sensors in low-traffic areas like stores and corridors.',
    impact: 'LED retrofits typically cut lighting electricity use by 40-60%.',
  },
  hvac_ventilation: {
    title: 'HVAC Scheduling & Setpoint Optimization',
    action:
      'Add building-management scheduling to HVAC and ventilation systems so conditioning is reduced outside production shifts, and raise chilled-water setpoints by 1-2\u00b0C where comfort allows.',
    impact: 'Scheduling and setpoint changes typically save 15-25% of HVAC electricity.',
  },
  office_equipment: {
    title: 'Office Equipment Power Management',
    action:
      'Enable sleep/power-management settings across computers, printers, and servers, and switch to a managed print policy to cut idle-draw devices.',
    impact: 'Power management typically cuts office-equipment electricity use by 15-20%.',
  },
  production_facilities: {
    title: 'Production Line Power Factor Correction',
    action:
      'Install power-factor correction capacitors on production-line motor banks and stagger machine start-up to shave peak demand charges alongside consumption.',
    impact: 'Power-factor correction and demand management typically save 10-18% on production electricity costs and losses.',
  },

  // ---- Purchased Steam / Heat / Cooling ----
  purchased_steam: {
    title: 'Purchased Steam Demand Reduction',
    action:
      'Audit steam trap performance across washing, ironing, and finishing lines that draw on purchased steam — failed traps are the single biggest source of wasted purchased steam.',
    impact: 'Steam-trap repair typically recovers 15-25% of purchased steam demand.',
  },
  steam_washing_process: {
    title: 'Washing Steam Efficiency',
    action:
      'Insulate steam distribution lines feeding garment washing processes and fix any visible condensate leaks at joints and valves.',
    impact: 'Line insulation and leak repair typically save 12-20% of process steam.',
  },
  steam_ironing_operations: {
    title: 'Ironing Steam Optimization',
    action:
      'Right-size steam pressure for ironing operations to the manufacturer-specified minimum, and schedule iron stations to avoid idle steam supply between shifts.',
    impact: 'Pressure optimization and scheduling typically save 10-15% of ironing steam use.',
  },
  steam_fabric_finishing: {
    title: 'Fabric Finishing Steam Recovery',
    action:
      'Recover flash steam from fabric finishing condensate return and feed it back into low-pressure applications instead of venting it.',
    impact: 'Flash-steam recovery typically saves 10-18% of finishing steam demand.',
  },
  purchased_heat_energy: {
    title: 'Purchased Heat Demand Management',
    action:
      'Review purchased heat supply contracts against your actual seasonal demand curve and negotiate load-following terms instead of a flat supply rate.',
    impact: 'Demand-matched contracts typically reduce purchased-heat related emissions by 10-15%.',
  },
  external_heating_systems: {
    title: 'External Heating System Controls',
    action:
      'Add zone controls to external heating system feeds so unused areas of the facility aren\u2019t heated during partial-occupancy shifts.',
    impact: 'Zone control typically saves 10-15% of externally supplied heat.',
  },
  industrial_thermal_energy: {
    title: 'Thermal Energy Supplier Review',
    action:
      'Ask your thermal energy supplier for their fuel mix and explore whether a lower-carbon supply option is available at comparable cost.',
    impact: 'Switching to a lower-carbon thermal supply can cut this source\u2019s footprint by 15-30% depending on supplier mix.',
  },
  purchased_cooling_energy: {
    title: 'Purchased Cooling Load Reduction',
    action:
      'Insulate chilled-water distribution pipework serving purchased cooling energy and raise supply temperature slightly where product tolerances allow.',
    impact: 'Insulation and setpoint tuning typically save 10-15% of purchased cooling demand.',
  },
  external_chilled_water: {
    title: 'Chilled Water Distribution Efficiency',
    action:
      'Check for leaks and poor insulation along external chilled-water supply lines — losses here are common in older factory retrofits.',
    impact: 'Distribution repairs typically recover 10-18% of chilled-water related emissions.',
  },
  industrial_cooling_services: {
    title: 'Industrial Cooling Service Optimization',
    action:
      'Match industrial cooling service contracts to actual production cooling load rather than a fixed year-round allocation.',
    impact: 'Load-matched cooling contracts typically save 10-15% of this source.',
  },
  temperature_controlled_areas: {
    title: 'Temperature-Controlled Area Tuning',
    action:
      'Tighten door-seal discipline and add strip curtains at entry points to temperature-controlled production areas to cut infiltration losses.',
    impact: 'Better door discipline and sealing typically save 12-20% of conditioning demand for these areas.',
  },
};

/** Fallback, group-level actions used only to fill out 5 items when a
 *  factory has fewer than 5 non-zero activities reported. */
const GROUP_FALLBACKS: ActionCopy[] = [
  {
    title: 'Baseline Energy Audit',
    action:
      'Commission a walk-through energy audit covering combustion equipment, electrical distribution, and compressed air/steam networks to catch sources not yet captured in this assessment.',
    impact: 'Independent audits typically surface 10-20% in additional, previously unquantified savings.',
  },
  {
    title: 'Rooftop Solar Feasibility',
    action:
      'Get a rooftop solar feasibility study done against your factory\u2019s roof area and daytime load profile to offset purchased grid electricity.',
    impact: 'A right-sized rooftop array can typically offset 15-30% of daytime grid electricity demand.',
  },
  {
    title: 'Facility-Wide Leak Detection Program',
    action:
      'Run a combined compressed-air and refrigerant leak survey across the whole site — these are consistently the fastest payback interventions in garment factories.',
    impact: 'Combined leak-detection programs typically deliver 15-30% savings in the systems surveyed.',
  },
  {
    title: 'Preventive Maintenance Calendar',
    action:
      'Move all major fuel and electricity-consuming equipment onto a fixed preventive maintenance calendar rather than run-to-failure servicing.',
    impact: 'Preventive maintenance programs typically sustain 8-15% efficiency gains over reactive servicing.',
  },
  {
    title: 'Internal Emissions Reduction Target',
    action:
      'Set a year-on-year internal reduction target against this baseline and re-run this assessment each reporting period to track progress.',
    impact: 'Factories that track a formal target typically achieve 2-3x the savings of those without one.',
  },
];

const ORDINAL_LABEL = ['largest', 'second-largest', 'third-largest', 'fourth-largest', 'fifth-largest'];

function formatTonnes(kg: number): string {
  return (kg / 1000).toFixed(3);
}

/**
 * Builds a Recommended Action Plan of exactly 5 items, driven entirely by
 * this specific Carbon Report's results: which activities were reported,
 * how large each one is relative to the total, and what a realistic,
 * named intervention for that exact activity looks like.
 */
export function generateActionPlan(result: CalculationResult): ActionPlanItem[] {
  const { items, totalEmissionsKg, period } = result;

  if (totalEmissionsKg <= 0 || items.length === 0) {
    return GROUP_FALLBACKS.slice(0, 5).map(copy => ({
      title: copy.title,
      description: `${copy.action} ${copy.impact}`,
    }));
  }

  const ranked = [...items]
    .filter(item => item.emissionsKg > 0)
    .sort((a, b) => b.emissionsKg - a.emissionsKg);

  const plan: ActionPlanItem[] = [];
  const usedFallbacks = new Set<number>();

  for (let i = 0; i < ranked.length && plan.length < 5; i++) {
    const item = ranked[i];
    const copy = ACTION_LIBRARY[item.activityId];
    if (!copy) continue;

    const percentOfTotal = (item.emissionsKg / totalEmissionsKg) * 100;
    const ordinal = ORDINAL_LABEL[plan.length] ?? `#${plan.length + 1}`;

    plan.push({
      title: copy.title,
      description: `${copy.action} This is currently your ${ordinal} reported emission source, responsible for ${percentOfTotal.toFixed(1)}% of your total footprint (${formatTonnes(item.emissionsKg)} tCO\u2082e for the ${period} period). ${copy.impact}`,
    });
  }

  // If the factory only reported a handful of activities, fill the
  // remaining slots with general, still-genuine next steps rather than
  // repeating or padding with unrelated categories.
  let fallbackIndex = 0;
  while (plan.length < 5 && fallbackIndex < GROUP_FALLBACKS.length) {
    if (!usedFallbacks.has(fallbackIndex)) {
      const copy = GROUP_FALLBACKS[fallbackIndex];
      plan.push({ title: copy.title, description: `${copy.action} ${copy.impact}` });
      usedFallbacks.add(fallbackIndex);
    }
    fallbackIndex++;
  }

  return plan;
}