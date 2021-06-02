var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
lines = lines.shift().split(' ');

var a = parseInt(lines.shift());
var sum = 0;

do {
    var n = parseInt(lines.shift());
} while (n <= 0);

for (var i=1; i<=n; i++) {
    sum+= a;
    a++;
}

console.log(sum);