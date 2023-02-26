'use strict';
/*
console.log(document.querySelector('#txt-sg').textContent);

document.querySelector('#txt-sg').textContent = 'Correct Number 🎉';
console.log(document.querySelector('#txt-sg').textContent);

document.querySelector('.correct').textContent = 15;
document.querySelector('.score').textContent = 19;

document.querySelector('.guess').value = 24;
console.log(document.querySelector('.guess').value);
*/

//(006) events

let secrectNumber = Math.trunc(Math.random() * 20) + 1;
let entriesLeft = Number(document.querySelector('.score').textContent);
console.log(secrectNumber);
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('#txt-sg').textContent = message;
};

const y = function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when no input
  if (!guess) {
    displayMessage('⛔No Number');
  }
  //when guess is incorrect
  if (guess !== secrectNumber && guess !== 0 && entriesLeft > 0) {
    entriesLeft--;
    document.querySelector('.score').textContent = entriesLeft;
    if (guess < secrectNumber) {
      displayMessage('👇Too low');
    } else {
      displayMessage('☝Too High');
    }
  }
  //when he run out of guesses
  if (entriesLeft === 0) {
    displayMessage('💥You lost the game !');
  }
  //when he wins
  if (guess === secrectNumber) {
    displayMessage('Correct Number 🎉');
    document.querySelector('.correct').textContent = secrectNumber;

    if (entriesLeft > highScore) {
      highScore = entriesLeft;
    }
    document.querySelector('.highscore').textContent = highScore;
    //css
    document.querySelector('body').style.backgroundColor = '#810955';
    document.querySelector('.correct').style.width = '22rem';
  }
};

//guess btn
document.querySelector('.check').addEventListener('click', y);

//function
const x = function () {
  entriesLeft = 20;
  secrectNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = entriesLeft;
  document.querySelector('.correct').textContent = '?';
  displayMessage('Start Guessing ...');
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#340433';
  document.querySelector('.correct').style.width = '11rem';
};

//again btn
document.querySelector('.again').addEventListener('click', x);
