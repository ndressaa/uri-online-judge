var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = [];
var v = parseInt(lines.shift());

for (var i=0; i<10; i++) {
    n[i] = v;
    console.log(`N[${i}] = ${v}`);
    v *= 2;
}