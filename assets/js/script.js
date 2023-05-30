// TODO: write your JavaScript here
var startButtonEl = document.querySelector(".start-button");
var resetButton = document.querySelector(".reset-button");
var gameRulesEl = document.querySelector(".game-rules");
var timerEl = document.getElementById('countdown');
var timeLeft = 99;
var questionTextEl = document.getElementById('question-text');
var divEl = document.querySelector(".game-container");
var selection1 = document.createElement("button");
var selection2 = document.createElement("button");
var selection3 = document.createElement("button");
var selection4 = document.createElement("button");
var answerMessage = document.createElement("p");
var score = "";

selection1.setAttribute("class", "selection-button");
selection2.setAttribute("class", "selection-button");
selection3.setAttribute("class", "selection-button");
selection4.setAttribute("class", "selection-button");
answerMessage.setAttribute("class", "answer-message");

// Start game:
function playGame() {
    countdown();
    divEl.setAttribute("style", "margin: 0 5% 2em 20%;");
    questionTextEl.setAttribute("style", "text-align: left");
    gameRulesEl.textContent = "";
    questionTextEl.textContent = "Commonly used data types DO Not Include:";
    divEl.removeChild(startButtonEl);
    
    selection1.textContent = "1. strings";
    selection2.textContent = "2. booleans";   
    selection3.textContent = "3. alerts";   
    selection4.textContent = "4. numbers";   
    divEl.appendChild(selection1);
    divEl.appendChild(selection2);
    divEl.appendChild(selection3);
    divEl.appendChild(selection4);

    selection1.addEventListener("click", function() {
        answerMessage.textContent = "Wrong!";
        divEl.appendChild(answerMessage);
        timeLeft -= 10;
        setTimeout(hideMessage, 3000);
        ifElseStatement();
    });
    selection2.addEventListener("click", function() {
        answerMessage.textContent = "Wrong!";
        divEl.appendChild(answerMessage);
        timeLeft -= 10;
        setTimeout(hideMessage, 3000);
        ifElseStatement();
    });
    selection3.addEventListener("click", function() {
        answerMessage.textContent = "Correct!";
        divEl.appendChild(answerMessage);
        setTimeout(hideMessage, 3000);
        ifElseStatement();
    });
    selection4.addEventListener("click", function() {
        answerMessage.textContent = "Wrong!";
        divEl.appendChild(answerMessage);
        timeLeft -= 10;
        setTimeout(hideMessage, 3000);
        ifElseStatement();
    });
}
// 2nd question:
function ifElseStatement() {
    questionTextEl.textContent = "The condition in an if / else statement is enclosed with _____.";
    answerMessage.style.display = "flex";
    selection1.textContent = "1. quotes";
    selection2.textContent = "2. curly brackets";   
    selection3.textContent = "3. parenthesis";   
    selection4.textContent = "4. square brackets";  
    
    selection1.addEventListener("click", function() {
        answerMessage.textContent = "Wrong!";
        divEl.appendChild(answerMessage);
        timeLeft -= 10;
        setTimeout(hideMessage, 3000);
        arrays();
    });
    selection2.addEventListener("click", function() {
        answerMessage.textContent = "Wrong!";
        divEl.appendChild(answerMessage);
        timeLeft -= 10;
        setTimeout(hideMessage, 3000);
        arrays();
    });
    selection3.addEventListener("click", function() {
        answerMessage.textContent = "Correct!";
        divEl.appendChild(answerMessage);
        setTimeout(hideMessage, 3000);
        arrays();
    });
    selection4.addEventListener("click", function() {
        answerMessage.textContent = "Wrong!";
        divEl.appendChild(answerMessage);
        timeLeft -= 10;
        setTimeout(hideMessage, 3000);
        arrays();
    }); 
}
// 3rd question:
function arrays() {
    questionTextEl.textContent = "Arrays in JavaScript can be used to store _____.";
    answerMessage.style.display = "flex";
    selection1.textContent = "1. numbers and strings";
    selection2.textContent = "2. other arrays";   
    selection3.textContent = "3. booleans";   
    selection4.textContent = "4. all of the above";  
    
    selection1.addEventListener("click", function() {
        answerMessage.textContent = "Wrong!";
        divEl.appendChild(answerMessage);
        timeLeft -= 10;
        setTimeout(hideMessage, 3000);
        stringValues();
    });
    selection2.addEventListener("click", function() {
        answerMessage.textContent = "Wrong!";
        divEl.appendChild(answerMessage);
        timeLeft -= 10;
        setTimeout(hideMessage, 3000);
        stringValues();
    });
    selection3.addEventListener("click", function() {
        answerMessage.textContent = "Wrong!";
        divEl.appendChild(answerMessage);
        timeLeft -= 10;
        setTimeout(hideMessage, 3000);
        stringValues();
    });
    selection4.addEventListener("click", function() {
        answerMessage.textContent = "Correct!";
        divEl.appendChild(answerMessage);
        setTimeout(hideMessage, 3000);
        stringValues();
    }); 
}
// 4th question:
function stringValues() {
    questionTextEl.textContent = "String values must be enclosed within _____ when being assigned to variables.";
    answerMessage.style.display = "flex";
    selection1.textContent = "1. commas";
    selection2.textContent = "2. curly brackets";   
    selection3.textContent = "3. quotes";   
    selection4.textContent = "4. parenthesis";  
    
    selection1.addEventListener("click", function() {
        answerMessage.textContent = "Wrong!";
        divEl.appendChild(answerMessage);
        timeLeft -= 10;
        setTimeout(hideMessage, 3000);
        consoleTool();
    });
    selection2.addEventListener("click", function() {
        answerMessage.textContent = "Wrong!";
        divEl.appendChild(answerMessage);
        timeLeft -= 10;
        setTimeout(hideMessage, 3000);
        consoleTool();
    });
    selection3.addEventListener("click", function() {
        answerMessage.textContent = "Correct!";
        divEl.appendChild(answerMessage);
        setTimeout(hideMessage, 3000);
        consoleTool();
    });
    selection4.addEventListener("click", function() {
        answerMessage.textContent = "Wrong!";
        divEl.appendChild(answerMessage);
        timeLeft -= 10;
        setTimeout(hideMessage, 3000);
        consoleTool();
    }); 
}
// Final question:
function consoleTool() {
    questionTextEl.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:";
    answerMessage.style.display = "flex";
    selection1.textContent = "1. JavaScript";
    selection2.textContent = "2. terminal/bash";   
    selection3.textContent = "3. for loops";   
    selection4.textContent = "4. console.log";  
    
    selection1.addEventListener("click", function() {
        answerMessage.textContent = "Correct!";
        divEl.appendChild(answerMessage);
        score = timeLeft;
        setTimeout(hideMessage, 3000);
        allDone();
    });
    selection2.addEventListener("click", function() {
        answerMessage.textContent = "Wrong!";
        divEl.appendChild(answerMessage);
        timeLeft -= 10;
        score = timeLeft;
        setTimeout(hideMessage, 3000);
        allDone();
    }); 
    selection3.addEventListener("click", function() {
        answerMessage.textContent = "Wrong!";
        divEl.appendChild(answerMessage);
        timeLeft -= 10;
        score = timeLeft;
        setTimeout(hideMessage, 3000);
        allDone();
    });
    selection4.addEventListener("click", function() {
        answerMessage.textContent = "Correct!";
        divEl.appendChild(answerMessage);
        score = timeLeft;
        setTimeout(hideMessage, 3000);
        allDone();
    }); 
    console.log("score: " + score);
}

// All done:
function allDone() {
    questionTextEl.textContent = "All done!";
    gameRulesEl.textContent = "Your final score is " + timeLeft;
    // divEl.appendChild(form)
    divEl.removeChild(selection1);
    divEl.removeChild(selection2);
    divEl.removeChild(selection3);
    divEl.removeChild(selection4);
    
}

function hideMessage() {
    answerMessage.style.display = "none";
}

// setInterval timer when clicking Start button

function countdown() {
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
        }
    }, 1000);
}

// addEventListener to start game
startButtonEl.addEventListener("click", function() {
    playGame();
});

// localStorage 