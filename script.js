///set variables
     //Possible Object with questions and choices 

// Eventlistener for Start button 
//Function for 1st question, answers 







startBtn.addEventListener("click", startQuiz); 








generateBtn.addEventListener("click", highSchoreButton)

function startQuiz () {
        startTimer()
}

function highSchoreButton() {
        var x = document.createElement("BUTTON");
        var t = document.createTextNode("Click me");
        x.appendChild(t);
        document.body.appendChild(x);

///While loop to create timer
            // time subtracted up if wrong answer chosen 

//Score board initiate to 0

/// call on and create style for question

///create style for buttons
        // faint color on hover: 

//Loop through questions

//When all questions answere OR time = 0 game is over

///end of game leades to High Score board where initals and score can be saved
                ///High Score board will clear all HTML -- have link in corner 
         /// document.getElementById(elementID).innerHTML = "";

/* 
to get answers - li items:document.querySelector("li").getAttribute("right");
document.querySelector("li").getAttribute("wrong");

then change for next set of questions:document.querySelector("li").setAttribute("right","wrong")

document.querySelector("li").style.background = "yellow" */


//// Questions: 

// Which logical operators are supported by JavaScript? 
// and, or, not, all of the above

// A piece of JavaScript programming wrapped in a value is called?
// Get, Function, Log, Operator 

//A Statement starting with "while" creates...
//a skip, an object, an interval, a loop 

//The first index of an array is...
// One, Zero, Infinity, The Best

//JavaScript is able to recall vaules by defining them through a 
//Secret Lockbox, Variable, Brain, Dictionary