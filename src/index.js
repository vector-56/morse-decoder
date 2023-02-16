const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {

    let a = expr.length / 10;
    let exprArr = expr.split('')
    let resultArr = [];

    for (let i = 0; i < a; i++) {
        resultArr.push(Number(exprArr.slice(0, 10).join('')).toString())
        exprArr.splice(0, 10)
    }

    function decode(char) {
        let totalArr = [];
        for (let i = 0; i < char.length; i += 2) {
            if (char.slice(i, i + 2) === "10") {
                totalArr.push(".")
            } else if (char.slice(i, i + 2) === "11") {
                totalArr.push("-")
            }
        }
        return MORSE_TABLE[totalArr.join('')]
    }

    const endArr = resultArr.map(char => decode(char))

    let result = endArr.join(" ").split("  ")

    let finalArr = result.map(elem => elem.split(" ").join(""))

    let c = finalArr.join(" ")

    return c
}

module.exports = {
    decode
}