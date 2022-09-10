let input = "turpentine and turtles";
const vowels = ["a", "e", "i", "o", "u"];
const resultArray = [];
for (let i = 0; i < input.length; i++) {
  if (input[i] === "e" || input[i] === "u") {
    resultArray.push(input[i]);
  }
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(vowels[j]);
      // console.log(resultArray)
    }
  }
}
console.log(resultArray);
let resultString = resultArray.join("").toUpperCase();
console.log(resultString);
