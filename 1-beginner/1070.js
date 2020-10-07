var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

x = parseInt(lines.shift());

if(x % 2 !== 0) {
    for (i=x; i<=x+10; i=i+2) {
        console.log(i);
    }
}

else {
    console.log(x+1);
    for (i=x+3; i<=x+11; i=i+2){
        console.log(i);
    }
}