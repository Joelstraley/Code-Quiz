///set variables
     //Possible Object with questions and choices 

// Eventlistener for Start button 
//Function for 1st question, answers 


var questionsObject = [
      { question: "Which logical operators are supported by JavaScript?",
        choices: ["and", "or", "not", "all of the above"], 
        answer:"all of the above",
        },
        { question: "A piece of JavaScript programming wrapped in a value is called?",
        choices: ["Get", "Function", "Log", "Operator"], 
        answer:"Function",
        },
        { question: "A statement starting with 'while' creates...",
        choices: ["a skip", "an object", "an interval", "a loop"],
        answer:"a loop",
        },
        { question: "The first index of an array is",
          choices: ["One", "Zero", "A", "Infinity"],
          answer: "Zero",
        },
        { question: "JavaScript recalls values by defining them through a",
          choices: ["Secret Lockbox", "Variable", "Brain", "Dictionary"]
          answer: "Variable",        
        }
]

//JavaScript is able to recall vaules by defining them through a 
//Secret Lockbox, Variable, Brain, Dictionary
    


startBtn.addEventListener("click", startQuiz); 


highScoresBtn.addEventListener("click", highScoresChart)

function startQuiz () {
        startTimer()
}

function highSchoreButton() {
     ;

///While loop to create timer
            // time subtracted up if wrong answer chosen 

//Score board initiate to 0

/// call on and create style for question


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

