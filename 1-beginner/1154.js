var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var sum = 0;
var data = [];

do {
    var age = parseInt(lines.shift());
    if (age >= 0) {
        data.push(age);
    }
} while (age >= 0);

for (var i=0; i<data.length; i++) {
    sum += data[i];
}

console.log((sum/(data.length)).toFixed(2));