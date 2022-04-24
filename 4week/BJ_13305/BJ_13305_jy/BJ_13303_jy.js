const input = require('fs')
                .readFileSync('./test.txt')
                .toString()
                .trim()
                .split('\n');
const arr = input.map(v => v.split(' ').map(v => BigInt(v)));
arr[2].pop();

let answer = 0n;

let M = arr[2][0];
for (let i = 0; i < arr[2].length; i++) {
    answer += M * arr[1][i];
    if (M > arr[2][i + 1]) M = arr[2][i + 1];
}

console.log(String(answer));

// BitInt 데이터 타입을 알게 됨..