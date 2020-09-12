var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = lines.shift();
A = parseFloat(A);

var B = lines.shift();
B = parseFloat(B);

MEDIA = ((A*3.5) + (B*7.5))/11;

console.log('MEDIA = ' + MEDIA.toFixed(5));