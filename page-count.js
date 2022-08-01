//n - number of pages; p - page to turn to
//retornar número mínimo de viradas, podendo começar da frente ou de trás

function pageCount(n, p) {
    //trabalhando apenas com páginas ímpares
    if (p%2===0) p++ 
    if (n%2===0) n++ 

    const pagesTurnedBegin = (p-1)/2 //cada virada - 2 páginas
    const pagesTurnedEnd = (n-p)/2
    let minTurns

    pagesTurnedBegin<pagesTurnedEnd ? minTurns=pagesTurnedBegin : minTurns=pagesTurnedEnd

    return minTurns
}

console.log(pageCount(11, 11))

