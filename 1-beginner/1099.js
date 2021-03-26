var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

number = parseInt(lines.shift());

for (i=1; i<=number; i++) {
    test = lines.shift().split(' ');
    x = parseInt(test.shift());
    y = parseInt(test.shift()); 
    if (x > y) {
        num1 = y;
        num2 = x;
    }
    else {
        num1 = x;
        num2 = y;
    }
    soma = 0;
    for (j=num1+1; j<num2; j++) {
        if (j % 2 == 1) {
            soma = soma +j;
        }
    }
    console.log(soma);
}