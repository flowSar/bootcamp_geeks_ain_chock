const listPlanets = document.querySelector(".listPlanets");

// const planets = [
//   "Mercury",
//   "Venus",
//   "Earth",
//   "Mars",
//   "Jupiter",
//   "Saturn",
//   "Uranus",
//   "Neptune",
// ];

const planets = [
  { name: "Mercury", moons: 0 },
  { name: "Venus", moons: 0 },
  { name: "Earth", moons: 1 },
  { name: "Mars", moons: 1 },
  { name: "Jupiter", moons: 0 },
  { name: "Saturn", moons: 1 },
  { name: "Uranus", moons: 1 },
  { name: "Neptune", moons: 0 },
];

const planetColors = [
  "gray",
  "goldenrod",
  "blue",
  "red",
  "orange",
  "khaki",
  "lightblue",
  "darkblue",
];

planets.forEach((planet, index) => {
  const div = document.createElement("div");
  div.classList.add("planet");
  div.classList.add(planet.name);
  div.style.backgroundColor = planetColors[index];

  for (let i = 0; i < planet.moons; i++) {
    const moon = document.createElement("div");
    moon.classList.add("moon");
    div.append(moon);
  }

  listPlanets.append(div);
});
