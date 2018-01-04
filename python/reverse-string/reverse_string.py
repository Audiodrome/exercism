def reverse(input=''):
    if (len(input) == 0):
        return ''

    reverse_str = ''
    index = len(input) - 1

    while index >= 0:
        reverse_str += input[index]
        index -= 1 
    
    return reverse_str
    
    # the one line solution, freaking magic.
    # return input[::-1]
