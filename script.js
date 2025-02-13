let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3) + 1;
    let computerChoice = (rand === 1) ? "rock" : 
                         (rand === 2) ? "paper" : "scissors";
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, or Scissors?");
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        return humanChoice;
    } else {
        console.log("Invalid Choice!");
    }
}

function playRound(humanChoice, computerChoice) {
    if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`);
    } else if ((computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "scissors" && humanChoice === "paper")) {
        computerScore++;
        console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}`);
    } else {
        if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
            console.log("Draw!");
        }
    }
}

