var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a, b;

do {
    var score = parseFloat(lines.shift());
    if(score < 0 || score > 10) {
        console.log('nota invalida');
    }
    else {
        a = score;
    }
} while (a === undefined);

do {
    var score = parseFloat(lines.shift());
    if(score < 0 || score > 10) {
        console.log('nota invalida');
    }
    else {
        b = score;
    }
} while (b === undefined);

console.log('media = ' + (a+b)/2);