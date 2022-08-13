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
        return `You won! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return `You won! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return `You won! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You lost! ${computerSelection} beats ${playerSelection}`;
    }
}
