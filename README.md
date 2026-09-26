# Carbon Atlas

A public carbon footprint calculator designed for university sustainability engineering assignments.

## Features

*   **Calculator**: Enter electricity and fuel consumption to estimate your business's carbon footprint.
*   **Emissions Factors**: Powered by realistic (or demo) emission factors based on regional data.
*   **Recommendations**: Practical, actionable advice for reducing carbon emissions based on your unique profile.
*   **Comparison**: See how your footprint compares to average benchmarks.
*   **Printable Results**: Save your results as a PDF for reporting.

## Technologies Used

*   React 19 + TypeScript
*   Vite
*   Tailwind CSS v4
*   GSAP & Motion (for animations)
*   Zod & React Hook Form (for validation)
*   Lucide React (icons)

## Getting Started

### Prerequisites

*   Node.js (v24 or higher recommended)
*   npm

### Installation

1.  Clone the repository.
2.  Install dependencies:
    ```bash
    npm install --legacy-peer-deps
    ```
    *Note: `--legacy-peer-deps` is required due to peer dependency conflicts between React 19 and `@react-three/fiber`.*

### Running the App

To run the app in development mode:

```bash
npm run dev
```

To build for production:

```bash
npm run build
```

To run unit tests:

```bash
npm run test
```

## Structure

*   `src/domain/`: Pure domain logic (calculations, types, recommendations). This layer is entirely decoupled from React and the UI.
*   `src/data/`: Static JSON data (emission factors, project config).
*   `src/features/`: React components organized by feature (calculator, landing, results).
*   `src/components/`: Reusable UI components (header, footer).
