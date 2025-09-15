// ===== Exercise 1
let sum = 0;

function displayNumbersDivisible(divisor) {
  for (let i = 0; i < 500; i++) {
    if (i % divisor === 0) {
      console.log(i);
      sum += i;
    }
  }
  console.log("Sum: ", sum);
}
displayNumbersDivisible(23);

// ===== Exercise 2
const stock = {
  "banana": 6,
  "apple": 0,
  "pear": 12,
  "orange": 32,
  "blueberry": 1,
};

const prices = {
  "banana": 4,
  "apple": 2,
  "pear": 1,
  "orange": 1.5,
  "blueberry": 10,
};

let shoppingList = ["banana", "orange", "apple"];

function myBill() {
  let bill = 0;
  for (const fruit of shoppingList) {
    if (Object.keys(stock).includes(fruit) && stock[fruit] !== 0) {
      bill += prices[fruit];
      stock[fruit] = stock[fruit] - 1;
    }
  }
  return bill;
}

const bill = myBill();
console.log("bill: ", bill);

// ===== Exercise 3
coins = [0.25, 0.1, 0.05, 0.01];
function changeEnough(itemPrice, amountOfChange) {
  let amout = 0;
  for (const i in amountOfChange) {
    amout += amountOfChange[i] * coins[i];
  }

  if (itemPrice < amout) return true;

  return false;
}

console.log(changeEnough(4.25, [25, 20, 5, 0]));
console.log(changeEnough(14.11, [2, 100, 0, 0]));
console.log(changeEnough(0.75, [0, 0, 20, 5]));

// ===== Exercise 4

// -------questions 1 --------

function hotelCost() {
  let cost = 0;
  while (true) {
    const input = prompt("Enter the number of nights you wanna stay: ");

    if (Number(input) !== 0 || !isNaN(Number(input))) {
      const nightsNumber = Number(input);
      cost = nightsNumber * 140;
      break;
    }
  }
  return cost;
}

console.log(hotelCost());

function planeRideCost() {}

// -------questions 2 --------
let destinations = {
  "london": 183,
  "paris": 220,
  "others": 300,
};
function planeRideCost() {
  let price = 0;
  while (true) {
    const destination = prompt("Please enter your destination: ");
    if (destination !== "") {
      if (isNaN(Number(destination))) {
        if (Object.keys(destinations).includes(destination.toLowerCase())) {
          price = destinations[destination.toLowerCase()];
          break;
        } else {
          price = destinations.others;
          break;
        }
      }
    }
  }
  return price;
}
console.log("price: ", planeRideCost());

// -------questions 3 --------
function rentalCarCost() {
  let rentCost = 0;
  while (true) {
    let rentDays = prompt("Enter the number of day you wanna rent the car:");
    rentDays = Number(rentDays);
    if (rentDays !== 0 && isNaN(rentDays) !== true) {
      if (rentDays > 10) {
        rentCost = rentDays * 40 - (rentDays * 40 * 5) / 100;
      } else {
        rentCost = rentDays * 40;
      }
      break;
    }
  }
  return rentCost;
}
console.log("rentCost: ", rentalCarCost());

// -------questions 4 --------

function totalVacationCost() {
  const totalVacationCost = rentalCarCost() + hotelCost() + planeRideCost();
  return totalVacationCost;
}

// -------questions 5 --------

console.log("Total vaction cost: ", totalVacationCost());

// ===== Exercise 5...

// check the file exercise_5.js and exercise_5.html

// ===== Exercise 6...

// check the ile exercise_6.js and exercise_6.html

// ===== Exercise 7...

// check the file exercise_7.js and exercise_7.html
