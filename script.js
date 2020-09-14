var secondsLeft = 100;
var timeEl = document.getElementById("timer");

function start(){
    document.getElementById("startDiv").style.display = "none";
    document.getElementById("quiz").style.display = "block";

    setTime();

    Quiz();
}

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


document.getElementById("myBtn").addEventListener("click", start());

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

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
}