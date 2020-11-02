
// data
const quizData = [
    {
        question : 'JS Stands for',
        a : 'Java Cake',
        b : 'Java Programming',
        c : 'Java Script',
        d : 'JavaScript',
        correct : 'd'
    },
    {
        question : 'What is real Name of JavaScript',
        a : 'Mocha',
        b : 'Live Script',
        c : 'Netescape',
        d : 'ES1',
        correct : 'a'
    },
    {
        question : 'Current Version of JavaScript',
        a : 'ES6',
        b : 'ES7',
        c : 'ES 2015',
        d : 'ES9',
        correct : 'b'
    },
    {
        question : 'HTML stands for',
        a : 'HyperText MarkUp Language',
        b : 'Hyper Tool Makeup Language',
        c : 'Hyper Link MarkUp Language',
        d : 'None',
        correct : 'a'
    },
];

const question = document.querySelector('#question');
const a_text = document.querySelector('#a_text');
const b_text = document.querySelector('#b_text');
const c_text = document.querySelector('#c_text');
const d_text = document.querySelector('#d_text');
const submit = document.querySelector('#submit');

const hasValueElement = document.querySelectorAll('.hasValue');

const quizResult = document.querySelector('#quiz-result');

let currentQuiz = 0;
let score = 0
loadQuiz();

function loadQuiz(){
    deSelected();
    const currentQuizData = quizData[currentQuiz];

    question.innerText = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;


}

function isSelected(){
    let answer = undefined;
    hasValueElement.forEach( (answerV) => {
        if(answerV.checked){
            answer =  answerV.id;
        }
    });
    return answer;
}

function deSelected(){
hasValueElement.forEach( (answerV) => {
    answerV.checked = false;
    });
}

submit.addEventListener('click',() => {

    const currentQuizData = quizData[currentQuiz];
    const answer = isSelected();
    console.log(answer);
    if(answer){
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }else{
            quizResult.innerHTML = `<h2 class="qr">Your Scored ${score + 1}/${quizData.length}</h2><button class = "btn" onclick='location.href="./index.html"'>Reload</button>`;   
        }

        // let score = 0;
        if(answer === currentQuizData.correct){
            score++;
            console.log(true);
            console.log(score);
        }
    }
})


    

















