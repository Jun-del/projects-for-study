function removeDuplicates(arr) {
  // Solution 1
  // const uniqueArray = [];

  // for (let i = 0; i < arr.length; i++) {
  //   if (!uniqueArray.includes(arr[i])) {
  //     uniqueArray.push(arr[i]);
  //   }
  // }

  // return uniqueArray;

  // Solution 2
  // return [...new Set(arr)];

  return Array.from(new Set(arr));
}

module.exports = removeDuplicates;
