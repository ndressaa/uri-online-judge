var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

s = 1;
d = 2; 
for (var n=3; n<=39; n+=2) {
    s += (n/d);
    d *= 2;
}
console.log(s.toFixed(2));