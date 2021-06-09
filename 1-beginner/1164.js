var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = parseInt(lines.shift());
for (var i=1; i<=n; i++) {
    var x = parseInt(lines.shift());
    var sum = 0;
    for (var j=1; j<x; j++) {
        if (x % j === 0) {
            sum += j;
        }
    }
    if (x === sum) {
        console.log(x + ' eh perfeito');
    }
    else {
        console.log(x + ' nao eh perfeito');
    }
}
