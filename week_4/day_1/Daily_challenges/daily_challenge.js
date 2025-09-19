let client = "John";

const groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "20$",
  other: {
    paid: true,
    meansOfPayment: ["cash", "creditCard"],
  },
};

const displayGroceries = () => {
  groceries.fruits.forEach((fruit) => {
    console.log(fruit);
  });
};

const cloneGroceries = () => {
  const user = client;
  client = "Betty";
  // there's no any modification to the values of the user, becuase string copy by value, not referenced
  shopping = groceries;
  groceries.totalPrice = "35$";
  // becuase the object copy by reference , which mean any change in one object both of them will get effected,
  // groceries and shopping reference to teh same object, the same address in the memory
  groceries.paid = false;
  // becuase the object copy by reference , which mean any change in one object both objects will get effected .
  // groceries and shopping reference to teh same object, the same address in the memory
};
cloneGroceries();
