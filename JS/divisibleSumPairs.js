/* Complete the 'divisibleSumPairs' function below.
* The function is expected to return an INTEGER. -> número de pares
* The function accepts following parameters:
*  1. INTEGER n - tamanho do array
*  2. INTEGER k - divisor
*  3. INTEGER_ARRAY ar
*/

function divisibleSumPairs(n, k, ar) {

    let pairs = 0

    ar.forEach((element, i) => {
        for (let j= i+1; j<n; j++){
            const sum = element + ar[j]
            if (sum%k===0) pairs++
        }
    })

    return pairs
}

console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]))