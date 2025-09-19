const epic = ["a", "long", "time", "ago", "in a", "galaxy", "far far", "away"];

const phrase = epic.reduce((acc, word) => acc + " " + word);
console.log(phrase);
