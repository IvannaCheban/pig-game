"use strict";
//Selecting elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
//working flow is the same but its considered faster
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

//Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

const scores = [0, 0]; //score of player 1 will be at position 0 and player 2 at 1;
let currentScore = 0;
let activePlayer = 0; //we will store the score of both payers in an array;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0; //setting active player score to 0 before switch
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
}; //if class is there it will remove it, othervise - add

//rolling dice funcitonality

btnRoll.addEventListener("click", function () {
  // 1. Genetating random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1; //local variable
  // 2. Display dice
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`; //pointing to the image that needs to be displayed

  // 3. Check for a rolled 1:
  if (dice !== 1) {
    //add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    //switch to next player
    switchPlayer();
  }
});
btnHold.addEventListener("click", function () {
  //add current score to the score of  the active player
  scores[activePlayer] += currentScore;
  //   scores[1] = scores[1] + currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  //check if score of the active player is >=100
  //Finish the game
  //Switch to next player
  switchPlayer();
});
