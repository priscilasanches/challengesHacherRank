function bonAppetit(bill, k, b) {
    
    bill.splice(k, 1)
    
    const sharedItems = bill.reduce((acc, curr) => {
        return acc+curr
    })

    sharedItems/2===b ? console.log('Bon Appetit') : console.log(b-(sharedItems/2))
}

bonAppetit([3, 10, 2, 9], 1, 12)
