/*
Given a list of unique numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?
*/

const willAdd = (arr, target) => {
  const hash = {};
  for (let i = 0; i < arr.length; i++) {
    hash[arr[i]] = arr[i];
    if (hash[target - arr[i]] && hash[target - arr[i]] !== arr[i]) return true;
  }
  return false;
};

module.exports = { willAdd };
