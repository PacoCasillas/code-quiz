var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')

var timerElement = document.getElementById('countdown')

var timer;
var timerCount;
var gameOver;
var highscores;

var highscore = document.getElementById('highscores')

const countDown = document.getElementById('countdown')

startButton.addEventListener('click', startGame)

let questionsIndex = 0

// Start game function
function startGame() {
    timerCount = 60;
    startButton.disabled = true;
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    questions[questionsIndex]
    currentQuestionIndex = 0
    startTimer()
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(questions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answers => {
        const button = document.createElement('button')
        button.innerText = answers.text
        button.classList.add('btn')
        
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
    
}

function wrongAnswer() {
    timerCount--;
    startButton.disabled = false;
}

function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >= 0) {
            if (gameOver && timerCount > 0) {
                clearInterval(timer);
            }
        } else if (timerCount === 0) {
            clearInterval(timer);
        } else {
            gameOver
        }
    }, 1000);
}

function gameOver() {
    
}

var questions = [
    {
        question: 'Commonly used data types do not include:',
        answers : [
            { text: 'alerts', correct: true},
            { text: 'strings', correct: false},
            { text: 'boolean', correct: false},
            { text: 'numbers', correct: false},
        ]
    },
    {
        question: 'The condition in an if-else statement is enclosed with _________.',
        answers : [
            { text: 'parenthesis', correct: true},
            { text: 'quotes', correct: false},
            { text: 'curly brackets', correct: false},
            { text: 'square brackets', correct: false},
        ]
    },
    {
        question: 'Arrays in JavaScript can be used to store _________.',
        answers : [
            { text: 'all listed', correct: true},
            { text: 'numbers and strings', correct: false},
            { text: 'other arrays', correct: false},
            { text: 'booleans', correct: false},
        ]
    },
    {
        question: 'A very helpful tool used during development and debugging for printing content to the debugger is:',
        answers : [
            { text: 'console.log', correct: true},
            { text: 'terminal/bash', correct: false},
            { text: 'for loops', correct: false},
            { text: 'JavaScript', correct: false},
        ]
    },
]
