const userScore=0;
const computerScore=0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("comp-score");
const scoreBoard_div=document.querySelector(".score-board");
const result_div=document.querySelector(".result");
const rock_div=document.getElementById("rock");
const paper_div=document.getElementById("paper");
const scissors_div=document.getElementById("scissors");

rock_div.addEventListener('click', function() {
    game("rock");
});
paper_div.addEventListener('click', function() {
    game("paper");
});
scissors_div.addEventListener('click', function() {
    game("scissors");
});
function game(userChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);
    displayResult(result, userChoice, computerChoice);
}
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a draw!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}
function displayResult(result, userChoice, computerChoice) { 
    result_div.innerHTML = `You chose ${userChoice}, computer chose ${computerChoice}. ${result}`;
    if (result === "You win!") {
        userScore_span.textContent = parseInt(userScore_span.textContent) + 1;
    } else if (result === "You lose!") {
        computerScore_span.textContent = parseInt(computerScore_span.textContent) + 1;
    }
}
