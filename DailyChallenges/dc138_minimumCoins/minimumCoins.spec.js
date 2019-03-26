const { expect } = require('chai');
const { minimumCoins } = require('./minimumCoins.js');

describe('Minimum Number of Coins Algorithm', () => {
  it('Returns the minimum number of coins required to make n', () => {
    expect(minimumCoins(1)).to.equal(1);
    expect(minimumCoins(2)).to.equal(2);
    expect(minimumCoins(7)).to.equal(3);
    expect(minimumCoins(16)).to.equal(3);
    expect(minimumCoins(203)).to.equal(11);
    expect(minimumCoins(1287374)).to.equal(51500);
  });
});
