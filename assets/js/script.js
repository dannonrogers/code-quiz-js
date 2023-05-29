// TODO: write your JavaScript here
var startButtonEl = document.querySelector(".start-button");
var resetButton = document.querySelector(".reset-button");
var gameRulesEl = document.querySelector(".game-rules");
var timerEl = document.getElementById('countdown');
var questionTextEl = document.getElementById('question-text');
var divEl = document.querySelector(".game-container");
var selection1 = document.createElement("button");
var selection2 = document.createElement("button");
var selection3 = document.createElement("button");
var selection4 = document.createElement("button");
var wrongMessage = document.createElement("p");

selection1.setAttribute("class", "selection-button");
selection2.setAttribute("class", "selection-button");
selection3.setAttribute("class", "selection-button");
selection4.setAttribute("class", "selection-button");
wrongMessage.setAttribute("class", "wrong-message");
wrongMessage.textContent = "Wrong!";

// Start game
function playGame() {
    gameRulesEl.textContent = "";
    questionTextEl.textContent = "Commonly used data types Do Not Include:";
    divEl.removeChild(startButtonEl);
    
    selection1.textContent = "1. strings";
    selection2.textContent = "2. booleans";   
    selection3.textContent = "3. alerts";   
    selection4.textContent = "4. numbers";   
    divEl.appendChild(selection1);
    divEl.appendChild(selection2);
    divEl.appendChild(selection3);
    divEl.appendChild(selection4);
    
    if (selection === selection3) {
        ifElseStatement();
    } else {

    }

    
    selection1.addEventListener("click", function() {
        var selection;
        selection = selection1
    });
    selection2.addEventListener("click", function() {
        var selection;
        selection = selection1
    });
    selection3.addEventListener("click", function() {
        var selection;
        selection = selection1
    });
    selection4.addEventListener("click", function() {
        var selection;
        selection = selection1
    });
   
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
        timerEl.textContent = '0';
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


