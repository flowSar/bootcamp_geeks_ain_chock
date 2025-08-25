# ------ Exercise 1
for _ in range(4): print('Hello world')
# ------ Exercise 2
result = (99 ^ 3 ) * 8
print(f"The result of (99³) × 8 is {result}")

# ------ Exercise 3
names = ['Khalid', 'Yassine', 'Brahim', 'Rachid']
insertedName = input('Enter your name: ')
found = False
for name in names:
    if (name.casefold() == insertedName.casefold()):
        found = True   

if (found):
    print('welcome', insertedName, ' we are happy to see you again')
else:
     print(insertedName, ' sorry you not registered in our database')

# ------ Exercise 4
height = int(input('Please inter your height in centimeters: '))
if (height > 145):
    print('you are tall enough to ride')
else:
    print('you need to grow some more to ride.')


# ------ Exercise 5

my_fav_numbers = {4, 8, 2}
# add frst number
my_fav_numbers.add(3)
# add secon number
my_fav_numbers.add(6)

my_fav_numbers.pop()

friend_fav_numbers = {10,20,30,40}

our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)

# ------ Exercise 6
# is it possible to add more integers to the tuple? No

# ------ Exercise 7
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove('Banana')
basket.remove('Blueberries')
basket.append('Kiwi')
basket.append('Apples')
apples = 0
for fruit in basket:
    if fruit is 'Apples':
        apples+=1
print('numbers of apples in the basket are: ', apples)
basket.clear()
print(basket)

# ------ Exercise 8
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

for product in sandwich_orders:
    if product is 'Pastrami sandwich':
        sandwich_orders.remove('Pastrami sandwich')
finished_sandwiches = []

for sandwich in range(len(sandwich_orders)):
    finished_sandwiches.append(sandwich_orders[0])
    sandwich_orders.remove(sandwich_orders[0])

for sandwich in finished_sandwiches: print('I made your ', sandwich)