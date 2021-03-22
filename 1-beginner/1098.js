var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for (i=0; i<=2; i=i+0.2) {
    for(c=1; c<=3; c++) {
        j = c + i;
        if (j==1 || j==2 || j==3 || j==4 || j==5) {
            console.log(
            'I=' + i.toFixed(0) + ' J=' + j.toFixed(0)
            );
        }
        else {
            console.log(
            'I=' + i.toFixed(1) + ' J=' + j.toFixed(1)
            ); 
        }
    }
}