# Research Checklist

This document outlines the required research for the Carbon Atlas calculator to transition from Demo mode to Production mode.

## 1. Emission Factors Verification
- [ ] Determine accurate electricity grid emission factors for the target region.
- [ ] Determine accurate diesel emission factors for stationary equipment (generators/boilers).
- [ ] Determine accurate petrol and diesel emission factors for mobile combustion (vehicles).
- [ ] Source all factors from recognized authorities (e.g., DEFRA, EPA, local government environmental agencies).
- [ ] Document the source, publication year, and specific URL for each factor used.

## 2. Company Context
- [ ] Finalize the specific company/entity being analyzed (currently using Petrobangla as a placeholder).
- [ ] Gather authentic activity data for the selected company for a defined reporting period (monthly or annual).
- [ ] Validate that the input categories (Electricity, Equipment, Vehicles) adequately capture the company's Scope 1 and 2 emissions.

## 3. Assumptions and Scope
- [ ] Clearly define the organizational boundaries.
- [ ] Clearly define the operational boundaries (e.g., excluding Scope 3 emissions for this phase).
- [ ] Document any limitations in the data or calculation methodology.

## Next Steps
Once the research is complete, update `src/data/project.json` to set `activeMode` to `"production"` and populate `src/data/production/factors.json` with the verified data.
