const gameInfo = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"],
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"],
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"],
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"],
  },
];

// question 1

const players = [];
gameInfo.forEach((playerInfo) => {
  players.push(playerInfo.username);
});
console.log(players);

// question 2

const playersWithBiggerScore = [];
gameInfo.forEach((playerInfo) => {
  if (playerInfo.score > 5) {
    playersWithBiggerScore.push(playerInfo.username);
  }
});
console.log(playersWithBiggerScore);

// question 3

let tottalScore = 0;
gameInfo.forEach((playerInfo) => {
  tottalScore += playerInfo.score;
});
console.log("Total score: ", tottalScore);
