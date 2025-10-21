const fs = require("fs");

function readFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    console.log(`File read successfully: ${filePath}`);
    console.log(`Content: ${data}`);
    return data;
  } catch (err) {
    console.error(`Error reading file: ${err.message}`);
  }
}

function writeFile(filePath, content) {
  try {
    fs.writeFileSync(filePath, content, "utf8");
    console.log(`File written successfully: ${filePath}`);
  } catch (err) {
    console.error(`Error writing file: ${err.message}`);
  }
}

module.exports = {
  readFile,
  writeFile,
};
