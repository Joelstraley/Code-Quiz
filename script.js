//Function for 1st question, answers 
var startBtn = document.getElementById("#startBtn");
var questionElement = document.getElementById("#query");
var answerButtonsElement = document.getElementById("answerButtons");

var shuffledQuestions, currentQuestionIndex

var score = 0
var time = 60

var questionSet = [
      { 
        question: "Which logical operators are supported by JavaScript?",
        answers: [
                {text: "and", correct: false },
                {text: "or", correct: false},
                {text: "not", correct: false},
                {text: "all of the above", correct: true},
               ]
        },
        { 
        question: "A piece of JavaScript programming wrapped in a value is called?",
        answers: [
                {text: "Get", correct: false},
                {text: "Function", correct: true},
                {text: "log", correct: false},
                {text: "Operator", correct: false}
                ]
        },
        { 
        question: "A statement starting with 'while' creates...",
        answers: [
                {text:"a skip", correct: false},
                {text: "an object", correct: false},
                {text: "an interval", correct: false},
                {text: "a loop", correct: true},
                ]
        },
        { 
        question: "The first index of an array is",
        answers: [
                {text: "One", correct: false},
                {text: "Zero", correct: true},
                {text: "A", correct: false}, 
                {text: "Infinity", correct: false},
                ],
        },
        { 
        question: "JavaScript recalls values by defining them through a",
        answers: [
                {text: "Secret Lockbox", correct: false},
                {text: "Variable", correct: true},
                {text: "Brain", correct: false},
                {text: "Dictionary", correct: false},
                ],
        },
]

function startTimer(){
var timeleft = 60;
document.getElementById("timer").textContent = timeleft;
document.getElementById("timeHolder").setAttribute("style", "visiblity: visible;");
var timer = setInterval(function(){
timeleft--;
if(timeleft <= 0)
    clearInterval(timer);
    //*go to Insert Initials page*// 
},1000)
}

function generateQuestion() {
        showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
        questionElement.innerText = question.question;

}

function selectAnswer (){

}

function startQuiz () {
        // hides the CODING QUIZ title // 
        document.getElementById("title")setAttribute("style", "visibility:hidden;");
        // makes the questions appear randomly //
        shuffledQuestions = questions.sort(() => Math.random() - .5);
        currentQuestionIndex = 0;
        generateQuestion();
        startTimer();



                


                /* function startTimer(duration, display) {
                        var timer = duration, minutes, seconds;
                        setInterval(function () {
                            seconds = parseInt(timer % 60, 10);
                    
                            minutes = minutes < 10 ? "0" + minutes : minutes;
                             *//* seconds = seconds < 10 ? "0" + seconds : seconds;
                    
                            display.textContent = seconds;
                    
                            if (--timer < 0) {
                                timer = duration;
                            }
                        }, 1000);
                    }
                    
                    window.onload = function () {
                        var fiveMinutes = 60 * 5,
                            display = document.querySelector('#time');
                        startTimer(fiveMinutes, display);
                    }; */
}




highScoresBtn.addEventListener("click", highScoresChart);

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

startBtn.addEventListener("click", startQuiz); 
