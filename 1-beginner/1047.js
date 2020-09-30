values = lines.shift().split(' ');

a = parseInt(values.shift());
am = parseInt(values.shift());
b = parseInt(values.shift());
bm = parseInt(values.shift());

h = 0;
m = 0;

if (a == b) {
    if (am == bm) {
        h = 24;
        m = 0;
    }
    else if (am < bm) {
        h = 0;
        m = bm - am;
    }
    else if (am > bm) {
        h = 23;
        m = (bm - am) + 60;
    }
}

if (a < b) {
    if (b-a == 1 && am > bm) {
        h = 0;
        m = (bm - am) + 60;
    }
    else if (am <= bm) {
        h = b - a;
        m = bm - am;
    }
    else if (am > bm) {
        h = b - a;
        m = (bm - am) + 60;
    }
}

if (a > b) {
    if (am <= bm) {
        h = (b - a) + 24;
        m = bm - am;
    }
    else if (am > bm) {
        h = (b - a) + 23;
        m = (bm - am) + 60;
    }
}

console.log(
    'O JOGO DUROU ' + h + ' HORA(S) E ' + m + ' MINUTO(S)'    
);