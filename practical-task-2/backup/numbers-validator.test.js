/* global describe, it, beforeEach, afterEach */

const { expect } = require('chai');
const NumbersValidator = require('../app/numbers-validator');

describe('NumbersValidator', function () {
  let validator;

  beforeEach(function () {
    validator = new NumbersValidator();
  });

  afterEach(function () {
    validator = null;
  });

  describe('isNumberEven', function () {
    describe('positive tests', function () {
      it('should return true if the number is even', function () {
        expect(validator.isNumberEven(4)).to.equal(true);
      });

      it('should return false if the number is odd', function () {
        expect(validator.isNumberEven(5)).to.equal(false);
      });
    });

    describe('negative tests', function () {
      it('should throw an error if the input is not a number', function () {
        expect(function () {
          validator.isNumberEven('hellolili');
        }).to.throw(Error);
      });
    });
  });

  describe('getEvenNumbersFromArray', function () {
    describe('positive tests', function () {
      it('should return only even numbers from an array', function () {
        expect(validator.getEvenNumbersFromArray([1, 2, 3, 4]))
          .to.deep.equal([2, 4]);
      });

      it('should return an empty array if the input array is empty', function () {
        expect(validator.getEvenNumbersFromArray([])).to.deep.equal([]);
      });
    });

    describe('negative tests', function () {
      it('should throw an error if the input is not an array', function () {
        expect(function () {
          validator.getEvenNumbersFromArray('hellolili');
        }).to.throw(Error);
      });

      it('should throw an error if the array contains non-number values', function () {
        expect(function () {
          validator.getEvenNumbersFromArray([1, 2, 'lili', 4]);
        }).to.throw(Error);
      });
    });
  });

  describe('isAllNumbers', function () {
    describe('positive tests', function () {
      it('should return true if all array elements are numbers', function () {
        expect(validator.isAllNumbers([1, 2, 3, 4])).to.equal(true);
      });

      it('should return true if the array is empty', function () {
        expect(validator.isAllNumbers([])).to.equal(true);
      });
    });

    describe('negative tests', function () {
      it('should return false if the array contains non-number values', function () {
        expect(validator.isAllNumbers([1, 2, 'lili', 4])).to.equal(false);
      });

      it('should throw an error if the input is not an array', function () {
        expect(function () {
          validator.isAllNumbers('notanarray');
        }).to.throw(Error);
      });
    });
  });

  describe('isInteger', function () {
    describe('positive tests', function () {
      it('should return true if the number is an integer', function () {
        expect(validator.isInteger(10)).to.equal(true);
      });
    });

    describe('negative tests', function () {
      it('should return false if the number is not an integer', function () {
        expect(validator.isInteger(11.1)).to.equal(false);
      });

      it('should throw an error if the input is not a number', function () {
        expect(function () {
          validator.isInteger('lili');
        }).to.throw(Error);
      });
    });
  });
});
