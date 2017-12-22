def is_isogram(string):
    string = string.replace("-", "")
    string = string.replace(" ", "")
    print(string)
    dict = {}
    for letter in string:
        if (dict["letter"] == 1):
            return False
        if letter in dict:
            dict[letter] += 1
        else:
            dict[letter] = 1

    return True

is_isogram("a string with-hyphen-and space")
