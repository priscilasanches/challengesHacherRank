function getMoneySpent(keyboards, drives, b) {

    let mostExpensive = 0
    let cost = 0
    keyboards.forEach(pKeyboard => {
        drives.forEach(pDrive => {            
            cost = pKeyboard + pDrive
            if (cost>mostExpensive && cost<=b) mostExpensive=cost
        })
    });

    if (mostExpensive===0) return -1

    return mostExpensive
}

console.log(getMoneySpent(4, 1, 5))
