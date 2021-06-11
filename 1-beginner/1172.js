var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var x = [];

for (var i=0; i<10; i++) {
    var n = parseInt(lines.shift());
    if (n <= 0 || n === null) {
        n = 1;
    }
    x.push(n);
    console.log(`X[${i}] = ${x[i]}`);
}
