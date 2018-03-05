def sum_of_multiples(limit, multiples):
    serial = [i for i in range(limit)]

    # multiples_list is a set, no duplicates allowed
    # set comprehension
    multiples_list = {
        num 
        for multiple in multiples 
            for num in serial 
                if num % multiple == 0
    }

    return sum(multiples_list)
