var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var distance = parseInt(lines.shift()); // 500
var fuel = parseFloat(lines.shift()); // 35.0

var comsumption = distance / fuel;

console.log(comsumption.toFixed(3) + ' km/l');