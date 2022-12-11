function trechoRepetido(palavra) {
    const i = (palavra.length - 1)
    const k = i - 1
    let letrasRepetidas = []

    if (palavra[i]===palavra[k]) {//apenas última letra rep
        letrasRepetidas.push(palavra[i])
        return letrasRepetidas
    }

    const duasLetrasFinais = palavra[k] + palavra[i]
    const idRep = palavra.indexOf(duasLetrasFinais) 
    
    if ( idRep !== k) { //duas letras finais repetidas
        letrasRepetidas.push(duasLetrasFinais)
        let dec = 1 //avaliando letras anteriores as duas finais
        while (palavra[idRep-dec]===palavra[k-dec]){
           letrasRepetidas.push(palavra[idRep-dec])
           dec++
       } 
       console.log(letrasRepetidas, idRep, k)
        //avaliando se as letras repetidas ocorrem em sequência (idRep+2 -> letra após sequencia de letras repetidas / k-dec+1 ->início repetição)
        if (idRep+2 !== k-dec+1) letrasRepetidas.splice(0, letrasRepetidas.length)
    }

    return letrasRepetidas
}

function excluiRepeticao(palavra){
    const letrasRepetidas = trechoRepetido(palavra).reverse().join('')
    const palavraSemRep = palavra.replace(letrasRepetidas, '')
    
    return palavraSemRep
}

function retornaStringSemRepeticao (string) {
    let stringSemRepeticao = string
    const arrPalavras = string.split(' ')
    const arrPalavrasSemRepeticao = []
    let todasRepetidas

    //testa se todas são repetidas
    for (i=0; i<arrPalavras.length; i++){
        if(trechoRepetido(arrPalavras[i]).length===0){
            todasRepetidas = false
            break
        }
        todasRepetidas=true
    }


    if(todasRepetidas){
        arrPalavras.forEach(palavra => {
            const palavraSemRepeticao = excluiRepeticao(palavra)
            arrPalavrasSemRepeticao.push(palavraSemRepeticao)
            stringSemRepeticao = arrPalavrasSemRepeticao.join(' ')
        })
    }
    
    return stringSemRepeticao
}


// console.log(retornaStringSemRepeticao("oo ratoato roeuoeu aa roupaoupa dodo reiei dee Romama"))
// console.log(retornaStringSemRepeticao("a bananeira tem banana"))
// console.log(retornaStringSemRepeticao("badalada"))
console.log(retornaStringSemRepeticao("rataata"))
