"use strict";
//Selecting elements
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1"); //working flow is the same but its considered faster

score0El.textContent = 0;
score1El.textContent = 0;
let diceDisplay = document.querySelector(".dice").classList.add("hidden");
