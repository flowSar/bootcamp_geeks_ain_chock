import random
# ------ Exercise 1

month = int(input('insert a month (1 to 12): '))

if month in range(3, 6):
    print('Spring')
elif month in range(6, 9):
    print('Summer')
elif month in range(9, 12):
    print('Autumn')
elif month == 12 or range(1, 3):
    print('Winter')


# ------ Exercise 2

for num in range(1, 21):
    index = num - 1
    if index % 2 == 0:
        print(num)

# ------ Exercise 3

myname = 'brahim'
while(True):
    userName = input('Enter name: ')
    if userName == myname:
        break

# ------ Exercise 4

names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']

userName = input('Enter name: ')
nameFoundAt = []
for i in range(len(names)):
    if userName == names[i]:
        nameFoundAt.append(i)

print(nameFoundAt[0])

# ------ Exercise 5

ordinalNumbers = ['1st', '2nd', '3rd']
initialValue = 0
for i in range(3):
    userInput = int(input(f'Input the {ordinalNumbers[i]} number: '))
    if initialValue < userInput:
        initialValue = userInput
print('The greatest number is: ', initialValue)


# ------ Exercise 6

insertedNumber = input('insert a number from 1 to 9: ')
randomNumber = random.randint(1, 9)
if randomNumber == int(insertedNumber):
    print('Winner')
else:
    print('Better luck next time.')

# ------ Exercise 7

while (True):
    userInput = input('insert a number from 1 to 9 or q to quit: ')
    if userInput == 'q':
        break
    randomNumber = random.randint(1, 9)
    if randomNumber == int(userInput):
        print('Winner')
    else:
        print('Better luck next time.')

# ------ Exercise 8

gamesWon = 0
gameslLost = 0
while (True):
    userInput = input('insert a number from 1 to 9 or q to quit: ')
    if userInput == 'q':
        break
    randomNumber = random.randint(1, 9)
    if randomNumber == int(userInput):
        gamesWon += 1
        print('Winner')
    else:
        gameslLost += 1
        print('Better luck next time.')

print(f'game end, you won {gamesWon} games and lost {gameslLost} games')
