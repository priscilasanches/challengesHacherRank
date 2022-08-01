/*x - position cat A
y - position cat B
z - position mouse (it don't move, unless the cats arrive together)*/

function catAndMouse(x, y, z) {
    if (Math.abs(z-x) < Math.abs(z-y)) return 'Cat A'
    if (Math.abs(z-x) > Math.abs(z-y)) return 'Cat B'
    else return 'Mouse C'
}

console.log(catAndMouse(3,0,2))