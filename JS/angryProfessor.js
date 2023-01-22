function angryProfessor(k, a) {
    let delayed = 0

    a.forEach(arrivalTimes => {
        if (arrivalTimes>0) delayed++
    });

    const onTime = a.length - delayed

    if (onTime>=k) return 'NO'

    return 'YES'
}

console.log(angryProfessor(5, [0,1,1,-5,0,5,9,2,-3]))
