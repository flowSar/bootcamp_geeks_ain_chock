function makeAllCaps(words) {
  return new Promise((resolve, reject) => {
    words.forEach((word) => {
      if (typeof word !== "string") {
        return reject("A non-string value was found in the array.");
      }
    });
    resolve(words.map((word) => word.toUpperCase()));
  });
}

function sortWords(words) {
  return new Promise((resolve, reject) => {
    if (words.length > 4) {
      resolve(words.map((word) => word.toUpperCase()).sort());
    }

    reject("the array is to short less than 4 items");
  });
}

//in this example, the catch method is executed, because the array contains a number
makeAllCaps([1, "pear", "banana"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

//in this example, the catch method is executed, because the array length is not bigger than 4
makeAllCaps(["apple", "pear", "banana"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

//in this example, you should see in the console,
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
  .catch((error) => console.log(error));
