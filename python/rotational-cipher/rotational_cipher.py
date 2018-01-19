from collections import deque
def rotate(text, key):
    temp = text
    rotated_str = ''
    
    cipher = deque([
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ])

    cipher.rotate(-key)
    cipher = ''.join(cipher)
    trans = str.maketrans("abcdefghijklmnopqrstuvwxyz", cipher)

    text = text.lower().translate(trans)

    # Maintain correct capitalization
    for i in range(len(text)):
        if (temp[i].isupper()):
            rotated_str += text[i].upper()
        else:
            rotated_str += text[i]
    
    return rotated_str

