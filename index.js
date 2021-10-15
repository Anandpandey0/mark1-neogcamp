var readlineSync = require("readline-sync");
var score = 0;
var highScores = [
  {
    name : "Amit",
    score : 5,
  },
  {
    name : "Anjali",
    score : 0 ,
  },
  {
    name : "Alok",
    score : -1 ,
  }
]

let questions = [{
  question : "What's the current favourite  language of mine?",
  answer : "Javascript"
},
{
  question : "My Birth-month",
  answer : "May"
},
{
  question : "In which year I am in?",
  answer : "3"
},
{
  question : "Dream job of mine?",
  answer : "Web developer"
},
{
  question : "Dream company?",
  answer : "Microsoft"
},
{
  question : "Current wish ?",
  answer : "Join Neogcamp"
}];
function welcomeMessage() {
 var userName = readlineSync.question("May I know your name? ");

  console.log("Welcome "+ userName + " How better do you know Anand?");
}

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { 
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("You have scored : ", score);
  highScores.map(score => console.log("Some of the highscores are " + score.name, " : ", score.score))
}


welcomeMessage();
game();
showScores();
