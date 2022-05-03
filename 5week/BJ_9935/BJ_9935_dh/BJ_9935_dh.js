const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

const [str, bomb] = input.map((v) => v.split(''));

const stack = [];

for (let i = 0; i < str.length; i++) {
  stack.push(str[i]);

  if (stack[stack.length - 1] === bomb[bomb.length - 1]) {
    const tmp = stack.slice(bomb.length * -1);
    if (tmp.join('') === bomb.join('')) {
      for (let j = 0; j < bomb.length; j++) {
        stack.pop();
      }
    }
  }
}

console.log(stack.length ? stack.join('') : 'FRULA');
