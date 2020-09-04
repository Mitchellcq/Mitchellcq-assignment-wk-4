var Qcard = document.getElementById("Question-card");
var Qnumber = document.getElementById("Question-Number");
var Qtext = document.getElementById("Question-text");
var Qanswers = document.getElementById("Question-answers");








init();

function init() {
   Qcard.style.visibility = "hidden";
}



function showQuestions(event) {
    var x = document.getElementById("Question-card");
    if (x.style.visibility === "hidden") {
      x.style.visibility = "visible";
    }
}

addEventListener