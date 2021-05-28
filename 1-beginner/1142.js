var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = parseInt(lines.shift());
var nmbr = 1;

for (var i=1; i<=n; i++) {
   console.log(nmbr + ' ' + (++nmbr) + ' ' + (++nmbr) + ' PUM');
   nmbr = nmbr+2;
}