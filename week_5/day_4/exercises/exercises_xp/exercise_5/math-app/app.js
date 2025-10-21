const lodash = require("lodash");
const math = require("./math");

const sum = math.add(10, 20);
const product = math.multiply(5, 4);

const numbers = [1, 2, 3, 4, 5];
const doubled = lodash.map(numbers, (n) => n * 2);
const max = lodash.max(numbers);

console.log("Sum:", sum);
console.log("Product:", product);
console.log("Doubled numbers:", doubled);
console.log("Maximum number:", max);
