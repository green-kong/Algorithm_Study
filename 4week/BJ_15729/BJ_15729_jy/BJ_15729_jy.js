const input = require('fs')
                .readFileSync('./test.txt')
                .toString()
                .trim()
                .split('\n');
const arr = input[1].split(' ').map(Number);
let answer = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr.every(v => v === 0)) break;
    if (arr[i] === 1) {
        arr[i] = 0;
        if (arr[i + 1]) arr[i + 1] = 0;
        else arr[i + 1] = 1;
        if (arr[i + 2]) arr[i + 2] = 0;
        else arr[i + 2] = 1;
        answer++;
    }
}

console.log(answer);

// for문 1번 도는데 왜 시간 초과가 뜨는지 모르겠다...