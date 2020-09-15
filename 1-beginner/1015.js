var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

values1 = lines.shift().split(' ');
values2 = lines.shift().split(' ');

x1 = parseFloat(values1.shift());
y1 = parseFloat(values1.shift());

x2 = parseFloat(values2.shift());
y2 = parseFloat(values2.shift());

distance = Math.sqrt(((x2-x1)*(x2-x1))+((y2-y1)*(y2-y1)));

console.log(distance.toFixed(4));