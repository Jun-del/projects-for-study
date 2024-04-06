function findFirstNonRepeatingCharacter(str) {
  // const strMap = new Map();

  // for (let i = 0; i < str.length; i++) {
  //   const char = str[i];
  //   strMap.set(char, (strMap.get(char) || 0) + 1);
  // }

  // for (const char of str) {
  //   if (strMap.get(char) === 1) {
  //     return char;
  //   }
  // }

  // return null;

  const charCount = {};

  for (const letter of str) {
    charCount[letter] = (charCount[letter] || 0) + 1;
  }

  for (const char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null;
}

module.exports = findFirstNonRepeatingCharacter;
