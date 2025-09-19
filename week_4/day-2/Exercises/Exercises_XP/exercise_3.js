// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ["bread", ...vegetables, "chicken", ...fruits];

// output : ['bread', "apple", "orange", "chicken", "carrot", "potato"] we are using spread operator to copy array to another array.

// ------2------
const country = "USA";
// [ 'U', 'S', 'A' ], we are spreading string int array of characters becuase string is by deafult an array

// ------Bonus------
let newArray = [...[, ,]];
// will get array of undefined values
