// function declaration
function convertToKg(weight) {
  return weight * 1000;
}

convertToKg();

// function expression
const convertToKg = function (weight) {
  return weight * 1000;
};

convertToKg();

// function declaration becuase of the scope we can call it even before we create it, while function expression you need to create it and than you can call it.

// arrow function
const convertToKg = () => weight * 1000;

convertToKg();
