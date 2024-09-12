console.log("Hello World");

let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.random()
    switch(true){
        case choice >= 0 && choice < .32:
            return 'paper';
        case choice >= .32 && choice < .66:
            return 'rock';
        case choice >= .66 && choice <= 1:
            return 'scissors'
    }
}

function getHumanChoice() {
    let sign = prompt("Rock, Paper, or Scissors?");
    return sign;
}




function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()
    switch(true){
        case humanChoice === 'rock' && computerChoice === 'scissors':
            console.log("You win! Rock beats Scissors");
            userScore++
            break;
        case humanChoice === 'rock' && computerChoice === 'paper':
            console.log("You lose! Paper beats Rock");
            computerScore++
            break;
        case humanChoice === 'rock' && computerChoice === 'rock':
            console.log("You tied!")
            break;
        case humanChoice === 'paper' && computerChoice === 'rock':
            console.log("You win! Paper beats Rock");
            userScore++
            break;
        case humanChoice === 'paper' && computerChoice === 'scissors':
            console.log("You lose! Scissors beats Paper");
            computerScore++
            break;
        case humanChoice === 'paper' && computerChoice === 'paper':
            console.log("You tied!")
            break;
        case humanChoice === 'scissors' && computerChoice === 'paper':
            console.log("You win! Scissors beats Paper");
            userScore++
            break;
        case humanChoice === 'scissors' && computerChoice === 'rock':
            console.log("You lose! Rock beats Scissors");
            computerScore++
            break;
        case humanChoice === 'scissors' && computerChoice === 'scissors':
            console.log("You tied!");
            break;
    }

}

function playGame() {
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    console.log('Final Score: ')
    console.log('Your score: ' , userScore)
    console.log('Computer score: ' , computerScore)
    if(userScore > computerScore)
        console.log('You win!')
    else if(computerScore > userScore)
        console.log('You lose!')
    else
        console.log('You Tie')
}

playGame()