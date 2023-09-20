function findMaxNumber(arr) {
  // return Math.max(...arr);

  let maxNumber = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (maxNumber < arr[i]) {
      maxNumber = arr[i];
    }
  }

  return maxNumber;
}

module.exports = findMaxNumber;
