/* global describe, it, beforeEach, afterEach */
const { expect } = require('chai');
const NumbersValidator = require('../../app/numbers-validator');

describe('isNumberEven()', function () {
  let validator;

  beforeEach(function () {
    validator = new NumbersValidator();
  });

  afterEach(function () {
    validator = null;
  });

  describe('Positive test cases', function () {
    it('should return true for an even number', function () {
      expect(validator.isNumberEven(4)).to.equal(true);
    });

    it('should return false for an odd number', function () {
      expect(validator.isNumberEven(5)).to.equal(false);
    });
  });

  describe('Negative test cases', function () {
    it('should throw an error when the input is not a number', function () {
      expect(() => validator.isNumberEven('lili')).to.throw(Error);
    });
  });
});
