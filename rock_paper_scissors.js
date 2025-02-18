
// Human and computer scores both inizialized to zero for global scope.
humanScore = 0
computerScore = 0

function getHumanChoice() {
    //Takes player choice of Rock, paper and scissors.
    // will return players choice.
        let humanChoice = prompt("Pick: Rock, paper or scissors! ")
        return humanChoice;

}

function getComputerChoice() {
    let compChoices = ["ROCK", "PAPER", "SCISSORS"]
    // Let computer pick from options: rock paper or scissors.
    let randomCompChoice = Math.floor(Math.random() * compChoices.length) + 1
    // randomize options: rock, paper, scissors.
 
    if (randomCompChoice === 1) {
     return "ROCK";
    } 
    if (randomCompChoice === 2) {
     return "PAPER";
    }
    if (randomCompChoice === 3) {
     return "SCISSORS"
    }
    
 }