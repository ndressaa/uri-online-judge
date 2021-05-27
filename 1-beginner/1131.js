var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var goals, golsInter, golsGremio;
var code = 0;
var inter = 0;
var gremio = 0;
var draws = 0;
var grenais = 0;

do {
    goals = lines.shift().split(' ');
    golsInter = parseInt(goals.shift());
    golsGremio = parseInt(goals.shift());
    if(golsInter > golsGremio) {
        inter++;
    }
    if(golsGremio > golsInter) {
        gremio++;
    }
    if(golsInter === golsGremio) {
        draws++;
    }
    grenais++;
    console.log('Novo grenal (1-sim 2-nao)');
    code = parseInt(lines.shift());
    if (code === 1) {
        continue;
    }
} while (code !== 2);

if(inter > gremio) {
    var message = 'Inter venceu mais';
}

if (gremio > inter) {
    var message = 'Gremio venceu mais';
}

if(gremio === inter) {
    var message = 'Nao houve vencedor';
}

console.log(
    grenais + ' grenais\n' +
    'Inter:' + inter + '\n' +
    'Gremio:' + gremio + '\n' +
    'Empates:' + draws + '\n' +
    message
);