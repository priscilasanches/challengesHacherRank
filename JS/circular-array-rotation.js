/*
 * Complete the 'circularArrayRotation' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER k - quantidade de voltas
 *  3. INTEGER_ARRAY queries - quais elementos devem retornar 
 */

function circularArrayRotation(a, k, queries) {
    const rotations = k%a.length

    if(rotations!==0) {
        for (let i=0; i<rotations; i++){
            a.unshift(a.pop())
        }
    }

    return queries.map((id) => a[id])
}

console.log(circularArrayRotation([1,2,3], 9, [0,1,2]))