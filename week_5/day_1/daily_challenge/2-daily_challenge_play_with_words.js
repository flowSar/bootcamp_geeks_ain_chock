const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`;

function toJs() {
  return new Promise((resolve, reject) => {
    const morseObj = JSON.parse(morse);
    if (Object.keys(morseObj).length === 0) reject("Error; morse is empty");
    resolve(morseObj);
  });
}

function toMorse(morseJS) {
  return new Promise((resolve, reject) => {
    const userInput = prompt("Hello world");
    let moreseTranslation = [];
    for (const char of userInput) {
      if (morseJS[char] === undefined) {
        reject(
          `the character "${char}" doesn't exist in the morse javascript object`
        );
      }
      moreseTranslation.push(morseJS[char]);
    }
    resolve(moreseTranslation);
  });
}
function joinWords(morseTranslation) {
  let text = morseTranslation.join("\n");
  const displayElemtn = (document.querySelector(".p-display").innerText = text);
}

toJs()
  .then((res) => toMorse(res))
  .then((res) => joinWords(res))
  .catch((err) => console.log("error: ", err));
