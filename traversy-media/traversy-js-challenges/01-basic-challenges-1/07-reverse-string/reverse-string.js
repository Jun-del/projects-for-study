function reverseString(str) {
  // Solution 1:
  // return str.split("").reverse().join("");

  // Solution 2:
  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return reversedStr;
}

module.exports = reverseString;
