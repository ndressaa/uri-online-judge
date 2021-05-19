var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

do {
    var password = parseInt(lines.shift());
    if (password === 2002) {
        console.log('Acesso Permitido');
        return;
    }
    console.log('Senha Invalida');  
} while (password !== 2002);
