const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let exprSize = 10;
    let dividedExpr = [];
    for (let i = 0; i < expr.length; i += exprSize) {
        dividedExpr.push(expr.slice(i, i + exprSize));
    }
    let newExpr = '';
    for (let i = 0; i < dividedExpr.length; i++) {
        if (dividedExpr[i] === '**********'){
             newExpr += ' ';
        }else {
            let v = +[dividedExpr[i]];
            let d = v.toString();
            let dividedExprSize = 2;
            let letter = [];
            for (let i = 0; i < d.length; i += dividedExprSize) {

                if (d.slice(i, i + dividedExprSize) === '10') {
                    letter+='.';
                } else {
                    letter+='-';
                }
            }
            newExpr += MORSE_TABLE[letter]
        }
    }
    return newExpr;
}

module.exports = {
    decode
}