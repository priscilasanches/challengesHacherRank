/*
circularArrayRotation has the following parameter(s):
    int a[n]: the array to rotate
    int k: the rotation count
    int queries[1]: the indices to report
 Returns: int[q]: the values in the rotated a as requested in m
*/

function circularArrayRotation(a, k, queries) {
    const rotations = k%(a.length) //get only incomplete rotation

    if(rotations!==0) {
        for (let i=0; i<rotations; i++){
            a.unshift(a.pop())
        }
    }

    return queries.map((id) => a[id])
}

//example
console.log(circularArrayRotation([1,2,3, 4], 9, [0,1,2]))
