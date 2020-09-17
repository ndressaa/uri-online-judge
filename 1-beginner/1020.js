var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

days = parseInt(lines.shift());
years = 0;
months = 0;

while (days - 365 >= 0) {
    days = days - 365;
    years = years + 1;
}

while (days - 30 >= 0) {
    days = days - 30;
    months = months + 1;
}

console.log(years + ' ano(s)\n' + months + ' mes(es)\n' + days + ' dia(s)');