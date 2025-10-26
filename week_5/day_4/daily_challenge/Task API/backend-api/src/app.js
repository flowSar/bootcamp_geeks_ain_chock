import express from "express";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/users.routes.js";
import { errorHandler } from "./errors/error-handler.js";
import cors from "cors"; // ✅ this one!

const app = express();

// enable CORS for all routes
app.use(cors());

app.use(express.json());

app.use("/auth", authRouter);

app.use("/users", userRouter);

app.use(errorHandler);

app.listen(3344, () => {
  console.log("server listenning on 3344, visit http://localhost:3344");
});
