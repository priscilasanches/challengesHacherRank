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
