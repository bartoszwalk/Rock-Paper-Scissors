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
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        result.textContent = "It's a draw!";
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerCounter++;
        result.textContent = `You won! ${playerSelection} beats ${computerSelection}`;
        updateScore();
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerCounter++;
        result.textContent = `You won! ${playerSelection} beats ${computerSelection}`;
        updateScore();
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerCounter++;
        result.textContent =`You won! ${playerSelection} beats ${computerSelection}`;
        updateScore();
    } else {
        computerCounter++;
        result.textContent = `You lost! ${computerSelection} beats ${playerSelection}`;
        updateScore();
    }
}

function updateScore() {
    score.textContent = `The score is currently ${playerCounter}:${computerCounter}`;
    if(playerCounter == 5) {
        result.textContent = "You have beaten the computer! Well done!"
    } else if(computerCounter == 5) {
        result.textContent = "The computer has won :( Better look next time!"
    }
}

let computerCounter = 0;
let playerCounter = 0;

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
let score = document.querySelector('.score')
let result = document.querySelector('.result')

scissors.addEventListener('click', () => {playRound('scissors', getComputerChoice())});
rock.addEventListener('click', () => {playRound('rock', getComputerChoice())});
paper.addEventListener('click', () => {playRound('paper', getComputerChoice())});
