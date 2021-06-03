var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = parseInt(lines.shift());
var arr = [0, 1];

for (var i=2; i<n; i++) {
    var last = arr[arr.length-1];
    var lastButOne = arr[arr.length-2];
    arr.push(last+lastButOne);
}

console.log(arr.join(' '));