let humanScore = 0;
let computerScore = 0;

let btn = document.querySelector("#playerSelection");
let results = document.querySelector("#results");

btn.addEventListener("click", (e) => {
    let choice = e.target.id;
    playRound(choice, getComputerChoice());
});

function playRound(humanChoice, computerChoice) {
    let text = document.createElement("p");

    if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        text.textContent = `${humanScore} - ${computerScore} You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`;
    } else if ((computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "scissors" && humanChoice === "paper")) {
        computerScore++;
        text.textContent = `${humanScore} - ${computerScore} You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}`;
    } else {
        if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
            text.textContent = `${humanScore} - ${computerScore} Draw!`;
        }
    }

    results.appendChild(text);

    if (humanScore === 5 || computerScore === 5) {
        results.innerHTML = "";
        let finalResult = document.createElement("p");

        if (humanScore > computerScore) {
            finalResult.textContent = `You won the game! ${humanScore} - ${computerScore} ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`;
        } else {
            finalResult.textContent = `You lost the game! ${humanScore} - ${computerScore} ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}`;
        }

        results.appendChild(finalResult);

        humanScore = 0;
        computerScore = 0;
    }
}

function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3) + 1;
    let computerChoice = (rand === 1) ? "rock" : 
                         (rand === 2) ? "paper" : "scissors";
    return computerChoice;
}