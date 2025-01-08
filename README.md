# Formula 2025 Calculator (TypeScript)

This project provides a solution to create the number 2025 using the numbers 1, 2, 3, 4, and 5 exactly once with mathematical operations.

## Project Structure

```
formula-2025-ts/
│
├── src/
│   ├── FormulaCalculator.ts
│   └── index.ts
│
├── tests/
│   └── FormulaCalculator.test.ts
│
├── package.json
├── tsconfig.json
├── jest.config.js
├── .gitignore
└── README.md
```

## Requirements

- Node.js (version 14 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/formula-2025-ts.git
   cd formula-2025-ts
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Scripts

- `npm run build` - Compiles TypeScript to JavaScript
- `npm test` - Runs the test suite
- `npm start` - Runs the compiled program
- `npm run dev` - Runs the program in development mode

## Solution Explanation

The program implements a mathematical formula to create 2025 using the numbers 1-5:

- Formula: 3^(4^1) \* 5^2
- The program includes comprehensive error checking and test cases
- All calculations are validated for correctness

## License

MIT License
