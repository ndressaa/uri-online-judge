x = parseInt(lines.shift());
y = parseInt(lines.shift());
s = 0;

if (x <= y) {
    for (i=x+1; i<y; i++) {
        if (i % 2 !==0) {
            s = s + i;
        }
    }
    console.log(s);
}

else {
    for (i=y+1; i<x; i++) {
        if (i % 2 !==0) {
            s = s + i;
        }        
    }
    console.log(s);
}