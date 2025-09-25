const robots = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    image: "https://robohash.org/1?200x200",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    image: "https://robohash.org/2?200x200",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    image: "https://robohash.org/3?200x200",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    image: "https://robohash.org/4?200x200",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    image: "https://robohash.org/5?200x200",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    image: "https://robohash.org/6?200x200",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    image: "https://robohash.org/7?200x200",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    image: "https://robohash.org/8?200x200",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    image: "https://robohash.org/9?200x200",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    image: "https://robohash.org/10?200x200",
  },
  {
    id: 11,
    name: "Leanne Graham",
    username: "Bret.Graham",
    email: "leanne.graham@example.com",
    image: "https://robohash.org/robotos",
  },
  {
    id: 12,
    name: "brahim sar",
    username: "ibrahimsar",
    email: "ibra.sar@example.org",
    image: "https://robohash.org/robotcow",
  },
];

let debounceTimer;

const gridContainer = document.querySelector(".grid-container");
const searchBar = document.querySelector(".search-bar");
const body = document.querySelector("body");

searchBar.addEventListener("keyup", (event) => {
  const searchKeyWord = event.target.value;
  const searchResult = robots.filter((robot) => {
    if (robot.name.toLowerCase().includes(searchKeyWord.toLowerCase()))
      return robot;
  });

  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    displayRootsCard(searchResult, searchKeyWord);
  }, 300);
});

const displayRootsCard = (robots, keyword) => {
  let html = ``;

  robots.map((robot) => {
    html += `
        <div class="card">
            <div class="avatar">
                <img src="${robot.image}" />
            </div>
            <p class="name">${robot.name}</p>
            <p class="email">${robot.email}</p>
         </div>
    `;
  });
  if (html == "") {
    gridContainer.classList.add("grid-container-empty");
    gridContainer.innerHTML = `
        <div class="not-found">
            <p>
                No robot was found with the given name "${keyword}". Please ensure the name
                is correct.
            </p>
        </div>
    `;
    return;
  }
  gridContainer.classList.remove("grid-container-empty");
  gridContainer.innerHTML = html;
};
displayRootsCard(robots);
