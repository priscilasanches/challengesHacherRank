'''
countingValleys has the following parameter(s):
    int steps: the number of steps on the hike
    string path: a string describing the path (D - down / U - up)
Returns
    int: the number of valleys traversed (valleys high < 0)
'''

def counting_valleys (steps, path):
    current_height = 0 #starting height
    number_valley = 0

    for step in path:
        previous_height = current_height
        
        if step == 'U' : current_height += 1
        else : current_height -= 1

        if previous_height >= 0 and current_height < 0 : number_valley += 1
    
    return number_valley

#example
print(counting_valleys(8, 'UDDDUDUU'))
