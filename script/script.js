document
  .querySelector(".js-rock")
  .addEventListener("click", () => playerMove("Rock"));
document
  .querySelector(".js-paper")
  .addEventListener("click", () => playerMove("Paper"));
document
  .querySelector(".js-scissor")
  .addEventListener("click", () => playerMove("Scissor"));

const computerMove = () => {
  const moveComputer = Math.random();
  let result = "";

  if (moveComputer >= 0 && moveComputer < 1 / 3) {
    result = "Rock";
  } else if (moveComputer >= 1 / 3 && moveComputer < 2 / 3) {
    result = "Paper";
  } else if (moveComputer >= 2 / 3 && moveComputer <= 1) {
    result = "Scissor";
  }

  return result;
};

const playerMove = (playerPick) => {
  const moveComputer = computerMove();
  let result = "";

  if (playerPick === "Rock" && moveComputer === "Rock") {
    result = "Draw";
  } else if (playerPick === "Rock" && moveComputer === "Paper") {
    result = "Lose";
  } else if (playerPick === "Rock" && moveComputer === "Scissor") {
    result = "Win";
  } else if (playerPick === "Paper" && moveComputer === "Rock") {
    result = "Win";
  } else if (playerPick === "Paper" && moveComputer === "Paper") {
    result = "Draw";
  } else if (playerPick === "Paper" && moveComputer === "Scissor") {
    result = "Lose";
  } else if (playerPick === "Scissor" && moveComputer === "Rock") {
    result = "Lose";
  } else if (playerPick === "Scissor" && moveComputer === "Paper") {
    result = "Win";
  } else if (playerPick === "Scissor" && moveComputer === "Scissor") {
    result = "Draw";
  }

  alert(
    `You picked: ${playerPick} Computer picked: ${moveComputer}. You ${result}`
  );
};
