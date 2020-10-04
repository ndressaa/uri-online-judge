var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

salary = parseFloat(lines.shift());

if (salary <= 2000) {
    console.log('Isento');
}

else if (salary <= 3000) {
    console.log(
        'R$ ' + ((salary - 2000) * 0.08).toFixed(2)
    );
}

else if (salary <= 4500) {
    console.log(
        'R$ ' + (((salary - 3000) * 0.18) + 80).toFixed(2)
    );
}

else {
    console.log(
        'R$ ' + (((salary - 4500) * 0.28) + 350).toFixed(2)
    );
}