const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

const originArr = Array(Number(input[0])).fill(false);
const arr = input[1].split(' ').map((v) => !!Number(v));

let idx = 0;
while (originArr.join('') !== arr.join('')) {}
