const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('');

let answer = 0;
let stickCnt = 0;

input.forEach((v, i, t) => {
  if (v === '(') {
    stickCnt += 1;
  }

  if (v === ')') {
    stickCnt -= 1;
    if (t[i - 1] === '(') {
      answer += stickCnt;
    }

    if (t[i - 1] === ')') {
      answer += 1;
    }
  }
});

console.log(answer);
