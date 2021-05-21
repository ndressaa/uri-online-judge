var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = parseInt(lines.shift());

for (var i=1; i<=n; i++) {
    var pair = lines.shift().split(' ');
    var x = parseInt(pair.shift());
    var y = parseInt(pair.shift());
    if (y === 0) {
        console.log('divisao impossivel');
    }
    else {
        var resultado = (x/y).toFixed(1);
        console.log(resultado);
    }
}