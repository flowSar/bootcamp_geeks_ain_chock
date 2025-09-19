const students = [
  { name: "Ray", course: "Computer Science", isPassed: true },
  { name: "Liam", course: "Computer Science", isPassed: false },
  { name: "Jenner", course: "Information Technology", isPassed: true },
  { name: "Marco", course: "Robotics", isPassed: true },
  { name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
  { name: "Jamie", course: "Big Data", isPassed: false },
];

// create a list of students who passed the course
const studentsPassedCourse = students.filter((student) => student.isPassed);
console.log(studentsPassedCourse);

// create a list of students who passed the course and print msg for each one
students
  .filter((student) => student.isPassed)
  .forEach((student) =>
    console.log(
      `Good Job ${student.name} you passed the course in ${student.course}`
    )
  );
