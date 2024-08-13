const buttonElement = document.querySelector(".js-rock");
buttonElement.addEventListener("click", () => {
  console.log("Testing");
});

const computerMove = () => {
  const moveComputer = Math.random();
  let result = "";

  if (moveComputer >= 0 && moveComputer >= 1 / 3) {
    result = "Rock";
  } else if (moveComputer >= 1 / 3 && moveComputer >= 2 / 3) {
    result = "Paper";
  } else if (moveComputer >= 2 / 3 && moveComputer >= 1) result = "Scissors";

  return result;

};

