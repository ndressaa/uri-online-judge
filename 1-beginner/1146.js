var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

do {
    var x = parseInt(lines.shift());
    var arr = [];
    for (var i=1; i<=x; i++) {
        arr.push(i);
    }
    if (x !== 0) {
        console.log(arr.join(' '));
    }
} while (x !== 0);