var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var score, scores, count, media, x;

do {
    count = 0;
    scores = 0;
   do {
    score = parseFloat(lines.shift());
    if(score < 0 || score > 10) {
        console.log('nota invalida');
    }
    else {
        scores += score;
        count++;
    }
    } while(count < 2);
    
    media = scores/2;
    console.log('media = ' + media.toFixed(2));
    
    x = parseInt(lines.shift());
    
    console.log('novo calculo (1-sim 2-nao)');
    
    while(x < 1|| x > 2) {
        x = parseInt(lines.shift());
        console.log('novo calculo (1-sim 2-nao)');
    }
    
    if(x == 2) {
        break;
    }
    else {
        continue;
    } 
} while (x!== 2);