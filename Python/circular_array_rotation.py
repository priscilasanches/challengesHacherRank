'''
circularArrayRotation has the following parameter(s):
    int a[n]: the array to rotate
    int k: the rotation count
    int queries[1]: the indices to report
 Returns: int[q]: the values in the rotated a as requested in m
'''
def circular_array_rotation(a, k, queries):
    #get only incomplete rotation
    rotations = k%len(a) 

    #put last item at the beginning ("rotations" times)
    [a.insert(0, a.pop()) for _ in range (rotations)]
        
    return [a[id] for id in queries ]

#example
print(circular_array_rotation([1,2,3], 9, [0,1,2]))
