var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var pair = lines.shift().split(' ');
var x = parseInt(pair.shift());
var y = parseInt(pair.shift());

for (var i=1; i<=y; i=i) {
    var arr = [];
    for(var j=1; j<=x; j++) {
        arr.push(i);
        i++;
    }
    console.log(arr.join(' '));
}