def flatten(iterable):
    flatten = []
    flattenHelper(iterable, flatten)
    print('what is flatten?: ', flatten)
    return flatten

def flattenHelper(iterable, flatten):
    
    for value in iterable:
        if type(value) is list:
            flattenHelper(value, flatten)
        else:
            if type(value) is not tuple and value is not None:
                flatten.append(value)

# def flatten(iterable):
#     flatten = [item for sublist in iterable for item in sublist]
    # print(flatten)