var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

c = 0; a = 0;

for (i=0; i<=5; i++) {
    value = parseFloat(lines.shift());
    if (value > 0) {
        c = c + 1;
        a = a + value;
    }
}

console.log(c + ' valores positivos\n' + (a/c).toFixed(1));