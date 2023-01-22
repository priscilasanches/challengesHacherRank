function viralAdvertising(n) {

    const likesAndShared = (group) => {
        const halfGroup = Math.floor(group/2)
        newGroup = halfGroup*3
        cumulativeLikes += halfGroup
    }
    
    let cumulativeLikes = 0  
    let newGroup = 5  

    for (let i=1; i<=n; i++) {
        likesAndShared(newGroup)
    }

    return cumulativeLikes
}

console.log(viralAdvertising(3))
