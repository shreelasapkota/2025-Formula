import { FormulaCalculator } from '../src/FormulaCalculator';

describe('FormulaCalculator', () => {
  describe('compute', () => {
    it('should return 2025', () => {
      expect(FormulaCalculator.compute()).toBe(2025);
    });

    it('should match the intermediate steps', () => {
      expect(Math.pow(4, 1)).toBe(4);
      expect(Math.pow(3, 4)).toBe(81);
      expect(Math.pow(5, 2)).toBe(25);
      expect(81 * 25).toBe(2025);
    });
  });

  describe('getFormulaExplanation', () => {
    it('should return the correct explanation string', () => {
      const explanation = FormulaCalculator.getFormulaExplanation();
      expect(explanation).toContain('Formula: 3^(4^1) * 5^2');
      expect(explanation).toContain('Step 1: 4^1 = 4');
      expect(explanation).toContain('Step 2: 3^4 = 81');
      expect(explanation).toContain('Step 3: 5^2 = 25');
      expect(explanation).toContain('Final: 81 * 25 = 2025');
    });
  });
});
