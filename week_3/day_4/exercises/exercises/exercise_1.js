const element = document.querySelector("article h1");
const articleElement = document.querySelector("article");

console.log(element.innerText);

// remove the last paragraph from article
articleElement.lastElementChild.remove();

// change background colorto h2
const h2Element = document.querySelector("article h2");

h2Element.addEventListener("click", () => {
  h2Element.style.backgroundColor = "red";
});

// hide the element h3
const h3Element = document.querySelector("article h3");
h3Element.addEventListener("click", () => {
  h3Element.style.display = "none";
});

// change all paragraphs text to bold
const paragraphs = document.querySelectorAll("article p");
document.querySelector(".btn-bold").addEventListener("click", () => {
  paragraphs.forEach((para) => {
    para.style.fontWeight = "bold";
  });
});

// change the font size of h1 when we hover over it.
element.addEventListener("mouseover", () => {
  let randomSize = Math.floor(Math.random() * 100);
  element.style.fontSize = randomSize + "px";
});
