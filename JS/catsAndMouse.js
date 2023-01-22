function catAndMouse(x, y, z) {
    if (Math.abs(z-x) < Math.abs(z-y)) return 'Cat A'
    if (Math.abs(z-x) > Math.abs(z-y)) return 'Cat B'
    else return 'Mouse C'
}

console.log(catAndMouse(3,0,2))
