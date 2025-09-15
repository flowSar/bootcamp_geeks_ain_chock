const listBooks = document.querySelector(".listBooks");

const allBooks = [
  {
    title: "The Subtle Art of Not Giving a F***",
    author: "mark manson",
    image:
      "https://upload.wikimedia.org/wikipedia/en/b/bd/The_Subtle_Art_of_Not_Giving_a_F%2Ack_by_Mark_Manson_-_Book_Cover.png",
    alreadyRead: true,
  },
  {
    title: "war",
    author: "bob woodward",
    image:
      "https://upload.wikimedia.org/wikipedia/en/b/b6/War_Bob_Woodward_book_cover.jpg",
    alreadyRead: false,
  },
];

allBooks.forEach((book) => {
  const div = document.createElement("div");
  const bookHeader = document.createElement("p");
  bookHeader.innerText = `${book.title}  written by ${book.author}`;
  if (book.alreadyRead) {
    bookHeader.style.color = "red";
  }
  const bookImage = document.createElement("img");
  bookImage.src = book.image;
  bookImage.style.width = "100px";
  div.append(bookHeader);
  div.append(bookImage);
  listBooks.append(div);
});
