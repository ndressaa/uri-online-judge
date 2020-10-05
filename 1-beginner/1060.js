var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

values = [];
c = 0;

for (i = 0; i <= 5; i++) {
    values[i] = parseFloat(lines.shift(' '));
    if (values[i] > 0) {
        c = c + 1;
    }
}

console.log(c + ' valores positivos');