def diagonal_difference(arr):
        
    sum_diagonal1 = sum([arr[id][id] for id in range(0, len(arr))])
    sum_diagonal2 = sum([arr[id][(len(arr)-1) - id] for id in range(0, len(arr))])

    return abs(sum_diagonal1-sum_diagonal2)

#example
arr = [[11, 2, 4], [4, 5, 6], [10, 8, -12]]

print(diagonal_difference(arr))
