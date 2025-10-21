import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import bcrypt from "bcrypt";
import {
  isExist,
  readFromFile,
  updateToFile,
  writeToFile,
} from "../../utils/functions.js";

export const getAllUsers = (req, res) => {
  const __filename = fileURLToPath(import.meta.url);

  const __dirname = path.dirname(__filename);
  console.log(__filename);
  console.log(__dirname);
  const filePath = path.join(__dirname, "../../users.json");

  readFromFile(filePath, (users, err) => {
    if (err) {
      return res.status(400).json({ success: false, message: err });
    }
    return res.status(200).json({ success: true, data: users });
  });
};

export const getUser = (req, res) => {
  const __filename = fileURLToPath(import.meta.url);

  const __dirname = path.dirname(__filename);
  console.log(__filename);
  console.log(__dirname);
  const filePath = path.join(__dirname, "../../users.json");

  const { id } = req.params;
  if (!id) {
    return res
      .status(400)
      .json({ success: false, message: "user id is missing" });
  }

  readFromFile(filePath, (users, err) => {
    if (err) {
      return res.status(400).json({ success: false, message: err });
    }
    const user = users.filter((user) => user.id == id);
    return res.status(200).json({ success: true, data: user });
  });
};

export const updateUser = async (req, res, next) => {
  const __filename = fileURLToPath(import.meta.url);

  const __dirname = path.dirname(__filename);
  console.log(__filename);
  console.log(__dirname);
  const filePath = path.join(__dirname, "../../users.json");
  const { firstname, lastname, email, username, password } = req.body;
  let hashedPassword = null;
  if (password) {
    hashedPassword = await bcrypt.hash(password, 10);
  }

  const { id } = req.params;

  if (!id) {
    const error = new Error("user id is missing");
    error.statusCode = 400;
    return next(error);
  }

  const newUser = {
    id,
    firstname,
    lastname,
    email,
    username,
    password: hashedPassword,
  };

  isExist(filePath, newUser, (data, err) => {
    if (err) {
      const error = new Error(err);
      error.statusCode = 400;
      return next(error);
    }

    updateToFile(filePath, newUser, (user, err) => {
      if (err) {
        const error = new Error(err);
        error.statusCode = 400;
        return next(error);
      }

      return res.status(200).json({ success: true, data: user });
    });
  });
};
