//soma de qq linha, coluna ou diagonal são iguais. Em uma matriz 3x3 essa soma é igual a 15
//custo da transformação |a-b|
//transformar um array em magic square com mínimo custo (não pode ter números repetidos)
//s - array de arrays

function formingMagicSquare(s) {
    const sum = 15
    let rowSum = []
    let columnSum = []
    let diagonalSum = [s[0][0]+s[1][1]+s[2][2], s[0][2]+s[1][1]+s[2][0]] 
    for (let i=0; i<3; i++){
        rowSum.push(s[i].reduce((a, b) => a+b))
        columnSum.push(s[0][i]+s[1][i]+s[2][i])   
    } 
    
    if (rowSum[0]===sum && rowSum[1]===sum && rowSum[2]===sum &&
        columnSum[0]===sum && columnSum[1]===sum && columnSum[2]===sum &&
        diagonalSum[0]===sum && diagonalSum[1]===sum) {
            return s
        }
     
    let j=14
    const biggestDiffFound = []
    while (j > 0 && biggestDiffFound.length===0){
        let number = sum-j
        let locatedRow = rowSum.findIndex((element) => element===number)
        let locateColumn = columnSum.findIndex((element) => element===number)
        let locateDiagonal = diagonalSum.findIndex((element) => element===number)
        j--
        if (locatedRow>=0 || locateColumn>=0 || locateDiagonal>=0){
            biggestDiffFound.push(locatedRow, locateColumn, locateDiagonal, number)
            break
        }
    }
    console.log(biggestDiffFound)
    //criar lógica para incluir diagonais e verificar se índices são maior ou igual a 0
    s[biggestDiffFound[0]][biggestDiffFound[1]] += sum-biggestDiffFound[3] 
    formingMagicSquare(s)  
    return s 
}

//console.log(formingMagicSquare([[5, 3, 4], [1, 5, 8], [6, 4, 2]]))
console.log(formingMagicSquare([[4, 9, 2], [3, 5, 7], [8, 1, 5]]))
//console.log(formingMagicSquare([[4, 8, 2],[4, 5, 7], [6, 1, 6]]))
