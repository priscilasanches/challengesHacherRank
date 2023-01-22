function miniMaxSum(arr) {
    const orderedArr = arr.sort((a, b) => {return a-b})
    let miniSum = 0;
    let maxSum = 0;

    for(let i=0; i<(arr.length -1); i++) miniSum+= orderedArr[i];
    for(let j=1; j<arr.length; j++) maxSum += orderedArr[j];

    console.log(miniSum, maxSum)
}

miniMaxSum([2,1,3])
