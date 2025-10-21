import express from "express";
import taskRouter from "./routes/task.routes.js";

const app = express();
app.use(express.json());

app.use("/tasks", taskRouter);

app.get("/", (req, res) => {
  res.send("Hellow");
});

app.listen(3344, () => {
  console.log("serer listenning in port 3344, visit http://localhost:3344");
});
