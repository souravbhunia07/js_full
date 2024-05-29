const randomNumber = Math.floor(Math.random() * 100) + 1;

const submitButton = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const restartButton = document.querySelector('#reset');

const p = document.createElement('p');

let previousGuesses = [];
let numGuesses = 1;

let playGame = true;

if (playGame) {
    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        validateGuess();
    });
}

function validateGuess() {
    let userGuess = Number(userInput.value);
    if (userGuess === 0) {
        alert('Please enter a valid number');
    } else if (previousGuesses.includes(userGuess)) {
        alert('You have already guessed this number');
    } else {
        previousGuesses.push(userGuess);
        if (numGuesses === 10) {
            displayGuess(userGuess);
            displayMessage(`Game Over! Number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(userGuess);
            checkGuess(userGuess);
        }
    }
}

function checkGuess(userGuess) {
    if (userGuess === randomNumber) {
        displayMessage(`Congratulations! You guessed the number in ${numGuesses} attempts`);
        endGame();
    } else if (userGuess < randomNumber) {
        displayMessage('Too low! Try again');
    } else {
        displayMessage('Too High! Try again');
    }
}

function displayGuess(userGuess) {
    userInput.value = '';
    guessSlot.innerHTML += userGuess + ' ';
    numGuesses++;
}  

function displayMessage(message) {
    remaining.textContent = message;
}

function newGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    previousGuesses = [];
    numGuesses = 1;
    guessSlot.innerHTML = '';
    remaining.textContent = '';
    lowOrHi.textContent = '';
    playGame = true;
    startOver.style.display = 'none';
}

function endGame() {
    userInput.disabled = true;
    submitButton.disabled = true;
    startOver.style.display = 'inline';
    playGame = false;
    restartButton.addEventListener('click', newGame);
}