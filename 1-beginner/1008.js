var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var number = lines.shift();
number = parseInt(number);

var hours = lines.shift();
hours = parseInt(hours);

var amount = lines.shift();
amount = parseFloat(amount);

salary = hours * amount;

console.log('NUMBER = ' + number + '\nSALARY = U$ ' + salary.toFixed(2));