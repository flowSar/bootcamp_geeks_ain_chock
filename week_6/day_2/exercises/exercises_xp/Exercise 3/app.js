import express from "express";
import bookRoutes from "./routes/books.js";

const app = express();

app.use(express.json());

app.use("/books", bookRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
