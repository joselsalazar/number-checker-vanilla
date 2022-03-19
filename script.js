'use strict';

let numberOfTries;
let score;
let remainingTries;
let realNumber;

const bodyDiv = document.querySelector('#main-bg');

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const recalcScore = () => {
  score = score - 2;
  document.querySelector('.score').textContent = score;
};

const startNumberRand = () => {
  realNumber = Math.floor(Math.random() * 101);
  console.log(`Number to guess: ${realNumber}`);
  score = 20;
  remainingTries = 10;
  numberOfTries = 0;
  bodyDiv.classList.remove('success');
  displayMessage('Start Guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = 0;
};

startNumberRand();

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('No Number Input!');
  } else if (guess === realNumber) {
    displayMessage('You guessed the right number!');
    bodyDiv.classList.add('success');
    document.querySelector('.highscore').textContent = score;
  } else if (guess > realNumber) {
    numberOfTries++;
    recalcScore();
    displayMessage(
      `You guessed: ${guess}. That is not correct and too high. Only ${
        remainingTries - numberOfTries
      } more attempts left.`
    );
  } else {
    numberOfTries++;
    recalcScore();
    displayMessage(
      `You guessed: ${guess}. That is not correct and too low. Only ${
        remainingTries - numberOfTries
      } more attempts left.`
    );
  }
});

document.querySelector('.reset').addEventListener('click', () => {
  startNumberRand();
});
