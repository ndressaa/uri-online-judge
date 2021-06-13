var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a = [];

for (var i=0; i<100; i++) {
    var n = parseFloat(lines.shift());
    a[i] = n;
    if (n <= 10) {
        console.log(`A[${i}] = ${n.toFixed(1)}`);
    }
}