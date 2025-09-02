
class Farm:
    
    def __init__(self, farm_name):
        self.name = farm_name
        self.animals = {}
    
    def add_animal(self, animal_type, count = 1):
        if self.animals.get(animal_type) is None:
            self.animals[animal_type] = count
        else:
            self.animals[animal_type] += count
    
    def get_info(self):
        farm_info = f"{self.name}'s farm\n\n"
        for key, value in self.animals.items():
            farm_info += f'{key}: {value}\n'

        farm_info += '\n     E-I-E-I-0!'
        return farm_info

    def get_animal_types(self):
        sorted_animals = sorted(list(self.animals.keys()))
        return sorted_animals

    def get_short_info(self):
        animals = self.get_animal_types()
        short_info = f'{self.name}’s farm has '
        for animal in animals[:-1]:
            short_info += f'{animal}s'
            if animal == animals[-2]:
                short_info += ' '
                continue
            short_info += ', '
        short_info += f'and {animals[-1]}s.'
        return short_info



macdonald = Farm("McDonald")
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
print(macdonald.get_info())
print(macdonald.get_short_info())