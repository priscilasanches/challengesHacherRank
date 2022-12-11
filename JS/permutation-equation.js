function permutationEquation(p) {
    const arrY = []

    for (let x=1; x<=p.length; x++){
        let py = p.indexOf(x) + 1
        let y = p.indexOf(py) + 1
        arrY.push(y)
    }

    return arrY
}

console.log(permutationEquation([2,3,1]))