function timeConversion(s) {

    const Am = (/AM/g).exec(s)
    const Pm = (/PM/g).exec(s)
    const hh = (/\d\d/).exec(s)
    let hour24Format = ''
    
    if (Am) {
        hh == 12 ? hour24Format = s.replace(hh, '00') : hour24Format = s        
    }

    if(Pm) {
        const hh24 = parseInt(hh) + 12
        hh == 12 ? hour24Format = s : hour24Format = s.replace(hh, hh24)
    }
    
    hour24Format = hour24Format.replace(Am || Pm, '')

    return hour24Format
}

console.log(timeConversion('07:01:00PM'))
