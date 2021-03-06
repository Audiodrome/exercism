import string

PLAIN = "abcdefghijklmnopqrstuvwxyz"
CIPHER = "zyxwvutsrqponmlkjihgfedcba"

def encode(plain_text):
    result = ""

    cipher = str.maketrans(PLAIN, CIPHER)
    remove_punctuation = str.maketrans("", "", string.punctuation)
    remove_whitespace = str.maketrans("", "", string.whitespace)

    plain_text = plain_text.translate(remove_punctuation)
    plain_text = plain_text.translate(remove_whitespace)
    plain_text = plain_text.lower()

    plain_text = plain_text.translate(cipher)

    return ' '.join(plain_text[i:i+5] for i in range(0,len(plain_text),5))

def decode(ciphered_text):
    result = ""

    plain = str.maketrans(CIPHER, PLAIN)
    remove_whitespace = str.maketrans("", "", string.whitespace)
    ciphered_text = ciphered_text.translate(remove_whitespace)

    return ciphered_text.translate(plain)
