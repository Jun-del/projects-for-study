function findMissingLetter(arr) {
  if (!arr || arr.length === 0) {
    return "";
  }

  // const alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // const startIndex = alphabets.indexOf(arr[0]);

  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] !== alphabets[startIndex + i]) {
  //     return alphabets[startIndex + i];
  //   }
  // }

  let start = arr[0].charCodeAt(0);

  for (let i = 1; i < arr.length; i++) {
    let current = arr[i].charCodeAt(0);

    if (current - start > 1) {
      return String.fromCharCode(start + 1);
    }

    start = current;
  }

  return "";
}

module.exports = findMissingLetter;
