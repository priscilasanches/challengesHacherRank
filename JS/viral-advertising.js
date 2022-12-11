//When they launch a new product, they advertise it to exactly 5 people on social media [...] half (floor) of those people like the advertisement and each shares it with 3 of their friends..and so on
//n - numbers of days / return - cumulative likes

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