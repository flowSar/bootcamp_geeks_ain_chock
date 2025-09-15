console.log("hello world");
const divElement = document.querySelector("div");

const listElement = document.querySelector(".list");
listElement.children[1].innerHTML = "Richard";

//  delete the second li of the second ul
const listElements = document.querySelectorAll(".list");

listElements[1].children[1].remove();

listElements.forEach((element) => {
  element.children[0].innerHTML = "Brahim";
});

listElements.forEach((element) => {
  element.classList.add("student_list");
});

// add class to the first ul
listElement.classList.add("university");
listElement.classList.add("attendance");

// question -4) 1
divElement.style.backgroundColor = "lightblue";
divElement.style.padding = "10px";

// question 4)2
listElements[1].children[1].style.display = "none";

// question 4)3 add border to <li>
listElement.children[1].style.border = "1px solid black";

// question 4)-4 change the font-size of teh whole body
document.querySelector("body").style.fontSize = "20px";

// question 4)-5
if (divElement.style.backgroundColor === "lightblue") {
  listElements.forEach((element) => {
    alert(
      `Hello ${element.children[0].innerHTML} and ${element.children[1].innerHTML}`
    );
  });
}
