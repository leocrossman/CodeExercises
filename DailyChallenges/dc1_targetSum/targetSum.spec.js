const { expect } = require('chai');
const { willAdd } = require('./targetSum.js');

describe('Target Sum Algorithm', () => {
  describe('Check to ensure the function will return true and false properly:', () => {
    it('Returns true for an array where two numbers equal the sum', () => {
      expect(willAdd([1, 2, 3], 5)).to.equal(true);
      expect(willAdd([165, 234, 94], 328)).to.equal(true);
      expect(willAdd([29384712, 849315, 283794], 30234027)).to.equal(true);
    });
    it('Returns false for an array where no two numbers equal the sum', () => {
      expect(willAdd([1, 2, 3], 6)).to.equal(false);
      expect(willAdd([-125, 5342, 1], 2)).to.equal(false);
      expect(willAdd([1, 3, 5], 7)).to.equal(false);
    });
  });
});
