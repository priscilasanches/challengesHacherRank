function saveThePrisoner(n, m, s) {
    let candies = m

    let firstRound = n-s+1

    if (candies <= firstRound) return s-1+candies

    let lastCandies = (candies-firstRound)/n

    return (Number.isInteger(lastCandies)) ? n : (candies-firstRound)%n
}

console.log(saveThePrisoner(7,19,2))
console.log(saveThePrisoner(3,7,3))
console.log(saveThePrisoner(5,2,1))
console.log(saveThePrisoner(5,2,2))
