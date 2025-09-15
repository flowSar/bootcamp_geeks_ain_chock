const divElement = document.querySelector("div");

divElement.setAttribute("id", "socialNetworkNavigation");

const ulElement = document.querySelector("ul");
const liElement = document.createElement("li");
const textNode = document.createTextNode("Logout");
liElement.append(textNode);
ulElement.appendChild(liElement);

console.log(ulElement.firstElementChild.textContent);

console.log(ulElement.lastElementChild.textContent);
