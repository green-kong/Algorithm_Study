const [n, ...rope] = require('fs')
                .readFileSync('./test.txt')
                .toString()
                .trim()
                .split('\n')
                .map(Number);
rope.sort((a, b) => a - b);

let m = rope[0] * n;
for (let i = 1; i < n; i++) {
    let w = rope[i] * (n - 1);
    if (m < w) m = w;
}

console.log(m);