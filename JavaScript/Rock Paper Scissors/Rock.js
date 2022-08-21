const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
  
    if (
      userInput === "rock" ||
      userInput === "scissors" ||
      userInput === "paper" ||
      userInput === "bomb"
    ) {
      return userInput;
    } else {
      console.log("You have to pick a proper choice");
    }
  };
  
  const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return "rock";
      case 1:
        return "paper";
      case 2:
        return "scissors";
    }
  };
  
  
  const determineWinner = (userChoice, ComputerChoice) => {
    if (userChoice === computerChoice) {
      return "Tie";
    } else if (userChoice === "rock" && computerChoice === "scissors") {
      return "user wins";
    } else if (userChoice === "paper" && computerChoice === "rock") {
      return "User Wins";
    } else if (userChoice === "scissors" && computerChoice === "rock") {
      return "User Wins";
    } else if (userChoice === "bomb"){
      return "User Wins";
    } else if (userChoice === undefined){
      return "No one wins";
    }else {
      return "Computer Wins";
    }
  };
  const playGame = function(){
    userChoice = getUserChoice('okau');
    console.log(`User choice is ${userChoice}`)
    computerChoice = getComputerChoice();
    console.log(`Computer choice is ${computerChoice}`)
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame();
  