async function fetchData() {
  try {
    const response = await fetch(
      "https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error(`fetching data failed ${data["meta"]["msg"]}`);
    } else {
      console.log(data);
    }
  } catch (error) {
    console.log("error", error.message);
  }
}

fetchData();
