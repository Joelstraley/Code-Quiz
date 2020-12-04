var scores = document.getElementById("scoreBoard");
var scoreList = localStorage.getItem("high-scores");
var playAgain = document.getElementById("playAgain");
var innerList = document.getElementsByClassName("innerList");

// this function sends user back to start page if Play Again button is clicked // 
function startPage(){
    window.location.href = "index.html";
}

playAgain.addEventListener("click", startPage);

// this is where the scoreboard SHOULD populate - currently working on getting it to loop through array and populate correctly //
function displayScores(){
    scores.innerText =  localStorage.getItem("high-scores");
    for (i = 0; i < JSON.parse(localStorage.getItem("high-scores")).length; i++){
        li = document.createElement("li");
        scores.appendChild(li);
        li.setAttribute("class","list-group-item list-group-item-primary");
        innerList.innerText = "Name: " + name + "Score" + score;
    }
}

displayScores();




//loop through the array JSONparse before the loop, 
// for each put - document.createElement("li")
 // li.innerText = "Name: " + (name) + "Score" + (score) 
 //append to scores//

