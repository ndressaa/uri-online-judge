values = lines.shift().split(' ');
a = parseInt(values.shift());
b = parseInt(values.shift());

if (a % b === 0 || b % a === 0) {
    console.log('Sao Multiplos');
}
else {
    console.log('Nao sao Multiplos');
}