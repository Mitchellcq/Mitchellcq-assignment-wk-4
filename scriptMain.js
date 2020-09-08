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
    q1:"Do you like javascript?", 
    //(a1[0])
    
    q2:"Inside which HTML element do we put the JavaScript?", 
    
    //(a2[1])
    
    q3:"How do you write 'Hello World' in an alert box?",
    
    //(a3[2])
    
    q4:"How can you add a comment in a JavaScript?", 
    
    //(a4[0])
    
    q5:"What does the .pop() method do?", 
    //(a5[2]) 
}

var answers = {
        a1:["Yes","No","Indifferent","What's javascript? "],
    
        a2:["<scripting>","<script>","??????????","<javascript>"],
    
        a3:["alertBox('Hello World')","msgBox('Hello World')","alert('Hello World')","What is going on"],
    
        a4:["//This is a comment","'This is a comment'","<!--This is a comment-->","These are all comments please help me"],
    
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