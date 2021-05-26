var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var type;
var alcohol = 0;
var gasoline = 0;
var diesel = 0;

do {
    type = parseInt(lines.shift());
    if (type < 1 || type > 4) {
        type = parseInt(lines.shift());
    }
    switch (type) {
        case 1:
            alcohol++;
            break;
        case 2:
            gasoline++;
            break;
        case 3:
            diesel++;
            break;
    }
} while (type !== 4);

console.log(
    'MUITO OBRIGADO\n' +
    'Alcool: ' + alcohol + '\n' +
    'Gasolina: ' + gasoline + '\n' +
    'Diesel: ' + diesel
);