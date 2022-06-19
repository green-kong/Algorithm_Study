const tmp = require('fs')
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n');

const [R, C] = tmp.shift().split(' ').map(Number);

const input = tmp.map((v) => v.split(''));

const answers = [];

const dRow = [-1, 0, 1, 0];
const dCol = [0, 1, 0, -1];

const dfs = ({ row, column, count, visted }) => {
  const newVisted = [...visted, input[row][column]];
  answers.push(count);

  for (let i = 0; i < 4; i++) {
    const nRow = row + dRow[i];
    const nCol = column + dCol[i];
    if (
      nRow >= 0 &&
      nRow < R &&
      nCol >= 0 &&
      nCol < C &&
      !newVisted.includes(input[nRow][nCol])
    ) {
      const param = {
        row: nRow,
        column: nCol,
        count: count + 1,
        visted: newVisted,
      };
      dfs(param);
    }
  }
};

const param = {
  row: 0,
  column: 0,
  visted: [],
  count: 1,
};
dfs(param);

console.log(Math.max(...answers));
