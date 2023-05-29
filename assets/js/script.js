// TODO: write your JavaScript here
var startButtonEl = document.querySelector(".start-button");
var resetButton = document.querySelector(".reset-button");
var gameRules = document.querySelector(".game-rules");
var losses = document.querySelector(".lose");
var timerEl = document.getElementById('countdown');
var questionText = document.getElementById('question-text');
var divEl = document.querySelector(".game-container");

// Start game
function playGame() {
    gameRules.textContent = "";
    questionText.textContent = "Commonly used data types Do Not Include:";
    divEl.removeChild(startButtonEl);
    
    
    countdown();
}

// setInterval timer when clicking Start button

function countdown() {
  var timeLeft = 75;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = timeLeft;
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        // Call the `displayMessage()` function
        displayMessage();
      }
    }, 1000);
  }

// addEventListener to start game
startButtonEl.addEventListener("click", function() {
    playGame();
});

// localStorage 

// New code:


