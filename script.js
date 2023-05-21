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