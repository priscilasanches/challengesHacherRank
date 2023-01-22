function migratoryBirds(arr) {

    //id de 0 a 4 representa quantidade de pássaros do tipo 1 a 5
    const numberBirdsArr = []
    
    //contando número de pássaros
    for (let i=1; i<=5; i++){
        arr.includes(i) ? numberBirdsArr[i-1] = 1 : numberBirdsArr[i-1] = 0
    }  
    const orderedArr = [...arr].sort((a, b) => a-b)
    orderedArr.forEach((bird, id) => {
        if (bird === orderedArr[id+1]) {
            numberBirdsArr[bird-1]++ 
        }
    })
    
    //encontrar o pássaro que aparece mais vezes
    const orderedNumberBirdsArr = [...numberBirdsArr].sort((a, b) => a-b)
    const moreTimes = orderedNumberBirdsArr[4] //último elemento do array com a quant.
    if (moreTimes !== orderedNumberBirdsArr[3]){
        return numberBirdsArr.indexOf(moreTimes)+1 
    }
    
    //caso haja 2 ou mais pássaros com número igual de vezes que aparece, identificar quais
    const equalTimesBirds = []
    numberBirdsArr.forEach((times, idBird) => {      
        if (times===moreTimes) {
            equalTimesBirds.push(idBird+1)
        }
    })
        
    //retorna o menor id do pássaro que aparece número igual de vezes
    return equalTimesBirds[0]
}

const string = "5 2 2 2 4 1 1 2 4 2 2 2 4 1 2 4 1 2 4 4 3 2 3 1 3 3 4  4 5 1 4 4 2 2 4 3 3 5 2 4 4 3 2 4 3 2 5 4 4 4 5 5 4 5 3 2 3 2 5 5 3 3 2 1 5 5 2 5 5 5 2 2 2 3 3 4 4 5 4 2 5 5 4 1 3 2 2 5 4 2 4 2 2 4 5 4 3 1 1 2 5 2 4 1 3 4 2 5 2 3 3 5 3 2 3 2 4 4 3 1"
const arr = string.replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10))

console.log(migratoryBirds(arr))
