const input = require('fs')
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n');

const length = input.shift();
const bluePrint = input.map((v) => v.split('').map(Number));

const visted = {};
const answerArr = [];

/*
[
  [0, 1, 1, 0, 1, 0, 0],
  [0, 1, 1, 0, 1, 0, 1],
  [1, 1, 1, 0, 1, 0, 1],
  [0, 0, 0, 0, 1, 1, 1],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 0, 0, 0],
];
*/

const bfs = (r, c) => {
  const queue = [[r, c]];

  const dirR = [-1, 0, 1, 0];
  const dirC = [0, 1, 0, -1];

  let cnt = 0;
  visted[[r, c]] = true;
  while (queue.length) {
    cnt += 1;
    const co = queue.shift();
    for (let j = 0; j < dirR.length; j++) {
      const nr = co[0] + dirR[j];
      const nc = co[1] + dirC[j];

      if (
        nr >= 0 &&
        nc >= 0 &&
        nr < length &&
        nc < length &&
        !visted[[nr, nc]] &&
        bluePrint[nr][nc] === 1
      ) {
        visted[[nr, nc]] = true;
        queue.push([nr, nc]);
      }
    }
  }
  return cnt;
};

for (let i = 0; i < length; i++) {
  for (let j = 0; j < length; j++) {
    if (bluePrint[i][j] === 1 && !visted[[i, j]]) {
      answerArr.push(bfs(i, j));
    }
  }
}
answerArr.sort((a, b) => a - b);
console.log(answerArr.length + '\n' + answerArr.join('\n'));
