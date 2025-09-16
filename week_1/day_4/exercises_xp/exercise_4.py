class Family:

    def __init__(self, last_name):
        self.members = []
        self.last_name = last_name
    
    def born(self, **kwargs):
        self.members.append(kwargs)
        print(f"Congratulations! The {self.last_name} family, welcomes {kwargs.get('name')} new born🎉")
    
    def is_18(self, name):
        found = False
        for member in self.members:
            if member.get('name') is not None:
                if member.get('name') == name:
                    if member.get('age') > 18:
                        return True
                    else:
                        return False
        print(f'this person {name} is not a family member')
        return False

    def family_presentation(self):
        print(f'The family : {self.last_name} members:')
        for member in self.members:
            print(f'Name: {member.get('name')}, Age: {member.get('age')}, Gender: {member.get('gender')}, Is Child: {member.get('is_child')}')


family = Family('sar')
family.born(**{'name':'Brahim','age':29,'gender':'Male','is_child':False})
family.born(**{'name':'Kawtar','age':32,'gender':'Female','is_child':False})
print(family.members)
print('Over 18:', family.is_18('brahim'))
print('Over 18:', family.is_18('Michael'))
family.family_presentation()