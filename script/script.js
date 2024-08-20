document
  .querySelector(".js-rock")
  .addEventListener("click", () => playerMove("Rock"));
document
  .querySelector(".js-paper")
  .addEventListener("click", () => playerMove("Paper"));
document
  .querySelector(".js-scissor")
  .addEventListener("click", () => playerMove("Scissor"));
  
document.querySelector('.js-auto').addEventListener('click', () => {
setInterval(() => {
  playerMove(computerMove())
},1000);
})

  

 //const score = JSON.parse(localStorage.getItem('score'))

   const score = {
    Wins: 0,
    Losses: 0,
    Ties:0
   }
  
    document.querySelector(".js-score").addEventListener('click', () => {
      score.Wins = 0;
      score.Losses = 0;
      score.Ties =0
    })
  

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

  /*This is an if statement to count the score*/
  if (result==="Win")
  {
    score.Wins += 1;
  }
  else if (result ==="Lose")
  {
    score.Losses += 1;
  }
  else if (result === "Draw")
  {
    score.Ties += 1;
  }

  const jsonString = JSON.stringify(score);
  localStorage.setItem('score', jsonString)
  
  const showScore = document.querySelector(".js-display")
  showScore.innerHTML = `You picked: ${playerPick} Computer picked: ${moveComputer}. You ${result}
  `
  const showResult = document.querySelector(".js-result")
  showResult.innerHTML = `Wins: ${score.Wins} Losses: ${score.Losses} Ties: ${score.Ties}`


};

