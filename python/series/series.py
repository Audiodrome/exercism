def slices(series, length):
    if length > len(series) or length == 0:
        raise ValueError("length", length, "greater than length of series")

    series_list = []

    for i in range(0, len(series)):
        if i + length <= len(series):
            tuple = [int(i) for i in list(series[i:i+length])]
            series_list.append(tuple)

    return series_list
