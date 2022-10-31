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

function playGame(playerChoice){
    setPlayerChoice(playerChoice)  
    computerChoice = getComputerChoice();
    //Player Chooses Rock
    if (playerChoice == 'Rock' && computerChoice == 'Rock'){
        console.log('Tie');
        changeImage('Tie');
    }
    else if (playerChoice == 'Rock' && computerChoice == 'Paper'){
        console.log('Computer Wins');
        changeImage('Computer Wins');
    }
    else if (playerChoice == 'Rock' && computerChoice == 'Scissors'){
        console.log('Player Wins');
        changeImage('Player Wins');
    }
    //Player Chooses Paper
    else if (playerChoice == 'Paper' && computerChoice == 'Rock'){
        console.log('Player Wins');
        changeImage('Player Wins');
    }
    else if (playerChoice == 'Paper' && computerChoice == 'Paper'){
        console.log('Tie');
        changeImage('Tie');
    }
    else if (playerChoice == 'Paper' && computerChoice == 'Scissors'){
        console.log('Computer Wins');
        changeImage('Computer Wins');
    }
    //Player Chooses Scissors
    else if (playerChoice == 'Scissors' && computerChoice == 'Rock'){
        console.log('Computer Wins');
        changeImage('Computer Wins');
    }
    else if (playerChoice == 'Scissors' && computerChoice == 'Paper'){
        console.log('Player Wins');
        changeImage('Player Wins');
    }
    else if (playerChoice == 'Scissors' && computerChoice == 'Scissors'){
        console.log('Tie');
        changeImage('Tie');
    }

    function changeImage(result){   
        if (result == 'Player Wins'){
            var image = document.getElementById('image');
            image.src = "/images/alexKiddOnigiri.jpg";
        }

        else{
            var image = document.getElementById('image');
            image.src = "/images/alexKidd.jpeg";
        }        
    }
}






