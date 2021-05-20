var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

do {
    var coordinates = lines.shift().split(' ');
    var x = parseInt(coordinates.shift());
    var y = parseInt(coordinates.shift());
    if (x > 0 && y > 0) {
        console.log('primeiro');
    }
    if (x < 0 && y > 0) {
        console.log('segundo');
    }
    if (x < 0 && y < 0) {
        console.log('terceiro');
    }
    if (x > 0 && y < 0) {
        console.log('quarto');
    }
} while (x!==0 || y!==0);