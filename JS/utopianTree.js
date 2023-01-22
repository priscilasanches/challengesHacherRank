function utopianTree(n) {
    let cycles = 0
    let height = 1
    
    while (cycles<n && n>0) {
        cycles%2===0 ? height=2*height : height++ 
        cycles++
    }

    return height
}

console.log(utopianTree(5))
