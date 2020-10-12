var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

n = parseInt(lines.shift());

for (i=0; i<n; i++) {
    x = parseInt(lines.shift());
    if (x === 0) {
        console.log('NULL');
    }
    else {
        if (x % 2 === 0) {
            if (x > 0) {
                console.log('EVEN POSITIVE');
            }
            else {
                console.log('EVEN NEGATIVE');
            }
        }
        else {
            if (x > 0) {
                console.log('ODD POSITIVE');
            }
            else {
                console.log('ODD NEGATIVE');
            }
        }
    }
}
