function kangaroo(x1, v1, x2, v2) {

    let samePosition = 'NO'

    let jumpsToSamePosition = (x2-x1)/(v1-v2)

    if (Number.isInteger(jumpsToSamePosition) && jumpsToSamePosition>0)      samePosition='YES'
   
    return samePosition
}

const posicaoInicialKangoo1 = 0
const metrosPuloKangoo1 = 2
const posicaoInicialKangoo2 = 5
const metrosPuloKangoo2 = 3

console.log(kangaroo(posicaoInicialKangoo1, metrosPuloKangoo1, posicaoInicialKangoo2, metrosPuloKangoo2))
