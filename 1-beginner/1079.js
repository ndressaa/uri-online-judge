var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

N = parseInt(lines.shift());

for (i=1; i<=N; i++) {
    numbrs = lines.shift().split(' ');
    n1 = (parseFloat(numbrs.shift()))*0.2;
    n2 = (parseFloat(numbrs.shift()))*0.3;
    n3 = (parseFloat(numbrs.shift()))*0.5;
    console.log((n1 + n2 + n3).toFixed(1));
}