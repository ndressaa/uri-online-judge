var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

values = lines.shift().split(' ');
a = parseFloat(values.shift());
b = parseFloat(values.shift());
c = parseFloat(values.shift());

delta = (b * b) - 4 * a * c;

if (delta < 0 || a === 0) {
    console.log('Impossivel calcular');
}
else {
    r1 = (-b + Math.sqrt(delta)) / (2*a);
    r2 = (-b - Math.sqrt(delta)) / (2*a);
    console.log('R1 = ' + r1.toFixed(5));
    console.log('R2 = ' + r2.toFixed(5));
}