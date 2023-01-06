
// var Start = document.querySelector(".start")
// var quizInfo = document.querySelector(".quiz-info")
// var quizRules = document.querySelector(".quiz-info-rules")
// var quitButton = document.querySelector(".botton", ".quit")
// var continueButton = document.querySelector(".botton", ".continue")
// var quiz = document.querySelector(".quiz")
// var timer = document.querySelector(".timer")
// var time = document.querySelector(".timersec")
// var timeRemaning = document.querySelector(".timersec")
// var finishButton = document.querySelector("bottons", ".finsih")
// var retryButton = document.querySelector("bottons", ".retry")
// var Results = document.querySelector(".results")

// var timerCount;
// var timer;
// var question_count = 0;
// var question_number = 0;
// var isCorrect = false;

const startBtn = document.querySelector("start")
const quizContainer = document.getElementById('quiz');
const outcomeContainer = document.getElementById('outcome');
const finishButton = document.getElementById('finish');



const quizQuestions = [
    {
    question: "who created javascript?",
    options:{ 
      a:'Larry Page ',
      b:'Brendan Eich',
      c:'Guido van Rossum',
      d:'Bill Gates'
    },
    answer: "b",

  },
    {
    question: "how do you add a  image in css",
    options:{ 
      a:'background-image:',
      b:'image:',
      c:'url:',
      d:'background-image: url()'
    },
    answer: "d",

  },
    {
    question: "how do you create a button?",
    options:{ 
      a:'<button type="button">Click Me!</button>',
      b:'<button>Click Me!</button>',
    },
    answer: "a",

  },

 
  
];


function init() {
  startBtn.onclick = quizStart()


}



function quizStart() {
  let question = quizQuestions[0];
  let options = question.options;

  for (let i = 0; i < options.length; i++) {
    let option = options[i];
    let optionButton = document.querySelector("#option" + i);
    optionButton.textContent = option;
  }
  startTimer()
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
      }
    }
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
    }
  }, 1000);
}

// continueButton.onclick = () => {
//   quizStart.classList.remove("activeStart")
//   quiz.classList.add("activeQuiz")
//   timer = timerCount;


// };


restartQuiz.onclick = () => {
  quiz.classList.add("quizQuestions", "quizQuestions.options" )
  time = 25;
  counter;

}

