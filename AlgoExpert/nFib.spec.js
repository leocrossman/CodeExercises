const { expect } = require('chai');
const { nFib } = require('./nFib.js');

describe('Nth Fibonacci', () => {
  it('Returns the Nth term in the Fibonacci Sequence', () => {
    expect(nFib(1)).to.deep.equal(0);
    expect(nFib(2)).to.deep.equal(1);
    expect(nFib(3)).to.deep.equal(1);
    expect(nFib(4)).to.deep.equal(2);
    expect(nFib(5)).to.deep.equal(3);
    expect(nFib(6)).to.deep.equal(5);
    expect(nFib(7)).to.deep.equal(8);
  });
});
