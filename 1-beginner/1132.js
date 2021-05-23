var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var x, y, a, b, i;
var soma = 0;

x = parseInt(lines.shift());
y = parseInt(lines.shift());

if (y < x) {
    a = y;
    b = x;
}
else {
    a = x;
    b = y;  
}

for (i=a; i<=b; i++) {
    if (i % 13 !== 0) {
        soma += i;
    }
}

console.log(soma);