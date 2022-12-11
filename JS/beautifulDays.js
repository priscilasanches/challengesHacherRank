/* 
    The function accepts following parameters:
     1. INTEGER i - initial number
     2. INTEGER j - final number
     3. INTEGER k - divisor
    return quant. of numbers (within the range) whose difference between it and its reverse are divisible by k
*/
function beautifulDays(i, j, k) {
    
    const arrDays = []
    
    for (let range=i; range<=j; range++) {
        arrDays.push(range)
    }

    let beautifulDay = 0

    arrDays.forEach(day => {
        const arrDay = day.toString().split('')
        const dayReverse = arrDay.reverse().join('')

        const opDays = (day-dayReverse)/k        
        if (Number.isInteger(opDays)) beautifulDay++
    })

    return beautifulDay
}

console.log(beautifulDays(20, 23, 6))
