const users = { user1: 18273, user2: 92833, user3: 90315 };

const objectArray = Object.entries(users);

objectArray.map((user) => {
  user[1] *= 2;
});

console.log(objectArray);
