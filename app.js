
const questions = [
  {
    question: "Which method is used to log output to the console?",
    options: {
      a: "console.log()",
      b: "print()",
      c: "echo()",
      d: "log.console()"
    },
    correct: "a"
  },
  {
    question: "Which keyword declares a variable in JavaScript?",
    options: {
      a: "int",
      b: "var",
      c: "dim",
      d: "let"
    },
    correct: "d"
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: {
      a: "//",
      b: "/* */",
      c: "#",
      d: "<!-- -->"
    },
    correct: "a"
  },
  {
    question: "Which method converts JSON to an object?",
    options: {
      a: "JSON.stringify()",
      b: "JSON.parse()",
      c: "JSON.objectify()",
      d: "JSON.toObject()"
    },
    correct: "b"
  },
  {
    question: "Which operator is used for strict equality?",
    options: {
      a: "==",
      b: "=",
      c: "===",
      d: "!="
    },
    correct: "c"
  },
  {
    question: "Which method adds an element at the end of an array?",
    options: {
      a: "push()",
      b: "pop()",
      c: "shift()",
      d: "unshift()"
    },
    correct: "a"
  },
  {
    question: "Which function converts a string to a number?",
    options: {
      a: "parseInt()",
      b: "toNumber()",
      c: "Number.toInt()",
      d: "convert()"
    },
    correct: "a"
  },
  {
    question: "Which method removes the last element of an array?",
    options: {
      a: "pop()",
      b: "push()",
      c: "shift()",
      d: "unshift()"
    },
    correct: "a"
  },
  {
    question: "Which keyword is used to define a constant?",
    options: {
      a: "constant",
      b: "const",
      c: "let",
      d: "var"
    },
    correct: "b"
  },
  {
    question: "Which method is used to join array elements into a string?",
    options: {
      a: "split()",
      b: "concat()",
      c: "join()",
      d: "merge()"
    },
    correct: "c"
  }
];



let formwindow = document.getElementById('form-section');
let table = document.getElementById('details-section');
let quizSection = document.getElementById('quiz-section');

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

function startQizz() {
  table.classList.add('d-none');
  quizSection.classList.remove('d-none');

  loadQuestion ()
}

let currentQuestion = 0;
let correctAnswer = 0;
let wrongAnswer = 0;

let ulForlist = document.getElementById('ulForList').children;
let nextQuestion = document.getElementById('next-question-btn');







function loadQuestion () {

  let totalQuestion = questions[currentQuestion];

  
  // document.getElementById('next-question-btn').classList.add('d-none')
  

  let  keys = ['a','b','c','d']
  for(var i = 0 ; i< ulForlist.length; i++) {
    ulForlist[i].setAttribute("onclick", "selectOpt(this)")
    
    document.getElementById('questions').innerHTML =   totalQuestion.question 

    
     ulForlist[0].innerHTML =   totalQuestion.options.a;
    ulForlist[1].innerHTML =   totalQuestion.options.b;
    ulForlist[2].innerHTML =   totalQuestion.options.c;
    ulForlist[3].innerHTML =   totalQuestion.options.d;
    // ulForlist[4].innerHTML =  'd. '  + totalQuestion.correct;
    
    
    
  }
  currentQuestion++


  if(currentQuestion >  questions.length) {
    quizSection.classList.add('d-none')
  }
  // document.getElementById('next-question-btn').classList.add('d-none')


  
}

function selectOpt () {

}









