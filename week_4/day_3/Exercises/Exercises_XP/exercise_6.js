// ---- question 1
// [2] === [2]  => false
// {} === {} => false

// --- question 2
const object1 = { number: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { number: 5 };

object1.number = 4;
object2.number; // value of number is 4 becuase object1 and object2 reference to the same object
object3.number; // value of number is 4 becuase object1 and object2 and object3 reference to the same object hich is object1 with the value 4
object4.number; // value of number is 5 becuase object4 refrence to the value we gave him which is 5

class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

class Mammal extends Animal {
  sound(animalSound) {
    return `This is a ${this.type} named ${this.name}, it is ${this.color}, and it makes the sound: ${animalSound}`;
  }
}

const farmerCow = new Mammal("lily", "cow", "brown");
console.log(farmerCow.sound("moos"));
