let gifs = [];

const submitBtn = document.querySelector(".submit-btn");
async function fetchData(category) {
  try {
    submitBtn.disabled = true;
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`;

    const response = await fetch(url);
    const data = await response.json();
    const dataLength = data["data"].length;
    // get random index based on the size of the data
    const randomIndex = Math.floor(Math.random() * dataLength);

    gifs.push(data["data"][randomIndex].images.original.url);
    submitBtn.disabled = false;
  } catch (error) {
    console.log("errr", error);
  } finally {
    submitBtn.disabled = false;
  }
}

const categoryInput = document.querySelector(".category-input");
const gridContainer = document.querySelector(".grid-container");
const deleteAllbtn = document.querySelector(".delete-all-btn");

submitBtn.addEventListener("click", async (event) => {
  event.preventDefault();
  const category = categoryInput.value;
  if (category === "") {
    alert("insert your category");
  } else {
    await fetchData(category);

    // load all gifs after we added new gif
    loadGifsHtml();
    // display deleteall btn after adding new gif
    displayDeleteAllBtn();
    // after adding new gif inifialize the delete btn.
    initializeDeleteButtons();
  }
});

function initializeDeleteButtons() {
  const deleteBtn = document.querySelectorAll(".delete-btn");
  deleteBtn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      gifs.splice(index, 1);
      // load all gifs grid after delete
      loadGifsHtml();
      // load all delete btns with new indexing after delete
      initializeDeleteButtons();
      // display delete all btn
      displayDeleteAllBtn();
    });
  });
}

deleteAllbtn.addEventListener("click", () => {
  deleteAllGifs();
  displayDeleteAllBtn();
});

function deleteAllGifs() {
  gifs = [];
  loadGifsHtml();
  displayDeleteAllBtn();
}

function displayDeleteAllBtn() {
  if (gifs.length === 0) {
    deleteAllbtn.classList.add("hidden");
  } else {
    deleteAllbtn.classList.remove("hidden");
  }
}

function loadGifsHtml() {
  gridContainer.innerHTML = generateHtml(gifs);
}

function generateHtml(gifs) {
  let html = ``;
  for (const imgUrl of gifs) {
    html += `
      <div class="relative">
          <img
            src="${imgUrl}"
            alt="gif image"
            class="w-full h-64 object-cover"
          />
          <div class="absolute top-3 right-3">
            <button
              class="delete-btn bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-2 font-bold text-sm rounded-full cursor-pointer shadow-lg"
            >
              ✕ Delete
            </button>
          </div>
        </div>
    `;
  }

  return html;
}

function generateRandomIndex(array) {
  Math.random();
}
