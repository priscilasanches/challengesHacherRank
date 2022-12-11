'''
    The function accepts following parameters:
     1. INTEGER i - initial number
     2. INTEGER j - final number
     3. INTEGER k - divisor
    return quant. of numbers (within the range) whose difference between it and its reverse are divisible by k
''' 

def beautiful_days(i,j,k):
    beautiful_days = 0
    
    for number in range(i, j+1):
        
        reversed_number = int(str(number)[::-1]) #array[start:stop:step]
        rest_division = (number - reversed_number)%k
        
        if (rest_division == 0):
            beautiful_days += 1
    
    return beautiful_days

#exemplo
print(beautiful_days(13, 45, 1))
