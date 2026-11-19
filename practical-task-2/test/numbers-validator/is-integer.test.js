/* global describe, it, beforeEach, afterEach */
const { expect } = require('chai');
const NumbersValidator = require('../../app/numbers-validator');

describe('isInteger()', function () {
  let validator;

  beforeEach(function () {
    validator = new NumbersValidator();
  });

  afterEach(function () {
    validator = null;
  });

  describe('Positive test cases', function () {
    it('should return true for an integer', function () {
      expect(validator.isInteger(10)).to.equal(true);
    });
  });

  describe('Negative test cases', function () {
    it('should return false for a decimal number', function () {
      expect(validator.isInteger(11.1)).to.equal(false);
    });

    it('should throw an error when the input is not a number', function () {
      expect(() => validator.isInteger('10')).to.throw(Error);
    });
  });
});
