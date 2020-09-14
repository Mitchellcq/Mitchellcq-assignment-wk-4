var secondsLeft = 100;
var timeEl = document.getElementById("timer");

var start = document.getElementById("start");
var question = document.getElementById("question");
var btn0 = document.getElementById("btn0");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var progress = document.getElementById("progress");

start.style.display = "block";
question.style.visibility = "hidden";
progress.style.visibility = "hidden";
btn0.style.visibility = "hidden";
btn1.style.visibility = "hidden";
btn2.style.visibility = "hidden";
btn3.style.visibility = "hidden";

start.onclick = function() {letsGo()};

function letsGo (){
    setTime();
    start.style.display = "none";
    question.style.visibility = "visible";
    progress.style.visibility = "visible";
    btn0.style.visibility = "visible";
    btn1.style.visibility = "visible";
    btn2.style.visibility = "visible";
    btn3.style.visibility = "visible";
}


//timer
function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        showScores();
      }
  
    }, 1000);
  }

document.getElementById("start").onclick = function startgame() {
    setTime();
    this.style.display = "none";
    document.querySelector("buttons").style.display = "block";
    document.querySelector("question").style.display = "block";
    document.querySelector("progress").style.display = "block";
};

function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
};
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    } else {this.score--;
            secondsLeft - 20;
        }
 
    this.questionIndex++;
};
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
};
 
 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
};
 
 
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        showProgress();
    }
}
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    };
}
 
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "with " + secondsLeft + "seconds to spare! </h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
    clearInterval(timerInterval);
}
 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}
 
// create questions here
var questions = [
    new Question("This is the main building block of websites on the internet.", ["What is JavaScript?", "What is XHTML?","What is CSS?", "What is HTML?"], "What is HTML?"),
    new Question("This language is used for styling web pages.", ["What is HTML?", "What is JQuery?", "What is CSS?", "What is XML?"], "What is CSS?"),
    new Question("This framework is not used with javascript.", ["What is Python Script?", "What is JQuery?","What is Django?", "What is NodeJS?"], "What is Django?"),
    new Question("This database connector could Perhaps Have People in  a twist.", ["What is PHP?", "What is HTML?", "What is JS?", "What is CSS?"], "What is PHP?"),
    new Question("This Gameshow features some of the hardest answers ever questioned.", ["What is Jeopardy?", "What is Wheel of Fortune?", "What is The Price is Right?", "What is Deal or No Deal?"], "What is Jeopardy?")
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();


