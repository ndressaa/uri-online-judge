var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

value = parseFloat(lines.shift());

var nota; 
var moeda;

notas = [100, 50, 20, 10, 5, 2];
moedas = [1, 0.5, 0.25, 0.10, 0.05, 0.01];

console.log('NOTAS:');

for (nota of notas) {
    q = Math.floor(value / nota);
    console.log(q + ' nota(s) de R$ ' + nota.toFixed(2));
    value = (value-(q * nota)).toFixed(2);
}

console.log('MOEDAS:');

for (moeda of moedas) {
    q = Math.floor(value / moeda);
    console.log(q + ' moeda(s) de R$ ' + moeda.toFixed(2));
    value = (value - (q * moeda)).toFixed(2);
}