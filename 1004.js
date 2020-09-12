var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a = lines.shift();
a = parseInt(a);

var b = lines.shift();
b = parseInt(b);

PROD = a * b;

console.log('PROD = ' + PROD);