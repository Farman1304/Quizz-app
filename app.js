const questions = [
  {
    question: "Which method is used to log output to the console?",
    options: {
      a: "console.log()",
      b: "print()",
      c: "echo()",
      d: "log.console()"
    },
    correct: "console.log()"
  },
  {
    question: "Which keyword declares a variable in JavaScript?",
    options: {
      a: "int",
      b: "var",
      c: "dim",
      d: "let"
    },
    correct: "let"
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: {
      a: "//",
      b: "/* */",
      c: "#",
      d: "<!-- -->"
    },
    correct: "//"
  },
  {
    question: "Which method converts JSON to an object?",
    options: {
      a: "JSON.stringify()",
      b: "JSON.parse()",
      c: "JSON.objectify()",
      d: "JSON.toObject()"
    },
    correct: "JSON.parse()"
  },
  {
    question: "Which operator is used for strict equality?",
    options: {
      a: "==",
      b: "=",
      c: "===",
      d: "!="
    },
    correct: "==="
  },
  {
    question: "Which method adds an element at the end of an array?",
    options: {
      a: "push()",
      b: "pop()",
      c: "shift()",
      d: "unshift()"
    },
    correct: "push()"
  },
  {
    question: "Which function converts a string to a number?",
    options: {
      a: "parseInt()",
      b: "toNumber()",
      c: "Number.toInt()",
      d: "convert()"
    },
    correct: "parseInt()"
  },
  {
    question: "Which method removes the last element of an array?",
    options: {
      a: "pop()",
      b: "push()",
      c: "shift()",
      d: "unshift()"
    },
    correct: "pop()"
  },
  {
    question: "Which keyword is used to define a constant?",
    options: {
      a: "constant",
      b: "const",
      c: "let",
      d: "var"
    },
    correct: "const"
  },
  {
    question: "Which method is used to join array elements into a string?",
    options: {
      a: "split()",
      b: "concat()",
      c: "join()",
      d: "merge()"
    },
    correct: "join()"
  }
];




let formwindow = document.getElementById('form-section');
let table = document.getElementById('details-section');
let quizSection = document.getElementById('quiz-section');
let resultWindow = document.getElementById('result-section');
resultWindow.classList.add('d-none')
function toWelcome(event) {
  event.preventDefault();

  let inputname = document.getElementById('input-name').value.trim();
  let password = document.getElementById('input-password').value;
  let roll = document.getElementById('input-roll').value;
  let institute = document.getElementById('input-institute').value.trim();

  if (inputname === '' || password === '' || roll === '' || institute === '') {
    alert('fill all inputs');
    return;
  }

  document.getElementById('user-name').innerHTML = inputname;
  document.getElementById('user-roll').innerHTML = roll;
  document.getElementById('user-institute').innerHTML = institute;

  formwindow.classList.add('d-none');
  table.classList.remove('d-none');
}
let quesCounter =1;

function startQizz() {
  table.classList.add('d-none');
  quizSection.classList.remove('d-none');
  document.getElementById('ten').innerHTML = questions.length;
  document.getElementById('one').innerHTML = quesCounter;
  
  loadQuestion();
  
  
}

let currentQuestion = 0;
let correctAnswer = 0;
let wrongAnswer = 0;

let ulForlist = document.getElementById('ulForList').children;
let nextQuestion = document.getElementById('next-question-btn');







function loadQuestion() {
  nextQuestion.classList.add('d-none')

  let totalQuestion = questions[currentQuestion];

  

  document.getElementById('questions').innerHTML = totalQuestion.question

  

  ulForlist[0].innerHTML = totalQuestion.options.a;
  ulForlist[1].innerHTML = totalQuestion.options.b;
  ulForlist[2].innerHTML = totalQuestion.options.c;
  ulForlist[3].innerHTML = totalQuestion.options.d;
  
  
  
  for (var i = 0; i < ulForlist.length; i++) {
    ulForlist[i].setAttribute("onclick", "selectOpt(this)");
    ulForlist[i].classList.remove('correctAns', 'wrongAns');

    
  }
  
  
  
}

function selectOpt(ele) {
  if (ele.innerHTML === questions[currentQuestion].correct) {
    ele.classList.add('correctAns')
    correctAnswer++
    blastConfetti();
    
    
  } else {
    ele.classList.add('wrongAns')
    wrongAnswer++
  }
  nextQuestion.classList.remove('d-none')
  
  
  for (var i = 0; i < ulForlist.length; i++) {
    ulForlist[i].removeAttribute('onclick')
  }
  
}


nextQuestion.classList.remove('d-none');

nextQuestion.addEventListener ('click', ()=> {
  currentQuestion++
  quesCounter++
  
  
   
  
  if(currentQuestion < questions.length) {
    document.getElementById('one').innerHTML = quesCounter;
    loadQuestion();
  }else {
    quizSection.classList.add('d-none')
    
    // document.getElementById('mainCon').classList.add('d-none');
    showResult ();
    
  }
  
  
  
});

function showResult () {
  document.getElementById('total-q').innerHTML = questions.length;
  resultWindow.classList.remove ('d-none')
  
  document.getElementById('correct-q').innerHTML = correctAnswer;
  document.getElementById('wrong-q').innerHTML = wrongAnswer;
  document.getElementById('score-percentage').innerHTML = Math.round(correctAnswer / questions.length * 100)
  
  
  
  end = Date.now() + 5000; // 2 seconds
  frame();
  blastConfetti();
  

}

function restartQuiz() {

currentQuestion = 0;
correctAnswer = 0;
wrongAnswer = 0;
quesCounter = 1;

resultWindow.classList.add('d-none');

quizSection.classList.add('d-none');

formwindow.classList.remove('d-none');

document.getElementById('one').innerHTML = quesCounter;

end = Date.now();





  
}


function blastConfetti() {
  confetti({
    particleCount: 150,       // number of particles
    spread: 70,               // spread angle
    origin: { y: 0.6 },       // start lower on screen
    colors: ['#ff0a54', '#ff477e', '#ff85a1', '#fbb1b1', '#f9bec7']
  });
}

let end;               // global
let colors = ['#bb0000', '#ffffff'];

function frame() {
  confetti({
    particleCount: 2,
    angle: 60,
    spread: 55,
    origin: { x: 0 },
    colors: colors
  });

  confetti({
    particleCount: 2,
    angle: 120,
    spread: 55,
    origin: { x: 1 },
    colors: colors
  });

  if (Date.now() < end) {
    requestAnimationFrame(frame);
  }
}


