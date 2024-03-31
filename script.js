let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

console.log(secretNum);

document.querySelector(".score").textContent = score;

const displayMsg = (message) => {
  document.querySelector(".message").textContent = message;
};

const gameLogic = () => {
  const guess = Number(document.querySelector(".num-input").value);

  if (!guess) {
    displayMsg(`you're not guessing !!`);
  } else if (guess === secretNum) {
    displayMsg("We found the winner 🏆");
    document.querySelector(".edit-here").textContent = guess;
    document.querySelector("body").style.background = "rgb(48, 109, 61)";
    document.querySelector(".white-box").style.width = "15rem";
    document.querySelector(".white-box").style.border =
      "rgb(48, 109, 61) solid 5px";
  } else if (secretNum !== guess) {
    if (score > 1) {
      displayMsg(secretNum > guess ? "A little higher !" : "A little lower !");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      loseHandler();
    }
  }
};

const loseHandler = () => {
  displayMsg("Game Over ❌");
  document.querySelector(".score").textContent = 0;
};

document.querySelector(".guess").addEventListener("click", gameLogic);

const restartGame = () => {
  document.querySelector(".num-input").value = 0;
  secretNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector("body").style.background = "black";
  document.querySelector(".white-box").style.width = "10rem";
  document.querySelector(".edit-here").textContent = "??";
  document.querySelector(".white-box").style.border = "black solid 5px";
  if (score > highscore) {
    highscore = score;
    document.querySelector(".highscore").textContent = highscore;
  } else {
    document.querySelector(".highscore").textContent = highscore;
  }
  score = 20;
  document.querySelector(".score").textContent = score;
};

document.querySelector(".restart").addEventListener("click", restartGame);
