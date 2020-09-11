var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = 3.14159;

var R = lines.shift();
R = parseFloat(R);

var A = n*(R*R);
A = A.toFixed(4);

console.log('A='+ A);