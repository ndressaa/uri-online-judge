var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

time = parseInt(lines.shift());
speed = parseInt(lines.shift());

liters = (time*speed)/12;

console.log(liters.toFixed(3));