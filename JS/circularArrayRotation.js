function circularArrayRotation(a, k, queries) {
    const rotations = k%(a.length) //get only incomplete rotation

    if(rotations!==0) {
        for (let i=0; i<rotations; i++){
            a.unshift(a.pop())
        }
    }

    return queries.map((id) => a[id])
}

console.log(circularArrayRotation([1,2,3, 4], 9, [0,1,2]))
