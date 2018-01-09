def string_concat(encoded_str, previous_char, count):
    if (count == 1):
        encoded_str = encoded_str + previous_char
        print(encoded_str)
    else:
        encoded_str = encoded_str + str(count) + previous_char
        print(encoded_str)

    return encoded_str

def decode(string):
    pass


def encode(string):
    count = 1
    previous_char = ''
    encoded_str = ''
    
    for char in string:
        # print(char)
        if (char == previous_char):
            # print('i made it')
            count += 1
            # print(count)
        else:
            encoded_str = string_concat(encoded_str, previous_char, count)
            count = 1
        
        previous_char = char
   
    encoded_str = string_concat(encoded_str, previous_char, count)
    print('string: ', encoded_str)

    return encoded_str

