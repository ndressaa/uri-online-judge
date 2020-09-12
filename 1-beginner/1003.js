var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = lines.shift();
A = parseInt(A);

var B = lines.shift();
B = parseInt(B);

SOMA = A + B;

console.log('SOMA = ' + SOMA);