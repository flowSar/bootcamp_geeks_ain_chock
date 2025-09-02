# ------ Exercise 1
class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

cat1 = Cat('Velvet', 3)
cat2 = Cat('Miso', 2)
cat3 = Cat('Shadow', 4)

cats = [cat1, cat2, cat3]

def findOldestCat(cats):
    index = 0
    catAge = cats[0].age
    for i, c in enumerate(cats):
        if c.age > catAge:
            catAge = c.age
            index = i
    return cats[index]
            
oldestCat = findOldestCat(cats=cats)
print(f'The oldest cat is {oldestCat.name}, and is {oldestCat.age} years old.')

# ------ Exercise 2

class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height
    
    def bark(self):
        print(f'{self.name} goes woof!')
    
    def jump(self):
        print(f'{self.name} jumps {self.height} cm high!')


davids_dog = Dog('Rex', 50)

print(f'dog name is {davids_dog.name} and his height is {davids_dog.height}cm')
davids_dog.bark()
davids_dog.jump()

sarahs_dog = Dog('Teacup', 20)
print(f'dog name is {sarahs_dog.name} and his height is {sarahs_dog.height}cm')
sarahs_dog.bark()
sarahs_dog.jump()

if davids_dog.height > sarahs_dog.height:
    print(f'the name of bigger dog is {davids_dog.name}')
else:
    print(f'the name of bigger dog is {sarahs_dog.name}')

# ------ Exercise 3
class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics
    
    def sing_me_a_song(self):
        for lyric in self.lyrics:
            print(lyric)

stairway = Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])

stairway.sing_me_a_song()

# ------ Exercise 4

class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []
    
    def add_animal(self, new_animal):
        isExist = False
        for animal in self.animals:
            if animal == new_animal:
                isExist = True
        if isExist is not True:
            self.animals.append(new_animal)
    
    def get_animals(self):
        for animal in self.animals:
            print(animal)
    
    def sell_animal(self, animal_sold):
        if self.animals.get(animal_sold) is not None:
            self.animals.remove(animal_sold)

    def sort_animals(self):
        sordtedAnimal = sorted(self.animals)
        grouped_animals = {}
        for animal in sordtedAnimal:
            if animal[0] in grouped_animals.keys():
                grouped_animals[animal[0]] += [animal]
            else:
                grouped_animals[animal[0]] = [animal]
        
        return grouped_animals;

    def get_groups(self):
        grouped_animals = self.sort_animals()
        for key in grouped_animals.keys():
            print(f'{key}: {grouped_animals[key]}')


new_york_zoo = Zoo('')
new_york_zoo.add_animal('Giraffe')
new_york_zoo.get_animals()
new_york_zoo.get_groups()


