const input = require('fs')
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M, H] = input.shift().split(' ').map(Number);

const ladder = Array.from(Array(H), () => new Array(N - 1).fill(0));

const coordinate = input.map((v) => v.split(' ').map(Number));

for (let i = 0; i < coordinate.length; i++) {
  const row = coordinate[i][0] - 1;
  const col = coordinate[i][1] - 1;

  ladder[row][col] = 1;
}

const checkBridge = (r, c) => {
  if (ladder[r][c] === 1) {
    return false;
  }

  if (c > 0 && ladder[r][c - 1] === 1) {
    return false;
  }

  if (c < N - 2 && ladder[r][c + 1] === 1) {
    return false;
  }

  return true;
};

const checkResult = () => {
  for (let i = 0; i < N - 1; i++) {
    let r = 0;
    let c = i;

    while (r < H) {
      if (ladder[r][c] === 1) {
        c += 1;
      } else if (ladder[r][c - 1]) {
        c -= 1;
      }
      r++;
    }

    if (i !== c) {
      return false;
    }
  }

  return true;
};

const dfs = (cnt, end, last) => {
  if (cnt !== end) {
    for (let i = last; i < H * (N - 1); i++) {
      const r = Math.floor(i / (N - 1));
      const c = i % (N - 1);

      if (checkBridge(r, c)) {
        ladder[r][c] = 1;
        dfs(cnt + 1, end, i + 2);
        ladder[r][c] = 0;
      }
    }
  } else {
    if (checkResult()) {
      console.log(end);
      process.exit(1);
    }
  }
};

const init = () => {
  for (let i = 0; i <= 3; i++) {
    dfs(0, i, 0);
  }

  console.log(-1);
};

init();
