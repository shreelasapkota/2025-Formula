# Formula 2025 Calculator

A TypeScript solution for creating the number 2025 using numbers 1-5 exactly once with mathematical operations.

## Project Output

\```bash
npm run dev
\```

\```
PS C:\Users\shree\Desktop\2025 Formula> npm run dev

> formula-2025-ts@1.0.0 dev
> ts-node src/index.ts

Formula Explanation:
Formula: 3^(4^1) * 5^2
  Step 1: 4^1 = 4
  Step 2: 3^4 = 81
  Step 3: 5^2 = 25
  Final: 81 * 25 = 2025

Final Result: 2025
\```

\```bash
npm run test
\```

\```
PASS  tests/FormulaCalculator.test.ts
  FormulaCalculator
    compute
      ✓ should return 2025 (5 ms)
      ✓ should match the intermediate steps (1 ms)
    getFormulaExplanation
      ✓ should return the correct explanation string (1 ms)

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        2.34 s, estimated 4 s
\```

## Project Structure

\```
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
\```

## Requirements

- Node.js (version 14 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
\```bash
git clone https://github.com/yourusername/formula-2025-ts.git
cd formula-2025-ts
\```

2. Install dependencies:
\```bash
npm install
\```

## Scripts

- `npm run build` - Compiles TypeScript to JavaScript
- `npm test` - Runs the test suite
- `npm start` - Runs the compiled program
- `npm run dev` - Runs the program in development mode

## Solution Explanation

The program implements a mathematical formula to create 2025 using the numbers 1-5 exactly once:

Formula: `3^(4^1) * 5^2`

Steps:
1. 4^1 = 4
2. 3^4 = 81
3. 5^2 = 25
4. Final: 81 * 25 = 2025

The program includes comprehensive error checking and test cases, with all calculations validated for correctness.

## License

MIT License