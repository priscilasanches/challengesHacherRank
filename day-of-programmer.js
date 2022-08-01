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

/*year - 1700 a 2700 (Russia)
1700 a 1917 - Julian Calendar
1918 (transition) - next day after January 31st was February 14th. This means that in 1918, February 14th was the 32nd day of the year in Russia.
1919 a 2700 - Gregorian calendar
February is the only month with a variable amount of days; it has 29 days during a leap year, and 28 days during all other years. 
In the Julian calendar, leap years are divisible by 4; 
in the Gregorian calendar, leap years are either of the following:Divisible by 400;Divisible by 4 and not divisible by 100.
Given a year, find the date of the 256th day of that year according to the official Russian calendar during that year. Then print it in the format dd.mm.yyyy(string).*/