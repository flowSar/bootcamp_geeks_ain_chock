#!/usr/bin/python3
import random

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