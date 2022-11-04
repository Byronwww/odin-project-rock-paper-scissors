function getComputerChoice(){
    let computerChoice = (Math.random() * (4 - 1) + 1);
    computerChoice = Math.trunc(computerChoice);

    if (computerChoice == 1){
        choiceConverted = 'Rock';    
    }
    else if (computerChoice == 2){
        choiceConverted = 'Paper';    
    }
    else if (computerChoice == 3){
        choiceConverted = 'Scissors';
    }
    else{
        console.log('Error!');
    }
    console.log('Computer Choice: ' + choiceConverted);
    return(choiceConverted);
}


function setPlayerChoice(setPlayerChoice){
    playerChoice=setPlayerChoice;
    console.log('Player Choice:' + playerChoice);
    return playerChoice;
}

let computerWinCounter = 0;
let playerWinCounter = 0;  
let roundCounter = 0;
let gameOver = 0; 



function playRound(playerChoice){
    setPlayerChoice(playerChoice)  
    computerChoice = getComputerChoice();
    roundCounter++;
  

if (gameOver == 0){
    var image = document.getElementById('playerSelectionImage');
    image.src = "./images/"+playerChoice+".jpeg";


    var image = document.getElementById('computerSelectionImage');
    image.src = "./images/"+computerChoice+".jpeg";

    //Player Chooses Rock
    if (playerChoice == 'Rock' && computerChoice == 'Rock'){
        console.log('Tie');
    }
    else if (playerChoice == 'Rock' && computerChoice == 'Paper'){
        console.log('Computer Wins');
        computerWinCounter++;        
    }
    else if (playerChoice == 'Rock' && computerChoice == 'Scissors'){
        console.log('Player Wins');
        playerWinCounter++;
    }
    //Player Chooses Paper
    else if (playerChoice == 'Paper' && computerChoice == 'Rock'){
        console.log('Player Wins');
        playerWinCounter++;
    }
    else if (playerChoice == 'Paper' && computerChoice == 'Paper'){
        console.log('Tie');
    }
    else if (playerChoice == 'Paper' && computerChoice == 'Scissors'){
        console.log('Computer Wins');
        computerWinCounter++;
    }
    //Player Chooses Scissors
    else if (playerChoice == 'Scissors' && computerChoice == 'Rock'){
        console.log('Computer Wins');
        computerWinCounter++;
    }
    else if (playerChoice == 'Scissors' && computerChoice == 'Paper'){
        console.log('Player Wins');
        playerWinCounter++;
    }
    else if (playerChoice == 'Scissors' && computerChoice == 'Scissors'){
        console.log('Tie');
    }
    console.log('Player Wins: '+ playerWinCounter);
    console.log('Computer Wins: '+ computerWinCounter);
    document.getElementById("playerScoreText").innerHTML = playerWinCounter;
    document.getElementById("computerScoreText").innerHTML = computerWinCounter;
}
else if (gameOver == 1){
    if (confirm("Game Over - Restart Game?")){
        resetGame();
    }
}

    if (roundCounter == 5 && playerWinCounter > computerWinCounter){
        console.log('You won the game!');
        var image = document.getElementById('image');
        image.src = "./images/alexKiddOnigiri.jpg";
        gameOver = 1;
    }

    else if (roundCounter == 5 && playerWinCounter < computerWinCounter){
        console.log('You lose!');
        gameOver = 1;
        var image = document.getElementById('image');
        image.src = "./images/gameOver.png";
    }
}

function resetGame(){
    location.reload();
}







