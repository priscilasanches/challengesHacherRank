//D - 1 passo pra baixo
//U - um passo pra cima
//path - string com D e U
//valleys - abaixo de 0

function countingValleys(steps, path) {
    let high = 0
    let valley = 0

    for(let i=0; i<steps; i++){
        let status = high

        if (path[i]==='D') high--
        if (path[i]==='U') high++

        if (high<0 && status>=0) valley++ //ficou abaixo de zero saindo de zero ou mais
    }

    return valley
}

console.log(countingValleys(8, 'UDDDUDUU'))
