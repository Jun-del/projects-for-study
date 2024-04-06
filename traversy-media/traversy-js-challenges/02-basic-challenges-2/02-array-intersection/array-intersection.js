function arrayIntersection(arr1, arr2) {
  // Solution 1
  const intersectionArr = [];

  // for (let i = 0; i < arr1.length; i++) {
  //   if (arr2.includes(arr1[i]) && !intersectionArr.includes[arr1[i]]) {
  //     intersectionArr.push(arr1[i]);
  //   }
  // }

  // Solution 2
  const uniqueArr = new Set(arr1);

  // for (let i = 0; i < arr2.length; i++) {
  //   if (uniqueArr.has(arr2[i])) {
  //     intersectionArr.push(arr2[i]);
  //   }
  // }

  for (let number of arr2) {
    if (uniqueArr.has(number)) {
      intersectionArr.push(number);
    }
  }

  return intersectionArr;
}

module.exports = arrayIntersection;
