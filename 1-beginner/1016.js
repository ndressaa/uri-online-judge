var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

distance = parseInt(lines.shift());

minutes = distance*2;

console.log(minutes + ' minutos');