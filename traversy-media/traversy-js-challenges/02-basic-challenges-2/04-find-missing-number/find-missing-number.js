function findMissingNumber(arr) {
  if (!arr || arr.length === 0) {
    return undefined;
  }

  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;

  const actualSum = arr.reduce((acc, curr) => acc + curr, 0);

  return expectedSum - actualSum;
}

module.exports = findMissingNumber;
