import express from "express";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/users.routes.js";
import { errorHandler } from "./errors/error-handler.js";

const app = express();

app.use(express.json());

app.use("/auth", authRouter);

app.use("/users", userRouter);

app.use(errorHandler);

app.listen(3344, () => {
  console.log("server listenning on 3344, visit http://localhost:3344");
});
