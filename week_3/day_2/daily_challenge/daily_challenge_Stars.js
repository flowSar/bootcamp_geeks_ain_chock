let i = 0;

let stars = "";
for (i; i < 6; i++) {
  for (let j = 0; j < i + 1; j++) {
    stars += "*";
  }
  console.log(stars);
  stars = "";
}
