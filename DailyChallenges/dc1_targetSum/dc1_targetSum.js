const willAdd = (arr, target) => {
  const hash = {};
  for (let i = 0; i < arr.length; i++) {
    hash[arr[i]] = arr[i];
    if (hash[target - arr[i]] && hash[target - arr[i]] !== arr[i]) return true;
  }
  return false;
};

module.exports = { willAdd };
