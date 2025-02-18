console.log("Hello World!")

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