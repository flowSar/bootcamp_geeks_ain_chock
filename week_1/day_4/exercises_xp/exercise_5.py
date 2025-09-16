from exercise_4 import Family

class TheIncredibles(Family):
    def use_power(self, name):
        for member in self.members:
            if member['name'] == name:
                if member['age'] > 18:
                    print(f"{member['name']}'s power is: {member['power']}")
                else:
                    raise Exception(f"{member['name']} is not over 18 years old!")
                return
        print(f"No member named {name} found.")

    def incredible_presentation(self):
        print("Here is our powerful family **")
        super().family_presentation()
        for member in self.members:
            print(f"    Incredible Name: {member['incredible_name']}, Power: {member['power']}")


incredible_family = TheIncredibles("Incredibles")
incredible_family.members = [
    {'name':'Brahim','age':29,'gender':'Male','is_child':False,'power':'fly','incredible_name':'SuperSar'},
    {'name':'Kawtar','age':32,'gender':'Female','is_child':False,'power':'read minds','incredible_name':'SuperWoman'}
]

incredible_family.incredible_presentation()

incredible_family.born(name='Brahim', age=1, gender='Male', is_child=True, power='fly', incredible_name='SuperSar')

incredible_family.incredible_presentation()
