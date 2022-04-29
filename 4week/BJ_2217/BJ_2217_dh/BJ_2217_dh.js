const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const length = input.shift();

input.sort((a, b) => a - b);

let maxWeight = 0;
input.forEach((v, i) => {
  const curWeight = v * (length - i);
  maxWeight = maxWeight > curWeight ? maxWeight : curWeight;
});

console.log(maxWeight);
