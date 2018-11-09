/*
Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?
*/

const arrProduct = arr => {
  const finalArr = Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    let leftProd = 1,
      rightProd = 1;
    left = arr.slice(0, i);
    right = arr.slice(i + 1);
    if (left.length) {
      leftProd = left.reduce((total, curr) => total * curr);
    }
    if (right.length) {
      rightProd = right.reduce((total, curr) => total * curr);
    }
    product = leftProd * rightProd;
    finalArr[i] = product;
  }

  return finalArr;
};

module.exports = { arrProduct };
