var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

salary = parseFloat(lines.shift());
range = [400, 800, 1200, 2000];
rate = [0.15, 0.12, 0.1, 0.07];

for (var i in range) {
    if (salary <= range[i]) {
        add = salary * rate[i];
        console.log(
            'Novo salario: ' + (salary+add).toFixed(2) +
            '\nReajuste ganho: ' + add.toFixed(2) +
            '\nEm percentual: ' + (rate[i]*100).toFixed(2) + ' %'
        );
        break;
    }
}

if (salary > 2000.00) {
    add = salary * 0.04;
    console.log(
        'Novo salario: ' + (salary+add).toFixed(2) +
        '\nReajuste ganho: ' + add.toFixed(2) +
        '\nEm percentual: 4 %'
    );
}