function countingValleys(steps, path) {
    let height = 0
    let valley = 0

    for(let i=0; i<steps; i++){
        let status = height

        path[i]==='D' ? height-- : height++

        if (height<0 && status>=0) valley++ 
    }

    return valley
}

console.log(countingValleys(8, 'UDDDUDUU'))
