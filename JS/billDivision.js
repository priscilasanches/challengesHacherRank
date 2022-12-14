/*
    bonAppetit has the following parameter(s):
        bill: an array of integers representing the cost of each item ordered
        k: an integer representing the zero-based index of the item Anna doesn't eat
        b: the amount of money that Anna contributed to the bill
    If Brian did not overcharge Anna, print Bon Appetit on a new line; otherwise, print the difference that Brian must refund to Anna. This will always be an integer.
*/

function bonAppetit(bill, k, b) {
    
    bill.splice(k, 1)
    
    const sharedItems = bill.reduce((acc, curr) => {
        return acc+curr
    })

    sharedItems/2===b ? console.log('Bon Appetit') : console.log(b-(sharedItems/2))
}
//example
bonAppetit([3, 10, 2, 9], 1, 12)
