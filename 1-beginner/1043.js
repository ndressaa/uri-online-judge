var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

values = lines.shift().split(' ');
a = parseFloat(values.shift());
b = parseFloat(values.shift());
c = parseFloat(values.shift());

if (Math.abs(b - c) < a && a < b + c) {
    console.log('Perimetro = ' + (a+b+c).toFixed(1));
}
else {
    console.log('Area = ' + (((a+b)*c)/2).toFixed(1));
}