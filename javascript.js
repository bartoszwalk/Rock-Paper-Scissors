function getComputerChoice() {
    let randomnum = Math.floor(Math.random() * 3);
    if (randomnum == 0) {
        return 'rock';
    } else if (randomnum == 1) {
        return 'scissors';
    } else {
        return 'paper';
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection == computerSelection) {
        return "It's a draw!";
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerCounter++
        return `You won! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerCounter++
        return `You won! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerCounter++
        return `You won! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerCounter++
        return `You lost! ${computerSelection} beats ${playerSelection}`;
    }
}
let computerCounter = 0
let playerCounter = 0

function game() {
    computerCounter = 0
    playerCounter = 0
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose between rock paper or scissors")
        computerSelection = getComputerChoice()
        console.log(playRound(playerSelection, computerSelection))
    }
    console.log(`The score is ${playerCounter}:${computerCounter}`)
    if (playerCounter > computerCounter) {
        console.log('You are the winner!')
    } else if (computerCounter > playerCounter) {
        console.log('The computer has won!')
    } else {
        console.log('It was a draw!')
    }
}

game()