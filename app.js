var score, roundScore, activePlayer;

function init() {
  score = [0, 0];
  roundScore = 0;
  activePlayer = 0;

  //putting the names of the player
  var nameOfPlayer1 = prompt("Enter the name of the player 1.");
  document.querySelector("#name-0").textContent = nameOfPlayer1;
  var nameOfPlayer2 = prompt("Enter the name of the player 2.");
  document.querySelector("#name-1").textContent = nameOfPlayer2;
  //putting everything zero
  document.querySelector("#score-0").textContent = 0;
  document.querySelector("#score-1").textContent = 0;
  document.querySelector("#current-0").textContent = 0;
  document.querySelector("#current-1").textContent = 0;

  //hiding the dice
  document.querySelector(".dice").style.display = "none";

  //enabling the buttons
  var disableRollDice = document.querySelector(".Roll-btn");
  disableRollDice.disabled = false;
  var disableHoldButton = document.querySelector(".Hold-btn");
  disableHoldButton.disabled = false;
}
init();

//clicking on roll dice
document.querySelector(".Roll-btn").addEventListener("click", function () {
  //generate random number
  var dice = Math.floor(Math.random() * 6 + 1);

  //display the dice
  var diceValue = document.querySelector(".dice");
  diceValue.style.display = "block";
  diceValue.src = "dice-" + dice + ".png";

  //score of current player
  if (dice == 1) {
    changeActivePlayer();
  } else {
    roundScore += dice;
    document.querySelector("#current-" + activePlayer).textContent = roundScore;
  }
});

//Hold Button
document.querySelector(".Hold-btn").addEventListener("click", function () {
  score[activePlayer] += roundScore;
  document.querySelector("#score-" + activePlayer).textContent =
    score[activePlayer];
  if (score[activePlayer] >= 100) {
    document.querySelector("#name-" + activePlayer).textContent = "Winner!";
    document.querySelector(".dice").style.display = "none";
    document
      .querySelector(".Player-" + activePlayer + "-Panel")
      .classList.remove("active");
    var disableRollDice = document.querySelector(".Roll-btn");
    disableRollDice.disabled = true;
    var disableHoldButton = document.querySelector(".Hold-btn");
    disableHoldButton.disabled = true;
  } else {
    changeActivePlayer();
  }
});

//function to change the activePlayer
function changeActivePlayer() {
  roundScore = 0;
  document.querySelector("#current-" + activePlayer).textContent = 0;
  document
    .querySelector(".Player-" + activePlayer + "-Panel")
    .classList.remove("active");
  activePlayer == 1 ? (activePlayer = 0) : (activePlayer = 1);
  document
    .querySelector(".Player-" + activePlayer + "-Panel")
    .classList.add("active");
}

//new button
document.querySelector(".New-btn").addEventListener("click", function () {
  document.querySelector(".Player-0-Panel").classList.add("active");
  init();
});
