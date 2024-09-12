




function getComputerChoice()
{
    let computerChoice = "";
    console.log("In the function!");

    while (computerChoice == "")
    {
        let choiceSeed = Math.random;
        
        if (choiceSeed < 0.33) {
            computerChoice = "Rock";
        }
        else if (choiceSeed < 0.66) {
            computerChoice = "Paper";
        }
        else if (choiceSeed < 0.99) {
            computerChoice = "Scissors";
        }
        //if choiceSeed is above .99, roll again - I don't want one of the options to be chosen 34% of the time!
    }

    return computerChoice;
}


console.log("starting!");
console.log(getComputerChoice());
console.log("done!");

