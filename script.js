const ROUNDS = 5;
let humanScore = 0;
let computerScore = 0;

//Logic to get the computer choice

function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const i = getRandomIndex(options.length);
    return options[i];
}

function getRandomIndex(arrayLength) {
    return Math.floor(Math.random() * arrayLength);
}

// console.log(getComputerChoice());

//Logic to get the human choice
function getHumanChoice() {
    const userInput = prompt('Choose rock, paper or scissors\nType:\nr for rock\np for paper\ns for scissors');
    switch (userInput) {
        case 'r':
            return 'rock';
            break;
        case 'p':
            return 'paper';
        case 's':
            return 'scissors';
        default:
            return '';
    }
}

//console.log(getHumanChoice());

//Logic to play a round

function playRound(humanChoice, computerChoice) {
    const humanSelection = humanChoice.toLowerCase();
    const computerSelection = computerChoice.toLowerCase();

    if ((humanSelection == "rock" && computerSelection == "paper")
        || (humanSelection == "paper" && computerSelection == "scissors")
        || (humanSelection == "scissors" && computerSelection == "rock")
    ) {
        console.log(`You lose! ${computerSelection} beats ${humanSelection}`);
        computerScore++;
    } else if (humanSelection == computerSelection) {
        console.log(`Tie! You both selected ${humanSelection}`);
    } else {
        console.log(`You win! ${humanSelection} beats ${computerSelection}`);
        humanScore++;
    }
    
}

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);


//Logic to play a the entire game

function playGame() {
    for (let i = 0; i < ROUNDS; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore > computerScore) {
        console.log(`YOU WIN!!!\nYour score: ${humanScore}\nComputer score: ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`YOU LOSE.\nYour score: ${humanScore}\nComputer score: ${computerScore}`);
    } else {
        console.log(`TIE.\nYour score: ${humanScore}\nComputer score: ${computerScore}`);
    }
}

playGame();