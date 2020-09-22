var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

scores = lines.shift().split(' ');
n1 = parseFloat(scores.shift());
n2 = parseFloat(scores.shift());
n3 = parseFloat(scores.shift());
n4 = parseFloat(scores.shift());

media = ((2*n1)+(3*n2)+(4*n3)+n4)/10;

console.log('Media: ' + media.toFixed(1));

if (media < 5) {
    console.log('Aluno reprovado.');
}

else if (media >= 5 && media <= 6.9) {
    exam = parseFloat(lines.shift());
    media = (media + exam)/2;
    
    console.log('Aluno em exame.');
    console.log('Nota do exame: ' + exam.toFixed(1));
    
    if (media < 5) {
        console.log('Aluno reprovado.');
        console.log('Media final: ' + media.toFixed(1));
    }
    else {
        console.log('Aluno aprovado.');
        console.log('Media final: ' + media.toFixed(1));        
    }
}

else {
    console.log('Aluno aprovado.');
}