var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

do {
    var x = parseInt(lines.shift());
    var sum = 0;
    if (x !== 0) {
        for (var i=1; i<=5; i++) {
            if (x % 2 !== 0) {
                x++;
            }
            sum += x;
            x += 2;
        }
        console.log(sum);
    }
} while (x!== 0);