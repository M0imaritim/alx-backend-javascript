const assert = require("assert");
const calculateNumber = require("./0-calcul");

describe("calculateNumber", function () {
  describe("Basic functionality", function () {
    it("should return 4 when adding 1 and 3", function () {
      assert.strictEqual(calculateNumber(1, 3), 4);
    });

    it("should return 5 when adding 1 and 3.7", function () {
      assert.strictEqual(calculateNumber(1, 3.7), 5);
    });

    it("should return 5 when adding 1.2 and 3.7", function () {
      assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });

    it("should return 6 when adding 1.5 and 3.7", function () {
      assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });
  });

  describe("Rounding edge cases", function () {
    it("should round 0.4 down to 0", function () {
      assert.strictEqual(calculateNumber(0.4, 0), 0);
    });

    it("should round 0.5 up to 1", function () {
      assert.strictEqual(calculateNumber(0.5, 0), 1);
    });

    it("should round 0.6 up to 1", function () {
      assert.strictEqual(calculateNumber(0.6, 0), 1);
    });

    it("should handle both numbers needing rounding up", function () {
      assert.strictEqual(calculateNumber(0.5, 0.5), 2);
    });

    it("should handle both numbers needing rounding down", function () {
      assert.strictEqual(calculateNumber(0.4, 0.4), 0);
    });

    it("should handle mixed rounding (up and down)", function () {
      assert.strictEqual(calculateNumber(0.4, 0.6), 1);
    });
  });

  describe("Negative numbers", function () {
    it("should handle negative numbers", function () {
      assert.strictEqual(calculateNumber(-1.4, -1.4), -2);
    });

    it("should handle negative rounding up", function () {
      assert.strictEqual(calculateNumber(-1.5, -1.5), -2);
    });

    it("should handle negative rounding down", function () {
      assert.strictEqual(calculateNumber(-1.6, -1.6), -4);
    });

    it("should handle mixed positive and negative", function () {
      assert.strictEqual(calculateNumber(-1.4, 1.4), 0);
    });
  });

  describe("Whole numbers", function () {
    it("should handle whole numbers without change", function () {
      assert.strictEqual(calculateNumber(5, 10), 15);
    });

    it("should handle zero values", function () {
      assert.strictEqual(calculateNumber(0, 0), 0);
    });

    it("should handle one zero and one non-zero", function () {
      assert.strictEqual(calculateNumber(0, 5.7), 6);
    });
  });

  describe("Large numbers", function () {
    it("should handle large positive numbers", function () {
      assert.strictEqual(calculateNumber(999.4, 1000.6), 2000);
    });

    it("should handle large negative numbers", function () {
      assert.strictEqual(calculateNumber(-999.4, -1000.6), -2000);
    });
  });

  describe("Decimal precision edge cases", function () {
    it("should handle 1.49999 (rounds down)", function () {
      assert.strictEqual(calculateNumber(1.49999, 0), 1);
    });

    it("should handle 1.50001 (rounds up)", function () {
      assert.strictEqual(calculateNumber(1.50001, 0), 2);
    });

    it("should handle exactly 2.5 (rounds up)", function () {
      assert.strictEqual(calculateNumber(2.5, 0), 3);
    });

    it("should handle exactly 3.5 (rounds up)", function () {
      assert.strictEqual(calculateNumber(3.5, 0), 4);
    });
  });
});
