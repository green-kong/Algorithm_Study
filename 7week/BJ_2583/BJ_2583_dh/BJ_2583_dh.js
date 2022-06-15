const input = require('fs')
  .readFileSync('./input.txt')
  .toString()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

const [M, N, K] = input.shift();

// 배열 그리기
const bluePrint = Array.from({ length: M }, () =>
  Array.from({ length: N }).fill(0)
);

// console.log(bluePrint);

// [
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0],
//   [1, 1, 1, 1, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0],
// ];

// 배열에 사각형 그리기
input.forEach((v) => {
  const startCo = [v[1], v[0]];
  const endCo = [v[3], v[2]];
  for (let i = startCo[0]; i < endCo[0]; i++) {
    for (let j = startCo[1]; j < endCo[1]; j++) {
      bluePrint[i][j] = 1;
    }
  }
});

/*
console.log(bluePrint)
[
  [0, 0, 0, 0, 1, 1, 0],
  [0, 1, 0, 0, 1, 1, 0],
  [1, 1, 1, 1, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0],
];
*/

// 체크한 좌표 기록
const vistedCoords = {};

// bfs
function bfs(r, c) {
  const result = [];

  const queue = [[r, c]];

  vistedCoords[[r, c]] = true;

  const dirR = [0, 1, 0, -1];
  const dirC = [-1, 0, 1, 0];

  while (queue.length) {
    for (let i = 0; i < queue.length; i++) {
      const coord = queue.shift();
      result.push(coord);
      for (let j = 0; j < 4; j++) {
        const nr = coord[0] + dirR[j];
        const nc = coord[1] + dirC[j];
        if (
          // 넥스트 좌표가 bluePrint 범위 안에 있는지 없는지
          nr >= 0 &&
          nc >= 0 &&
          nr < M &&
          nc < N &&
          // 넥스트 좌표가 0일 때만
          bluePrint[nr][nc] === 0 &&
          // 넥스트 좌표가 이미 방문한 좌표인지
          !vistedCoords[[nr, nc]]
        ) {
          vistedCoords[[nr, nc]] = true;

          queue.push([nr, nc]);
        }
      }
    }
  }
  return result;
}

const tmp = [];
for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (bluePrint[i][j] === 0 && !vistedCoords[[i, j]]) {
      tmp.push(bfs(i, j).length);
    }
  }
}

tmp.sort((a, b) => a - b);

const answer = tmp.length + '\n' + tmp.join(' ');

console.log(answer);
