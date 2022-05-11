const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const length = input.shift();

input.push(0);
input.unshift(0);
const stack = [0];
let square = 0;

for (let i = 1; i < input.length; i++) {
  while (input[stack[stack.length - 1]] > input[i]) {
    const height = input[stack[stack.length - 1]];
    const idx = stack.pop();
    const width = i - stack[stack.length - 1] - 1;
    square = square > width * height ? square : width * height;
  }
  stack.push(i);
}

console.log(square);
