def is_pangram(sentence):
    sentence = sentence.replace(" ", "")
    sentence = sentence.lower()
    print(sentence)
    
    dict = {}

    for char in sentence:
        if (ord(char) > 96 and ord(char) < 123):
            dict[char] = 1

    if (len(dict) == 26):
        return True

    return False

