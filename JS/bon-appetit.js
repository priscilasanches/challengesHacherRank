function bonAppetit(bill, k, b) {
    
    bill.splice(k, 1)
    
    const sharedItems = bill.reduce((acc, curr) => {
        return acc+curr
    })

    sharedItems/2===b ? console.log('Bon Appetit') : console.log(b-(sharedItems/2))
}

bonAppetit([3, 10, 2, 9], 1, 12)

//bill - array com o custo de cada item
//k - bill[k] não consumido por Anna
//b - dinheiro pago por Anna
//retorno - 'Bon Appetit' se valor pago por Anna estiver certo ou o valor a ser devolvido a ela.