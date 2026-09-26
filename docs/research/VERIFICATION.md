# Verification Report

## Production Build Verification
The application has been verified to build successfully using `vite build` and pass all TypeScript checks via `tsc -b`.

## Domain Logic Verification
The core calculation engine (`src/domain/calculate.ts`) operates independently of the React frontend.
- **Unit Conversions:** Validated.
- **Emission Calculations:** Validated against mock factors.
- **Demo Mode Enforcement:** The calculator correctly reads `project.json`. If `activeMode` is set to `"production"`, it currently throws an error if production factors are missing, fulfilling the requirement to reject demo data for the final submission.

## UI / UX Verification
- **Form Validation:** Handled by Zod, ensuring valid numeric inputs.
- **Responsive Design:** Verified to function on mobile and desktop viewports via Tailwind CSS.
- **Print Styling:** Print-specific CSS ensures the results panel is cleanly formatted for PDF export or printing.
- **Motion Options:** "Reduce Motion" toggle is functional and disables GSAP animations.
