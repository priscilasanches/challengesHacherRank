/*
countingValleys has the following parameter(s):
    int steps: the number of steps on the hike
    string path: a string describing the path (D - down / U - up)
Returns
    int: the number of valleys traversed (valleys height < 0)
*/

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

//example
console.log(countingValleys(8, 'UDDDUDUU'))
