const assert = require("assert");
const calculateNumber = require("./1-calcul");

describe("calculateNumber", function () {
  describe("SUM operation", function () {
    it("should return 6 when adding 1.4 and 4.5", function () {
      assert.strictEqual(calculateNumber("SUM", 1.4, 4.5), 6);
    });

    it("should return 4 when adding 1 and 3", function () {
      assert.strictEqual(calculateNumber("SUM", 1, 3), 4);
    });

    it("should return 5 when adding 1 and 3.7", function () {
      assert.strictEqual(calculateNumber("SUM", 1, 3.7), 5);
    });

    it("should return 5 when adding 1.2 and 3.7", function () {
      assert.strictEqual(calculateNumber("SUM", 1.2, 3.7), 5);
    });

    it("should return 6 when adding 1.5 and 3.7", function () {
      assert.strictEqual(calculateNumber("SUM", 1.5, 3.7), 6);
    });

    it("should handle negative numbers", function () {
      assert.strictEqual(calculateNumber("SUM", -1.4, -1.6), -3);
    });

    it("should handle zero values", function () {
      assert.strictEqual(calculateNumber("SUM", 0, 0), 0);
    });

    it("should handle rounding edge cases", function () {
      assert.strictEqual(calculateNumber("SUM", 0.5, 0.5), 2);
    });
  });

  describe("SUBTRACT operation", function () {
    it("should return -4 when subtracting 4.5 from 1.4", function () {
      assert.strictEqual(calculateNumber("SUBTRACT", 1.4, 4.5), -4);
    });

    it("should return -2 when subtracting 3 from 1", function () {
      assert.strictEqual(calculateNumber("SUBTRACT", 1, 3), -2);
    });

    it("should return -3 when subtracting 3.7 from 1", function () {
      assert.strictEqual(calculateNumber("SUBTRACT", 1, 3.7), -3);
    });

    it("should return -3 when subtracting 3.7 from 1.2", function () {
      assert.strictEqual(calculateNumber("SUBTRACT", 1.2, 3.7), -3);
    });

    it("should return -2 when subtracting 3.7 from 1.5", function () {
      assert.strictEqual(calculateNumber("SUBTRACT", 1.5, 3.7), -2);
    });

    it("should handle negative numbers", function () {
      assert.strictEqual(calculateNumber("SUBTRACT", -1.4, -1.6), 1);
    });

    it("should handle subtracting zero", function () {
      assert.strictEqual(calculateNumber("SUBTRACT", 5.7, 0), 6);
    });

    it("should handle subtracting from zero", function () {
      assert.strictEqual(calculateNumber("SUBTRACT", 0, 5.7), -6);
    });

    it("should handle rounding edge cases", function () {
      assert.strictEqual(calculateNumber("SUBTRACT", 2.5, 1.5), 1);
    });
  });

  describe("DIVIDE operation", function () {
    it("should return 0.2 when dividing 1.4 by 4.5", function () {
      assert.strictEqual(calculateNumber("DIVIDE", 1.4, 4.5), 0.2);
    });

    it("should return 0.5 when dividing 1 by 2", function () {
      assert.strictEqual(calculateNumber("DIVIDE", 1, 2), 0.5);
    });

    it("should return 0.25 when dividing 1 by 3.7", function () {
      assert.strictEqual(calculateNumber("DIVIDE", 1, 3.7), 0.25);
    });

    it("should return 0.25 when dividing 1.2 by 3.7", function () {
      assert.strictEqual(calculateNumber("DIVIDE", 1.2, 3.7), 0.25);
    });

    it("should return 0.5 when dividing 1.5 by 3.7", function () {
      assert.strictEqual(calculateNumber("DIVIDE", 1.5, 3.7), 0.5);
    });

    it("should handle negative division", function () {
      assert.strictEqual(calculateNumber("DIVIDE", -4.6, 2.4), -2.5);
    });

    it("should handle dividing negative by negative", function () {
      assert.strictEqual(calculateNumber("DIVIDE", -4.6, -2.4), 2.5);
    });

    it("should return 1.33... when dividing 4 by 3", function () {
      assert.strictEqual(calculateNumber("DIVIDE", 3.7, 3.2), 4 / 3);
    });

    it("should handle rounding before division", function () {
      assert.strictEqual(calculateNumber("DIVIDE", 8.4, 2.6), 8 / 3);
    });
  });

  describe("DIVIDE by zero", function () {
    it('should return "Error" when dividing 1.4 by 0', function () {
      assert.strictEqual(calculateNumber("DIVIDE", 1.4, 0), "Error");
    });

    it('should return "Error" when dividing by 0.4 (rounds to 0)', function () {
      assert.strictEqual(calculateNumber("DIVIDE", 1.4, 0.4), "Error");
    });

    it('should return "Error" when dividing by -0.4 (rounds to 0)', function () {
      assert.strictEqual(calculateNumber("DIVIDE", 1.4, -0.4), "Error");
    });

    it('should return "Error" when dividing by 0.2 (rounds to 0)', function () {
      assert.strictEqual(calculateNumber("DIVIDE", 5, 0.2), "Error");
    });

    it('should return "Error" when dividing zero by zero', function () {
      assert.strictEqual(calculateNumber("DIVIDE", 0, 0), "Error");
    });

    it('should return "Error" when dividing by number that rounds to zero', function () {
      assert.strictEqual(calculateNumber("DIVIDE", 10, 0.49), "Error");
    });

    it('should not return "Error" when dividing by 0.5 (rounds to 1)', function () {
      assert.strictEqual(calculateNumber("DIVIDE", 1, 0.5), 1);
    });
  });

  describe("Edge cases and invalid inputs", function () {
    it("should handle very large numbers", function () {
      assert.strictEqual(calculateNumber("SUM", 999999.4, 999999.6), 1999999);
    });

    it("should handle very small decimals", function () {
      assert.strictEqual(calculateNumber("SUM", 0.1, 0.2), 0);
    });

    it("should handle decimal precision in division", function () {
      const result = calculateNumber("DIVIDE", 3, 2);
      assert.strictEqual(result, 1.5);
    });

    it("should throw error for invalid operation type", function () {
      assert.throws(() => {
        calculateNumber("MULTIPLY", 1, 2);
      }, Error);
    });

    it("should throw error for undefined operation type", function () {
      assert.throws(() => {
        calculateNumber(undefined, 1, 2);
      }, Error);
    });

    it("should throw error for null operation type", function () {
      assert.throws(() => {
        calculateNumber(null, 1, 2);
      }, Error);
    });
  });
});
