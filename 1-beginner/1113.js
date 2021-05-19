var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

do {
    var pair = lines.shift().split(' ');
    var x = parseInt(pair.shift());
    var y = parseInt(pair.shift());
    if(x > y) {
        console.log('Decrescente');
    }
    else if (x < y) {
        console.log('Crescente');
    } 
} while (x !== y);