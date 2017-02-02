var guessButton = document.getElementById('userNumber');
var clearButton = document.getElementById('clear');
var resetButton = document.getElementById('reset-btn');
var rangeButton = document.getElementById('userRange');
var userInput = document.querySelector('.guest-guess');
var minField = document.querySelector('.min-range');
var maxField = document.querySelector('.max-range');
var minNum = 1;
var maxNum = 100;
var generatedNum;

function randomNum(minNum, maxNum) {
  minNum = parseInt(minNum, 10);
  maxNum = parseInt(maxNum, 10);
  generatedNum = Math.floor(Math.random() * (maxNum-minNum + 1))+minNum;
  console.log (generatedNum)
};

function displayGuess(guess) {
  document.querySelector('.userNum').innerText = guess;
};

function userResult(guess, generated) {
  if (guess < generated && guess >= minNum) {
    document.querySelector('.prevGuess').innerText = "That is too low";
  } else if (guess > generated && guess <= maxNum) {
    document.querySelector('.prevGuess').innerText = "That is too high";
  } else if (guess == generated){
    document.querySelector('.prevGuess').innerText = "BOOM!";
  } else if (guess > maxNum | guess < minNum){
    document.querySelector('.prevGuess').innerText = "Please choose a number within the set range";
  }
};

window.onload = function() {
  randomNum (minNum, maxNum);
};

rangeButton.addEventListener('click', function(e){
  e.preventDefault();
  minNum = document.getElementById('minField').value;
  maxNum = document.getElementById('maxField').value;
  if (minNum > maxNum){
    alert('Please enter minimum range lower then maximum')
  }
  else {
    randomNum(minNum, maxNum)
  }
});

guessButton.addEventListener("click", function () {
  var userGuesser = userInput.value;
  userResult(userGuesser, generatedNum);
  displayGuess(userGuesser);
  checkInput();
  disRange();
});

clearButton.addEventListener('click', function(){
  document.getElementById('input-field').value = "";
  checkInput();
  disRange()
});

resetButton.addEventListener('click', function(){
  window.location.reload();
});

userInput.addEventListener('keyup', function(){
  clearButton.disabled=false;
  resetButton.disabled=false;
  guessButton.disabled=false;
});

maxField.addEventListener('keyup', function(){
  rangeButton.disabled=false;
});

function checkInput(){
  var inputVal = document.getElementById('input-field').value
  if (inputVal === "") {
    clearButton.disabled=true;
    guessButton.disabled=true;
  };
};

function disRange(){
  var inputVal = document.getElementById('input-field').value
  if (inputVal !== "") {
    rangeButton.disabled=true;
  };
};
