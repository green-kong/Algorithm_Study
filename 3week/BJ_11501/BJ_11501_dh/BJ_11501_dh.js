const input = require('fs')
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n');

const length = Number(input.shift());

let inputArr = [];

input.forEach((v, i) => {
  if (i % 2) {
    inputArr.push(v);
  }
});

inputArr = inputArr.map((v) => v.split(' ').map(Number));

const maxValArr = [];
inputArr.forEach((v) => {
  let max = -1;
  let totalVal = 0;
  for (let i = v.length - 1; i >= 0; i--) {
    if (max < v[i]) {
      max = v[i];
    } else {
      totalVal += max - v[i];
    }
  }
  maxValArr.push(totalVal);
});
console.log(maxValArr.join('\n'));
