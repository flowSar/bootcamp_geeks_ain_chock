#!/usr/bin/node
// ===== Exercise 1
// Part I
const people = ["Greg", "Mary", "Devon", "James"];
// question 1
people.shift();
// question 2
people[2] = "Jason";
// question 3
people.push("Brahim");
// question 4
console.log("index of Mary: ", people.indexOf("Mary"));
// question 5
const newPeople = people.slice(1, -1);
// question 6
console.log(people.indexOf("Foo"));
// we got -1 because Foo doesn't exist
// question 7
const last = people[people.length - 1];
// the relationship is the last index of the list if the length of the list is
console.log(last);

// --------- Part II - Loops

// question 1
for (const name of people) {
  console.log(name);
}

// question 2

for (const name of people) {
  console.log(name);
  if (name === "Devon") break;
}

// ===== Exercise 2

// question 1
const colors = ["green", "yellow", "red", "purple", "orange"];
// question 2

for (const i in colors) {
  console.log(`My #${Number(i) + 1} choice is ${colors[i]}`);
}

// question 3
const suffix = ["st", "nd", "rd", "th", "th"];
for (const i in colors) {
  console.log(`My ${Number(i) + 1}${suffix[i]} choice is ${colors[i]}`);
}

// ===== Exercise 3
// question 1
// const userInput = prompt("Please enter a number:");
// console.log("type of input: ", typeof userInput);

// question 2

// while (true) {
//   const userInput2 = prompt("Please enter a number:");
//   const number = Number(userInput2);
//   if (number > 10) break;
// }
console.log("type of input: ", typeof userInput);

// ===== Exercise 4
const building = {
  numberOfFloors: 4,
  numberOfAptByFloor: {
    firstFloor: 3,
    secondFloor: 4,
    thirdFloor: 9,
    fourthFloor: 2,
  },
  nameOfTenants: ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent: {
    sarah: [3, 990],
    dan: [4, 1000],
    david: [1, 500],
  },
};
// number of floors
console.log(`Number of floors: ${building.numberOfFloors}`);

// number of pp in floor 1
console.log(
  `number of app in floor 1 is : ${building.numberOfAptByFloor.firstFloor}`
);
// number of pp in floor 3
console.log(
  `number of app in the third floor is : ${building.numberOfAptByFloor.thirdFloor}`
);

// question 4
const secondTenant = building.nameOfTenants[1];

console.log(
  `second tenant name is: ${secondTenant} and number of rooms he has in his app is : ${
    building.numberOfRoomsAndRent[secondTenant.toLowerCase()][0]
  }`
);

// question 5
const davidRent = building.numberOfRoomsAndRent.david[1];
const sarahRent = building.numberOfRoomsAndRent.sarah[1];
const danRent = building.numberOfRoomsAndRent.sarah[1];

const sumDavidSarahRent = davidRent + sarahRent;

if (sumDavidSarahRent > danRent) {
  building.numberOfRoomsAndRent.sarah[1] = 1200;
}

// ===== Exercise 5 ...
// question - 1
let family = {
  father: "rachid",
  mother: "fatime",
  brother: "khalid",
  sister: "kawtar",
};
// question - 2
for (const key in family) {
  console.log(key);
}
// question - 3
for (const key in family) {
  console.log(family[key]);
}

// ===== Exercise 6 ...
const details = {
  my: "name",
  is: "Rudolf",
  the: "reindeer",
};
let phrase = "";
for (const key in details) {
  phrase += key + " " + details[key] + " ";
}
console.log(phrase);

// ===== Exercise 7 ...

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
names.sort();
let secretSocietyName = "";
for (const name of names) {
  secretSocietyName += name[0];
}
console.log(secretSocietyName);
