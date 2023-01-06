var quitButton = document.querySelector("quit")
var continueButton = document.querySelector("continue")
var timer = document.querySelector(".timer")
var time = document.querySelector(".timersec")
var restartButton = document.querySelector("retry")
const startBtn = document.querySelector("start")
const quizContainer = document.getElementById('quiz');
const outcomeContainer = document.getElementById('outcome');
const finishButton = document.getElementById('finish');






function startButton() {
 quizStart()
 document.querySelector("start").addEventListener('click')

}



function quizStart() {

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
for(let i = 0; i < quizQuestions.options; i++)
  if( quizQuestions.options === quizQuestions.answer) 
  return "you are correct"
  
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


