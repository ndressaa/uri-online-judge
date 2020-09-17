var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

values = lines.shift().split(' ');

A = values.shift();
B = values.shift();
C = values.shift();
D = values.shift();

if (B>C && D>A && C+D>A+B && C>0 && D>0 && A%2 === 0 ) {
    console.log('Valores aceitos');   
}
else {
    console.log('Valores nao aceitos');
}