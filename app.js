let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");

const drawGame = () => {
  console.log(`Game was a Draw`);
};

const playGame = (userChoice) => {
  console.log("user Choice:", userChoice);
  //? Generate Computer choice
  const comChoice = genCompChoice();
  console.log(`Computer Choice: ${comChoice}`);

  if (userChoice === comChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = comChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = comChoice === "scissors" ? false : true;
    } else {
      userWin = comChoice === "rock" ? false : true;
    }
  }
};

const genCompChoice = () => {
  let options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

choices.forEach((choice) => {
  //   console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
