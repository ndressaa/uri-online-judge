var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

values = lines.shift().split(' ');

a = parseInt(values.shift());
b = parseInt(values.shift());

if (a <= 12 && b > 12) {
    a = 12 - a;
    b = Math.abs(12 - b);
}

else {
    a = 24 - a;
}

console.log('O JOGO DUROU ' + (a+b) + ' HORA(S)');