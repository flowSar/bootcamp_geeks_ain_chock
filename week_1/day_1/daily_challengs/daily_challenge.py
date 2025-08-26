# ------ Challenge 1

# number = int(input('Enter your number: '))
# length = int(input('Enter the length of your List: '))

# listOfNumber = []

# for i in range(1, length + 1):
#     listOfNumber.append(number * i)

# print(f"number: {number} - length {length} ➞ {listOfNumber}")


# ------ Challenge 2

word = input('Enter your word: ')
newWord = ''
length = len(word)
i = 0
j = i + 1

while i < length and j < length :
    while j < length:
        if word[i] != word[j]:
            newWord += word[i]
            i = j
            j = i + 1
            if j >= length:
                newWord += word[-1]
            break
        else:
            if word[i] == word[j] and j + 1 >= length:
                newWord += word[-1]
            j += 1
            



print(f'user\'s word : "{word}" ➞ "{newWord}"')


