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
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Enter your choice");
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    console.log(result);
    if (result.includes("win")) {
      playerScore++;
    } else if (result.includes("lose")) {
      computerScore++;
    }
  }
  if (playerScore > computerScore) {
    alert(`You win! ${playerScore} - ${computerScore}`);
    console.log("You win!");
  } else if (playerScore < computerScore) {
    alert(`You lose! ${playerScore} - ${computerScore}`);
    console.log("You lose!");
  } else {
    alert(`Draw! ${playerScore} - ${computerScore}`);
    console.log("Draw");
  }
}

game();
