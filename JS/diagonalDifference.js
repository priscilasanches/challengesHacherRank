
function diagonalDifference(arr) {
    let diagonal1 = 0;//arr[0][0] + arr[1][1] + arr[2][2];
    let diagonal2 = 0;//arr[0][2] + arr[1][1] + arr [2][0];

    for (let i=0; i<arr.length; i++){
        diagonal1 += arr[i][i]
        diagonal2 += arr[i][arr.length - i -1]
    }
    
    return Math.abs(diagonal1 - diagonal2);
}

const arr = [[1, 2, 3],
             [4, 5, 6],
             [9, 8, 9]];

console.log(diagonalDifference(arr))

