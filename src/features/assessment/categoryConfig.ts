import {
  Flame,
  Truck,
  Wind,
  Factory,
  Zap,
  PlugZap,
  type LucideIcon
} from 'lucide-react';

import type { ActivityGroup } from '../../domain/types';

import stationaryCombustionImg from '../../assets/categories/stationary-combustion.jpg';
import mobileCombustionImg from '../../assets/categories/mobile-combustion.jpg';
import fugitiveEmissionsImg from '../../assets/categories/fugitive-emissions.jpg';
import processEmissionsImg from '../../assets/categories/process-emissions.jpg';
import purchasedElectricityImg from '../../assets/categories/purchased-electricity.jpg';
import purchasedSteamHeatCoolingImg from '../../assets/categories/purchased-steam-heat-cooling.jpg';

export type FieldKind = 'number' | 'yesno-number';

export interface SubsectionConfig {
  id: string;
  label: string;
  question: string;
  /** Optional helper bullets shown under the question (what counts, examples). */
  details?: string[];
  unit: string;
  unitLabel: string;
  kind: FieldKind;
  placeholder?: string;
}

/** A "supersubheading" — an optional mid-level grouping of subsections
 *  inside a category (e.g. "Natural Gas Consumption" vs "Diesel Consumption"
 *  inside Stationary Combustion). Only used where the category actually
 *  needs a third tier; everything else stays a flat subsections[] list. */
export interface SubGroupConfig {
  label: string;
  description?: string;
  subsections: SubsectionConfig[];
}

export interface CategoryConfig {
  id: ActivityGroup;
  navLabel: string;
  title: string;
  description: string;
  icon: LucideIcon;
  /** Image shown in the vacant side panel of this category's assessment page. */
  image: string;
  imageAlt: string;
  /** Flat subsections. Mutually exclusive with subGroups — a category uses one or the other. */
  subsections?: SubsectionConfig[];
  /** Grouped subsections, for categories that need a heading between the category and its questions. */
  subGroups?: SubGroupConfig[];
}

export const CATEGORIES: CategoryConfig[] = [

  /* =========================
     SCOPE 1
     STATIONARY COMBUSTION
  ========================= */

  {
    id: 'fuel_combustion',
    navLabel: 'Stationary Combustion',
    title: 'Stationary Combustion',
    description: 'Fuel combustion from fixed equipment and factory utilities.',
    icon: Flame,
    image: stationaryCombustionImg,
    imageAlt: 'Industrial plant with boilers and stacks used for stationary fuel combustion',

    subGroups: [
      {
        label: 'Natural Gas Consumption',
        description: 'Natural gas used in factory operations, including:',
        subsections: [
          {
            id: 'boiler_fuel',
            label: 'Boilers',
            question: 'How much fuel is consumed by boilers for steam generation, washing, finishing and heating processes?',
            details: [
              'Steam generation for garment processing',
              'Washing and finishing operations',
              'Heating processes'
            ],
            unit: 'm3',
            unitLabel: 'm³ / month',
            kind: 'number',
            placeholder: 'e.g. 5000'
          },
          {
            id: 'gas_generators',
            label: 'Gas Generators',
            question: 'How much natural gas is consumed by gas generators for backup electricity generation and continuous power supply?',
            details: [
              'Backup electricity generation during power interruptions',
              'Continuous power supply for factory operations'
            ],
            unit: 'm3',
            unitLabel: 'm³ / month',
            kind: 'number',
            placeholder: 'e.g. 3000'
          },
          {
            id: 'thermal_oil_heaters',
            label: 'Thermal Oil Heaters',
            question: 'How much fuel is consumed by thermal oil heaters for industrial heat generation and fabric drying?',
            details: [
              'Heat generation for industrial processes',
              'Fabric drying and finishing applications'
            ],
            unit: 'litres',
            unitLabel: 'Litres / month',
            kind: 'number',
            placeholder: 'e.g. 500'
          },
          {
            id: 'heating_systems',
            label: 'Heating Systems',
            question: 'How much fuel is used for industrial heating requirements and production temperature control?',
            details: [
              'Industrial heating requirements',
              'Production process temperature control'
            ],
            unit: 'litres',
            unitLabel: 'Litres / month',
            kind: 'number',
            placeholder: 'e.g. 400'
          }
        ]
      },
      {
        label: 'Diesel Consumption',
        description: 'Diesel fuel used in stationary equipment, including:',
        subsections: [
          {
            id: 'diesel_generators',
            label: 'Diesel Generators',
            question: 'How much diesel is consumed by emergency backup generators?',
            details: [
              'Emergency power backup',
              'Factory electricity supply during grid failure'
            ],
            unit: 'litres',
            unitLabel: 'Litres / month',
            kind: 'number',
            placeholder: 'e.g. 150'
          },
          {
            id: 'industrial_equipment',
            label: 'Industrial Equipment',
            question: 'How much fuel is consumed by fuel-powered machinery used in production support activities?',
            details: ['Fuel-powered machinery used in production support activities'],
            unit: 'litres',
            unitLabel: 'Litres / month',
            kind: 'number',
            placeholder: 'e.g. 200'
          },
          {
            id: 'utility_equipment',
            label: 'Utility Equipment',
            question: 'How much fuel is consumed by equipment used for factory maintenance and operations?',
            details: ['Equipment used for factory maintenance and operations'],
            unit: 'litres',
            unitLabel: 'Litres / month',
            kind: 'number',
            placeholder: 'e.g. 100'
          }
        ]
      }
    ]
  },

  /* =========================
     MOBILE COMBUSTION
  ========================= */

  {
    id: 'vehicle_operations',
    navLabel: 'Mobile Combustion',
    title: 'Mobile Combustion',
    description: 'Fuel combustion from company-owned transportation systems.',
    icon: Truck,
    image: mobileCombustionImg,
    imageAlt: 'Smoke rising from industrial exhaust stacks, representing combustion emissions',

    subsections: [
      {
        id: 'employee_transport_buses',
        label: 'Employee Transport Buses',
        question: 'How much fuel is consumed by company-operated buses for employee transportation?',
        details: [
          'Daily transportation of factory workers',
          'Fuel consumption from company-operated buses'
        ],
        unit: 'litres',
        unitLabel: 'Litres / month',
        kind: 'number',
        placeholder: 'e.g. 1000'
      },
      {
        id: 'company_cars',
        label: 'Company Cars',
        question: 'How much fuel is consumed by management and administrative vehicles?',
        details: [
          'Management and administrative transportation',
          'Official business movement'
        ],
        unit: 'litres',
        unitLabel: 'Litres / month',
        kind: 'number',
        placeholder: 'e.g. 200'
      },
      {
        id: 'delivery_vehicles',
        label: 'Delivery Vehicles',
        question: 'How much fuel is consumed for transportation of finished garments and materials?',
        details: [
          'Transportation of finished garments',
          'Movement of materials between company facilities'
        ],
        unit: 'litres',
        unitLabel: 'Litres / month',
        kind: 'number',
        placeholder: 'e.g. 500'
      },
      {
        id: 'forklifts_material_handling',
        label: 'Forklifts and Material Handling Vehicles',
        question: 'How much fuel is consumed by forklifts and internal material handling vehicles?',
        details: [
          'Internal movement of raw materials',
          'Fabric and product handling inside factory premises'
        ],
        unit: 'litres',
        unitLabel: 'Litres / month',
        kind: 'number',
        placeholder: 'e.g. 150'
      }
    ]
  },

  /* =========================
     FUGITIVE EMISSIONS
  ========================= */

  {
    id: 'gas_leakage',
    navLabel: 'Fugitive Emissions',
    title: 'Fugitive Emissions',
    description: 'Unintentional release of greenhouse gases from equipment and systems.',
    icon: Wind,
    image: fugitiveEmissionsImg,
    imageAlt: 'Flare stack burning off leaked gas, representing fugitive emissions control',

    subsections: [
      {
        id: 'air_conditioning_systems',
        label: 'Air Conditioning Systems',
        question: 'Enter refrigerant leakage from factory and office air conditioning systems.',
        details: [
          'Factory cooling systems',
          'Office air conditioning units',
          'Worker comfort cooling systems',
          'Refrigerant leakage from AC equipment'
        ],
        unit: 'kg',
        unitLabel: 'kg refrigerant / month',
        kind: 'number',
        placeholder: 'e.g. 10'
      },
      {
        id: 'chillers_cooling_equipment',
        label: 'Chillers and Cooling Equipment',
        question: 'Enter refrigerant leakage from industrial chillers and cooling equipment.',
        details: [
          'Industrial cooling systems',
          'Production area temperature control',
          'Cooling water/chilled water systems'
        ],
        unit: 'kg',
        unitLabel: 'kg refrigerant / month',
        kind: 'number',
        placeholder: 'e.g. 20'
      },
      {
        id: 'refrigeration_units',
        label: 'Refrigeration Units',
        question: 'Enter refrigerant leakage from storage and preservation equipment.',
        details: [
          'Storage and preservation equipment',
          'Refrigeration systems used in factory facilities'
        ],
        unit: 'kg',
        unitLabel: 'kg refrigerant / month',
        kind: 'number',
        placeholder: 'e.g. 5'
      },
      {
        id: 'fire_suppression_systems',
        label: 'Fire Suppression Systems',
        question: 'Enter leakage of fire suppression gases from protection systems.',
        details: [
          'Fire protection equipment',
          'Leakage of fire suppression gases from installed systems'
        ],
        unit: 'kg',
        unitLabel: 'kg gas / month',
        kind: 'number',
        placeholder: 'e.g. 2'
      },
      {
        id: 'refrigerant_gas_leakage',
        label: 'Refrigerant Gas Leakage',
        question: 'Enter leakage of HFC refrigerants and other cooling gases used in HVAC systems.',
        details: [
          'HFC refrigerants',
          'Other cooling gases used in HVAC and refrigeration systems'
        ],
        unit: 'kg',
        unitLabel: 'kg refrigerant / month',
        kind: 'number',
        placeholder: 'e.g. 10'
      }
    ]
  },

  /* =========================
     PROCESS EMISSIONS
  ========================= */

  {
    id: 'production_activities',
    navLabel: 'Process Emissions',
    title: 'Process Emissions',
    description: 'Greenhouse gases released from manufacturing processes.',
    icon: Factory,
    image: processEmissionsImg,
    imageAlt: 'Textile factory floor with processing machinery and a wastewater treatment tank',

    subsections: [
      {
        id: 'textile_processing',
        label: 'Textile Processing Activities',
        question: 'Enter emission-related data from fabric treatment, finishing and chemical processing activities.',
        details: [
          'Fabric treatment processes',
          'Industrial finishing operations',
          'Chemical processing activities'
        ],
        unit: 'units',
        unitLabel: 'Activity units / month',
        kind: 'number',
        placeholder: 'e.g. 100'
      },
      {
        id: 'fabric_treatment',
        label: 'Fabric Treatment Processes',
        question: 'Enter operational data for fabric treatment processes.',
        unit: 'units',
        unitLabel: 'Activity units / month',
        kind: 'number',
        placeholder: 'e.g. 50'
      },
      {
        id: 'industrial_finishing',
        label: 'Industrial Finishing Operations',
        question: 'Enter data related to industrial garment finishing operations.',
        unit: 'units',
        unitLabel: 'Activity units / month',
        kind: 'number',
        placeholder: 'e.g. 50'
      },
      {
        id: 'chemical_processing',
        label: 'Chemical Processing Activities',
        question: 'Enter data related to chemical processing activities.',
        unit: 'units',
        unitLabel: 'Activity units / month',
        kind: 'number',
        placeholder: 'e.g. 30'
      },
      {
        id: 'washing_finishing_operations',
        label: 'Washing and Finishing Operations',
        question: 'Enter emission data from garment washing and finishing operations.',
        details: [
          'Garment washing processes',
          'Fabric finishing treatments',
          'Heat and chemical-based processing activities'
        ],
        unit: 'units',
        unitLabel: 'Activity units / month',
        kind: 'number',
        placeholder: 'e.g. 80'
      },
      {
        id: 'garment_washing',
        label: 'Garment Washing Processes',
        question: 'Enter data from garment washing operations.',
        unit: 'units',
        unitLabel: 'Activity units / month',
        kind: 'number',
        placeholder: 'e.g. 40'
      },
      {
        id: 'heat_chemical_processing',
        label: 'Heat and Chemical-Based Processing Activities',
        question: 'Enter data from heat and chemical-based processing operations.',
        unit: 'units',
        unitLabel: 'Activity units / month',
        kind: 'number',
        placeholder: 'e.g. 40'
      },
      {
        id: 'chemical_treatment_process',
        label: 'Chemical Treatment Processes',
        question: 'Enter data from industrial chemical treatment activities.',
        details: [
          'Use of industrial chemicals',
          'Treatment processes involving chemical reactions'
        ],
        unit: 'units',
        unitLabel: 'Activity units / month',
        kind: 'number',
        placeholder: 'e.g. 25'
      },
      {
        id: 'wastewater_treatment',
        label: 'Wastewater Treatment System',
        question: 'Enter wastewater treatment emission data including methane and nitrous oxide generation.',
        details: [
          'Organic waste decomposition',
          'Methane (CH₄) generation',
          'Nitrous oxide (N₂O) emissions'
        ],
        unit: 'kg',
        unitLabel: 'kg CH₄/N₂O / month',
        kind: 'number',
        placeholder: 'e.g. 20'
      },
      {
        id: 'organic_waste_decomposition',
        label: 'Organic Waste Decomposition',
        question: 'Enter emissions generated from organic waste decomposition.',
        unit: 'kg',
        unitLabel: 'kg CH₄ / month',
        kind: 'number',
        placeholder: 'e.g. 10'
      },
      {
        id: 'methane_generation',
        label: 'Methane (CH₄) Generation',
        question: 'Enter methane emissions generated from wastewater treatment.',
        unit: 'kg',
        unitLabel: 'kg CH₄ / month',
        kind: 'number',
        placeholder: 'e.g. 5'
      },
      {
        id: 'nitrous_oxide_emissions',
        label: 'Nitrous Oxide (N₂O) Emissions',
        question: 'Enter nitrous oxide emissions from treatment processes.',
        unit: 'kg',
        unitLabel: 'kg N₂O / month',
        kind: 'number',
        placeholder: 'e.g. 2'
      }
    ]
  },

  /* =========================
     SCOPE 2
     PURCHASED ELECTRICITY
  ========================= */

  {
    id: 'electricity_utilities',
    navLabel: 'Purchased Electricity',
    title: 'Purchased Electricity',
    description: 'Electricity consumed from the national grid.',
    icon: Zap,
    image: purchasedElectricityImg,
    imageAlt: 'High-voltage electricity transmission towers carrying power from the grid',

    subsections: [
      {
        id: 'sewing_machines',
        label: 'Sewing Machines',
        question: 'How much electricity is consumed by garment stitching operations and automated sewing equipment?',
        details: [
          'Garment stitching operations',
          'Production line machinery',
          'Automated sewing equipment'
        ],
        unit: 'kWh',
        unitLabel: 'kWh / month',
        kind: 'number',
        placeholder: 'e.g. 5000'
      },
      {
        id: 'cutting_machines',
        label: 'Cutting Machines',
        question: 'How much electricity is consumed by fabric cutting and computer-controlled cutting systems?',
        details: [
          'Fabric cutting operations',
          'Computer-controlled cutting systems',
          'Automatic cutting equipment'
        ],
        unit: 'kWh',
        unitLabel: 'kWh / month',
        kind: 'number',
        placeholder: 'e.g. 2000'
      },
      {
        id: 'washing_machines',
        label: 'Washing Machines',
        question: 'How much electricity is consumed by industrial garment washing equipment?',
        details: [
          'Garment washing processes',
          'Industrial washing equipment',
          'Fabric cleaning operations'
        ],
        unit: 'kWh',
        unitLabel: 'kWh / month',
        kind: 'number',
        placeholder: 'e.g. 3000'
      },
      {
        id: 'dryers',
        label: 'Dryers',
        question: 'How much electricity is consumed by garment drying and industrial drying systems?',
        details: [
          'Garment drying operations',
          'Fabric moisture removal',
          'Industrial drying systems'
        ],
        unit: 'kWh',
        unitLabel: 'kWh / month',
        kind: 'number',
        placeholder: 'e.g. 2500'
      },
      {
        id: 'compressors',
        label: 'Compressors',
        question: 'How much electricity is consumed for compressed air generation and pneumatic equipment?',
        details: [
          'Compressed air generation',
          'Pneumatic equipment operation',
          'Production machinery support systems'
        ],
        unit: 'kWh',
        unitLabel: 'kWh / month',
        kind: 'number',
        placeholder: 'e.g. 1000'
      },
      {
        id: 'lighting_systems',
        label: 'Lighting Systems',
        question: 'How much electricity is consumed for factory, warehouse, office and outdoor lighting?',
        details: [
          'Factory production floor lighting',
          'Warehouse lighting',
          'Office lighting',
          'Outdoor security lighting'
        ],
        unit: 'kWh',
        unitLabel: 'kWh / month',
        kind: 'number',
        placeholder: 'e.g. 1500'
      },
      {
        id: 'hvac_ventilation',
        label: 'HVAC and Ventilation Systems',
        question: 'How much electricity is consumed by air conditioning, ventilation and humidity control systems?',
        details: [
          'Factory air conditioning',
          'Temperature control systems',
          'Air circulation and ventilation',
          'Humidity control systems'
        ],
        unit: 'kWh',
        unitLabel: 'kWh / month',
        kind: 'number',
        placeholder: 'e.g. 4000'
      },
      {
        id: 'office_equipment',
        label: 'Office Equipment',
        question: 'How much electricity is consumed by computers, printers, servers and office devices?',
        details: [
          'Computers',
          'Printers',
          'Servers',
          'Photocopiers',
          'Other administrative electrical devices'
        ],
        unit: 'kWh',
        unitLabel: 'kWh / month',
        kind: 'number',
        placeholder: 'e.g. 500'
      },
      {
        id: 'production_facilities',
        label: 'Production Facilities',
        question: 'How much electricity is consumed by production lines, machinery and electrical control systems?',
        details: [
          'Production line equipment',
          'Automated machinery',
          'Auxiliary production systems',
          'Electrical control systems'
        ],
        unit: 'kWh',
        unitLabel: 'kWh / month',
        kind: 'number',
        placeholder: 'e.g. 6000'
      }
    ]
  },

  /* =========================
     PURCHASED STEAM / HEAT / COOLING
  ========================= */

  {
    id: 'purchased_energy',
    navLabel: 'Purchased Steam / Heat / Cooling',
    title: 'Purchased Steam / Heat / Cooling',
    description: 'Energy purchased from external suppliers.',
    icon: PlugZap,
    image: purchasedSteamHeatCoolingImg,
    imageAlt: 'Steam and cooling pipework connecting a boiler and chiller to factory floors',

    subsections: [
      {
        id: 'purchased_steam',
        label: 'Purchased Steam',
        question: 'How much steam energy is purchased from external suppliers for operations?',
        details: [
          'Washing processes',
          'Ironing operations',
          'Fabric finishing',
          'Heating applications'
        ],
        unit: 'GJ',
        unitLabel: 'GJ / month',
        kind: 'yesno-number',
        placeholder: 'e.g. 15'
      },
      {
        id: 'steam_washing_process',
        label: 'Steam for Washing Processes',
        question: 'How much purchased steam is used for garment washing processes?',
        unit: 'GJ',
        unitLabel: 'GJ / month',
        kind: 'yesno-number',
        placeholder: 'e.g. 5'
      },
      {
        id: 'steam_ironing_operations',
        label: 'Steam for Ironing Operations',
        question: 'How much purchased steam is used for ironing operations?',
        unit: 'GJ',
        unitLabel: 'GJ / month',
        kind: 'yesno-number',
        placeholder: 'e.g. 3'
      },
      {
        id: 'steam_fabric_finishing',
        label: 'Steam for Fabric Finishing',
        question: 'How much purchased steam is used for fabric finishing processes?',
        unit: 'GJ',
        unitLabel: 'GJ / month',
        kind: 'yesno-number',
        placeholder: 'e.g. 4'
      },
      {
        id: 'purchased_heat_energy',
        label: 'Purchased Heat Energy',
        question: 'How much external heat energy is purchased for industrial processes?',
        details: [
          'External heating systems',
          'Industrial thermal energy supply',
          'Production process heating requirements'
        ],
        unit: 'GJ',
        unitLabel: 'GJ / month',
        kind: 'yesno-number',
        placeholder: 'e.g. 10'
      },
      {
        id: 'external_heating_systems',
        label: 'External Heating Systems',
        question: 'How much energy is received from external heating systems?',
        unit: 'GJ',
        unitLabel: 'GJ / month',
        kind: 'yesno-number',
        placeholder: 'e.g. 5'
      },
      {
        id: 'industrial_thermal_energy',
        label: 'Industrial Thermal Energy Supply',
        question: 'How much industrial thermal energy is purchased externally?',
        unit: 'GJ',
        unitLabel: 'GJ / month',
        kind: 'yesno-number',
        placeholder: 'e.g. 5'
      },
      {
        id: 'purchased_cooling_energy',
        label: 'Purchased Cooling Energy',
        question: 'How much cooling energy is purchased from external suppliers?',
        details: [
          'External chilled water supply',
          'Industrial cooling services',
          'Temperature-controlled production areas'
        ],
        unit: 'GJ',
        unitLabel: 'GJ / month',
        kind: 'yesno-number',
        placeholder: 'e.g. 8'
      },
      {
        id: 'external_chilled_water',
        label: 'External Chilled Water Supply',
        question: 'How much chilled water is purchased externally?',
        unit: 'GJ',
        unitLabel: 'GJ / month',
        kind: 'yesno-number',
        placeholder: 'e.g. 4'
      },
      {
        id: 'industrial_cooling_services',
        label: 'Industrial Cooling Services',
        question: 'How much external industrial cooling service is used?',
        unit: 'GJ',
        unitLabel: 'GJ / month',
        kind: 'yesno-number',
        placeholder: 'e.g. 2'
      },
      {
        id: 'temperature_controlled_areas',
        label: 'Temperature-Controlled Production Areas',
        question: 'How much cooling energy is used for temperature-controlled production areas?',
        unit: 'GJ',
        unitLabel: 'GJ / month',
        kind: 'yesno-number',
        placeholder: 'e.g. 2'
      }
    ]
  }

];

/* =========================
   HELPERS
========================= */

/** Every subsection in a category, whether it's declared flat or under subGroups. */
export function getSubsections(category: CategoryConfig): SubsectionConfig[] {
  if (category.subsections) return category.subsections;
  if (category.subGroups) return category.subGroups.flatMap(g => g.subsections);
  return [];
}

export const ALL_SUBSECTIONS: SubsectionConfig[] = CATEGORIES.flatMap(getSubsections);

/* =========================
   CATEGORY NAVIGATION
========================= */

export const CATEGORY_ORDER = CATEGORIES.map(category => category.id);

export function getCategoryIndex(id: string | undefined): number {
  const index = CATEGORY_ORDER.findIndex(category => category === id);
  return index === -1 ? 0 : index;
}

export function getCategoryByIndex(index: number): CategoryConfig {
  const safeIndex = Math.min(Math.max(index, 0), CATEGORIES.length - 1);
  return CATEGORIES[safeIndex];
}

/* =========================
   DEMO DATA
========================= */

export const DEMO_VALUES: Record<string, number> = {
  // Stationary Combustion (~5-10 Tonnes each)
  boiler_fuel: 5000,
  gas_generators: 3000,
  thermal_oil_heaters: 3000,
  heating_systems: 3000,
  diesel_generators: 2000,
  industrial_equipment: 2000,
  utility_equipment: 2000,

  // Mobile Combustion (~5 Tonnes each)
  employee_transport_buses: 2000,
  company_cars: 1000,
  delivery_vehicles: 1500,
  forklifts_material_handling: 1000,

  // Fugitive Emissions (~10 Tonnes each)
  air_conditioning_systems: 5,
  chillers_cooling_equipment: 5,
  refrigeration_units: 5,
  fire_suppression_systems: 3,
  refrigerant_gas_leakage: 5,

  // Process Emissions (~10 Tonnes each)
  textile_processing: 20000,
  fabric_treatment: 20000,
  industrial_finishing: 20000,
  chemical_processing: 20000,
  washing_finishing_operations: 20000,
  garment_washing: 20000,
  heat_chemical_processing: 20000,
  chemical_treatment_process: 20000,
  wastewater_treatment: 40000,
  organic_waste_decomposition: 40000,
  methane_generation: 400,
  nitrous_oxide_emissions: 40,

  // Purchased Electricity (~5-15 Tonnes each)
  sewing_machines: 15000,
  cutting_machines: 10000,
  washing_machines: 10000,
  dryers: 10000,
  compressors: 10000,
  lighting_systems: 10000,
  hvac_ventilation: 15000,
  office_equipment: 10000,
  production_facilities: 20000,

  // Purchased Steam / Heat / Cooling (~10 Tonnes each)
  purchased_steam: 200,
  steam_washing_process: 100,
  steam_ironing_operations: 100,
  steam_fabric_finishing: 100,
  purchased_heat_energy: 200,
  external_heating_systems: 100,
  industrial_thermal_energy: 100,
  purchased_cooling_energy: 200,
  external_chilled_water: 100,
  industrial_cooling_services: 100,
  temperature_controlled_areas: 100
};

export const DEMO_FLAGS: Record<string, boolean> = {
  purchased_steam: true,
  steam_washing_process: true,
  steam_ironing_operations: true,
  steam_fabric_finishing: true,
  purchased_heat_energy: true,
  external_heating_systems: true,
  industrial_thermal_energy: true,
  purchased_cooling_energy: true,
  external_chilled_water: true,
  industrial_cooling_services: true,
  temperature_controlled_areas: true
};