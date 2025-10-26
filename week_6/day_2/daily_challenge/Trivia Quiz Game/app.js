import express from "express";
import quizRoutes from "./routes/quiz.js";

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Mount the router
app.use("/quiz", quizRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Trivia Quiz running at http://localhost:${PORT}`);
});
