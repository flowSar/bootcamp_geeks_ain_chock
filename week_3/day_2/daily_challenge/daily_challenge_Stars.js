let i = 0;

for (i; i < 6; i++) {
  for (let j = 0; j < i + 1; j++) {
    process.stdout.write("*");
  }
  console.log("");
}
