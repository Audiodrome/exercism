import re

def word_count(phrase):
    occurrences = {}
    phrase = re.split("[^a-zA-Z\d']+", phrase.lower())
    phrase = list(filter(None, phrase))

    for i in range(len(phrase)):
        phrase[i] = phrase[i].strip("'")

    for word in phrase:
        if (word not in occurrences):
            occurrences[word] = 1
        else:
            occurrences[word] += 1
    
    print(occurrences)
    return occurrences

word_count("Joe can't tell between 'large' and large.")
