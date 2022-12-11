var start_btn = document.querySelector(".start_btn button")
var Start = document.querySelector(".start")
var quizInfo = document.querySelector(".quiz-info")
var quizRules = document.querySelector(".quiz-info-rules")
var quitButton = document.querySelector(".botton", ".quit")
var continueButton = document.querySelector(".botton", ".continue")
var quiz = document.querySelector(".quiz")
var timer = document.querySelector(".timer")
var time = document.querySelector(".timersec")
var timeRemaning = document.querySelector(".timersec")
var finishButton = document.querySelector("bottons", ".finsih")
var retryButton = document.querySelector("bottons", ".retry")
var Results = document.querySelector(".results")

var timerCount;
var timer;
var question_count = 0;
var question_number = 0;
var isCorrect = false;
// var userScore = 0;
// var counter;
// var counterLine;
// var widthValue = 0;
var quizQuestions = [
    {
    numb: 1,
    question: "a?",
    answer: "a",
    options: [
      "a",
      "b",
      "c",
      "d"
    ]
  },
    {
    numb: 2,
    question: "a?",
    answer: "b",
    options: [
      "a",
      "b",
      "c",
      "d"
    ]
  },
    {
    numb: 3,
    question: "a?",
    answer: "c",
    options: [
      "a",
      "b",
      "c",
      "d"
    ]
  },
    {
    numb: 4,
    question: "a?",
    answer: "a",
    options: [
      "a",
      "b",
      "c",
      "d"
    ]
  },
    {
    numb: 5,
    question: "a?",
    answer: "d",
    options: [
      "a",
      "b",
      "c",
      "d"
    ]
  },

  {
    numb: 6,
    question: "a?",
    answer: "c",
    options: [
      "a",
      "b",
      "c",
      "d"
    ]
  },

  {
    numb: 7,
    question: "a?",
    answer: "a",
    options: [
      "a",
      "b",
      "c",
      "d"
    ]
  },

  {
    numb: 8,
    question: "a?",
    answer: "a",
    options: [
      "a",
      "b",
      "c",
      "d"
    ]
  },

  {
    numb: 9,
    question: "a?",
    answer: "a",
    options: [
      "a",
      "b",
      "c",
      "d"
    ]
  },

  {
    numb: 10,
    question: "a?",
    answer: "b",
    options: [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  
];

var choices = ['a', 'b', 'c', 'd']

function init() {
  quizStart();

}

function quizStart() {

  isCorrect = false;
  timerCount = 25;
  startButton.disabled = true;
  renderquizQuestions()
  startTimer()
}
start_btn.onclick = (quiz) => {
  quizStart.classList.add("activeStart")
  timer = 25;
  question_number = 1;
  question_count = 0;
  userScore = 0;
  counter;
}
function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    time--;
    time.textContent = timerCount;
    if (timerCount >= 0) {
      // Tests if win condition is met
      if (isCorrect && timerCount > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
        winGame();
      }
    }
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      loseGame();
    }
  }, 1000);
}

// The winGame function is called when the win condition is met
function winQuiz() {
  quiz.textContent = "YOU WON!!!🏆 ";
  winCounter++
  start_btn.disabled = false;
  setWins()
}
function renderquizQuestions(){
 return quizQuestions;

}
function loseQuiz() {
  quiz.textContent = "GAME OVER";
  loseCounter++
  startButton.disabled = false;
  setLosses()
}
// quitButton.onclick = () => {
//   quizStart.classList.remove("ativeStart")
// }

continueButton.onclick = () => {
  quizStart.classList.remove("activeStart")
  quiz.classList.add("activeQuiz")
  timer=timerCount;
  question_number;
  question_count;
  userScore;
  counter;

};


restartQuiz.onclick = () => {
  quiz.classList.add("quiz-questins", "quiz-options" )
  time = 25;
  question_number;
  question_count;
  userScore;
  counter;



}

