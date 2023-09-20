function countVowels(str) {
  const formattedStr = str.toLowerCase();
  let count = 0;

  for (let i = 0; i < formattedStr.length; i++) {
    const currentChar = formattedStr[i];

    if (
      currentChar === "a" ||
      currentChar === "e" ||
      currentChar === "i" ||
      currentChar === "o" ||
      currentChar === "u"
    ) {
      count += 1;
    }
  }

  return count;
}

module.exports = countVowels;
