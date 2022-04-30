const tmp = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

const length = tmp.shift();
const input = tmp.map((v) => v.split(''));

input.forEach((v) => {
  const stack = [];
  v.forEach((v) => {
    if (v === '(') {
      stack.push(v);
    }

    if (v === ')' && stack[stack.length - 1] === '(') {
      stack.pop();
    } else if (v === ')' && stack[stack.length - 1] !== '(') {
      stack.push(v);
    }
  });
  console.log(stack.length ? 'NO' : 'YES');
});
