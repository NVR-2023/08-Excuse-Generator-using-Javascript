/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//Initializing data//
const WHO = ["The dog", "My grandma", "His turtle", "My bird"];
const ACTION = ["ate", "peed", "crushed", "broke"];
const WHAT = ["my homework", "the keys", "the car"];
const WHEN = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

//Code//
const getRandomIndexOfArray = anArray =>
  Math.floor(Math.random() * anArray.length);
const getRandomItemOfArray = anArray => anArray[getRandomIndexOfArray(anArray)];
const getNewExcuse = () => {
  return `${getRandomItemOfArray(WHO)} ${getRandomItemOfArray(
    ACTION
  )} ${getRandomItemOfArray(WHAT)} ${getRandomItemOfArray(WHEN)}.`;
};

//onLoad function
window.onload = () => {
  document.querySelector("#excuse").innerHTML = getNewExcuse();
};

//eventListener for Button
document
  .querySelector("button")
  .addEventListener(
    "click",
    () => (document.querySelector("#excuse").innerHTML = getNewExcuse())
  );
