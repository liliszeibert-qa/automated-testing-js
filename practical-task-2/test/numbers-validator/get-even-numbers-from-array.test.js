/* global describe, it, beforeEach, afterEach */
const { expect } = require('chai');
const NumbersValidator = require('../../app/numbers-validator');

describe('getEvenNumbersFromArray()', function () {
  let validator;

  beforeEach(function () {
    validator = new NumbersValidator();
  });

  afterEach(function () {
    validator = null;
  });

  describe('Positive test cases', function () {
    it('should return only even numbers from an array', function () {
      expect(validator.getEvenNumbersFromArray([1, 2, 3, 4])).to.deep.equal([2, 4]);
    });

    it('should return an empty array when the input array is empty', function () {
      expect(validator.getEvenNumbersFromArray([])).to.deep.equal([]);
    });
  });

  describe('Negative test cases', function () {
    it('should throw an error when the input is not an array', function () {
      expect(() => validator.getEvenNumbersFromArray('lili')).to.throw(Error);
    });

    it('should throw an error when the array contains non-number values', function () {
      expect(() => validator.getEvenNumbersFromArray([1, 2, 'lili', 4])).to.throw(Error);
    });
  });
});
