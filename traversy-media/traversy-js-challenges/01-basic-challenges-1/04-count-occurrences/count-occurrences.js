function countOccurrences(str, char) {
  // let occurance = 0;

  // for (character of str) {
  //   if (character === char) {
  //     occurance += 1;
  //   }
  // }

  // return occurance;

  return str.split(char).length - 1;
}

countOccurrences("haann", "a");

module.exports = countOccurrences;
