//s - array com valores de cada quadrado 
//d - The sum of the integers on the squares is equal to his birth day
//m - The length of the segment matches Ron's birth month (número de segmentos que podem ser somados em s para alcançar d)

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