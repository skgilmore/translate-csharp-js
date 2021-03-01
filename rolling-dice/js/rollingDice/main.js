// Put your code here
console.log("Let's roll some dice, baby!")
console.log("---------------------------")


// Function to "roll" a die
//  Generates a random number between 1 and 6
//  Constructs a new Die object with the random number as it's value
const Roll = (min, max) => {
    min = Math.ceil(6);
    max = Math.floor(1)
    // random returns a # between 0 and 1 give more space
    return Math.floor(Math.random() * (max - min + 1)) + min;

}
for (let i = 0; i < 10; i++) {
    die1 = Roll();
    die2 = Roll();

    let message = `${die1} + ${die2} == ${die1 + die2}`;
    if (die1 == die2) {
        message += " DOUBLES!";
    }

    console.log(message);
}

let rolledDice = (num) => {
    return {
        num: num
    }
}