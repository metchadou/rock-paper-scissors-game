let humanScore = 0;
let computerScore = 0;
let roundCount = 0;
const body = document.querySelector("body");
const scoreBoard = document.createElement("div");
scoreBoard.textContent = `Human score: ${humanScore}\nComputer score: ${computerScore}`;
scoreBoard.classList.add("temp");

//Logic to get the computer choice

function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const i = getRandomIndex(options.length);
    return options[i];
}

function getRandomIndex(arrayLength) {
    return Math.floor(Math.random() * arrayLength);
}

//Logic to play a round

function playRound(humanChoice, computerChoice) {
    const div = document.createElement("div");
    div.classList.add("clear");

    if ((humanChoice == "rock" && computerChoice == "paper")
        || (humanChoice == "paper" && computerChoice == "scissors")
        || (humanChoice == "scissors" && computerChoice == "rock")
    ) {
        div.textContent = `Round ${roundCount}: You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    } else if (humanChoice == computerChoice) {
        div.textContent = `Round ${roundCount}: Tie! You both selected ${humanChoice}`;
    } else {
        div.textContent = `Round ${roundCount}: You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    }

    body.appendChild(div);
}

//Logic to check for a winner

function getWinner() {
    const winner = humanScore == 5 ? "human" :
                    computerScore == 5 ? "computer" :
                     "";
    return winner;
}

// Logic to announce game winner

function announceGameWinner(winner) {
    const div = document.createElement("div");
    div.classList.add("clear");

    switch (winner) {
        case "human":
            div.textContent = `YOU WIN!`;
            break;
        case "computer":
            div.textContent = `YOU LOSE.`;
            break;
        default:
            break;
    }

    body.appendChild(div);
    
}

// Logic to clear board

function clearBoard() {
    document.querySelectorAll(".clear").forEach(el => el.remove());
}


//Logic to reset game

function resetGame() {
    roundCount = 0;
    humanScore = 0;
    computerScore = 0;
}

// Logic to display score

function displayScore() {
    const scoreBoard = document.createElement("div");
    const humanScoreContainer = document.createElement("div");
    const computerScoreContainer = document.createElement("div");

    humanScoreContainer.textContent = `Your score: ${humanScore}`;
    computerScoreContainer.textContent = `Computer score: ${computerScore}`;

    scoreBoard.appendChild(humanScoreContainer);
    scoreBoard.appendChild(computerScoreContainer);

    scoreBoard.classList.add("clear");
    scoreBoard.style.fontWeight = "900";

    body.appendChild(scoreBoard);
}


//Logic to play a the entire game

function playGame() {
    const buttonsContainer = document.querySelector('div.buttons-container');
    const buttons = document.querySelectorAll('div.buttons-container > button');    

    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            clearBoard();
            roundCount++;
            playRound(button.id, getComputerChoice());

            let winner = getWinner();

            if (winner) {
                buttonsContainer.classList.add("clear");
                clearBoard();
                announceGameWinner(winner);
                displayScore();
                winner = "";

                const replayButtonContainer = document.createElement("div");
                const replayButton = document.createElement("button");
                
                replayButtonContainer.classList.add("clear");
                // replayButtonContainer.marginTop = "12px";
                replayButton.textContent = "Play again";

                replayButtonContainer.appendChild(replayButton);
                body.appendChild(replayButtonContainer);

                replayButton.addEventListener("click", (e) => {
                    e.preventDefault();
                    clearBoard();
                    resetGame();

                    buttonsContainer.classList.remove("clear");

                    body.appendChild(buttonsContainer);
                });
            } else {
                displayScore();
            }
        });
    });


}

playGame();