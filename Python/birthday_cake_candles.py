'''
    birthdayCakeCandles has the following parameter(s):
        int candles[n]: the candle heights
    return int: the number of candles that are tallest
'''
def birthday_cake_candles(candles):
    candles.sort()
    tallest_candle = candles[len(candles)-1]
    return candles.count(tallest_candle)

#example
print(birthday_cake_candles([3,2,1,3]))