const products = require("./products");

function findProduct(productName) {
  let foundProduct;
  products.forEach((product) => {
    if (product.name === productName) {
      foundProduct = product;
      return;
    }
  });
  return foundProduct;
}

console.log(findProduct("Coffee Maker"));
