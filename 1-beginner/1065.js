var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

c = 0;

for (i=0; i<=4; i++) {
    value = parseInt(lines.shift());
    if (value % 2 === 0) {
        c = c + 1;
    }
}

console.log(c + ' valores pares');