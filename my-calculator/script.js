"use strict";

const btns = document.querySelectorAll("button");
const screen = document.querySelector(".screen .res");
let currentValue = 0;
let screenShows = 0;
let isThereOperation = false;
let currentOperation = "+";
let isLastBtnAnOperation = false;

function doOperation(operation) {
  switch (operation) {
    case "+":
      currentValue += screenShows;
      break;
    case "-":
      currentValue -= screenShows;
      break;
    case "×":
      currentValue *= screenShows;
      break;
    case "÷":
      currentValue = Number.parseInt(currentValue / screenShows);
      break;
  }
}

function showOnScreen() {
  screen.innerText = screenShows;
}

function dealWithBtn(value) {
  switch (value) {
    case "+":
    case "-":
    case "×":
    case "÷":
      if (isThereOperation && !isLastBtnAnOperation) {
        dealWithBtn("=");
      } else if (isThereOperation && isLastBtnAnOperation) {
        currentOperation = value;
        break;
      }
      currentValue = screenShows;
      screenShows = 0;
      isThereOperation = true;
      currentOperation = value;
      isLastBtnAnOperation = true;
      break;
    case "=":
      if (isThereOperation) doOperation(currentOperation);
      screenShows = currentValue;
      isThereOperation = false;
      break;
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      if (isThereOperation && screenShows == 0)
        screenShows = Number.parseInt(value);
      else screenShows = screenShows * 10 + Number.parseInt(value);
      isLastBtnAnOperation = false;
      break;
    case "C":
      isThereOperation = false;
      isLastBtnAnOperation = false;
      currentValue = 0;
      screenShows = 0;
      break;
    default:
      screenShows = Number.parseInt(screenShows / 10);
  }
}

for (let i = 0; i < btns.length; ++i) {
  btns[i].addEventListener("click", function () {
    const btnValue = btns[i].innerText;
    dealWithBtn(btnValue);
    showOnScreen();
  });
}
