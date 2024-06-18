const quizData = [
    {
        question: "Bahasa apa yang berjalan di peramban web?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "Apa yang dimaksud dengan CSS?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "Apa yang dimaksud dengan HTML?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "Tahun berapa JavaScript diluncurkan?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "tidak satu pun dari di atas",
        correct: "b",
    },
    {
        question: "Apa yang dimaksud dengan PHP?",
        a: "Hypertext Preprocessor",
        b: "Personal Home Page",
        c: "Private Home Page",
        d: "Hypertext Programming",
        correct: "a",
    },
    {
        question: "Perusahaan mana yang mengembangkan bahasa pemrograman C++?",
        a: "Sun Microsystems",
        b: "Microsoft",
        c: "IBM",
        d: "Bell Labs",
        correct: "d",
    },
    {
        question: "Siapa bapak bahasa pemrograman Python?",
        a: "Guido van Rossum",
        b: "Larry Page",
        c: "Elon Musk",
        d: "Mark Zuckerberg",
        correct: "a",
    },
    {
        question: "Apa ibu kota Prancis?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Roma",
        correct: "c",
    },
    {
        question: "Planet mana yang dikenal sebagai Planet Merah?",
        a: "Venus",
        b: "Mars",
        c: "Jupiter",
        d: "Saturnus",
        correct: "b",
    },
    {
        question: "Apa simbol kimia untuk air?",
        a: "W",
        b: "H2O",
        c: "H",
        d: "O2",
        correct: "b",
    }
];

const loginContainer = document.getElementById('login');
const userInfo = document.getElementById('user-info');
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const startQuizBtn = document.getElementById('start-quiz');
const loginBtn = document.getElementById('login-btn');

let currentQuiz = 0;
let score = 0;
let userName = '';
let userClass = '';
let userMajor = '';

loginBtn.addEventListener('click', login);

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        loginContainer.style.display = 'none';
        userInfo.style.display = 'block';
    } else {
        alert('Please enter username and password.');
    }
}

startQuizBtn.addEventListener('click', startQuiz);

function startQuiz() {
    userName = document.getElementById('name').value;
    userClass = document.getElementById('class').value;
    userMajor = document.getElementById('major').value;

    if (userName && userClass && userMajor) {
        quiz.style.display = 'block';
        userInfo.style.display = 'none';
        loadQuiz();
    } else {
        alert('Please fill out all fields.');
    }
}

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            showScore();
        }
    }
});

function showScore() {
    quiz.innerHTML = `
        <h2>${userName}, from class ${userClass} (${userMajor}), you answered ${score}/${quizData.length} questions correctly</h2>
        <button onclick="location.reload()">Reload</button>
    `;
}
