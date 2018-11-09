const { expect } = require('chai');
const { arrProduct } = require('./productArray.js');

describe('Array Product Algorithm', () => {
  it('Returns an array of equal length', () => {
    expect(arrProduct([])).to.have.length(0);
    expect(arrProduct([1])).to.have.length(1);
    expect(arrProduct([1, 2])).to.have.length(2);
    expect(arrProduct([1, 2, 3])).to.have.length(3);
  });

  it('Check to ensure the array will contain the correct products', () => {
    expect(arrProduct([1, 2, 3])).to.deep.equal([6, 3, 2]);
    expect(arrProduct([3, 2, 1])).to.deep.equal([2, 3, 6]);
    expect(arrProduct([1, 2, 3, 4, 5])).to.deep.equal([120, 60, 40, 30, 24]);
  });
});
