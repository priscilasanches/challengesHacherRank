function designerPdfViewer(h, word) {
    const sizeWord = word.length
    const heightLetters = []

    for(let i=0; i<sizeWord; i++){
        let idWord = word.charCodeAt(i)-97 //em AscII, a-z começa em 97
        heightLetters.push(h[idWord])
    }  

    heightLetters.sort((a,b) => a-b)
    const highestLetter = heightLetters[heightLetters.length-1]

    return sizeWord*highestLetter
}

console.log(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 'hoje'))
