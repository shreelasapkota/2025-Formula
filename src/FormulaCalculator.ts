export class FormulaCalculator {
  private static readonly TARGET_VALUE: number = 2025;
  private static readonly NUM_DIGITS: number = 5;

  /**
   * Checks if a number is a valid integer
   */
  private static isInteger(value: number): boolean {
    return Number.isInteger(value) && Number.isFinite(value);
  }

  /**
   * Safely computes power operation with validation
   */
  private static safePower(base: number, exponent: number): number {
    const result = Math.pow(base, exponent);

    if (!this.isInteger(result)) {
      throw new Error('Power operation resulted in a non-integer value');
    }

    if (!Number.isSafeInteger(result)) {
      throw new Error('Power operation resulted in integer overflow');
    }

    return result;
  }

  /**
   * Computes the formula to reach 2025
   */
  public static compute(): number {
    try {
      // Step 1: Calculate 4^1
      const step1 = this.safePower(4, 1);

      // Step 2: Calculate 3^(4^1)
      const step2 = this.safePower(3, step1);

      // Step 3: Calculate 5^2
      const step3 = this.safePower(5, 2);

      // Step 4: Multiply the results
      const finalResult = step2 * step3;

      if (!this.isInteger(finalResult)) {
        throw new Error('Final calculation resulted in a non-integer value');
      }

      if (finalResult !== this.TARGET_VALUE) {
        throw new Error('Calculation did not yield the target value of 2025');
      }

      return finalResult;
    } catch (error) {
      throw new Error(
        `Computation error: ${
          error instanceof Error ? error.message : 'Unknown error'
        }`
      );
    }
  }

  /**
   * Returns a string explanation of the formula
   */
  public static getFormulaExplanation(): string {
    return `Formula: 3^(4^1) * 5^2
  Step 1: 4^1 = 4
  Step 2: 3^4 = 81
  Step 3: 5^2 = 25
  Final: 81 * 25 = 2025`;
  }
}
