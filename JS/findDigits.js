function findDigits(n) {
    let stringNumber = n.toString()
    let divisibles = 0
    for (let i=0; i<stringNumber.length; i++) {
        if (parseInt(n)%parseInt(stringNumber[i]) === 0) divisibles++
    }
    return divisibles
}


console.log(findDigits(111))
