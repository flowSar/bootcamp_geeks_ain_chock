const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];
colors.forEach((color, index) => {
  let position = index + 1;
  let suffix = "";
  if (index > 2) {
    suffix = ordinal[0];
  } else {
    suffix = ordinal[position];
  }
  console.log(`${position}${suffix} choice is ${color}.`);
});
