var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

month = parseInt(lines.shift());
months = ['January', 'February', 'March', 'April', 
            'May', 'June', 'July', 'August', 
            'September', 'October', 'November', 'December'];

for (i=0; i<=12; i++) {
    if (month == i+1) {
        console.log(months[i]);
    }
}