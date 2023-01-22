function jumpingOnClouds(c, k) {
    let energy = 100
    let cloud = 0

    do {
        c[cloud]===1 ? energy-=3 : energy--
        if (cloud+k<c.length) cloud+=k        
        else cloud = (cloud+k)-c.length
    } while (cloud !== 0)

    return energy
}

console.log(jumpingOnClouds([1, 1, 1, 0, 1, 1, 0, 0, 0, 0], 3))
