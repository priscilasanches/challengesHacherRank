'''
    bonAppetit has the following parameter(s):
        bill: an array of integers representing the cost of each item ordered
        k: an integer representing the zero-based index of the item Anna doesn't eat
        b: the amount of money that Anna contributed to the bill
    If Brian did not overcharge Anna, print Bon Appetit on a new line; otherwise, print the difference that Brian must refund to Anna. This will always be an integer.
'''
import functools

def bon_appetit(bill, k, b):
    value_total = functools.reduce(lambda acc, cost_item: acc + cost_item, bill)
    value_anna = (value_total - bill[k])/2
    
    print('Bon Appetit' if value_anna >= b else int(b - value_anna))

#example
bon_appetit([3, 10, 2, 9], 1, 12)
