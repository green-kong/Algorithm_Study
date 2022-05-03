const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

let counter = Number(input[0].split(' ')[1]);
const length = Number(input[0].split(' ')[0]);
const reqLength = length - counter;
const num = input[1].split('').map(Number);
const stack = [];

for (let i = 0; i < num.length; i++) {
  if (stack.length === 0) {
    stack.push(num[i]);
    continue;
  }

  while (stack[stack.length - 1] < num[i] && counter > 0) {
    stack.pop();
    counter -= 1;
  }

  if (stack.length < reqLength) {
    stack.push(num[i]);
  }

  if (stack.length === reqLength && counter === 0) {
    break;
  }
}

console.log(stack.join(''));
