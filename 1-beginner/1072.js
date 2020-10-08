var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

n = parseInt(lines.shift());
x = [];
ins = 0;
out = 0;

for(i=0; i<n; i++) {
    x[i] = parseInt(lines.shift());
    if (x[i] >=10 && x[i] <=20) {
        ins = ins + 1;
    }
    else {
        out = out + 1;
    }
}

console.log(ins + ' in\n' + out + ' out');