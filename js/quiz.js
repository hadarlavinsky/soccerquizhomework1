const questions = [
  {
    question: "How many players from each team are on the field during a standard match (including the goalkeeper)?",
    options: ["9", "10", "11", "12"],
    answer: 2,
  },
  {
    question: "How long is a standard soccer match, not including stoppage time?",
    options: ["60 minutes", "80 minutes", "90 minutes", "120 minutes"],
    answer: 2,
  },
  {
    question: "Which country has won the most FIFA Men's World Cup titles?",
    options: ["Germany", "Argentina", "Brazil", "Italy"],
    answer: 2,
  },
  {
    question: "What is it called when a player scores three goals in a single match?",
    options: ["A brace", "A hat-trick", "A triple", "A treble"],
    answer: 1,
  },
  {
    question: "Which part of the body is a player NOT allowed to use to intentionally play the ball (unless a goalkeeper in their own box)?",
    options: ["Chest", "Head", "Hands", "Thigh"],
    answer: 2,
  },
  {
    question: "What color card results in a player being sent off the field?",
    options: ["Yellow", "Red", "Blue", "Green"],
    answer: 1,
  },
  {
    question: "What is the term for when the ball fully crosses the goal line between the posts and under the crossbar?",
    options: ["Corner", "Offside", "Goal", "Foul"],
    answer: 2,
  },
];

let currentIndex = 0;
let score = 0;
let answered = false;

const shuffled = [...questions].sort(() => Math.random() - 0.5);

const questionEl = document.getElementById("quiz-question");
const optionsEl = document.getElementById("quiz-options");
const feedbackEl = document.getElementById("quiz-feedback");
const scoreEl = document.getElementById("quiz-score");
const nextBtn = document.getElementById("next-btn");

function loadQuestion() {
  answered = false;
  feedbackEl.textContent = "";
  nextBtn.disabled = true;
  optionsEl.innerHTML = "";

  if (currentIndex >= shuffled.length) {
    questionEl.textContent = `Quiz complete! Final score: ${score} / ${shuffled.length}`;
    nextBtn.textContent = "Restart Quiz";
    nextBtn.disabled = false;
    nextBtn.onclick = restartQuiz;
    return;
  }

  const current = shuffled[currentIndex];
  questionEl.textContent = `Q${currentIndex + 1}: ${current.question}`;

  current.options.forEach((option, i) => {
    const btn = document.createElement("button");
    btn.className = "quiz-option";
    btn.textContent = option;
    btn.addEventListener("click", () => selectAnswer(i, btn));
    optionsEl.appendChild(btn);
  });

  scoreEl.textContent = `Score: ${score} / ${currentIndex}`;
}

function selectAnswer(selectedIndex, btnEl) {
  if (answered) return;
  answered = true;

  const current = shuffled[currentIndex];
  const optionButtons = document.querySelectorAll(".quiz-option");

  optionButtons.forEach((btn, i) => {
    if (i === current.answer) {
      btn.classList.add("correct");
    } else if (i === selectedIndex) {
      btn.classList.add("incorrect");
    }
  });

  if (selectedIndex === current.answer) {
    score++;
    feedbackEl.textContent = "Correct!";
  } else {
    feedbackEl.textContent = `Not quite. The correct answer is "${current.options[current.answer]}".`;
  }

  nextBtn.disabled = false;
}

function nextQuestion() {
  currentIndex++;
  loadQuestion();
}

function restartQuiz() {
  currentIndex = 0;
  score = 0;
  shuffled.sort(() => Math.random() - 0.5);
  nextBtn.textContent = "Next Question";
  nextBtn.onclick = nextQuestion;
  loadQuestion();
}

nextBtn.onclick = nextQuestion;
loadQuestion();
