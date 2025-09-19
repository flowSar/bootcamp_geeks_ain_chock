// Part I:

function makeJuice(size) {
  const ingredients = [];
  function addIngredients(firstIngredient, secondIngredient, thirdIngredient) {
    ingredients.push(firstIngredient);
    ingredients.push(secondIngredient);
    ingredients.push(thirdIngredient);
  }
  function displayJuice() {
    console.log(
      `The client wants a ${size} juice, containing ${ingredients[0]}, ${ingredients[1]}, ${ingredients[2]}`
    );
  }
  addIngredients("oranges", "apple", "carrot");
  addIngredients("mango", "kiwi", "banana");
  displayJuice();
}
makeJuice("medium");

// Part II:
