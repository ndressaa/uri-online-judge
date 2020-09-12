var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = lines.shift();
A = parseFloat(A);

var B = lines.shift();
B = parseFloat(B);

var C = lines.shift();
C = parseFloat(C);

MEDIA = ((A*2) + (B*3) + (C*5)) / 10

console.log('MEDIA = ' + MEDIA.toFixed(1));