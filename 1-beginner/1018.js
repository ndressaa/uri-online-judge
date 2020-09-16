var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

N = parseInt(lines.shift());
number = N;
n100 = 0;
n50 = 0;
n20 = 0;
n10 = 0;
n5 = 0;
n2 = 0;
n1 = 0;

while (N - 100 >= 0) {
    N = N - 100;
    n100 = n100 + 1;
}

while (N - 50 >= 0) {
    N = N - 50;
    n50 = n50 + 1;
}

while (N - 20 >= 0) {
    N = N - 20;
    n20 = n20 + 1;
}

while (N - 10 >= 0) {
    N = N - 10;
    n10 = n10 + 1;
}

while (N - 5 >= 0) {
    N = N - 5;
    n5 = n5 + 1;
}

while (N - 2 >= 0) {
    N = N - 2;
    n2 = n2 + 1;
}

while (N - 1 >= 0) {
    N = N - 1;
    n1 = n1 + 1;
}

console.log(number);
console.log(n100 + ' nota(s) de R$ 100,00');
console.log(n50 + ' nota(s) de R$ 50,00');
console.log(n20 + ' nota(s) de R$ 20,00');
console.log(n10 + ' nota(s) de R$ 10,00');
console.log(n5 + ' nota(s) de R$ 5,00');
console.log(n2 + ' nota(s) de R$ 2,00');
console.log(n1 + ' nota(s) de R$ 1,00');