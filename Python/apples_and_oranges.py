'''
    CountApplesAndOranges has the following parameter(s):
    s: integer, starting point of Sam's house location.
    t: integer, ending location of Sam's house location.
    a: integer, location of the Apple tree.
    b: integer, location of the Orange tree.
    apples: integer array, distances at which each apple falls from the tree. (+: right / -: left)
    oranges: integer array, distances at which each orange falls from the tree. 
    Print two integers on two different lines:
    The first integer: the number of apples that fall on Sam's house.
    The second integer: the number of oranges that fall on Sam's house.
'''
def count_apples_and_oranges(s, t, a, b, apples, oranges):
    
    fallen_apple = [a + d for d in apples if (a+d)>=s and (a+d)<=t]
    fallen_orange = [b + d for d in oranges if (b+d)>=s and (b+d)<=t]

    print(len(fallen_apple))
    print(len(fallen_orange))

#example
startHouse = 2
endHouse = 3
posTreeAplle = 1
posTreeOrange = 5
arrayDistAplles = [2,1,-1]
arrayDistOranges = [-2,2,0]
count_apples_and_oranges(startHouse, endHouse, posTreeAplle, posTreeOrange, arrayDistAplles, arrayDistOranges)
