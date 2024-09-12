let humanScore = 0;
let computerScore = 0;

console.log("starting!");


playRound(getHumanChoice(), getComputerChoice());

console.log("done!");




function getComputerChoice()
{
    let computerChoice = "";
    console.log("In the function!");

    while (computerChoice == "")
    {
        let choiceSeed = Math.random();
        console.log(choiceSeed);
        if (choiceSeed < 0.33) {
            computerChoice = "rock";
        }
        else if (choiceSeed < 0.66) {
            computerChoice = "paper";
        }
        else if (choiceSeed < 0.99) {
            computerChoice = "scissors";
        }
        console.log(computerChoice);
        //if choiceSeed is above .99, roll again - I don't want one of the options to be chosen 34% of the time!
    }

    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = "";
    
    while (humanChoice == "") {
        humanChoice = prompt("Please enter \"Rock\", \"Paper\", or \"Scissors\".").toLowerCase();

        if (humanChoice != "rock" && humanChoice != "paper" && humanChoice != "scissors") {
            humanChoice = "";
            console.log("I'm sorry, that was not a valid input. Please try again.");
        }
    }

    return humanChoice;
}


function playRound(humanChoice, computerChoice) {
    //I want to find a more elegant way of doing this - perhaps assign each of the choices a numerical value, and 
    //map different outcomes to different results when those numerical values are input to some function?
    //Alternatively, I could use an object, and give each choice a weakTo or strongTo. 
    let result = 0; //0 = draw, 1 = human wins, 2 = computer wins

    if (humanChoice == "rock") {
        if (computerChoice == "rock") {
            //draw
            result = 0;
        }
        else if (computerChoice == "paper") {
            //lose
            result = 2;
        }
        else {
            //win
            result = 1;
        }
    }
    else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            //win
            result = 1;
        }
        else if (computerChoice == "paper") {
            //draw
            result = 0;
        }
        else {
            //lose
            result = 2;
        }
    }
    else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            //lose
            result = 2;
        }
        else if (computerChoice == "paper") {
            //win
            result = 1;
        }
        else {
            //draw
            result = 0;
        }
    }

    switch(result) {
        case 0:
            console.log("That's a draw.");
            break;
        case 1:
            console.log("You win this round! Congratulations!");
            ++humanScore;
            break;
        case 2:
            console.log("You lose this round.");
            ++computerScore;
            break;
    }



}