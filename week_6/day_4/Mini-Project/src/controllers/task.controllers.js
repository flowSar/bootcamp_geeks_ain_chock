import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
  deleteFromFile,
  readFromFile,
  updateToFile,
  writeToFile,
} from "../utils/functions.js";

export const getAllTasks = (req, res) => {
  const __filename = fileURLToPath(import.meta.url);

  const __dirname = path.dirname(__filename);
  console.log(__filename);
  console.log(__dirname);
  const filePath = path.join(__dirname, "../../tasks.json");

  readFromFile(filePath, (data, err) => {
    if (err) {
      res.status(500).json({ success: false, message: err });
    }
    res.status(200).json({ success: true, data });
  });
};

export const getTask = (req, res) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  console.log(__filename);
  console.log(__dirname);
  const filePath = path.join(__dirname, "../../tasks.json");

  const { id } = req.params;

  readFromFile(filePath, (data, err) => {
    if (err) {
      res.status(500).json({ success: false, message: err });
    }

    const filteredData = data.filter((task) => task.id == id);
    res.status(200).json({ success: true, data: filteredData });
  });
};

export const createTask = (req, res) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  console.log(__filename);
  console.log(__dirname);
  const filePath = path.join(__dirname, "../../tasks.json");
  const { title, description, status, priority, due_date } = req.body;
  const task = {
    title,
    description,
    status,
    priority,
    due_date,
  };

  writeToFile(filePath, task, (tasks, err) => {
    if (err) {
      res.status(500).json({ success: false, message: err });
    }
    res.status(200).json({ success: true, data: tasks });
  });
};

export const updateTask = (req, res) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  console.log(__filename);
  console.log(__dirname);
  const filePath = path.join(__dirname, "../../tasks.json");
  const { title, description, status, priority, due_date } = req.body;
  const { id } = req.params;
  const task = {
    id,
    title,
    description,
    status,
    priority,
    due_date,
  };

  updateToFile(filePath, task, (tasks, err) => {
    if (err) {
      res.status(500).json({ success: false, message: err });
    }
    res.status(200).json({ success: true, data: tasks });
  });
};

export const deleteTask = (req, res) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  console.log(__filename);
  console.log(__dirname);
  const filePath = path.join(__dirname, "../../tasks.json");
  const { id } = req.params;

  deleteFromFile(filePath, id, (tasks, err) => {
    if (err) {
      res.status(500).json({ success: false, message: err });
    }
    res.status(200).json({ success: true, data: tasks });
  });
};
