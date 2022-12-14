/*
    breakingRecords has the following parameter(s):
        int scores[n]: points scored per game
    Returns int[2]: An array with the numbers of times she broke her records. Index 0 is for breaking most points records, and index 1 is for breaking least points records.
*/
function breakingRecords(scores) {

    let mostPointsRecords = 0
    let leastPointsRecords = 0
    let maximumPoint = scores[0]
    let minimumPoint = scores[0]
    
    for(let i=1; i<scores.length; i++) {
        if(scores[i] > maximumPoint) {
            maximumPoint = scores[i]
            mostPointsRecords++
        }
        if(scores[i] < minimumPoint) {
            minimumPoint = scores[i]
            leastPointsRecords++
        }
    }

    return [mostPointsRecords, leastPointsRecords]
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]))


