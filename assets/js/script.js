var timerEl = document.getElementById("countdown");
var startBtnEl = document.getElementById("startBtn");

// When start button is clicked, the quiz starts and the timer starts countdown.
startBtnEl.addEventListener("click", function () {

    // Timer that counts down from 75
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
                // Once `timeLeft` gets to 0,use `clearInterval()` to stop the timer
                clearInterval(timeInterval);
            }
        }, 1000);
    }
    countdown();
});



var data = [{
    question: "Commonly used data types DO NOT include:",
    options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    correctAnswer: 3,
},
{
    question: "The condition in an if/else statement is enclosed with____.",
    options: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
    correctAnswer: 2,
},
{
    question: "Arrays in JavaScript can be used to store____.",
    options: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
    correctAnswer: 4,
},
{
    question: "String values must be enclosed within____when being assigned to variables.",
    options: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
    correctAnswer: 3,
},
{
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"],
    correctAnswer: 4,
}
]

function startQuiz () {
    

}
// for (let i = 0; i < data.length; i++) {
//    var 

// };
