function plusMinus(arr) {
    let positives = 0;
    let negatives = 0;
    let zeros = 0;
    
    arr.forEach(element => {
        if (element > 0) positives++;
        else if (element < 0) negatives++;
        else zeros++;
    });

    console.log((positives/arr.length).toFixed(6));
    console.log((negatives/arr.length).toFixed(6));
    console.log((zeros/arr.length).toFixed(6));

}

plusMinus([-4, 3, -9, 0, 4, 1])
