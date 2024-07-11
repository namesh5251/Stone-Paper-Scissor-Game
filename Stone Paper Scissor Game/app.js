let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userS = document.querySelector("#user-score");
const compS = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["stone", "paper", "scissors"];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};

const drawGame = () => {
  console.log("game was draw");
  msg.innerText = "Game was draw ! Play again.";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    console.log("You Win");
    msg.innerText = `You Win ! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    userScore++;
    userS.innerText = userScore;
  } else {
    console.log("You lose");
    msg.innerText = `You lose ! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
    compScore++;
    compS.innerText = compScore;
  }
};
const playGame = (userChoice) => {
  console.log("user choice = ", userChoice);
  // generate computer choice
  const compChoice = genCompChoice();
  console.log("comp choice = ", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "stone") {
      // scissors,papper
      userWin = compChoice === "scissors" ? true : false;
    } else if (userChoice === "paper") {
      // stone , scissors
      userWin = compChoice === "stone" ? true : false;
    } else {
      // userChoice === scissors
      // stone, paper
      userWin = compChoice === "paper" ? true : false;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
