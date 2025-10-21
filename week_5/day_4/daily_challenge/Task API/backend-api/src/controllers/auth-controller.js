import path from "path";
import { fileURLToPath } from "url";
import { isExist, writeToFile } from "../../utils/functions.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, "../../users.json");

  const { firstname, lastname, email, username, password } = req.body;
  if (!firstname || !lastname || !email || !username || !password) {
    return res
      .status(400)
      .json({ success: false, message: "please peovide all necessary fields" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = {
    firstname,
    lastname,
    email,
    username,
    password: hashedPassword,
  };
  // check if the email or username already exist
  isExist(filePath, newUser, (data, err) => {
    if (err) {
      if (data) {
        return res
          .status(400)
          .json({ success: false, user: data, message: err });
      }
      return res.status(400).json({ success: false, message: err });
    }
    // register the new user
    writeToFile(filePath, newUser, (user, err) => {
      if (err) {
        res
          .status(400)
          .json({ success: false, message: "register failed", err });
      }
      return res.status(201).json({ success: true, user });
    });
  });
};

export const login = async (req, res) => {
  const __filename = fileURLToPath(import.meta.url);

  const __dirname = path.dirname(__filename);
  console.log(__filename);
  console.log(__dirname);
  const filePath = path.join(__dirname, "../../users.json");

  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ success: false, message: "please peovide all necessary fields" });
  }

  const loginUser = {
    username,
    password,
  };
  // check if the username exist
  isExist(filePath, loginUser, async (result, user, err) => {
    if (err) {
      return res.status(400).json({ success: false, message: err });
    }
    // if the user exist
    if (result) {
      const hashedPassword = user.password;
      const verifyPassword = await bcrypt.compare(password, hashedPassword);

      if (verifyPassword) {
        return res.json({
          success: true,
          isLogged: true,
          user: { ...user, password: "" },
        });
      }

      return res.status(401).json({
        success: true,
        isLogged: true,
        message: "user credentials do not match",
      });
    }
  });
};
