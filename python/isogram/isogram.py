def is_isogram(string):
    string = string.replace("-", "")
    string = string.replace(" ", "")
    string = string.lower()
    dict = {}
    for letter in string:
        if (dict.get(letter) == None):
            dict[letter] = 1
        else:
            dict[letter] += 1
        if (dict.get(letter) > 1):
            return False

    return True
