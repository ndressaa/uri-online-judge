var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = lines.shift();
var B = lines.shift();

A = parseInt(A);
B = parseInt(B);

var X = A + B;

console.log('X = ' + X);