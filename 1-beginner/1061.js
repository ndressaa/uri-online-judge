var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

//lines = ['Dia 5', '08 : 12 : 23', 'Dia 9', '06 : 13 : 23'];

d1 = parseInt(lines.shift().split(' ').pop());
h1 = lines.shift().split(' : '); 
s1 = parseInt(h1.pop());
m1 = parseInt(h1.pop());
h1 = parseInt(h1);

d2 = parseInt(lines.shift().split(' ').pop());
h2 = lines.shift().split(' : '); 
s2 = parseInt(h2.pop());
m2 = parseInt(h2.pop());
h2 = parseInt(h2);

s = s2 - s1;
m = m2 - m1;
h = h2 - h1;
d = d2 - d1

if (s < 0) {
    s = s + 60;
    m = m - 1;
}

if (m < 0) {
    m = m + 60;
    h = h - 1;
}

if (h < 0) {
    h = h + 24;
    d = d - 1;
}

console.log(
    d + ' dia(s)\n' +
    h + ' hora(s)\n' +
    m + ' minuto(s)\n' +
    s + ' segundo(s)'
);