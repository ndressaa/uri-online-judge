var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

e = 0; o = 0; p = 0; n = 0;

for (i=0; i<=4; i++) {
    value = parseInt(lines.shift());
    if (value % 2 === 0) {
        e = e + 1;
    }
    else {
        o = o + 1;
    }
    if (value > 0) {
        p = p + 1;
    }
    else if (value < 0) {
        n = n + 1;
    }
}

console.log(
    e + ' valor(es) par(es)\n' +
    o + ' valor(es) impar(es)\n' +
    p + ' valor(es) positivo(s)\n' +
    n + ' valor(es) negativo(s)'
);