const [n, ...arr] = require('fs')
                .readFileSync('./test.txt')
                .toString()
                .trim()
                .split('\n');
let answer = 'NO';

for (let i = 0; i < n; i++) {
    while (arr[i].includes('()')) {
        arr[i] = arr[i].replace(/\(\)/g, '');
    }
    if (arr[i] === '') answer = 'YES';
    console.log(answer);
    answer = 'NO';
}