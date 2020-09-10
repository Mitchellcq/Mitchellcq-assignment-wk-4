//global variables
var questionIndex = 0;

var time = questions.length * 30;

var qText = document.getElementById("Question-text");

var qAnswers = document.getElementById("Question-answers");

var timerEl = document.getElementById("timer-element");

var start = document.getElementById("startButton");

var qNumber = document.getElementById("Question-number");

//questions and answers object
var questions = {
    q1:"This programming language is the interactive part of building websites.", 
    //(a1[0])
    
    q2:"We put Javascript inside this HTML element.", 
    
    //(a2[1])
    
    q3:"It is in this way that we could make you aware of a message.",
    
    //(a3[2])
    
    q4:"Are you a fan of Jeopardy?", 
    
    //(a4[0])
    
    q5:"Ok fine... What does the .pop() method do?", 
    //(a5[2]) 
}

var answers = {
        a1:["What is Javascript?","What is CSS?","What is HTML?","What is going on?"],
    
        a2:["What is <scripting>?","What is <script>?","What what??????????","What is <javascript>?"],
    
        a3:["What is alertBox()?","What is msgBox()?","What is alert()?","What the frick...?"],
    
        a4:["How dare you change the format!","I'm asking the questions here!","I prefer a regular questionnaire tbh.","Please help me"],
    
        a5:["Remove the last element of an array","Return the value of the last element of an array","Both A & B are correct","...goes the weasel?"]
}
    

//functions
function startQuiz () {
    document.getElementById("buttonHide").style.display = "none";
    document.getElementById("Question-card").style.display = "block";

    setInterval(clock, 1000);

    timerEl.style.display = "block";
    timerEl.textContent = time;

}

function getQuestion () {

    qText.innerHTML = "";
    qAnswers.innerHTML = "";
    qNumber.innerHTML = "";

    questionIndex++;

    if (questionIndex > questions.length) {
        endQuiz();
    }

    qNumber.textContent = questionIndex;

    for (i=0; i<questions.length; i++){
        qText.textContent = questions.q[i]

        for(j=0; j<answers[i].length; j++){
            var answerLi = document.createElement('li')
            answerLi.textContent = answers[i].[j];

            qAnswers.appendChild(answerLi);

            var button = document.createElement('button');

            answerLi.appendChild(button);

        }
    }
}

function factCheck () {
  if (event.target == "button") {
   var userChoice = target.parentElement;

    if (userChoice != correctAnswer){
        time - 30;
        if (time < 0){ time = 0}
        alert("wrong!");
        getQuestion();
    } else {
        alert("Correct!");
        getQuestion();
    }
  }
}

function endQuiz () {

    clearInterval();

    document.getElementById("Question-card").style.display = "none";
    document.getElementById("endScreen").style.display = "block";

    var userInput = document.createElement("form");
    document.getElementById("enterDetails").appendChild(userInput);

    var initials = document.createElement("input");
    userInput.appendChild(initials);

    var finalScore = time;
    userInput.appendChild(finalScore);
    
}

//event listeners
start.addEventListener("click", startQuiz);

qAnswers.addEventListener("click", factCheck);