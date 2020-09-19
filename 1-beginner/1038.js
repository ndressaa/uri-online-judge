var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

values = lines.shift().split(' ');
code = parseInt(values.shift());
quantity = parseInt(values.shift());

switch (code) {
    case 1:
        console.log('Total: R$ '+(4*quantity).toFixed(2));
        break;
    case 2:
        console.log('Total: R$ '+(4.5*quantity).toFixed(2));
        break;
    case 3:
        console.log('Total: R$ '+(5*quantity).toFixed(2));
        break;
    case 4:
        console.log('Total: R$ '+(2*quantity).toFixed(2));
        break;
    case 5:
        console.log('Total: R$ '+(1.5*quantity).toFixed(2));
}