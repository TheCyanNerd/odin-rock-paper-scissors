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
//  create a variable called choiceStr
//  use randNum's value to pick the correct choice to store in choiceStr
//  return choiceStr

function getComputerChoice() {
    let randNum = Math.random() * 2;
}

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());