# ------ Exercise 1
keys = ['Ten', 'Twenty', 'Thirty', 'fourthy']
values = [10, 20, 30]

print(dict(zip(keys, values)))

# ------ Exercise 2

family = {}

while True:
    name = input('insert your family memeber name or "q" to "quit": ')
    if name == 'q':
        break
    age = int(input('insert your family memeber age: '))
    family[name] = age

totalCost = 0
for age in family.values():
    if age < 3:
        totalCost += 0
    elif age > 3 and age <= 12:
        totalCost += 10
    elif age > 12:
        totalCost += 15

print(f"family’s total cost for the movies: {totalCost}")

# ------ Exercise 3

brand = {
    'name': 'Zara',
    'creation_date': 1975,
    'creator_name': 'Amancio Ortega Gaona ',
    'type_of_clothes': ['men', 'women', 'children', 'home'],
    'international_competitors': ['Gap', 'H&M', 'Benetton'],
    'number_stores': 7000,
    'major_color': {
        'France': 'blue',
        'Spain': 'red',
        'US': ['pink', 'green']
    }}
# update number of stores 
brand['number_stores'] = 2
print('Zaras clients are:',", ".join(brand['type_of_clothes']))
brand['country_creation'] = 'Spain'
if brand.get('international_competitors') is not None:
    brand['international_competitors'].append('Desigual')

# delete creation_date
del brand['creation_date']
# ast international competitor.
print('last international competitor.: ',brand['international_competitors'][-1])
# major cloth clors in US
print('major clothes colors in the US: ',brand['major_color']['US'])
# dictionay length
print('dictionay length: ', len(brand))
# dicionary eys
print(brand.keys())
# another dictionay named more_on_zara
more_on_zara = {
    'creation_date': 1975,
    'number_stores': 10000
}
# update brand dictionay
brand.update(more_on_zara)
# print number_stores
# What just happened , we got the value 10000
print(brand['number_stores'])

# ------ Exercise 4

def describe_city(city, country='India'):
    print(f'{city} is in {country}')

describe_city(city='Delhi')

# ------ Exercise 5
import random
def numberVerification(num):
    if num >= 1 and num <= 100:
        generatedNum = random.randint(1, 100)
        if generatedNum == num:
            print('success')
        else:
            print(f'failed {num} != {generatedNum}')
    else:
        print('Failed, Number out of range 1->100')


# ------ Exercise 6

def make_shirt(size='L', text='I love Python'):
    print(f"The size of the shirt is {size} and the text is '{text}'")

make_shirt()
# make M shirt
make_shirt(size='M')
# shirt of any size
make_shirt(size='S', text='Life sucks')


# ------ Exercise 7

def get_random_temp(month):
    month = int(month)
    if month in [12, 1, 2]:
        low, high = -10, 16
    elif month in [3, 4, 5]:
        low, high = 10, 23
    elif month in [9, 10, 11]:
        low, high = 16, 23
    elif month in [6, 7, 8]:
        low, high = 24, 40
    else:
        print(f"Unknown season {month}")
        low, high = -10, 40
    return random.randint(low, high)

def main():
    month = input('type the number of the month (1 = January, 12 = December): ')
    temparature = get_random_temp(month)
    if temparature < 0:
        print('Brrr, that’s freezing! Wear some extra layers today')
    elif temparature >=0 and temparature < 16:
        print('Quite chilly! Don’t forget your coat')
    elif temparature >= 16 and temparature < 23:
        print('Mild and pleasant! A light jacket or sweater should be enough.')
    elif temparature >= 23 and temparature < 32:
        print('Warm and sunny! Perfect weather for short sleeves and sunglasses.')
    elif temparature >= 32 and temparature < 40:
        print("It’s really hot! Stay hydrated and try to stay in the shade when you can.")
    print(f'The temperature right now is {temparature} degrees Celsius')

main()

# ------ Exercise 8

data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]



def playQuestionsGame():
    numberOfCorrect = 0
    numberOfInCorrect = 0
    userAnswersResult = []
    for d in data:
        question = d['question']
        answer = d['answer']
        userAnswer = input(f'question: {question}: ')
        result = {}
        if userAnswer.lower() == answer.lower():
            numberOfCorrect +=1
        else:
            numberOfInCorrect +=1
            result['result'] = False
            result['incorrectAnswer'] = userAnswer
            result['correctAnswer'] = answer
            userAnswersResult.append(result)

    def printTheUserResult():
        print('wrong questions')
        for qResult in userAnswersResult:
            if qResult['result'] == False:
                print(f'your answer: {qResult['incorrectAnswer']} - correct answer:{qResult['correctAnswer']}')
        print(f'Number of correct answers: {numberOfCorrect} Number of incorrect answers {numberOfInCorrect}')

    printTheUserResult()

    if numberOfInCorrect >= 0:
        print('Game Over, you have at least 3 wrong answers.')
        userInput = input('do you wanna play again y/n: ')
        if userInput == 'y':
            playQuestionsGame()

playQuestionsGame()


