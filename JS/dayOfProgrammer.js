function dayOfProgrammer(year) {
    let february 
    if (year<1918){
        year%4===0 ? february=29 : february=28
    }
    if (year===1918){
        february=15
    }
    if (year>1918){
        (year%400===0 || (year%4===0 && year%100!==0)) ? february=29 : february=28
    }
    let day = 256 - (31+february+31+30+31+30+31+31)
    return (`${day}.09.${year}`)
}

console.log(dayOfProgrammer(1918))
