function getTotalX(a, b) {

    Array.isArray(a) ? a=a : a=[a]
    Array.isArray(b) ? b=b : b=[b]
    
    let num = b[0]

    let numbers = []

    while (num>=a[0]){
        let divisor = true

        for (let i=0; i<a.length; i++) {
            if (num%a[i]!==0) divisor=false
        }
        for (let i=0; i<b.length; i++) {
            if (b[i]%num !==0) divisor=false
        } 
        if (divisor) numbers.push(num) 

        num--
    }
    
    return numbers.length
}

console.log(getTotalX([2,4], [16, 32, 96]))
