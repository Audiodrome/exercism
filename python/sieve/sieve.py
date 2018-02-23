import math

def sieve(limit):
    if limit < 2:
        return []

    if limit < 3:
        return [2]
    
    prime_list = [True] * (limit + 1)

    n = math.floor(math.sqrt(limit))

    for i in range(2, n + 1):
        if prime_list[i] == True:
            j = 0
            k = 0
            while j <= limit:
                prime_list[j] = False
                j = (i ** 2) + (k * i)
                k += 1
                
    prime_list = [i for i, x in enumerate(prime_list) if x ]

    return prime_list[1:len(prime_list)]
