const fs = require('fs');

const input = require('fs')
  .readFileSync('./input.txt')
  .toString()
  .split('\n')[0]
  .split('');

function solution(input) {
  let count = 0;
  input.forEach((v, i, t) => {
    if (v !== t[i - 1] && t[i - 1] !== undefined) count += 1;
  });

  console.log(Math.ceil(count / 2));
}

solution(input);
