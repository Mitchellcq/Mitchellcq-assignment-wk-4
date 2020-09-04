var Qcard = document.getElementById("Question-card");
var Qtext = document.getElementById("Question-text");
var Qanswers = document.getElementById("Question-answers");
var Qindex = document.getElementById("Question-index");
var Qcount = 5;

//question objects

var questionOne = {question:"",
                    answers:"","","","",
                };

var questionTwo = {question:"",
                    answers:"","","","",
                };

var questionThree = {question:"",
                    answers:"","","","",
                };

var questionFour = {question:"",
                    answers:"","","","",
                };

var questionFive = {question:"",
                    answers:"","","","",
                };

var questionSix = {question:"",
                    answers:"","","","",
                };


init();

function init() {
   Qcard.style.display = "none";
}

function ask() {
    for (i=0; i < Qcount; i++) {
    Qindex.value = [i];
    
    if (i=0){
        Qtext.textContent = questionOne.question;
        Qanswers.textContent = questionOne.answers;
    } else if (i=1){
        Qtext.textContent = questionOne.question;
        Qanswers.textContent = questionOne.answers;
    } else if (i=2){
        Qtext.textContent = questionOne.question;
        Qanswers.textContent = questionOne.answers;
    } else if (i=3){
        Qtext.textContent = questionOne.question;
        Qanswers.textContent = questionOne.answers;
    } else if (i=4){
        Qtext.textContent = questionOne.question;
        Qanswers.textContent = questionOne.answers;
    } else (i=5){
        Qtext.textContent = questionOne.question;
        Qanswers.textContent = questionOne.answers;
    }


}

function showQuestions(event) {
    var x = document.getElementById("Question-card");
    if (x.style.display === "none") {
      x.style.display = "block";
      ask();
    }
}

addEventListener