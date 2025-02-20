function playGame(){

    //  players & computer score variables
    let humanScore = 0
    let computerScore = 0

    // logic for computer choice
    function getComputerChoice() {
        let choice = Math.floor(Math.random() * 3) 
        if (choice == 0) {
            return 'rock'
        }
        if (choice == 1) {
            return 'paper'
        }
        if (choice == 2) {
            return 'scissors'
        }
    }

    // Write the logic to get the human choice
    function getHumanChoice() {
        let choice = prompt("Please enter either 'rock', 'paper' or 'scissors'").toLowerCase()
        if (choice == 'rock' || choice == 'paper' || choice == 'scissors') {
            return choice
        } else {
            alert("That is not a valid choice. Please follow the instructions given!")
            return getHumanChoice()
        }  
    }

    // Write the logic to play a single round
    function playRound(humanChoice, computerChoice) {
        
        if (humanChoice == computerChoice) {
            console.log(`It was a tie. Both players chose ${humanChoice}`)
        } else if (
            (humanChoice == 'rock' && computerChoice == 'scissors') ||
            (humanChoice == 'paper' && computerChoice == 'rock') ||
            (humanChoice == 'scissors' && computerChoice == 'paper') 
        ){
            
            console.log(`YAY! you won. you chose ${humanChoice}`)  
            humanScore++
        } else {
            console.log(`TBooooooo! you loose, computer chose ${computerChoice}`)
            computerScore++
        }    
    }
    
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())


    if (humanScore > computerScore) {
        console.log(`YAY! you win with ${humanScore} points. The computer sucks. 
            ${computerScore} points. Go you`)
    } else if (humanScore < computerScore) {
        console.log(`You suck, you scored ${humanScore} points. 
            The computer wins with ${computerScore} points. You lose!`)
    } else {
        console.log(`It's a tie! Both scored ${humanScore} points`)
    }
}

playGame()  