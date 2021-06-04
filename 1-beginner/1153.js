var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = parseInt(lines.shift());
var fatorial = 1;

for (i=1; i<=n; i++) {
    fatorial *= i;
}

console.log(fatorial);