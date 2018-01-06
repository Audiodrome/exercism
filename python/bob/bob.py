from string import whitespace
import re

def hey(phrase):
    phrase = phrase.translate(dict.fromkeys(map(ord, whitespace)))

    if (phrase == ''):
        return 'Fine. Be that way!'
    
    if (phrase.upper() == phrase and re.search('[a-zA-z]', phrase) != None):
        return 'Whoa, chill out!'
    
    if (phrase[len(phrase) - 1] == '?'):
        return 'Sure.'
    
    return 'Whatever.'

