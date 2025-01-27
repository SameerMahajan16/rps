// Global variables for the scores
let userScore = 0;
let compScore = 0;


// Function to get the computer's choice
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

// Function to determine the winner
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "The game is a tie!";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer wins!";
    } else {
      return "User wins!";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Computer wins!";
    } else {
      return "User wins!";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer wins!";
    } else {
      return "User wins!";
    }
  }
};

// Function to update the scores
const updateScores = (result) => {
  if (result === "User wins!") {
    userScore++;

    document.getElementById("userScoreDisplay").textContent = `USER SCORE: ${userScore}`;
  } else if (result === "Computer wins!") {
    compScore++;
 
    document.getElementById("compScoreDisplay").textContent = `COMPUTER SCORE: ${compScore}`;
  }
};
function checkEndGame(userScore, compScore) {
  // Disable buttons when game is over
  if (userScore > 3) {
    alert("You Won Winner! (press restart to play again)");

  }
  if (compScore > 3) {
    alert("You Lost Loser! ");
  }
}

// Function to play the game
const playGame = (userChoice) => {
  const computerChoice = getComputerChoice();
  const result = determineWinner(userChoice, computerChoice);

  // Display the choices
  document.getElementById("Userch").textContent = `User: ${userChoice}`;
  document.getElementById("Computerchoice").textContent = `Computer: ${computerChoice}`;

  // Display the result
  document.getElementById("winnerDisplayMsg").textContent = result;

  // Update scores
  updateScores(result);
  checkEndGame(userScore, compChoice);

  }