let computerWinCounter;
let playerWinCounter;
let roundCounter;
let gameOver;


initialGameState();

/**
 * Handles the setting of the initial game state variables and
 * is used to reset the game
 */
function initialGameState() {
  computerWinCounter = 0;
  playerWinCounter = 0;
  roundCounter = 0;
  gameOver = 0;
  const imagePlayer = document.getElementById('image');
  image.src = 'images/alexKidd.jpeg';
}

/**
 * Picks a random number between 1 and 3
 * and uses it to pick the computers choice from an array by index
 * @return {string} the computers choice of 'Rock', 'Paper' or 'Scissors'
 */
function getComputerChoice() {
  const computerChoice = Math.trunc(Math.random() * (4 - 1));
  const computerOptions = ['Rock', 'Paper', 'Scissors'];
  console.log('Computer Choice: ' + computerOptions[computerChoice]);
  return (computerOptions[computerChoice]);
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


const buttonRock = document.querySelector('#buttonRock');
buttonRock.addEventListener('click', () => {
  playRound('Rock');
});

const buttonPaper = document.querySelector('#buttonPaper');
buttonPaper.addEventListener('click', () => {
  playRound('Paper');
});

const buttonScissors = document.querySelector('#buttonScissors');
buttonScissors.addEventListener('click', () => {
  playRound('Scissors');
});

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
    const imagePlayer = document.getElementById('playerSelectionImage');
    image.src = 'images/'+playerChoice+'.jpeg';


    const imageCPU = document.getElementById('computerSelectionImage');
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
    } else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
      console.log('Player Wins');
      playerWinCounter++;
    } else if (playerChoice == 'Paper' && computerChoice == 'Paper') {
      console.log('Tie');
    } else if (playerChoice == 'Paper' && computerChoice == 'Scissors') {
      console.log('Computer Wins');
      computerWinCounter++;
    } else if (playerChoice == 'Scissors' && computerChoice == 'Rock') {
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
      initialGameState();
    }
  }

  if (roundCounter == 5 && playerWinCounter > computerWinCounter) {
    console.log('You won the game!');
    const imagePlayer = document.getElementById('image');
    image.src = 'images/alexKiddOnigiri.jpg';
    gameOver = 1;
  } else if (roundCounter == 5 && playerWinCounter < computerWinCounter) {
    console.log('You lose!');
    gameOver = 1;
    const imagePlayer = document.getElementById('image');
    image.src = 'images/gameOver.png';
  } else if (roundCounter == 5 && playerWinCounter == computerWinCounter) {
    console.log('TIE');
    gameOver = 1;
    const imagePlayer = document.getElementById('image');
    image.src = 'images/tie.jpeg';
  }
}

const buttonResetGame = document.querySelector('#buttonResetGame');
buttonResetGame.addEventListener('click', () => {
  initialGameState();
});
