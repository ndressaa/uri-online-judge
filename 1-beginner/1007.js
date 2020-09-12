var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = lines.shift();
A = parseInt(A);

var B = lines.shift();
B = parseInt(B);

var C = lines.shift();
C = parseInt(C);

var D = lines.shift();
D = parseInt(D);

DIFERENCA = ((A*B) - (C*D));

console.log('DIFERENCA = ' + DIFERENCA);