var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

i = 1;
j = 7;

for (i=1; i<=9; i=i+2) {
    for (c=0; c<3; c++) {
        console.log('I=' + i + ' J=' + j);
        j = j - 1;
    }
    j = j + 5;
}