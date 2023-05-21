console.log("Hello World!");



// getComputerChoice generates a random number between 0 and 2 (inclusive) and returns a string indicating a move

// getComputerChoice() --> string

//      0 = Rock
//      1 = Paper
//      2 = Scissors

//  create a variable called randNum
//  call Math.random() to generate a random number b/n 0 and 1
//  multiply the result by 2 to get a   ""    ""    "" "" "" 2
//  store that result in randNum
//  use randNum's value to decide what move to return

function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3);
    if(randNum === 0) {
        return "Rock";
    } else if(randNum === 1) {
        return "Paper";
    } else if(randNum === 2) {
        return "Scissors";
    } else {
        return undefined;
    }
}

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());



// playRound takes two parameters - playerSelection and computerSelection - and returns a string that declares the winner of the round

// playRound(string playerSelection, string computerSelection) --> string

//  Rock beats Scissors
//  Scissors beats Paper
//  Paper beats Rock

// Note: playerSelection should be handled case-insensitively

function playRound(playerSelection, computerSelection) {
    // declare a boolean playerWin and strings winMessage, beatMessage
    // make playerSelection the same case as computerSelection (or make them both the same case as values we'll compare to)
    // compare playerSelection and computerSelection to determine who won
    // if the player won, set playerWin to true, otherwise set it to false
    // if we get a tie, set roundTie to true
    // generate winMessage as: "You Lose!" or "You Win!" depending on value of playerWin, or to "It's a Tie!" depending on value of roundTie (overrides value of playerWin)
    // generate beatMessage as: `${winner's selection} beats ${loser's selection}`, or as `{selection} ties with {selection}`
    // return concatenation of winMessage and beatMessage

    let playerWin, roundTie;
    let winMessage = "", beatMessage = "";

    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

    if(playerSelection === computerSelection) {
        // tie
    }

    
    return winMessage + " " + beatMessage;
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));



// calcWinner takes two parameters, selectionA and selectionB, and returns true if selectionA beats selectionB, and false otherwise

// calcWinner(selectionA, selectionB) --> boolean

// Note: not meant to distinguish between pairs of selections that could result in a tie and wins. If done anyways, a tied input will output false.

function calcWinner(selectionA, selectionB) {
    if(selectionA === "Rock") {
        if(selectionB === "Scissors") {
            return true;
        } else {
            return false;
        }
    } else if(selectionA === "Paper") {
        if(selectionB === "Rock") {
            return true;
        } else {
            return false;
        }
    } else if(selectionA === "Scissors") {
        if(selectionB === "Paper") {
            return true;
        } else {
            return false;
        }
    }
}

// expected: true, false, false, true, true, false

console.log(calcWinner("Rock", "Scissors"));
console.log(calcWinner("Rock", "Paper"));
console.log(calcWinner("Scissors", "Rock"));
console.log(calcWinner("Scissors", "Paper"));
console.log(calcWinner("Paper", "Rock"));
console.log(calcWinner("Paper", "Scissors"));


