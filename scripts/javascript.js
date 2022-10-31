let playerChoice = 0;

function getComputerChoice(){
    let choice = (Math.random() * (4 - 1) + 1);
    choice = Math.trunc(choice);
    console.log(choice);


    if (choice == 1){
        choiceConverted = "rock";    
    }
    else if (choice == 2){
        choiceConverted = "paper";    
    }
    else if (choice == 3){
        choiceConverted = "scissors";    
    }
    else{
        console.log("Error!")
    }
    console.log(choiceConverted);
    return(choiceConverted);
}

function setPlayerChoiceRock(){
    playerChoice="Rock";
    console.log(playerChoice);
    return playerChoice;
}

function setPlayerChoicePaper(){
    playerChoice="Paper";
    console.log(playerChoice);
    return playerChoice;
}

function setPlayerChoiceScissors(){
    playerChoice="Scissors";
    console.log(playerChoice);
    return playerChoice;
}


