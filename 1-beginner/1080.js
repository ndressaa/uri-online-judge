var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

highest = 0;

for (i=1; i<=100; i++) {
    num = parseInt(lines.shift());
    if(num > highest) {
        highest = num;
        index = i;
    }
}

console.log(highest);
console.log(index);