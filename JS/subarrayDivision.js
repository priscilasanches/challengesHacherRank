function birthday(s, d, m) {
    let possibleWays = 0

    Array.isArray(s) ? s=s : s=[s]
    
    s.forEach((_, id) => {
        let sum = 0
        for (let i=0; i<m; i++) {
            sum+= s[id + i]
        }
        if (sum==d)  possibleWays++ 
    })

    return possibleWays
}

console.log(birthday(4, 4, 1))
