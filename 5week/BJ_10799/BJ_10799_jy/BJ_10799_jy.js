const input = require('fs')
                .readFileSync('./test.txt')
                .toString()
                .trim();
const stack = [];
let answer = 0;

for (let i in input) {
    if (input[i] === '(') stack.push(input[i]);
    else {
        stack.pop();
        if (input[i - 1] === '(') answer += stack.length;
        else answer++;
    }
}

console.log(answer);