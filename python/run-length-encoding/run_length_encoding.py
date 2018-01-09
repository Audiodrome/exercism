def string_concat(encoded_str, previous_char, count):
    if (count == 1):
        encoded_str += previous_char
    else:
        encoded_str += str(count) + previous_char

    return encoded_str

def concat_n_chars(char, number):
    if (number == ''):
        return char

    str = ''
    number = int(number)
    
    for i in range(number):
        str += char
    
    return str

def decode(string):
    decoded_str = ''
    number_str = ''

    for char in string:
        if (char.isdigit()):
            number_str += char
        else:
            decoded_str += concat_n_chars(char, number_str)
            number_str = '' # reset character count
    
    return decoded_str

def encode(string):
    count = 1
    previous_char = ''
    encoded_str = ''

    for char in string:
        if (char == previous_char):
            count += 1
        else:
            encoded_str = string_concat(encoded_str, previous_char, count)
            count = 1 # reset character count
        
        previous_char = char
    
    # concats the last char 
    encoded_str = string_concat(encoded_str, previous_char, count)

    return encoded_str

