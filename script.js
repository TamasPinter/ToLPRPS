//create a function to get random choice for computer rock paper scissor
function computerPlay() {
  let choices = ["rock", "paper", "scissor"];
  let random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

// create a function to play a round

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    alert("Draw");
    return "Draw";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    alert("You lose! Paper beats Rock");
    return "You lose! Paper beats Rock";
  } else if (playerSelection === "rock" && computerSelection === "scissor") {
    alert("You win! Rock beats Scissor");
    return "You win! Rock beats Scissor";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    alert("You win! Paper beats Rock");
    return "You win! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "scissor") {
    alert("You lose! Scissor beats Paper");
    return "You lose! Scissor beats Rock";
  } else if (playerSelection === "scissor" && computerSelection === "rock") {
    alert("You lose! Rock beats Scissor");
    return "You lose! Rock beats Scissor";
  } else if (playerSelection === "scissor" && computerSelection === "paper") {
    alert("You win! Scissor beats Paper");
    return "You win! Scissor beats Paper";
  } else {
    alert("Invalid Input");
    return "Invalid Input";
  }
}

// create a function to play the game

function game() {
  let playerScore = 1;
  let computerScore = 1;
  let drawScore = 1;
  let playerSelection;
  let computerSelection;
  let result;
  //add event listener for buttons
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      playerSelection = button.id;
      computerSelection = computerPlay();
      result = playRound(playerSelection, computerSelection);
      if (result.includes("win")) {
        document.getElementById("player-score").innerHTML = playerScore;
        playerScore++;
      } else if (result.includes("lose")) {
        document.getElementById("computer-score").innerHTML = computerScore;
        computerScore++;
      } else if (result.includes("Draw")) {
        document.getElementById("draw-score").innerHTML = drawScore;
        drawScore++;
      }
      console.log(playerScore);
      console.log(computerScore);
      console.log(drawScore);
      if (playerScore === 5 || computerScore === 5) {
        endGame(playerScore, computerScore);
        alert("Game Over");
      }
    });
  });
}

game();
