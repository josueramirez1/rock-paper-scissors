let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  //randomly return one of the follow string values rock paper or scissors
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    return "rock";
  }

  if (computerChoice === 1) {
    return "paper";
  }

  if (computerChoice === 2) {
    return "scissors";
  }
}

function getHumanChoice() {
  //get user input
  let userInput = prompt().toLowerCase();
  //check if input is valid to what is available here
  return userInput;
}

function playRound(computerChoice, humanChoice) {
  if (computerChoice === humanChoice) {
    console.log("It's a draw. No points");
  }

  if (computerChoice === "rock" && humanChoice === "scissors") {
    console.log("You lose! Rock beats scissors");
    computerScore++;
  }

  if (computerChoice === "rock" && humanChoice === "paper") {
    console.log("You win! Paper covers rock");
    humanScore++;
  }

  if (computerChoice === "paper" && humanChoice === "scissors") {
    console.log("You win! Scissors cuts paper");
    humanScore++;
  }

  if (computerChoice === "paper" && humanChoice === "rock") {
    console.log("You lose! Paper covers rock");
    computerScore++;
  }

  if (computerChoice === "scissors" && humanChoice === "rock") {
    console.log("You win! Rock beats scissors");
    humanScore++;
  }

  if (computerChoice === "scissors" && humanChoice === "paper") {
    console.log("You lose! Scissors cuts paper");
    computerScore++;
  }
}

for (let i = 0; i < 5; i++) {
  let computerSelection = getComputerChoice();
  let humanSelection = getHumanChoice();
  playRound(computerSelection, humanSelection);
}

if (humanScore > computerScore) {
  console.log("You win!");
} else {
  console.log("Computer wins! Better luck next time.");
}
