import express from "express";
const app = express();
app.use(express.json());

let books = [
  {
    id: 1,
    title: "The Alchemist",
    author: "Paulo Coelho",
    publishedYear: 1988,
  },
  { id: 2, title: "1984", author: "George Orwell", publishedYear: 1949 },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publishedYear: 1960,
  },
];

app.get("/api/books", (req, res) => {
  res.json(books);
});

app.get("/api/books/:bookId", (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const book = books.find((b) => b.id === bookId);
  if (book) res.status(200).json(book);
  else res.status(404).json({ message: "Book not found" });
});

app.post("/api/books", (req, res) => {
  const { title, author, publishedYear } = req.body;
  const newBook = {
    id: books.length ? books[books.length - 1].id + 1 : 1,
    title,
    author,
    publishedYear,
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

app.listen(5000, () => {
  console.log("Server listenng on port 5000");
});
