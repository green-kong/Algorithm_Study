const arr = [0];
const [n, ...arr2] = require('fs')
                .readFileSync('./test.txt')
                .toString()
                .trim()
                .split('\n')
                .map(Number);
for (let i in arr2) arr.push(arr2[i]);
arr.push(0);
const stack = [0];
let answer = 0;

for (let i = 1; i <= n + 1; i++) {
    while (arr[i] < arr[stack[stack.length - 1]] && stack.length !== 0) {
        let h = arr[stack[stack.length - 1]];
        stack.pop();
        let w = 0;
        if (stack.length !== 0) w = i - stack[stack.length - 1] - 1;
        answer = Math.max(answer, w * h);
    }
    stack.push(i);
}

console.log(answer);

// stack 배열의 양 끝에 0을 넣어주어야 예외 처리가 된다.