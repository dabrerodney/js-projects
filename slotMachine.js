const prompt = require("prompt-sync")();

// 1. Deposite some money
// 2. determine no of lines to bet on
// 3. collect a bet amount
// 4. spin the slot machine
// 5. check if the user won or not
// 6. give the user the prize
// 7. play again

function deposite() {
  while (true) {
    const depositeAmount = prompt("Enter a deposite number: ");
    const numberDepositeAmount = parseFloat(depositeAmount);

    if (isNaN(numberDepositeAmount) || numberDepositeAmount <= 0) {
      document.write("Entered deposite is invalid, try again");
    } else {
      return numberDepositeAmount;
    }
  }
}

function getNumberOfLines() {
  while (true) {
    const lines = prompt(
      "Enter the number of lines you want to bet on (1-3): "
    );
    const numberOfLines = parseFloat(lines);

    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
      document.write("Entered no of line is invalid, try again");
    } else {
      return numberOfLines;
    }
  }
}

function getBet(balance) {
  while (true) {
    const bet = prompt("Enter the bet: ");
    const numberBet = parseFloat(bet);

    if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance) {
      document.write("Invalid bet, try again");
    } else {
      return numberBet;
    }
  }
}

let balance = deposite();
const numberOfLines = getNumberOfLines();
const bet = getBet();