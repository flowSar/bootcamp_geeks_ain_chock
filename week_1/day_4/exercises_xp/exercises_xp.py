# ------ Exercise 1
class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Siamese(Cat):
    pass

all_cats = [Bengal('Bengal', 3), Chartreux('Chartreux', 1), Siamese('Siamese', 2)]

sara_pets = Pets(animals=all_cats)

sara_pets.walk()

# ------ Exercise 2

class Dog:

    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight
    
    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        return self.weight/(self.age * 10)

    def fight(self, other_dog):
        current_d = self.run_speed() * self.weight
        other_d = other_dog.run_speed() * other_dog.weight

        if current_d > other_d:
            return f"{self.name} wins the fight!"
        elif current_d < other_d:
            return f"{other_dog.name} wins the fight!"
        else:
            return "It's a tie!"

dog1 = Dog("Rex", age=3, weight=20)
dog2 = Dog("Buddy", age=5, weight=25)
dog3 = Dog("dogy", age=6, weight=35)
print(dog1.fight(dog2))
print(dog1.fight(dog3))
print(dog2.fight(dog3))

# ------ Exercise 3

# file exercise_3.py

# ------ Exercise 4

# check file exercise_4.py

# ------ Exercise 5

