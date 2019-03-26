/*
This problem was asked by Google.

Find the minimum number of coins required to make n cents.

You can use standard American denominations, that is, 1¢, 5¢, 10¢, and 25¢.

For example, given n = 16, return 3 since we can make it with a 10¢, a 5¢, and a 1¢.
*/

const minimumCoins = n => {
  let coins = 0,
    remainder;
  let validCoins = [25, 10, 5, 1];
  for (let i = 0; i < validCoins.length; i++) {
    if (n >= validCoins[i]) {
      remainder = n % validCoins[i];
      coins += Math.floor(n / validCoins[i]) + minimumCoins(remainder);
      return coins;
    }
  }
  return coins;
};

module.exports = { minimumCoins };
