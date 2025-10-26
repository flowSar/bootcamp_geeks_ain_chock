import express from "express";

const router = express.Router();

// 🧩 Hard-coded quiz questions
const questions = [
  {
    id: 1,
    question: "What is the capital of Morroco?",
    options: ["Casablanca", "Rabat", "Tanger", "Marrakech"],
    answer: "Rabat",
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    id: 3,
    question: "Who wrote 'Hamlet'?",
    options: [
      "Charles Dickens",
      "William Shakespeare",
      "Mark Twain",
      "J.K. Rowling",
    ],
    answer: "William Shakespeare",
  },
];

let currentQuestionIndex = 0;
let score = 0;

router.get("/", (req, res) => {
  if (currentQuestionIndex >= questions.length) {
    return res.json({
      message: "Quiz completed! Visit /quiz/score to see your final score.",
    });
  }

  const currentQuestion = questions[currentQuestionIndex];
  res.json({
    questionNumber: currentQuestionIndex + 1,
    question: currentQuestion.question,
    options: currentQuestion.options,
  });
});

router.post("/", (req, res) => {
  const { answer } = req.body;

  if (currentQuestionIndex >= questions.length) {
    return res.json({ message: "Quiz already completed!" });
  }

  const currentQuestion = questions[currentQuestionIndex];
  let feedback;

  if (answer === currentQuestion.answer) {
    score++;
    feedback = "Correct!";
  } else {
    feedback = `Incorrect! The correct answer was "${currentQuestion.answer}".`;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex >= questions.length) {
    return res.json({
      feedback,
      message: "You have completed the quiz!",
      next: "/quiz/score",
    });
  }

  const nextQuestion = questions[currentQuestionIndex];
  res.json({
    feedback,
    nextQuestion: {
      questionNumber: currentQuestionIndex + 1,
      question: nextQuestion.question,
      options: nextQuestion.options,
    },
  });
});

router.get("/score", (req, res) => {
  res.json({
    message: "🎉 Quiz Completed!",
    score,
    total: questions.length,
  });

  currentQuestionIndex = 0;
  score = 0;
});

export default router;
