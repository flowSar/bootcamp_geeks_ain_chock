import express from "express";
import {
  createTask,
  deleteTask,
  getAllTasks,
  getTask,
  updateTask,
} from "../controllers/task.controllers.js";

const taskRouter = express.Router();

taskRouter.get("/", getAllTasks);

taskRouter.get("/:id", getTask);

taskRouter.post("/", createTask);

taskRouter.put("/:id", updateTask);

taskRouter.delete("/:id", deleteTask);

export default taskRouter;
