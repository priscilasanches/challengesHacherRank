def divisible_sum_pairs(n, k, ar):

    list_pairs = []

    for id in range(0, n):
        list_pairs.extend([ar[id]+ar[id2] for id2 in range(id+1, n) if (ar[id]+ar[id2])%k == 0])
                     
    return len(list_pairs)

#example
print(divisible_sum_pairs(6, 3, [1, 3, 2, 6, 1, 2]))
