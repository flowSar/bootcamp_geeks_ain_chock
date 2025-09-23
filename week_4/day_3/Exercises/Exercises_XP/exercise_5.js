class Dog {
  constructor(name) {
    this.name = name;
  }
}

// the that will constructor will successfully extend the Dog class?

class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
}
