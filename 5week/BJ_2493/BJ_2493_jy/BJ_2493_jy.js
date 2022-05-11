let [n, ...arr] = require('fs')
                .readFileSync('./test.txt')
                .toString()
                .trim()
                .split('\n');
n = Number(n);
arr = arr[0].split(' ').map(Number);
const stack = [0];

for (let i = 1; i < n; i++) {
    let j = i - 1;
    while (arr[i] > arr[j]) {
        if (j < stack[stack.length - 1] - 1) break;
        j--;
    }
    if (j >= stack[stack.length - 1] - 1) stack.push(j + 1);
    else stack.push(0);
}

console.log(stack.join(' '));

// 시간 초과 나는 이유를 모르겠음..