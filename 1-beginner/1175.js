var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let arr = [];

for (var i=0; i<20; i++) {
    arr[i] = parseInt(lines.shift());
}

let newArr = [];

for (var j=0; j<20; j++) {
    newArr.unshift(arr[j]);
}

for (var k=0; k<20; k++) {
    console.log(`N[${k}] = ${newArr[k]}`);
}