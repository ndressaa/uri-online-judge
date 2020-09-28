values = lines.shift().split(' ');

values.sort(function(a, b) {
    return b - a;
});

a = parseFloat(values[0]);
b = parseFloat(values[1]);
c = parseFloat(values[2]);

if (a >= b + c) {
    console.log('NAO FORMA TRIANGULO');
}

else {
    if ((a*a) == (b*b) + (c*c)) {
        console.log('TRIANGULO RETANGULO');
    }
    
    if ((a*a) > (b*b) + (c*c)) {
        console.log('TRIANGULO OBTUSANGULO');
    }
    
    if ((a*a) < (b*b) + (c*c)) {
        console.log('TRIANGULO ACUTANGULO');
    }
    
    if (a == b && b == c) {
        console.log('TRIANGULO EQUILATERO');
    }
    else if (a == b || b == c || c == a) {
        console.log('TRIANGULO ISOSCELES');   
    }
}