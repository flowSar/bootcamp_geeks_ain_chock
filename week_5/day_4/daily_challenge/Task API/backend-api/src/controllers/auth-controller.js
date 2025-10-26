import path from "path";
import { fileURLToPath } from "url";
import { isExist, writeToFile } from "../../utils/functions.js";
import bcrypt from "bcrypt";

export const register = async (req, res, next) => {
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
      const error = new Error(err);
      error.statusCode = 400;
      return next(error);
    }
    // register the new user
    writeToFile(filePath, newUser, (user, err) => {
      if (err) {
        const error = new Error("register failed");
        error.statusCode = 400;
        return next(error);
      }
      return res.status(201).json({ success: true, user });
    });
  });
};

export const login = async (req, res, next) => {
  const __filename = fileURLToPath(import.meta.url);

  const __dirname = path.dirname(__filename);
  console.log(__filename);
  console.log(__dirname);
  const filePath = path.join(__dirname, "../../users.json");

  const { username, password } = req.body;

  if (!username || !password) {
    const error = new Error("please peovide all necessary fields");
    error.statusCode = 400;
    return next(error);
  }

  const loginUser = {
    username,
    password,
  };
  // check if the username exist
  isExist(filePath, loginUser, async (user, err) => {
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "this user does not exist" });
    }

    // if the user exist
    if (user) {
      const hashedPassword = user.password;

      const verifyPassword = await bcrypt.compare(password, hashedPassword);

      if (!verifyPassword) {
        const error = new Error("user credentials do not match");
        error.statusCode = 400;
        return next(error);
      }

      return res.json({
        success: true,
        isLogged: true,
        user: { ...user, password: "" },
      });
    }
  });
};
