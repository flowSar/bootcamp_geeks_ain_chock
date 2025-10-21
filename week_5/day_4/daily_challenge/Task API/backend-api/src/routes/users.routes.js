import express from "express";
import {
  getAllUsers,
  getUser,
  updateUser,
} from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.get("/", getAllUsers);

userRouter.get("/:id", getUser);

userRouter.put("/:id", updateUser);

export default userRouter;
