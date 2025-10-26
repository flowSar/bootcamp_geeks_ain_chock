import express from "express";

const router = express.Router();

let todos = [
  { id: 1, task: "Learn Express.js", completed: false },
  { id: 2, task: "Build a to-do API", completed: false },
];

router.post("/", (req, res) => {
  const { task } = req.body;
  if (!task) {
    return res.status(400).json({ message: "Task is required" });
  }

  const newTodo = {
    id: todos.length + 1,
    task,
    completed: false,
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

router.get("/", (req, res) => {
  res.json(todos);
});

router.get("/:id", (req, res) => {
  const todo = todos.find((t) => t.id === parseInt(req.params.id));
  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }
  res.json(todo);
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { task, completed } = req.body;

  const todo = todos.find((t) => t.id === parseInt(id));
  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  if (task !== undefined) todo.task = task;
  if (completed !== undefined) todo.completed = completed;

  res.json(todo);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const index = todos.findIndex((t) => t.id === parseInt(id));
  if (index === -1) {
    return res.status(404).json({ message: "Todo not found" });
  }

  const deleted = todos.splice(index, 1);
  res.json(deleted[0]);
});

export default router;
