async function fetchData(params) {
  try {
    const response = await fetch("https://www.swapi.tech/api/starships/9");
    if (!response.ok) {
      throw new Error("fetching data failed");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

fetchData();
