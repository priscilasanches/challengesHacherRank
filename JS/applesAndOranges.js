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
