import express from "express";
import todoRoutes from "./routes/todos.js";

const app = express();

app.use(express.json());

app.use("/api/todos", todoRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
