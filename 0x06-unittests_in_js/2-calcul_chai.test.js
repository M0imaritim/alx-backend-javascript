const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function() {
  describe('SUM operation', function() {
    it('should return 6 when adding 1.4 and 4.5', function() {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should return 4 when adding 1 and 3', function() {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });

    it('should return 5 when adding 1 and 3.7', function() {
      expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    });

    it('should return 5 when adding 1.2 and 3.7', function() {
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    });

    it('should return 6 when adding 1.5 and 3.7', function() {
      expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
    });

    it('should handle negative numbers', function() {
      expect(calculateNumber('SUM', -1.4, -1.6)).to.equal(-3);
    });

    it('should handle zero values', function() {
      expect(calculateNumber('SUM', 0, 0)).to.equal(0);
    });

    it('should handle rounding edge cases', function() {
      expect(calculateNumber('SUM', 0.5, 0.5)).to.equal(2);
    });
  });

  describe('SUBTRACT operation', function() {
    it('should return -4 when subtracting 4.5 from 1.4', function() {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should return -2 when subtracting 3 from 1', function() {
      expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
    });

    it('should return -3 when subtracting 3.7 from 1', function() {
      expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
    });

    it('should return -3 when subtracting 3.7 from 1.2', function() {
      expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3);
    });

    it('should return -2 when subtracting 3.7 from 1.5', function() {
      expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2);
    });

    it('should handle negative numbers', function() {
      expect(calculateNumber('SUBTRACT', -1.4, -1.6)).to.equal(1);
    });

    it('should handle subtracting zero', function() {
      expect(calculateNumber('SUBTRACT', 5.7, 0)).to.equal(6);
    });

    it('should handle subtracting from zero', function() {
      expect(calculateNumber('SUBTRACT', 0, 5.7)).to.equal(-6);
    });

    it('should handle rounding edge cases', function() {
      expect(calculateNumber('SUBTRACT', 2.5, 1.5)).to.equal(1);
    });
  });

  describe('DIVIDE operation', function() {
    it('should return 0.2 when dividing 1.4 by 4.5', function() {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return 0.5 when dividing 1 by 2', function() {
      expect(calculateNumber('DIVIDE', 1, 2)).to.equal(0.5);
    });

    it('should return 0.25 when dividing 1 by 3.7', function() {
      expect(calculateNumber('DIVIDE', 1, 3.7)).to.equal(0.25);
    });

    it('should return 0.25 when dividing 1.2 by 3.7', function() {
      expect(calculateNumber('DIVIDE', 1.2, 3.7)).to.equal(0.25);
    });

    it('should return 0.5 when dividing 1.5 by 3.7', function() {
      expect(calculateNumber('DIVIDE', 1.5, 3.7)).to.equal(0.5);
    });

    it('should handle negative division', function() {
      expect(calculateNumber('DIVIDE', -4.6, 2.4)).to.equal(-2.5);
    });

    it('should handle dividing negative by negative', function() {
      expect(calculateNumber('DIVIDE', -4.6, -2.4)).to.equal(2.5);
    });

    it('should return 1.33... when dividing 4 by 3', function() {
      expect(calculateNumber('DIVIDE', 3.7, 3.2)).to.equal(4/3);
    });

    it('should handle rounding before division', function() {
      expect(calculateNumber('DIVIDE', 8.4, 2.6)).to.equal(8 / 3);
    });
  });

  describe('DIVIDE by zero', function() {
    it('should return "Error" when dividing 1.4 by 0', function() {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should return "Error" when dividing by 0.4 (rounds to 0)', function() {
      expect(calculateNumber('DIVIDE', 1.4, 0.4)).to.equal('Error');
    });

    it('should return "Error" when dividing by -0.4 (rounds to 0)', function() {
      expect(calculateNumber('DIVIDE', 1.4, -0.4)).to.equal('Error');
    });

    it('should return "Error" when dividing by 0.2 (rounds to 0)', function() {
      expect(calculateNumber('DIVIDE', 5, 0.2)).to.equal('Error');
    });

    it('should return "Error" when dividing zero by zero', function() {
      expect(calculateNumber('DIVIDE', 0, 0)).to.equal('Error');
    });

    it('should return "Error" when dividing by number that rounds to zero', function() {
      expect(calculateNumber('DIVIDE', 10, 0.49)).to.equal('Error');
    });

    it('should not return "Error" when dividing by 0.5 (rounds to 1)', function() {
      expect(calculateNumber('DIVIDE', 1, 0.5)).to.equal(1);
    });
  });

  describe('Edge cases and invalid inputs', function() {
    it('should handle very large numbers', function() {
      expect(calculateNumber('SUM', 999999.4, 999999.6)).to.equal(1999999);
    });

    it('should handle very small decimals', function() {
      expect(calculateNumber('SUM', 0.1, 0.2)).to.equal(0);
    });

    it('should handle decimal precision in division', function() {
      expect(calculateNumber('DIVIDE', 3, 2)).to.equal(1.5);
    });

    it('should throw error for invalid operation type', function() {
      expect(() => calculateNumber('MULTIPLY', 1, 2)).to.throw(Error);
    });

    it('should throw error for undefined operation type', function() {
      expect(() => calculateNumber(undefined, 1, 2)).to.throw(Error);
    });

    it('should throw error for null operation type', function() {
      expect(() => calculateNumber(null, 1, 2)).to.throw(Error);
    });
  });

  describe('Behavior-driven development style tests', function() {
    context('when performing SUM operations', function() {
      it('should correctly sum two positive rounded numbers', function() {
        expect(calculateNumber('SUM', 2.3, 1.8)).to.equal(4);
      });

      it('should correctly sum positive and negative rounded numbers', function() {
        expect(calculateNumber('SUM', -2.3, 1.8)).to.equal(0);
      });
    });

    context('when performing SUBTRACT operations', function() {
      it('should correctly subtract two positive rounded numbers', function() {
        expect(calculateNumber('SUBTRACT', 5.7, 2.3)).to.equal(4);
      });

      it('should handle subtraction resulting in negative values', function() {
        expect(calculateNumber('SUBTRACT', 1.2, 5.8)).to.equal(-5);
      });
    });

    context('when performing DIVIDE operations', function() {
      it('should correctly divide two positive rounded numbers', function() {
        expect(calculateNumber('DIVIDE', 8.7, 2.2)).to.equal(4.5);
      });

      it('should handle division resulting in decimal values', function() {
        expect(calculateNumber('DIVIDE', 7.3, 2.8)).to.be.closeTo(2.33, 0.01);
      });

      it('should handle division by zero gracefully', function() {
        expect(calculateNumber('DIVIDE', 5.5, 0.3)).to.equal('Error');
      });
    });

    context('when working with edge cases', function() {
      it('should handle the 0.5 rounding boundary correctly', function() {
        expect(calculateNumber('SUM', 1.5, 2.5)).to.equal(5);
      });

      it('should work consistently with floating point precision', function() {
        expect(calculateNumber('DIVIDE', 1, 3)).to.be.closeTo(0.33, 0.01);
      });
    });
  });
});
