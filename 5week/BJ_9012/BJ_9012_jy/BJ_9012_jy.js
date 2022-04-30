const [n, ...arr] = require('fs')
                .readFileSync('./test.txt')
                .toString()
                .trim()
                .split('\n');
console.log(arr);