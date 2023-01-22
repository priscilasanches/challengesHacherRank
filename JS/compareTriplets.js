function compareTriplets(a, b) {
    let pointsA = 0;
    let pointsB = 0;
    for (let i=0; i< a.length; i++){
        if (a[i] > b[i]) pointsA++;
        if (b[i] > a[i]) pointsB++;
    }
    return [pointsA, pointsB];    
}

console.log(compareTriplets([1, 2, 3],  [3, 2, 1]))
