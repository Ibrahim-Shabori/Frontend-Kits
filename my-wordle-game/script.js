"use strict";

// DOM Elements
const letters = document.querySelectorAll(".letter");
const keyboard = document.querySelector(".keyboard");
const keyboardBtns = document.querySelectorAll(".keyboard div");
const enterBtn = document.querySelector(".keyboard .enter");
const winningWindow = document.querySelector(".win-window");
const losingWindow = document.querySelector(".lose-window");

// API Endpoints
const wordURLGet = "https://words.dev-apis.com/word-of-the-day?random=true";
const wordURLPost = "https://words.dev-apis.com/validate-word";

let word;
const alpha = "abcdefghijklmnopqrstuvwxyz";
let finished = false;
let currentTrial = 0,
  currentLetterLength = 0;
let currentLetterBox = letters[currentTrial * 5 + currentLetterLength];

// Fetch a new word from the API
async function getNewWord() {
  try {
    const response = await fetch(wordURLGet);
    const data = await response.json();
    word = data.word;
  } catch (error) {
    console.error("Error fetching the word:", error);
  }
}

getNewWord();

// Validate if the user's guess is a valid word using the API
async function checkSomeWord(testWord) {
  try {
    const response = await fetch(wordURLPost, {
      method: "POST",
      body: JSON.stringify({ word: testWord }),
    });
    const data = await response.json();
    return data.validWord;
  } catch (error) {
    console.error("Error validating the word:", error);
    return false;
  }
}

// Handle key press events
document.body.addEventListener("keydown", handleKeyPress);

// Function to handle key press events
function handleKeyPress(e) {
  const valueClicked = e.key.toLowerCase();
  console.log(valueClicked);

  if (finished) return;

  if (valueClicked === "enter" && currentLetterLength === 5) {
    handleEnterKey();
  } else if (valueClicked === "backspace") {
    handleBackspaceKey();
  } else if (alpha.includes(valueClicked)) {
    handleLetterInput(valueClicked);
  }

  highlightKeyboardButton(valueClicked);
}

// Handle the "Enter" key press
async function handleEnterKey() {
  const guessedWord = getTrialWord();
  const isValid = await checkSomeWord(guessedWord);

  if (!isValid) return;

  if (checkWinning()) {
    winGameScreen();
    finished = true;
  } else {
    resetForNextTrial();
    if (currentTrial === 6) {
      loseGameScreen();
      finished = true;
    }
  }
}

// Handle the "Backspace" key press
function handleBackspaceKey() {
  if (currentLetterLength === 0) return;

  currentLetterLength--;
  currentLetterBox.classList.remove("current-letter");
  currentLetterBox = letters[currentTrial * 5 + currentLetterLength];
  currentLetterBox.classList.add("current-letter");
  currentLetterBox.innerHTML = "";
}

// Handle letter input
function handleLetterInput(valueClicked) {
  if (currentLetterLength === 5) return;

  currentLetterBox.innerHTML = valueClicked;
  currentLetterLength++;
  currentLetterBox.classList.remove("current-letter");

  if (currentLetterLength < 5) {
    currentLetterBox = letters[currentTrial * 5 + currentLetterLength];
    currentLetterBox.classList.add("current-letter");
  }
}

// Highlight the corresponding keyboard button when a key is pressed
function highlightKeyboardButton(valueClicked) {
  keyboardBtns.forEach((btn) => {
    if (btn.innerHTML.toLowerCase() === valueClicked) {
      btn.classList.add("keyboard-letter-hover-effect");
      setTimeout(
        () => btn.classList.remove("keyboard-letter-hover-effect"),
        100
      );
    }
  });
}

// Get the user's current trial word
function getTrialWord() {
  let userGuess = "";
  for (let i = currentTrial * 5; i < currentTrial * 5 + 5; i++) {
    userGuess += letters[i].innerHTML;
  }
  return userGuess;
}

// Check if the user's guess matches the word of the day
function checkWinning() {
  let userGuess = "";
  for (let i = currentTrial * 5, j = 0; i < currentTrial * 5 + 5; i++, j++) {
    userGuess += letters[i].innerHTML;
    if (letters[i].innerHTML === word[j]) {
      letters[i].classList.add("correct-right-place");
    } else if (word.includes(letters[i].innerHTML)) {
      letters[i].classList.add("correct-wrong-place");
    } else {
      letters[i].classList.add("wrong");
    }
  }
  return userGuess === word;
}

// Reset the game state for the next trial
function resetForNextTrial() {
  currentLetterLength = 0;
  currentTrial++;
  currentLetterBox.classList.remove("current-letter");
  currentLetterBox = letters[currentTrial * 5 + currentLetterLength];
  currentLetterBox.classList.add("current-letter");
}

// Display the winning screen
function winGameScreen() {
  winningWindow.style.top = "0";
}

// Display the losing screen
function loseGameScreen() {
  losingWindow.style.top = "0";
  losingWindow.querySelector(".right-answer").innerHTML = word;
}
