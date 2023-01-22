function retornaStringSemRepeticao (string) {
    let stringSemRepeticao = string
    const arrPalavras = string.split(' ')
    const arrPalavrasSemRepeticao = []

    if(arrPalavras.every(trechoRepetido)) {
        arrPalavras.forEach(palavra => {
            const palavraSemRepeticao = excluiRepeticao(palavra)
            arrPalavrasSemRepeticao.push(palavraSemRepeticao)
            stringSemRepeticao = arrPalavrasSemRepeticao.join(' ')
        })
    }
    return stringSemRepeticao
}

function trechoRepetido(palavra) {
    let i = (palavra.length - 1)
    let k = i - 1

    if (palavra.length<=3 && palavra[i]===palavra[k]) return true

    let UltimasLetras = palavra.indexOf(palavra[k] + palavra[i]) 
    if ( UltimasLetras !== k) return true

    return false
}

function excluiRepeticao(palavra) {
    const ultimoId = palavra.length-1
    const ultimaLetra = palavra[ultimoId]

    let ocorrenciaRepLetra = palavra.lastIndexOf(ultimaLetra, ultimoId-1)
    let letrasRepetidas = []

    let letraComparar = ocorrenciaRepLetra

    for (let i=ultimoId; i>ocorrenciaRepLetra; i--){
        if(palavra[i]===palavra[letraComparar]) {
            letrasRepetidas.push(palavra[i])         
            letraComparar--            
        }
   }
     
    letrasRepetidas.reverse()
    const palavraSemRepeticao = palavra.replace(letrasRepetidas.join(''), '')

    return palavraSemRepeticao
}

console.log(retornaStringSemRepeticao("badalada"))
console.log(retornaStringSemRepeticao("oo ratoato roeuoeu aa roupaoupa dodo reiei dee Romaoma"))
console.log("a bananeira tem banana")
