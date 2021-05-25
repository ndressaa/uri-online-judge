var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var x = parseInt(lines.shift());
var y = parseInt(lines.shift());

if(x > y) {
    var a = x;
    x = y;
    y = a;
}

for (var i=x+1; i<y; i++) {
    if(i % 5 == 2 || i % 5 == 3) {
        console.log(i);
    }
}