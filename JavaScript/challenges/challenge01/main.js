const buttonC = document.getElementById("findButton");
let numberOfVowels = 0;

buttonC.addEventListener("click", () => {
  let input = document.getElementById("vowels").value.toLowerCase();
  console.log("click");
  console.log(input);
  for (let i = 0; i < input.length; i++) {
    console.log("inside the loop");
    if (
      input[i] === "a" ||
      input[i] === "e" ||
      input[i] === "i" ||
      input[i] === "o" ||
      input[i] === "u"
    ) {
      numberOfVowels++;
    }
  }
  console.log(`Number of Vowels: ${numberOfVowels}`);
  //   alert(`Your input have ${numberOfVowels}`);
});
