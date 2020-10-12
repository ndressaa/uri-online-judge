var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

n = parseInt(lines.shift());

for (i=2; i<=n; i=i+2) {
    console.log(i + '^2 = ' + Math.pow(i,2));
}
