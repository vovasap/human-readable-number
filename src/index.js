module.exports = function toReadable (number) {
    const words = {
        1:'one',
        2:'two',
        3:'three',
        4:'four',
        5:'five',
        6:'six',
        7:'seven',
        8:'eight',
        9:'nine',
        10:'ten',
        11:'eleven',
        12:'twelve',
        13:'thirteen',
        14:'fourteen',
        15:'fifteen',
        16:'sixteen',
        17:'seventeen',
        18:'eighteen',
        19:'nineteen',
        20:'twenty',
        30:'thirty',
        40:'forty',
        50:'fifty',
        60:'sixty',
        70:'seventy',
        80:'eighty',
        90:'ninety',
    }
    let str = ''
    if (number === 0) str = 'zero'
    if (number/100 >= 1) str = `${words[Math.floor(number / 100)]} hundred `
    if (number%100 > 19 || number%100 === 10) {
        if(number%100%10 === 0) {
            str += words[number%100]
        } else {
            str += `${words[Math.floor(number%100/10)*10]} ${words[number%100%10]}`
        }
    } else if (number%100%10 !== 0) {
        str += words[number%100]
    }
    return str.trim()
}
