/*catAndMouse has the following parameter(s):
    int x: Cat A's position
    int y: Cat B's position
    int z: Mouse C's position
Your task is to determine which cat will reach the mouse first, assuming the mouse does not move and the cats travel at equal speed. If the cats arrive at the same time, the mouse will be allowed to move and it will escape while they fight
Returns string: Either 'Cat A', 'Cat B', or 'Mouse C'*/

function catAndMouse(x, y, z) {
    if (Math.abs(z-x) < Math.abs(z-y)) return 'Cat A'
    if (Math.abs(z-x) > Math.abs(z-y)) return 'Cat B'
    else return 'Mouse C'
}

//example
console.log(catAndMouse(3,0,2))