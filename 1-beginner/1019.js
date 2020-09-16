var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

seconds = parseInt(lines.shift());
minutes = 0;
hours = 0;

while (seconds - 3600 >= 0) {
    seconds = seconds - 3600;
    hours = hours + 1;
}

while (seconds - 60 >= 0) {
    seconds = seconds - 60;
    minutes = minutes + 1;
}

console.log(hours + ':' + minutes + ':' + seconds);
