var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

test_cases = parseInt(lines.shift());
cobaias = 0;
coelhos = 0;
ratos = 0;
sapos = 0;

for (i=1; i<=test_cases; i++) {
    cobaia = lines.shift().split(' ');
    quantidade = parseInt(cobaia.shift());
    cobaias = cobaias + quantidade;
    letra = cobaia.shift();
    
    switch (letra) {
        case 'C' :
            coelhos = coelhos + quantidade;
            break;
        case 'R' :
            ratos = ratos + quantidade;
            break;
        case 'S' :
            sapos = sapos + quantidade;
    }
}

percentual_coelhos = ((100*coelhos)/cobaias).toFixed(2);
percentual_ratos = ((100*ratos)/cobaias).toFixed(2);
percentual_sapos = ((100*sapos)/cobaias).toFixed(2);

console.log('Total: ' + cobaias + ' cobaias');
console.log('Total de coelhos: ' + coelhos);
console.log('Total de ratos: ' + ratos);
console.log('Total de sapos: ' + sapos);
console.log('Percentual de coelhos: ' + percentual_coelhos + ' %');
console.log('Percentual de ratos: ' + percentual_ratos + ' %');
console.log('Percentual de sapos: ' + percentual_sapos + ' %');