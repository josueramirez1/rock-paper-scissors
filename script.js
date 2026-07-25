let humanScore = 0;
let computerScore = 0;
let roundScore = 1;
//button selectors
const rockBtn = document.querySelector(".rock-btn");
const paperBtn = document.querySelector(".paper-btn");
const scissorsBtn = document.querySelector(".scissors-btn");
const computerBtn = document.querySelector(".computer-btn");
//scores selectors
const roundScoreNum = document.querySelector(".update-num");
const playerUpdateNum = document.querySelector(".player-update");
const computerUpdateNum = document.querySelector(".computer-update");
const message = document.querySelector(".msg");
const msgContainer = document.querySelector(".msg-container");

rockBtn.addEventListener("click", () => {
  let computerSelection = getComputerChoice();
  let humanSelection = "rock";
  playRound(computerSelection, humanSelection);
});

paperBtn.addEventListener("click", () => {
  let computerSelection = getComputerChoice();
  let humanSelection = "paper";
  playRound(computerSelection, humanSelection);
});

scissorsBtn.addEventListener("click", () => {
  let computerSelection = getComputerChoice();
  let humanSelection = "scissors";
  playRound(computerSelection, humanSelection);
});

function getComputerChoice() {
  //randomly return one of the follow string values rock paper or scissors
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    computerBtn.textContent = "🪨";
    return "rock";
  }

  if (computerChoice === 1) {
    computerBtn.textContent = "📃";
    return "paper";
  }

  if (computerChoice === 2) {
    computerBtn.textContent = "✂️";
    return "scissors";
  }
}

// function getHumanChoice() {
//   //get user input
//   let userInput = prompt().toLowerCase();
//   //check if input is valid to what is available here
//   return userInput;
// }

function playRound(computerChoice, humanChoice) {
  if (computerChoice === humanChoice) {
    message.textContent = "It's a draw. No points";
  }

  if (computerChoice === "rock" && humanChoice === "scissors") {
    message.textContent = "You lose! Rock beats scissors";
    computerScore++;
    roundScore++;
  }

  if (computerChoice === "rock" && humanChoice === "paper") {
    console.log("You win! Paper covers rock");
    humanScore++;
    roundScore++;
  }

  if (computerChoice === "paper" && humanChoice === "scissors") {
    message.textContent = "You win! Scissors cuts paper";
    humanScore++;
    roundScore++;
  }

  if (computerChoice === "paper" && humanChoice === "rock") {
    message.textContent = "You lose! Paper covers rock";
    computerScore++;
    roundScore++;
  }

  if (computerChoice === "scissors" && humanChoice === "rock") {
    message.textContent = "You win! Rock beats scissors";
    humanScore++;
    roundScore++;
  }

  if (computerChoice === "scissors" && humanChoice === "paper") {
    message.textContent = "You lose! Scissors cuts paper";
    computerScore++;
    roundScore++;
  }

  computerUpdateNum.textContent = computerScore;
  playerUpdateNum.textContent = humanScore;

  if (roundScore > 5) {
    endGame();
    return;
  }

  roundScoreNum.textContent = roundScore;
}

// for (let i = 0; i < 5; i++) {
//   let computerSelection = getComputerChoice();
//   let humanSelection = getHumanChoice();
//   playRound(computerSelection, humanSelection);
// }

function endGame() {
  if (humanScore > computerScore) {
    message.textContent = "You Win!";
  } else {
    message.textContent = "Computer wins! Better luck next time.";
  }

  rockBtn.disabled = "true";
  paperBtn.disabled = "true";
  scissorsBtn.disabled = "true";
  computerBtn.disabled = "true";

  const btn = document.createElement("button");
  btn.textContent = "Play Again?";
  btn.style = "font-size: 18px;";
  msgContainer.appendChild(btn);
  btn.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    roundScore = 1;
    rockBtn.disabled = "";
    paperBtn.disabled = "";
    scissorsBtn.disabled = "";
    computerBtn.disabled = "";
    computerBtn.textContent = "?";
    message.textContent = "Enjoy the Game!";
    roundScoreNum.textContent = roundScore;
    playerUpdateNum.textContent = humanScore;
    computerUpdateNum.textContent = computerScore;
    btn.remove();
  });
}
