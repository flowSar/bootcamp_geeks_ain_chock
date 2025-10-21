const spinHtml = `
        <div class="fa-6x">
          <i class="fa-solid fa-spinner fa-spin-pulse text-white"></i>
        </div>
`;

const api = "https://www.swapi.tech/api/people";

let people = [];

async function fetchAll() {
  const resPeople = await fetch(api);
  people = await resPeople.json();

  if (!resPeople.ok || !people) {
    throw new Error("Oh data person isn't available");
  }
}

fetchAll();

async function fetchData() {
  try {
    const totalRecord = Number(people.total_records);
    const randomid = Math.floor(Math.random() * totalRecord);

    const resPerson = await fetch(`${api}/${randomid}`);
    const person = await resPerson.json();

    if (!resPerson.ok || !person) {
      throw new Error("Oh data person isn't available");
    }

    const resHomeland = await fetch(person.result.properties.homeworld);
    const homeLand = await resHomeland.json();

    if (!resHomeland.ok || !person) {
      throw new Error("Oh data person isn't available");
    }

    return {
      name: person.result.properties.name,
      height: person.result.properties.height,
      gender: person.result.properties.gender,
      birthYear: person.result.properties.birth_year,
      homeWorld: homeLand.result.properties.name,
    };
  } catch (error) {
    console.log("error: ", error.message);
  }
}

const infoContainer = document.querySelector(".info-container");

const findBtnElement = document.querySelector(".find-btn");

findBtnElement.addEventListener("click", async () => {
  infoContainer.innerHTML = spinHtml;
  const data = await fetchData();

  if (data) {
    infoContainer.innerHTML = generateHtml(
      data.name,
      data.height,
      data.gender,
      data.birthYear,
      data.homeWorld
    );
  }
  console.log(name);
});

function generateHtml(name, height, gender, birthYear, homeWorld) {
  return `
        <p class="text-3xl">${name}</p>
        <p>Height: ${height}</p>
        <p>Gender: ${gender}</p>
        <p>birth year: ${birthYear}</p>
        <p>home world: ${homeWorld}</p>
    `;
}

function generateErrorHtml(error) {
  return `<p>${error}</p>`;
}
