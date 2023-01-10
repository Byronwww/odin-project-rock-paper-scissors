/**
 * Picks a random number between 1 and 4 and changes this to a 
 * string to return as the computers choice in the game
 * @return {string} the computers choice of rock, paper or scissors as a string
 */
function getComputerChoice() {
  let computerChoice = (Math.random() * (4 - 1) + 1);
  computerChoice = Math.trunc(computerChoice);

  if (computerChoice == 1) {
    choiceConverted = 'Rock';
  } else if (computerChoice == 2) {
    choiceConverted = 'Paper';
  } else if (computerChoice == 3) {
    choiceConverted = 'Scissors';
  } else {
    console.log('Error!');
  }
  console.log('Computer Choice: ' + choiceConverted);
  return (choiceConverted);
}

/**
 * Uses the players choice input to set the players choice
 * @param {string} setPlayerChoice the players choice of rock, paper or scissors
 * @return {string} the players choice of rock, paper or scissors as a string
 */
function setPlayerChoice(setPlayerChoice) {
  playerChoice=setPlayerChoice;
  console.log('Player Choice:' + playerChoice);
  return playerChoice;
}

let computerWinCounter = 0;
let playerWinCounter = 0;
let roundCounter = 0;
let gameOver = 0;

/**
 * Handles the logic of playing a single round
 * The players choice is set, the computers choice is called and retrieved
 * and the round counter is incremented.
 * Called from the HTML doc when a user clicks rock, paper or scissor buttons.
 * @param {string} playerChoice of rock, paper or scissors
 */
function playRound(playerChoice) {
  setPlayerChoice(playerChoice);
  computerChoice = getComputerChoice();
  roundCounter++;


  if (gameOver == 0) {
    let imagePlayer = document.getElementById('playerSelectionImage');
    image.src = 'images/'+playerChoice+'.jpeg';


    let imageCPU = document.getElementById('computerSelectionImage');
    image.src = 'images/'+computerChoice+'.jpeg';

    // Player Chooses Rock
    if (playerChoice == 'Rock' && computerChoice == 'Rock') {
      console.log('Tie');
    } else if (playerChoice == 'Rock' && computerChoice == 'Paper') {
      console.log('Computer Wins');
      computerWinCounter++;
    } else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
      console.log('Player Wins');
      playerWinCounter++;
    } // Player Chooses Paper
    else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
      console.log('Player Wins');
      playerWinCounter++;
    } else if (playerChoice == 'Paper' && computerChoice == 'Paper') {
      console.log('Tie');
    } else if (playerChoice == 'Paper' && computerChoice == 'Scissors') {
      console.log('Computer Wins');
      computerWinCounter++;
    }
    // Player Chooses Scissors
    else if (playerChoice == 'Scissors' && computerChoice == 'Rock') {
      console.log('Computer Wins');
      computerWinCounter++;
    } else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
      console.log('Player Wins');
      playerWinCounter++;
    } else if (playerChoice == 'Scissors' && computerChoice == 'Scissors') {
      console.log('Tie');
    }
    console.log('Player Wins: '+ playerWinCounter);
    console.log('Computer Wins: '+ computerWinCounter);
    document.getElementById('playerScoreText').innerHTML = playerWinCounter;
    document.getElementById('computerScoreText').innerHTML = computerWinCounter;
  } else if (gameOver == 1) {
    if (confirm('Game Over - Restart Game?')) {
      resetGame();
    }
  }

  if (roundCounter == 5 && playerWinCounter > computerWinCounter) {
    console.log('You won the game!');
    let imagePlayer = document.getElementById('image');
    image.src = 'images/alexKiddOnigiri.jpg';
    gameOver = 1;
  } else if (roundCounter == 5 && playerWinCounter < computerWinCounter) {
    console.log('You lose!');
    gameOver = 1;
    let imagePlayer = document.getElementById('image');
    image.src = 'images/gameOver.png';
  }
}

/**
 * resets the game by reloading the page
 */
function resetGame() {
  location.reload();
}

