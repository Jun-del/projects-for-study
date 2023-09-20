function fizzBuzzArray(number) {
  const result = [];

  for (let i = 1; i <= number; i++) {
    const currentNumber = i;

    // if (currentNumber % 15 === 0) {
    if (currentNumber % 5 === 0 && currentNumber % 3 === 0) {
      result.push("FizzBuzz");
    } else if (currentNumber % 5 === 0) {
      result.push("Buzz");
    } else if (currentNumber % 3 === 0) {
      result.push("Fizz");
    } else {
      result.push(currentNumber);
    }
  }

  return result;
}

module.exports = fizzBuzzArray;
