var guessButton = document.getElementById('userNumber');
var clearButton
var resetButton
var userInput = document.querySelector('.guest-guess')
var minNum = 1;
var maxNum = 100;
var generatedNum = randomNum();

guessButton.addEventListener("click", function () {
var userGuesser = userInput.value;
userResult(userGuesser, generatedNum)
displayGuess(userGuesser)
});

function randomNum() {
  return Math.floor((Math.random() * 100) + 1);
}
window.onload = function() {
  randomNum (minNum, maxNum);
}

function displayGuess(guess) {
  document.querySelector('.userNum').innerText = guess;
}

function userResult(guess, generated) {
  if (guess < generated) {
    document.querySelector('.prevGuess').innerText = "That is too low";
  } else if (guess > generated) {
    document.querySelector('.prevGuess').innerText = "That is too high";
  } else if (guess == generated){
    document.querySelector('.prevGuess').innerText = "BOOM!!!";
  } else {
    document.querySelector('.prevGuess').innerText = "Please choose a number within the range";
  }
}
