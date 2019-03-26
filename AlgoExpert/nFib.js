/*
Returns Nth term in the Fibonacci Sequence.

Let's do it dynamically...
*/

const nFib = n => {
  if (n <= 1) {
    return 1;
  }
  return nFib(n - 1) + nFib(n - 2);
};

module.exports = { nFib };
