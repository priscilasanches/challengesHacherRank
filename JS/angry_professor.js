/*
    The function accepts following parameters:
    1. INTEGER k - minimun number of punctual students
    2. INTEGER_ARRAY a - minutes early or late
    It must return YES if it is canceled because doesn't have the minimum number of on time students or NO if it isn't canceled.
 */

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