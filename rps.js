/**
 * This is missing code to end a game (ie a set of rounds) and start a new one,
 * and the aesthetics are pretty bad, but I'd rather just move on.
 */

let humanScore = 0;
let computerScore = 0;

init();

function init() {

    setupRock();
    setupPaper();
    setupScissors();
}

function setupRock() {
    rockBtn = document.querySelector("#rock");
    
    rockBtn.addEventListener("click", () => {
        playRound("rock", getComputerChoice());
    });
}

function setupPaper() {
    btn = document.querySelector("#paper");
    
    btn.addEventListener("click", () => {
        playRound("paper", getComputerChoice());
    });
}

function setupScissors() {
    btn = document.querySelector("#scissors");
    
    btn.addEventListener("click", () => {
        playRound("scissors", getComputerChoice());
    });
}

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
    //I want to find a more elgaent way of doing this - perhaps assign each of the choices a numerical value, and 
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

    let results = document.querySelector("#results");
    switch(result) {
        case 0:
            results.textContent = "Draw."
            break;
        case 1:
            results.textContent = "You win! Congratulations!"
            ++humanScore;
            break;
        case 2:
            results.textContent = "You lose this round."
            ++computerScore;
            break;
    }

    let humanScoreDiv = document.querySelector("#humanScore");
    let computerScoreDiv = document.querySelector("#computerScore");

    humanScoreDiv.textContent = humanScore;
    computerScoreDiv.textContent = computerScore;

    if (humanScore >= 5) {
        winDiv = document.createElement("h1");
        winDiv.textContent = "You won the game! Congratulations!"

        document.querySelector("#score").appendChild(winDiv);        
    }
    else if (computerScore >= 5) {
        winDiv = document.createElement("h1");
        winDiv.textContent = "You lost the game!"

        document.querySelector("#score").appendChild(winDiv);  
    }
}
