import re

def check_isbn(digits):
    s = 0
    t = 0

    for i in range(0, 10):
        if (digits[i] == 'X'):
            t += 10
        else:
            t += int(digits[i])
        s += t

    return s % 11

def verify(isbn):
    isbn = isbn.replace('-', '')
    
    if (not isbn[:9].isdigit() or len(isbn) != 10):
        return False

    if (re.match(r"X|\d", isbn[9]) == None):
        return False

    return check_isbn(isbn) == 0

