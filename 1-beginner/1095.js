var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

i = 1;
j = 60;

for (c=0; c<=12; c++) {
    console.log('I=' + i + ' J=' + j);
    i = i + 3;
    j = j - 5;
}