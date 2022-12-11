//NÃO RESOLVIDO
// * Complete the 'storyOfATree' function below.
// *
// * The function is expected to return a STRING.
// * The function accepts following parameters:
// *  1. INTEGER n - número de nós
// *  2. 2D_INTEGER_ARRAY edges
// *  3. INTEGER k - número mínimo de acertos
// *  4. 2D_INTEGER_ARRAY guesses
// */

function storyOfATree(n, edges, k, guesses) {
   let hits = 0

   guesses.forEach(guess => {
    for(let i=0; i<edges.length; i++){
        if (edges[i].toString() === guess.toString()) {
            hits++
            break
        }
    }
   })   

   return `${hits.toString()}/${n*k.toString()}`
}

console.log(storyOfATree(4, [ [ 1, 2 ], [ 1, 3 ], [ 3, 4 ] ], 2,  [ [ 1, 2 ], [ 3, 4 ] ]))
console.log(storyOfATree(3, [ [ 1, 2 ], [ 1, 3 ]] , 2, [ [ 1, 2 ], [ 1, 3 ] ]))