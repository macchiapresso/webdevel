console.log("The script is connected properly :3")
alert("It is advised for you to use this website with the devtools console open, as most of the game's logic will be there.");
/*
ROCK PAPER SCISSORS
-> Computer will choose between three options (rock, paper, scissors)
-> User will manually choose between options (r<ock>, p<aper>, s<cissors>)
-> 5 rounds, normal rock paper scissors rules
-> Check if user won more or equal than 3 rounds (win condition)
-> Store rounds somewhere (array: 1 win, 0 loss)

MECHANISM
-> Computer will choose between 0 and 2 (0, 1, 2)
*/

let humanChoice = "";
let computerChoice = "";
let humanScore = 0;
let computerScore = 0;

console.log("Loading computerChoice code");
function getComputerChoice() {
    const minCeiled = Math.ceil(0);
    const maxFloored = Math.floor(3);
    randomnum = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
    console.log(randomnum);
    if (randomnum === 0) {
        computerChoice = "rock"; //rock
    }   
    else if (randomnum === 1) {
        computerChoice = "paper"; //paper
    }
    else if (randomnum === 2) {
        computerChoice = "scissors"; //scissors
    }
    else {
        console.log("something went wrong");
    }
}

console.log("Loading humanChoice code");
function getHumanChoice() {
    humanChoice = prompt("Choose between (r)ock, (p)aper and (s)cissors.")
    if(humanChoice === "r" || humanChoice.toLowerCase() === "rock") {
        humanChoice = "rock";
    } else if(humanChoice === "p" || humanChoice.toLowerCase() === "paper") {
        humanChoice = "paper";
    } else if(humanChoice === "s" || humanChoice.toLowerCase() === "scissors") {
        humanChoice = "scissors";
    } else {
        alert("Something went wrong (did you type your choice correctly?), aborting game...")
        throw new Error();
    }
}

function gameLogic() {
    console.log("Human chose: " + humanChoice);
    console.log("Computer chose: " + computerChoice);
    //tie conditions
    if(
        humanChoice === "rock" && computerChoice === "rock" || 
        humanChoice === "paper" && computerChoice === "paper" ||
        humanChoice === "scissors" && computerChoice === "scissors") {
            alert("There was a tie! No score modified.");
        }
    //player win
    else if(
        humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper") {
            alert("Human wins the round! One point added.");
            humanScore ++;
        }
    //player lose
    else if(
        computerChoice === "rock" && humanChoice === "scissors" ||
        computerChoice === "paper" && humanChoice === "rock" ||
        computerChoice === "scissors" && humanChoice === "paper") {
            alert("Human loses the round! Computer gains one point.");
            computerScore ++;
        }
}
function playRound() {
    getComputerChoice();
    getHumanChoice();
    gameLogic();
}

function playGame() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    alert("Final score: Human: " + humanScore + " points. Computer: " + computerScore + " points.");
    if(humanScore > computerScore) {
        alert("Human wins the game!");
    } else if(computerScore > humanScore) {
        alert("Computer wins the game!");
    } else if(computerScore === humanScore) {
        alert("There was a tie!")
    } else {
        alert("Something went wrong.")
    }
        
}

playGame();