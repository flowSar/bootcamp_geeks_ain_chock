const colors = [
  "red",
  "orangered",
  "orange",
  "yellow",
  "yellowgreen",
  "lightgreen",
  "green",
  "turquoise",
  "cyan",
  "lightskyblue",
  "dodgerblue",
  "blue",
  "darkblue",
  "indigo",
  "darkmagenta",
  "violet",
  "lightpink",
  "lightgray",
  "gray",
  "black",
  "white",
];

const colorPicker = document.querySelectorAll(".box");

colorPicker.forEach((box, index) => {
  box.style.backgroundColor = colors[index];
});

const gridContainer = document.querySelector(".grid-container");

const gridContainerWidth = gridContainer.offsetWidth;
const gridContainerHeight = gridContainer.offsetHeight;

const gridBoxWidth = 20;
const gridBoxHeight = 30;

const col = gridContainerWidth / gridBoxWidth;
const row = gridContainerHeight / gridBoxHeight;
console.log("row: ", Math.floor(row));
// calculate the number of boxes we need to fill the gridContainer
const numberOfBoxes = Math.floor(col * row);

// generate grid boxes
for (let i = 0; i < numberOfBoxes; i++) {
  const box = document.createElement("div");
  box.classList.add("item");
  box.style.width = "1.25rem";
  box.style.height = "1.875rem";
  box.style.backgroundColor = "rgba(255, 255, 255, 1)";
  gridContainer.append(box);
}

// pick color
let selectedColor;
colorPicker.forEach((element) => {
  element.addEventListener("click", () => {
    selectedColor = element.style.backgroundColor;
  });
});

let dragMouse = false;

const gridBoxes = document.querySelectorAll(".item");
let isDragging = false;
gridBoxes.forEach((element) => {
  // if the use click on the grid box change it ccolor with selected color
  element.addEventListener("click", () => {
    element.style.backgroundColor = selectedColor;
  });
  // if the use click on the grid box without lifting the click change its color with selected color
  element.addEventListener("mousedown", () => {
    element.style.backgroundColor = selectedColor;
  });

  // if the mouse is over the grid boxes change it's color if the mdragmouse = true
  element.addEventListener("mouseover", () => {
    if (dragMouse) {
      element.style.backgroundColor = selectedColor;
    }
  });
});
// if the mouse is down that mean we are drgging the mouse
document.addEventListener("mousedown", () => {
  dragMouse = true;
});

// if the mouse is up this mean we are not dragging the mouse
document.addEventListener("mouseup", () => {
  dragMouse = false;
});

// clear

const clearBtn = document.querySelector(".clear-btn");
clearBtn.addEventListener("click", () => {
  gridBoxes.forEach((element) => {
    element.style.backgroundColor = "rgba(255, 255, 255, 1)";
  });
});
