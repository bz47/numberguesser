$(document).ready();

let humanNumber = document.getElementById("human-number");
let computerNumber = document.getElementById("computer-number");
let guessButton = document.getElementById("guess-btn");
let round = document.getElementById("round-num");
let nextRound = document.getElementById("next-round");
let subtract = document.getElementById("minus");
let add = document.getElementById("plus");
let target = document.getElementById("target");
let result = document.getElementById("results");
let targetNum;
let humanNum = 0;
let aiNum = 0;
let level = 1;
let humanDiff;
let compDiff;
let humanScore = 0;
let hScoreCard = document.getElementById("h-score");
let compScore = 0;
let cScoreCard = document.getElementById("c-score");

$("#guess-btn").on("click", () => {
  $("#guess-btn").addClass("disabled");
  $("#next-round").removeClass("disabled");
});

$("#next-round").on("click", () => {
  $("#next-round").addClass("disabled");
  $("#minus").addClass("disabled");
  $("#guess-btn").removeClass("disabled");
});

$("#plus").on("click", () => {
  $("#minus").removeClass("disabled");
});

function setTarget() {
  targetNum = Math.floor(Math.random() * 10 + 1);
  target.innerHTML = targetNum;
  compNum = Math.floor(Math.random() * 10 + 1);
  aiNum = compNum;
  computerNumber.innerHTML = aiNum;
}

guessButton.addEventListener("click", setTarget);

function setRound() {
  humanNum = 0;
  humanNumber.innerHTML = humanNum;
  computerNumber.innerHTML = "?";
  target.innerHTML = "";
  level++;
  round.innerHTML = level;
}

nextRound.addEventListener("click", setRound);

function plusOne() {
  if (humanNum >= 10) {
    return 10;
  }
  humanNum++;
  humanNumber.innerHTML = humanNum;
}

add.addEventListener("click", plusOne);

function minusOne() {
  if (humanNum <= 0) {
    return 0;
  }
  humanNum--;
  humanNumber.innerHTML = humanNum;
}

subtract.addEventListener("click", minusOne);

function log() {
  humanDiff = Math.abs(targetNum - humanNum);
  compDiff = Math.abs(targetNum - aiNum);
  console.log(`comp diff is ${compDiff} human diff is ${humanDiff}`);
  if (compDiff === humanDiff) {
    results.innerHTML = "tie";
  }

  if (compDiff > humanDiff) {
    results.innerHTML = "You Win!";
    humanScore++;
    hScoreCard.innerHTML = humanScore;
  }
  if (compDiff < humanDiff) {
    results.innerHTML = "Computer Wins";
    compScore++;
    cScoreCard.innerHTML = compScore;
  }
}

guessButton.addEventListener("click", log);
