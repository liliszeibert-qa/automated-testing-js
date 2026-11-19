/* global describe, it, beforeEach, afterEach */
const { expect } = require('chai');
const NumbersValidator = require('../../app/numbers-validator');

describe('isAllNumbers()', function () {
  let validator;

  beforeEach(function () {
    validator = new NumbersValidator();
  });

  afterEach(function () {
    validator = null;
  });

  describe('Positive test cases', function () {
    it('should return true when all array elements are numbers', function () {
      expect(validator.isAllNumbers([1, 2, 3, 4])).to.equal(true);
    });

    it('should return true for an empty array', function () {
      expect(validator.isAllNumbers([])).to.equal(true);
    });
  });

  describe('Negative test cases', function () {
    it('should return false when the array contains non-number values', function () {
      expect(validator.isAllNumbers([1, 2, 'lili', 4])).to.equal(false);
    });

    it('should throw an error when the input is not an array', function () {
      expect(() => validator.isAllNumbers('lili')).to.throw(Error);
    });
  });
});
