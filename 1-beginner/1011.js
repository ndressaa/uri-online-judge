var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var R = parseFloat(lines.shift());
var pi = 3.14159;

var volume = (4/3) * pi * (R*R*R);

console.log('VOLUME = ' + volume.toFixed(3));