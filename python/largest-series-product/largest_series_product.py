from functools import reduce

def largest_product(series, size):
    if size == 0:
        return 1

    if size < 0:
        raise ValueError("Size is less than 0")

    product_list = slices(series, size);
    result = [reduce(multiply, sublist) for sublist in product_list]

    return max(result)

def multiply (x, y):
    return x * y

def slices(series, length):
    if length > len(series) or length == 0:
        raise ValueError("length", length, "greater than length of series")

    series_list = []

    for i in range(0, len(series)):
        if i + length <= len(series):
            tuple = [int(i) for i in list(series[i:i+length])]
            series_list.append(tuple)

    return series_list
