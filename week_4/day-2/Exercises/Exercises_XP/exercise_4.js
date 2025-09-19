const users = [
  { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
  { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
  { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
  { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
  { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
  { firstName: "Wes", lastName: "Reid", role: "Instructor" },
  { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
];

// question 1
const welcomeStudents = users.map((student) => "Hello " + student.firstName);
console.log(welcomeStudents);

// question 2
const fullStackResidents = users.filter((residen) => {
  if (residen.role === "Full Stack Resident") return residen;
});
console.log(fullStackResidents);

// question 3
const fullStackResidentNames = users
  .filter((resident) => {
    if (resident.role === "Full Stack Resident") return resident.firstName;
  })
  .map((resident) => resident.firstName);

console.log(fullStackResidentNames);
