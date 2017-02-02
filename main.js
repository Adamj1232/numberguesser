var guessButton = document.getElementById('userNumber');
var clearButton = document.getElementById('clear');
var resetButton = document.getElementById('reset-btn');
var rangeButton = document.getElementById('userRange');
var userInput = document.querySelector('.guest-guess');
var minNum = 1;
var maxNum = 100;
var generatedNum ;

function randomNum(minNum, maxNum) {
  minNum = parseInt(minNum, 10);
  maxNum = parseInt(maxNum, 10);
  generatedNum = Math.floor(Math.random() * (maxNum-minNum + 1))+minNum;
  console.log (generatedNum)
};


window.onload = function() {
  randomNum (minNum, maxNum);
};

rangeButton.addEventListener('click', function(e){
  e.preventDefault();
  minNum = document.getElementById('minField').value;
  maxNum = document.getElementById('maxField').value;
  if (minNum > maxNum){
    alert('Minimum range cannot be less then maximum')
  }
  else {
    randomNum(minNum, maxNum)
  }
});


//guess button
guessButton.addEventListener("click", function () {
  var userGuesser = userInput.value;
  userResult(userGuesser, generatedNum);
  displayGuess(userGuesser);
  checkInput();
});

function displayGuess(guess) {
  document.querySelector('.userNum').innerText = guess;
};

clearButton.addEventListener('click', function(){
  document.getElementById('input-field').value = "";
  checkInput();
});

resetButton.addEventListener('click', function(){
    window.location.reload();
});


function userResult(guess, generated) {
  if (guess < generated && guess >= minNum) {
    document.querySelector('.prevGuess').innerText = "That is too low";
  } else if (guess > generated && guess <= maxNum) {
    document.querySelector('.prevGuess').innerText = "That is too high";
  } else if (guess == generated){
    document.querySelector('.prevGuess').innerText = "BOOM!";
  } else {
    document.querySelector('.prevGuess').innerText = "Please choose a number between 1 and 100";
  }
};

userInput.addEventListener('keyup', function(){
  clearButton.disabled=false;
  resetButton.disabled=false;
  guessButton.disabled=false;
});

function checkInput(){
  var inputVal = document.getElementById('input-field').value
  if (inputVal === "") {
    clearButton.disabled=true;
    guessButton.disabled=true;
  };
};

// var generatedNum = Math.floor(Math.random() * (maxNum-minNum + 1))+minNum;
// console.log(generatedNum, "generatedNum")
