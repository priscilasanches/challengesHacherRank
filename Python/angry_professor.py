'''
    The function accepts following parameters:
    1. INTEGER k - minimun number of punctual students
    2. INTEGER_ARRAY a - minutes early or late
    It must return YES if it is canceled because doesn't have the minimum number of on time students or NO if it isn't canceled.
'''
def angry_professor(k,a):
  
	ontime = [minutes for minutes in a if minutes <= 0 ]

	if len(ontime) >= k:
		return 'NO'

	return 'YES'

#example
print(angry_professor(5, [0,-1,-1,-5,0,5,9,2,-3]))
