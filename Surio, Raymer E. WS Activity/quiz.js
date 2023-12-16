const quizData = [{
        question: "What does HTML stand for?",
        options: ["Hypertext Markup Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language", "Hypertext and Text Markup Language"],
        correctAnswer: "Hypertext Markup Language"
    },
    {
        question: "Which of the following is a programming language used for styling web pages?",
        options: ["JavaScript", "Java", "CSS", "HTML"],
        correctAnswer: "CSS"
    },
    {
        question: "What does CSS stand for?",
        options: ["Counter Style Sheet", "Computer Style Sheet", "Creative Style Sheet", "Cascading Style Sheet"],
        correctAnswer: "Cascading Style Sheet"
    },
    {
        question: "In JavaScript, what is the DOM?",
        options: ["Document Object Model", "Data Object Model", "Design Object Model", "Document Oriented Model"],
        correctAnswer: "Document Object Model"
    },
    {
        question: "What is the purpose of the 'git' version control system?",
        options: ["Database management", "Web development", "Version control", "Text editing"],
        correctAnswer: "Version control"
    }
];
let currentQuestion = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-button");
const scoreDisplay = document.getElementById("score");

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionContainer.innerText = currentQuizData.question;

    optionsContainer.innerHTML = "";
    currentQuizData.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.addEventListener("click", () => checkAnswer(option, button));
        optionsContainer.appendChild(button);
    });

    nextButton.classList.add("hidden");
}

function checkAnswer(userAnswer, button) {
    const correctAnswer = quizData[currentQuestion].correctAnswer;
    if (userAnswer === correctAnswer) {
        score++;
        button.classList.add("correct");
    } else {
        button.classList.add("incorrect");
    }

    scoreDisplay.innerText = `Score: ${score}`;
    optionsContainer.querySelectorAll("button").forEach((btn) => {
        btn.disabled = true;
        if (btn.innerText === correctAnswer) {
            btn.classList.add("correct");
        }
    });

    nextButton.classList.remove("hidden");
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        questionContainer.innerText = "Quiz completed!";
        optionsContainer.innerHTML = `Your final score is ${score} out of ${quizData.length}`;
        nextButton.classList.add("hidden");
    }
}

loadQuestion();