var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var sellername = lines.shift();

var salary = lines.shift();
salary = parseFloat(salary);

var sales = lines.shift();
sales = parseFloat(sales);

var bonus = sales * 0.15;
var total = salary + bonus;

console.log('TOTAL = R$ ' + total.toFixed(2));