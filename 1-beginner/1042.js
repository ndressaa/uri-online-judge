var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

values = lines.shift().split(' ');
A = parseInt(values.shift());
B = parseInt(values.shift());
C = parseInt(values.shift());

if (A > B && B > C) {
        console.log(C + '\n' + B + '\n' + A + '\n');
        
    } else if (A > C && C > B) {
        
        console.log(B + '\n' + C + '\n' + A + '\n');
        
    } else if (B > A && A > C) {
        
        console.log(C + '\n' + A + '\n' + B + '\n');
        
    } else if (B > C && C > A) {
        
        console.log(A + '\n' + C + '\n' + B + '\n');
        
    } else if (C > A && A > B) {
        
        console.log(B + '\n' + A + '\n' + C + '\n');
        
    } else {
        
        console.log(A + '\n' + B + '\n' + C + '\n');
    }
console.log(A + '\n' + B + '\n' + C);