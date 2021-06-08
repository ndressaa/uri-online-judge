var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = parseInt(lines.shift());

for (var i=1; i<=n; i++) {
    var test = lines.shift().split(' ');
    var x = parseInt(test.shift());
    var y = parseInt(test.shift());
    var sum = 0;
    for (var j=1; j<=y; j++) {
        if (x % 2 === 0) {
            x++;
        }
        sum += x;
        x += 2;
    }
    console.log(sum);
}