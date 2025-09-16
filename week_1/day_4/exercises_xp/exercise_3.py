from exercises_xp import Dog
import random

class PetDog(Dog):
    
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False
    
    def train(self):
        print(self.bark())
        self.trained = True
    
    def play(self, *args):
        all_dogs = [dog.name for dog in args]
        print(f'{', '.join(all_dogs)} all play together')
    
    def do_a_trick(self):
        tricks = ['does a barrel roll', 'stands on his back legs', 'shakes your hand', 'plays dead']
        trick = random.choice(tricks)
        if self.trained:
            print(self.name + ' '+ trick)
        else:
            print("the dog is nottrained can't do a trick")
        

        

dogpet = PetDog('doggy', 2, 23)
dogpet.train()
dogpet.play(Dog('rex', 4, 30), Dog('bex', 1, 20))
dogpet.do_a_trick()