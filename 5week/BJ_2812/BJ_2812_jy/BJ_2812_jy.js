const [NK, num] = require('fs')
                .readFileSync('./test.txt')
                .toString()
                .trim()
                .split('\n');
const [N, K] = NK.split(' ').map(Number);
const stack = [];
let cnt = K;

for (let i in num) {
    while (cnt > 0 && Number(num[i]) > stack[stack.length - 1]) {
        stack.pop();
        cnt--;
    }
    if (stack.length < N - K) stack.push(Number(num[i]));
}

console.log(stack.join(''));

// 코드 마지막 줄에 console.log(Number(stack.join(''))); 으로 했을 때에는
// 바로 틀렸다고 떴는데 Number() 없애니까 맞았다고 뜸..