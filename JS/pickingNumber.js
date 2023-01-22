const result = []

const diffLess1 = (a) => {   
    a.sort((a,b) => {return a-b})
    const numbersDiffLess1 = [a[0]]
    
    const lastResult = result[result.length-1] || -1
   
    if (lastResult!==-1 && a[0]===lastResult[0] && a[lastResult.length-1]===lastResult[lastResult.length-1]) {
      a = a.filter((number) => {
        lastResult.forEach((element) => {
            number !== element
        })
      })
    }

    for (let i=0; i<(a.length-1); i++) {
        if (a[i+1]-a[i]<=1 && a[i+1]-a[0]<=1){
            numbersDiffLess1.push(a[i+1])
        }
    }
    return numbersDiffLess1  
}

function pickingNumbers(a) {
    const partialResult = diffLess1(a)
    const lastElement = a.lastIndexOf(partialResult[partialResult.length-1])
    let subArr
    let maxLength = 0

    result.push(partialResult) 

    if (lastElement<a.length-1) {

        if(partialResult.length===1){
            subArr = a.splice(0, 1)       
        }

        if((a.length)>=1){
            let firsTimeNumber = a.indexOf(a[lastElement])
            subArr = a.slice(firsTimeNumber)
        } 
    
        pickingNumbers(subArr) 
    }    

    result.forEach((arr) => {
        if(arr.length>maxLength) maxLength=arr.length
    })

    return maxLength 
}

const entrada = '1 6 5 3 3'

const entrada1 = '4 2 3 4 4 9 98 98 3 3 3 4 2 98 1 98 98 1 1 4 98 2 98 3 9 9 3 1 4 1 98 9 9 2 9 4 2 2 9 98 4 98 1 3 4 9 1 98 98 4 2 3 98 98 1 99 9 98 98 3 98 98 4 98 2 98 4 2 1 1 9 2 4' //saida22 - runtime error

const entrada2 = '7 12 13 19 17 7 3 18 9 18 13 12 3 13 7 9 18 9 18 9 13 18 13 13 18 18 17 17 13 3 12 13 19 17 19 12 18 13 7 3 3 12 7 13 7 3 17 9 13 13 13 12 18 18 9 7 19 17 13 18 19 9 18 18 18 19 17 7 12 3 13 19 12 3 9 17 13 19 12 18 13 18 18 18 17 13 3 18 19 7 12 9 18 3 13 13 9 7' //saida 30 - runtime error

const entrada3 = '4 97 5 97 97 4 97 4 97 97 97 97 4 4 5 5 97 5 97 99 4 97 5 97 97 97 5 5 97 4 5 97 97 5 97 4 97 5 4 4 97 5 5 5 4 97 97 4 97 5 4 4 97 97 97 5 5 97 4 97 97 5 4 97 97 4 97 97 97 5 4 4 97 4 4 97 5 97 97 97 97 4 97 5 97 5 4 97 4 5 97 97 5 97 5 97 5 97 97 97' //saida 50 - runtime error


const array = entrada1.split(" ")

console.log(pickingNumbers(array))