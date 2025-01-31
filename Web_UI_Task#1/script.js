const quizData = [
  { question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Rome"], answer: "Paris" },
  { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4" },
  { question: "Who wrote 'Hamlet'?", options: ["Shakespeare", "Dickens", "Chaucer", "Hemingway"], answer: "Shakespeare" }
];

const startContainer = document.getElementById("start-container");
const startButton = document.getElementById("start-button");
const quizContainer = document.getElementById("quiz-container");
const questionContainer = document.getElementById("question-container");
const resultContainer = document.getElementById("result-container");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const finalScoreElement = document.getElementById("final-score");
const resetButton = document.getElementById("reset-button");

let currentQuestion = 0;
let score = 0;

// Start Quiz - Hide Start Button & Show Quiz
startButton.addEventListener("click", () => {
  startContainer.classList.add("d-none");
  quizContainer.classList.remove("d-none");
  loadQuestion();
});

function loadQuestion() {
  const currentData = quizData[currentQuestion];
  questionElement.textContent = currentData.question;
  optionsElement.innerHTML = "";

  currentData.options.forEach(option => {
    const li = document.createElement("li");
    li.textContent = option;
    li.classList.add("list-group-item");
    li.addEventListener("click", () => handleAnswer(option));
    optionsElement.appendChild(li);
  });
}

function handleAnswer(selectedOption) {
  const correctAnswer = quizData[currentQuestion].answer;
  if (selectedOption === correctAnswer) {
    score++;
    alert("Correct!");
  } else {
    alert(`Wrong! Correct answer: ${correctAnswer}`);
  }

  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    displayFinalScore();
  }
}

function displayFinalScore() {
  questionContainer.classList.add("d-none");
  resultContainer.classList.remove("d-none");
  finalScoreElement.textContent = `Your final score is ${score} / ${quizData.length}`;
}

resetButton.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  resultContainer.classList.add("d-none");
  questionContainer.classList.remove("d-none");
  loadQuestion();
});
