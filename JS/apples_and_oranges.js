/*
    CountApplesAndOranges has the following parameter(s):
    s: integer, starting point of Sam's house location.
    t: integer, ending location of Sam's house location.
    a: integer, location of the Apple tree.
    b: integer, location of the Orange tree.
    apples: integer array, distances at which each apple falls from the tree.
    oranges: integer array, distances at which each orange falls from the tree. 
    Print two integers on two different lines:
    The first integer: the number of apples that fall on Sam's house.
    The second integer: the number of oranges that fall on Sam's house.
*/

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    const fallenApplesPosition = apples.map((d) => a + d)
    const fallenOrangesPosition = oranges.map((d) => b + d)

    let applesOnHouse = 0
    let orangesOnHouse = 0
    
    fallenApplesPosition.forEach(applePosition => {
        if (applePosition>=s && applePosition<=t) applesOnHouse++ 
    })

    fallenOrangesPosition.forEach(orangePosition => {
        if (orangePosition>=s && orangePosition<=t) orangesOnHouse++ 
    })

    console.log(applesOnHouse)
    console.log(orangesOnHouse)
}


const startHouse = 2
const endHouse = 3
const posTreeAplle = 1
const posTreeOrange = 5
const arrayDistAplles = [2]
const arrayDistOranges = [-2]

countApplesAndOranges(startHouse, endHouse, posTreeAplle, posTreeOrange, arrayDistAplles, arrayDistOranges)