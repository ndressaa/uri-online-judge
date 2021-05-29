var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = parseInt(lines.shift());

for (var i=1; i<=n; i++) {
    console.log(`${i} ${i*i} ${i*i*i}`);
}
