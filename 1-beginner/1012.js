var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var values = lines.shift();
values = values.split(' ');

var A = parseFloat(values.shift());
var B = parseFloat(values.shift());
var C = parseFloat(values.shift());

var triangulo = (A*C)/2;
var circulo = 3.14159 * (C*C);
var trapezio = ((A+B)*C)/2;
var quadrado = B*B;
var retangulo = A*B;

console.log('TRIANGULO: ' + triangulo.toFixed(3));
console.log('CIRCULO: ' + circulo.toFixed(3));
console.log('TRAPEZIO: ' + trapezio.toFixed(3));
console.log('QUADRADO: ' + quadrado.toFixed(3));
console.log('RETANGULO: ' + retangulo.toFixed(3));