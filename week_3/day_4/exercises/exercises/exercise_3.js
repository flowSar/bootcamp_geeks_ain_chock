let allBoldItems;

function getBoldItems() {
  allBoldItems = document.querySelectorAll("strong");
}

function highlight() {
  getBoldItems();
  allBoldItems.forEach((element) => {
    element.style.color = "blue";
  });
}

function returnItemsToDefault() {
  getBoldItems();
  allBoldItems.forEach((element) => {
    if (element.style.color == "blue") {
      element.style.color = "black";
    }
  });
}
// change the color ol bold item to blue when the mouse over paragraph
const paragraph = document.querySelector("p");
paragraph.addEventListener("mouseover", () => {
  highlight();
});

// changethe color to default when mouse is out of paragraph
paragraph.addEventListener("mouseout", () => {
  returnItemsToDefault();
});
