def is_armstrong(number):
    number = str(number)
    num_len = len(number)
    armstrong = 0

    for num in number:
        armstrong += int(num)**num_len

    return True if int(number) == armstrong else False

