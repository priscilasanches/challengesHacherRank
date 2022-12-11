function pickingNumbers(a) {
    const arr = a.map(element => parseInt(element))    
    arr.sort((a,b) => {return a-b} )
    
    let max = 0

    for (let i=0; i<arr.length-1; i++){
        let count = 0
        count = arr.filter((number) => number===arr[i]).length
        count += arr.filter((number) => number===(arr[i]+1)).length
        
        if (max<count) max = count
    }
    return max
}

const entrada = '1 3 3 3 4 4 4 5'

const entrada1 = '4 2 3 4 4 9 98 98 3 3 3 4 2 98 1 98 98 1 1 4 98 2 98 3 9 9 3 1 4 1 98 9 9 2 9 4 2 2 9 98 4 98 1 3 4 9 1 98 98 4 2 3 98 98 1 99 9 98 98 3 98 98 4 98 2 98 4 2 1 1 9 2 4' //saida22 - runtime error

const entrada2 = '7 12 13 19 17 7 3 18 9 18 13 12 3 13 7 9 18 9 18 9 13 18 13 13 18 18 17 17 13 3 12 13 19 17 19 12 18 13 7 3 3 12 7 13 7 3 17 9 13 13 13 12 18 18 9 7 19 17 13 18 19 9 18 18 18 19 17 7 12 3 13 19 12 3 9 17 13 19 12 18 13 18 18 18 17 13 3 18 19 7 12 9 18 3 13 13 9 7' //saida 30 - runtime error

const entrada3 = '4 97 5 97 97 4 97 4 97 97 97 97 4 4 5 5 97 5 97 99 4 97 5 97 97 97 5 5 97 4 5 97 97 5 97 4 97 5 4 4 97 5 5 5 4 97 97 4 97 5 4 4 97 97 97 5 5 97 4 97 97 5 4 97 97 4 97 97 97 5 4 4 97 4 4 97 5 97 97 97 97 4 97 5 97 5 4 97 4 5 97 97 5 97 5 97 5 97 97 97' //saida 50 - runtime error


const array = entrada2.split(" ")

console.log(pickingNumbers(array))