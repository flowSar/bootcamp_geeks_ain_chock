// ===== Exercise 1
let personOne = {
  FullName: "Khalid",
  Mass: 75,
  Height: 1.8,
  bmi: function () {
    return this.Mass / this.Height ** 2;
  },
};

let personTwo = {
  FullName: "Yassine",
  Mass: 68,
  Height: 1.75,
  bmi: function () {
    return this.Mass / this.Height;
  },
};

console.log(personOne.bmi());

function compareBmi() {
  if (personOne.bmi() > personTwo.bmi()) {
    console.log(personOne.FullName);
  }
  console.log(personTwo.FullName);
}
compareBmi();

// ===== Exercise 2

const findAvg = (gradesList) => {
  // get the grades list length
  const length = gradesList.length;
  let gradesTotal = 0;
  for (const item of gradesList) {
    gradesTotal += item;
  }
  average = gradesTotal / length;
  return average;
};

const pritnResut = (gradesList) => {
  const average = findAvg(gradesList);
  if (average > 65) {
    console.log("congratulation you passed");
  } else if (average < 65) {
    console.log("unfortunately you failed and must repeat the course");
  }
};

pritnResut([60, 50, 100, 100, 70]);
pritnResut([60, 50, 0, 100, 70]);
