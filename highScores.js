var scores = document.getElementById("scoreBoard");

function displayScores(){
    console.log(localStorage.getItem("high-scores"));
    var scoreList = localStorage.getItem("high-scores");
    console.log("high-scores", JSON.parse(scoreList));
    console.log(scoreList);
    scores.innerHTML = scoreList; 
}


function startPage(){
    window.location.href = "index.html";
}


playAgain.addEventListener("click", startPage);