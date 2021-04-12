var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

do {
    pair = lines.shift().split(' ').sort();
    m = parseInt(pair.shift());
    n = parseInt(pair.shift());
    if (m > 0 && n > 0) {
        arr = [];
        x = 0;
        sum = 0;
        for(i=m; i<=n; i++) {
            arr[x] = i;
            sum += i;
            x++;
        }
        arr = arr.join(' ');
        console.log(arr + ' Sum=' + sum);
    }
    else {
        break;
    }
} while (m >= 0 || n >= 0);