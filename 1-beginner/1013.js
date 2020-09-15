var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var values = lines.shift();
values = values.split(' ');

const a = parseInt(values.shift());
const b = parseInt(values.shift());
const c = parseInt(values.shift());

var maiorab = ((a+b) + Math.abs(a-b))/2;
var maiorabc = ((maiorab+c) + Math.abs(maiorab-c))/2;

console.log(maiorabc + ' eh o maior');