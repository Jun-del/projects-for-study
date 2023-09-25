function areAllCharactersUnique(str) {
  // const seenChar = {};

  // for (let i = 0; i < str.length; i++) {
  //   if (seenChar[str[i]]) {
  //     return false;
  //   }

  //   seenChar[str[i]] = true;
  // }

  // return true;

  const charSet = new Set();

  for (const letter of str) {
    if (charSet.has(letter)) {
      return false;
    }

    charSet.add(letter);
  }

  return true;
}

module.exports = areAllCharactersUnique;
