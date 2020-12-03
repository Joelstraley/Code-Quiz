var title = document.getElementById("title");
var mainPage = document.getElementById("mainPage");
var startBtn = document.getElementById("startBtn");
var nextButton = document.getElementById("next-btn");
var questionElement = document.getElementById("question");
var scoreHolderElement = document.getElementById("scoreHolder");
var scoreElement = document.getElementById("scoreHolder");
var answerButtonsElement = document.getElementById("answerButtons");
var timeHolderElement = document.getElementById("timeHolder");
var timerElement =  document.getElementById("timer");
var inputElement = document.getElementById("initials");
var inputHolder = document.getElementById("initialsHolder");
var resultElement = document.getElementById("result");
var submitBtn = document.getElementById("submitIntBtn");

var shuffledQuestions, currentQuestionIndex

var score = 0
var timeLeft = 60;
var running = false;
var scoreArray = [];
var x;


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
        // html score will show the amount of time left //
        timerElement.textContent = timeLeft;
        var timer = setInterval(function(){
                timeLeft--;
                timerElement.textContent = timeLeft;
                if(timeLeft <= 0) {
                    //Once score hits 0 or Game over function is ran clearing page //
                        gameOver();
                        clearInterval(timer);
                }
                if (!running) {
                        clearInterval(timer);
                }          
                }, 1000);
} 


function startQuiz() {
        // hides the CODING QUIZ title and Start Button // 
        title.setAttribute("style", "display: none;");
        startBtn.setAttribute("style", "display: none;");
        //displays Score, Timer, Answer buttons //

        scoreHolderElement.setAttribute("style", "display: block;");
        timeHolderElement.setAttribute("style", "display: block;");
        answerButtonsElement.setAttribute("style", "display: block;");
        //set that score to its initial value of 0
        running = true;
        setScore(score);
        // makes the questions appear randomly //
        shuffledQuestions = questionSet.sort(() => Math.random() - .5);
        currentQuestionIndex = 0;
        generateQuestion();
        startTimer();
}

function generateQuestion() {
                    // randomizes question, once array is looped through it goes to Game Over // 
        if (currentQuestionIndex == shuffledQuestions.length) {
                gameOver();
        } else {
                showQuestion(shuffledQuestions[currentQuestionIndex]);
        }
}

function gameOver() {
            // when game is over the timer is stopped
        running = false;
            // answer buttons are hidden
        answerButtonsElement.setAttribute("style", "display:none");
            // and question text reads "Congratulations"
        questionElement.innerText = "Congratulations!";
            // Submit initials input and button appear
        inputHolder.setAttribute("style", "display: flex;");
        submitBtn.addEventListener("click", saveInitials);
        submitBtn.addEventListener("click", getHighScores);
}

function showQuestion(question) {
        questionElement.innerText = question.question;
        var answerbuttons = answerButtonsElement.getElementsByClassName("btn")
        // loop through answers to pull and put in button elements // 
        for (i = 0; i < answerbuttons.length; i++) {
                answerbuttons[i].innerText = question["answers"][i].text;
                answerbuttons[i].addEventListener("click", selectAnswer)
        } // takes next question in questionSet Array 
        currentQuestionIndex++;
}


function selectAnswer(event) {
        var correct = checkAnswer(questionElement.innerText, event.srcElement.innerText);
        if (correct) {
                //if question is listed correct, score goes up
                resultElement.innerText = "Correct";
                score++;
                setScore(score);
        } else {
                 // If incorrect time is reduced by 10
                 resultElement.innerText = "Wrong";
                 timeLeft = timeLeft - 10;
        }  // back to generateQuestion function to populate next question
        generateQuestion();
}

function checkAnswer(question, answer) {
          // loops through question set // 
    for (i = 0; i < questionSet.length; i++) {
         // check to see if Question is loop is same as asked// 
        if (questionSet[i].question === question) {
            // check to make sure answers match //
                        var answers = questionSet[i].answers; 
                        for (j = 0; j < answers.length; j++) {
                    // if they match return if answer is correct or not  
                            if (answer == answers[j].text) {
                                       return answers[j].correct;
                               }
                        } // if answers do not match return false      
                        return false;
                } 
        } // if questions do not match return false
        return false;
}

function setScore(score) {
    //score is placed in score element after Score Holder
        scoreElement.innerText = score;
}

function saveInitials(event){
    var input = document.getElementById("initials");
    // user's initials input and score and set to local storage //
    scoreArray.push({"name": input.value, "score":score});
    localStorage.setItem("high-scores", JSON.stringify(scoreArray));
    JSON.parse(localStorage.getItem("high-scores"));
}

function getHighScores(event){
    mainPage.innerHTML = "";
    inputHolder.setAttribute("style", "display: none;");
    submitBtn.setAttribute("style", "display: none;");
    var scoreList = localStorage.getItem("high-scores");
    console.log(scoreList);
    var ulElement = document.createElement("ul");
    ulElement.setAttribute("id","scoreBoard");
    ulElement.append(mainPage);
    for (x of scoreList) {
        ulElement.append("<li>" + x + "</li>");
      }
    }  

    /* {<ul id="people-list">
    <li id="0">Bob <button>edit</button></li>
  </ul>}
     *

//log score to console
//Print out as text on page 


// looping through score array and then  append list item
/* <ul>
<li> name: {{name}} Score: {{score}} </li>
</ul> // */

// function playAgain button:
 //Playagain button//

/*  document.body.appendChild(board);
 -playAgainbutton-eventlistener  */

startBtn.addEventListener("click", startQuiz);
