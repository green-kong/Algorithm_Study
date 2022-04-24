const input = require('fs')
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n');

const length = Number(input[0]);
const distanceArr = input[1].split(' ').map(BigInt);
const costArr = input[2].split(' ').map(BigInt);
costArr.pop();
let totalCost = 0n;

for (let i = 0; i < costArr.length; i++) {
  if (costArr[i - 1] < costArr[i]) {
    costArr[i] = costArr[i - 1];
  }

  totalCost += costArr[i] * distanceArr[i];
}

console.log(totalCost.toString());
