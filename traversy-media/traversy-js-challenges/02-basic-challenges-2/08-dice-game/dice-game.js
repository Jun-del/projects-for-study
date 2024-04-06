function diceGameSimulation(numSimulations) {
  const result = [];

  for (let i = 0; i < numSimulations; i++) {
    result.push(rollDiceResult());
  }

  return result;
}

function rollDice() {
  return Math.floor(Math.random() * 6 + 1);
}

function rollDiceResult() {
  const dice1 = rollDice();
  const dice2 = rollDice();
  const sum = dice1 + dice2;
  const result =
    sum === 7 || sum === 11
      ? "win"
      : sum === 2 || sum === 3 || sum === 12
      ? "lose"
      : "roll again";

  return {
    dice1,
    dice2,
    sum,
    result,
  };
}

module.exports = diceGameSimulation;
