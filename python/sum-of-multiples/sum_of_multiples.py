def sum_of_multiples(limit, multiples):
    serial = [i for i in range(limit)]
    # multiples_list = []
    # for multiple in multiples:
    #     for num in serial:
    #         if num % multiple == 0:
    #             multiples_list.append(num)
    multiples_list = [
        num 
        for multiple in multiples 
            for num in serial 
                if num % multiple == 0
    ]
    
    # print(multiples_list)

    return sum(multiples_list)

sum_of_multiples(4, [3, 5])
