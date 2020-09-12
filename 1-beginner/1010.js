var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var product1 = lines.shift();
// product1 = '12 1 5.30'

product1 = product1.split(' ');
// product1 = ['12', '1', '5.30']

var code1 = parseInt(product1.shift()); // 12
var units1 = parseInt(product1.shift()); // 1
var price1 = parseFloat(product1.shift()); // 5.30

var total1 = units1 * price1; // 5.30

var product2 = lines.shift();
// product2 = '16 2 5.10'

product2 = product2.split(' ');
// product2 = ['16', '2', '5.10']

var code2 = parseInt(product2.shift()); // 16
var units2 = parseInt(product2.shift()); // 2
var price2 = parseFloat(product2.shift()); // 5.10

var total2 = units2 * price2; // 10.20

var total = total1 + total2; // 15.50

console.log('VALOR A PAGAR: R$ ' + total.toFixed(2));