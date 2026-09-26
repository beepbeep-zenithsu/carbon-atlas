/**
 * Per-page palettes for AuroraLayer. Each route/category gets its own
 * colour combination, blob speeds and blob count so the moving background
 * actually feels different from page to page, instead of one global look
 * reused everywhere.
 *
 * Colours reference the CSS custom properties already defined in index.css
 * (--ca-lime-glow, --ca-glow-purple, --ca-glow-teal, --ca-glow-amber,
 * --ca-glow-blue) so everything stays on the existing design tokens.
 */

export type AuroraVariant =
  | 'landing'
  | 'fuel_combustion'
  | 'vehicle_operations'
  | 'gas_leakage'
  | 'production_activities'
  | 'electricity_utilities'
  | 'purchased_energy'
  | 'report'
  | 'legal';

export interface AuroraPalette {
  /** 2 or 3 blob colours, in slot order (see SLOTS in AuroraLayer). */
  colors: string[];
  /** Drift duration in seconds, one per colour. */
  speeds: number[];
  /** Negative animation-delay in seconds, one per colour (staggers the loops). */
  delays: number[];
}

const LIME = 'var(--ca-lime-glow)';
const PURPLE = 'var(--ca-glow-purple)';
const TEAL = 'var(--ca-glow-teal)';
const AMBER = 'var(--ca-glow-amber)';
const BLUE = 'var(--ca-glow-blue)';

export const AURORA_PALETTES: Record<AuroraVariant, AuroraPalette> = {
  // Home — the original crimson/purple/teal mix, full three blobs.
  landing: { colors: [LIME, PURPLE, TEAL], speeds: [30, 36, 24], delays: [0, -9, -4] },

  // Stationary Combustion — warm, fire-and-boiler toned.
  fuel_combustion: { colors: [AMBER, LIME, PURPLE], speeds: [26, 32, 21], delays: [-2, -12, 0] },

  // Mobile Combustion — cooler exhaust/road tones moving a bit faster.
  vehicle_operations: { colors: [BLUE, TEAL, LIME], speeds: [22, 28, 18], delays: [0, -6, -3] },

  // Fugitive Emissions — teal/blue "leaking gas" feel, slow drift.
  gas_leakage: { colors: [TEAL, BLUE, PURPLE], speeds: [34, 30, 25], delays: [-5, 0, -10] },

  // Process Emissions — industrial purple/amber, a bit more agitated.
  production_activities: { colors: [PURPLE, AMBER, LIME], speeds: [20, 26, 16], delays: [-4, 0, -8] },

  // Purchased Electricity — electric blue-forward.
  electricity_utilities: { colors: [BLUE, LIME, TEAL], speeds: [24, 30, 19], delays: [0, -10, -5] },

  // Purchased Steam / Heat / Cooling — warm + cool mix (heat and chilling).
  purchased_energy: { colors: [AMBER, BLUE, TEAL], speeds: [28, 33, 23], delays: [-6, 0, -11] },

  // Report — calmer, slower version of the brand palette (two blobs only).
  report: { colors: [LIME, PURPLE], speeds: [40, 46], delays: [0, -14] },

  // Legal / static pages — minimal, slow, low-key (two blobs only).
  legal: { colors: [TEAL, BLUE], speeds: [48, 52], delays: [0, -18] },
};

/** The dominant colour of each palette, as a bare CSS variable name (no
 *  `var()` wrapper) — used to tint AmbientField's dot lattice to match
 *  AuroraLayer's blobs for the same page. */
export const AURORA_DOT_HUE: Record<AuroraVariant, string> = {
  landing: '--ca-lime-glow',
  fuel_combustion: '--ca-glow-amber',
  vehicle_operations: '--ca-glow-blue',
  gas_leakage: '--ca-glow-teal',
  production_activities: '--ca-glow-purple',
  electricity_utilities: '--ca-glow-blue',
  purchased_energy: '--ca-glow-amber',
  report: '--ca-lime-glow',
  legal: '--ca-glow-teal',
};

const CATEGORY_VARIANTS: string[] = [
  'fuel_combustion',
  'vehicle_operations',
  'gas_leakage',
  'production_activities',
  'electricity_utilities',
  'purchased_energy',
];

/** Resolves the current pathname (from react-router's useLocation) to a variant key. */
export function resolveAuroraVariant(pathname: string): AuroraVariant {
  if (pathname === '/' || pathname === '') return 'landing';
  if (pathname.startsWith('/report')) return 'report';
  if (pathname.startsWith('/privacy') || pathname.startsWith('/terms') || pathname.startsWith('/contact')) {
    return 'legal';
  }
  if (pathname.startsWith('/assessment/')) {
    const categoryId = pathname.split('/')[2];
    if (categoryId && CATEGORY_VARIANTS.includes(categoryId)) {
      return categoryId as AuroraVariant;
    }
    return 'fuel_combustion';
  }
  return 'landing';
}
