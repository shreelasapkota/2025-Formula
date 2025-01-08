import { FormulaCalculator } from './FormulaCalculator';

try {
  // Compute and display the result
  const result = FormulaCalculator.compute();

  // Display the formula explanation
  console.log('\nFormula Explanation:');
  console.log(FormulaCalculator.getFormulaExplanation());
  console.log(`\nFinal Result: ${result}`);
} catch (error) {
  console.error(
    'Error:',
    error instanceof Error ? error.message : 'Unknown error'
  );
  process.exit(1);
}
