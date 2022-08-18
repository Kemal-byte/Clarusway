console.log("Server started");

const num = prompt("Enter a number:");

if (num > 0) {
    console.log(`${num} is a positive number`)
} else if (num === 0) {
    console.log(`${num} is zero`)
} else if (num < 0) {
    console.log(`${num} is negative`)
} else { 
    console.log("Please enter some proper number")
}