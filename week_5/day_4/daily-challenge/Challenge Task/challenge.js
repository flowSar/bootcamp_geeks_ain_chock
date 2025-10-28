// const greet = require("./greeting");
// const showMessage = require("./colorful-message");
// const readFileContent = require("./read-file");

import { greet } from "./greeting.js";
import { showMessage } from "./colorful-message.js";
import { readFileContent } from "./read-file.js";

console.log("\n------------------ Greeting -------------------------");
console.log(greet("Brahim"));

console.log("\n----------------- Colorful Message -------------------");
showMessage();

console.log("\n------------------- File Content ------------------- ---");
readFileContent();
