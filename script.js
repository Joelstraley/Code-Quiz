var title = document.getElementById("title");
var startBtn = document.getElementById("startBtn");
var nextButton = document.getElementById("next-btn");
var questionElement = document.getElementById("query");
var answerButtonsElement = document.getElementById("answerButtons");
var scoreHolderElement = document.getElementsById("scoreHolder");
var scoreElement = document.getElementsById("score");
var timeHolderElement = document.getElementById("timeHolder");
var timerElement = document.getElementById("timer");
var inputElement = document.getElementById("initials");
var inputHolder 

var shuffledQuestions, currentQuestionIndex

var score = 0
var timeLeft = 60;
var running = false


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



function startTimer() {
        timerElement.textContent = timeLeft;
        var timer = setInterval(function(){
        timeLeft--;
        timerElement.textContent = timeLeft;
                if(timeLeft <= 0) {
                gameOver(); /// or gameFail  
                clearInterval(timer);      
        } if (!running) {
                clearInterval(timer);
        }
        }, 1000);
}
    

function startQuiz() {
        // hides the CODING QUIZ title,Start Button - Displays Timer // 
        title.setAttribute("style", "visibility:hidden;");
        startBtn.setAttribute("style", "visibility: hidden;");
        
        scoreElement.setAttribute("style", "display: block;");
        timeHolderElement.setAttribute("style", "display: block;");
        // makes the questions appear randomly //
        shuffledQuestions = questionSet.sort(() => Math.random() - .5);
        // set timer and score to 0 
        running = true
        setScore(score);

        generateQuestion();
        startTimer();
}


function generateQuestion() {
        if (currentQuestionIndex == shuffledQuestions.length){
                gameOver();
        } else {
        // randomizes question // 
        showQuestion(shuffledQuestions[currentQuestionIndex]);
        }
}

function gameOver() {
        timeLeft = 0;
        running = false;
        answerButtonsElement.setAttribute("style", "display:none;");
        questionElement.innerText = "Congratulations"
        ///prompt for initials 
}
        
function showQuestion(question) {
                questionElBment.innerText = question.question;
                var answerButtons = answerButtonsElement.getElementsByClassName("btn")
                // loop through answers to pull and put in button elements // 
                for (i = 0; i < answerbuttons.length; i++) {
                        answerButtons[i].innerText = question["answers"][i].text;
                        answerButtons[i].addEventListener("click", selectAnswer);
                } // takes next question in questionSet Array 
                currentQuestionIndex++;

        }

function resetState() {
        nextButton.setAttribute("style", "visibility:hidden;");
        while (answerButtonsElement.firstChild){
          answersButtonElement.removeChild
          (answerButtonsElement.firstChild)
        }
}

function selectAnswer(event) {
        var correct = checkAnswer(questionElement.innerText, event.srcElement.innerText)
        if (correct {
                //score go up
         } else{
                 // score go down + make time reduce 
                 timeLeft = timeLeft - 10
         } )
}

function checkAnswer(question, answer){
        // loops through question set // 
        for (i = 0; i < questionSet.length; i++) {
                // check to see if Question is loop is same as asked//
                if (questionSet[i].question === question) {
                        // checks to make sure answers match //
                        var answers = questionSet[i].answers;
                        for (j = 0; j < answers.length; j++) {
                                // if they match return if answer is correct or not  
                                if (answer === answers[j].text){
                                        return answers[j].correct;
                                }
                        }
                  // if answers do not match return false       
                } return false;
        } // if questions do not match return false
        return false; 
}

function setStatusClass(element, correct){
        clearStatusClass(element)
        if (correct) {
          element.classList.add("correct")
        } else {
                element.classList.add("wrong")
        }
}

function clearStatusClass(element){
        element.classList.remove("correct");
        element.classList.remove("wrong");
}



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





/* highScoresBtn.addEventListener("click", highScoresChart);
 */
/* function highScoreButton() {
} */





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