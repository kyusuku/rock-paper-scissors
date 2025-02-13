function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3) + 1;
    let computerChoice = (rand === 1) ? "rock" : 
                         (rand === 2) ? "paper" : "scissors";
    console.log(computerChoice);
    return computerChoice;
}