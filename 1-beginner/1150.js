var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var sum = 0;
var count = 0;
var x = parseInt(lines.shift());

do  {
    var y = parseInt(lines.shift());
} while (y <= x);

for(var i=x; sum<=y; i++) {
    sum += i;
    count++;
}

console.log(count);