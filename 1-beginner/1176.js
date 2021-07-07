var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let fib = [];
fib[0] = 0;
fib[1] = 1;

for (var i=2; i<=60; i++) {
    fib[i] = fib[i-1] + fib[i-2];
}

let t = parseInt(lines.shift());

for (var j=1; j<=t; j++) {
    let index = parseInt(lines.shift());
    console.log(`Fib(${index}) = ${fib[index]}`);
}