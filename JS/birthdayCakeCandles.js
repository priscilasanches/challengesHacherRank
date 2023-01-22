function birthdayCakeCandles(candles) {
    const orderedCandles = candles.sort((a,b) => {return a-b});
    let idCandle = candles.length-1

    const tallest = orderedCandles[idCandle];
    let unitsTallest = 0;

    while (orderedCandles[idCandle] == tallest){
        unitsTallest++
        idCandle--
    }
    
    return unitsTallest;
}

console.log(birthdayCakeCandles([3,2,1,3]))
