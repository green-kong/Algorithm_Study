const input = require('fs')
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n');

const tc = Number(input.shift());

const tmp = [];
for (let i = 0; i < input.length; i++) {
  if (input[i].split(' ').length === 1) {
    tmp.push(input.slice(i + 1, i + Number(input[i]) + 1));
    i += Number(input[i]);
  }
}

const inputArr = tmp.map((v) =>
  v.map((v) => v.split(' ').map((v) => Number(v)))
);

inputArr.map((v) => v.sort((a, b) => a[0] - b[0]));

for (let i = 0; i < inputArr.length; i++) {
  const curTest = inputArr[i];
  let count = 1;
  let bestScore = curTest[0][1];
  for (let j = 1; j < curTest.length; j++) {
    const [, curScore] = curTest[j];

    if (curScore < bestScore) {
      count += 1;
      bestScore = curScore;
    }

    if (curScore === 1) {
      break;
    }
  }
  console.log(count);
}
