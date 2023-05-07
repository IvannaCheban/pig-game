"use strict";
//Selecting elements
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

let currentScore = 0;

//rolling dice funcitonality

btnRoll.addEventListener("click", function () {
  // 1. Genetating random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1; //local variable
  // 2. Display dice
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`; //pointing to the image that needs to be displayed
  console.log(dice);
  // 3. Check for a rolled 1:if true
  if (dice !== 1) {
    currentScore += dice;
    current0El.textContent = currentScore; //change later
    //add dice to current score
  } else {
    //switch to next player
  }
});
