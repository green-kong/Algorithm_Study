const input = require('fs')
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

let answer = [];
const zeros = [];
let amountBlank;

const findZeorBoard = () => {
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (input[i][j] === 0) {
        zeros.push([i, j]);
      }
    }
  }
};

const checkBlank = (r, c, value) => {
  for (let i = 0; i < input.length; i++) {
    if (input[r][i] === value) {
      return false;
    }
  }

  for (let i = 0; i < input.length; i++) {
    if (input[i][c] === value) {
      return false;
    }
  }

  const startRow = Math.floor(r / 3) * 3;
  const startCol = Math.floor(c / 3) * 3;

  for (let i = startRow; i < startRow + 3; i++) {
    for (let j = startCol; j < startCol + 3; j++) {
      if (input[i][j] === value) {
        return false;
      }
    }
  }

  return true;
};

const sudoku = (cnt, amountBlank) => {
  if (cnt === amountBlank) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        answer.push(input[i][j]);
      }
      console.log(answer.join(' '));
      answer = [];
    }
    process.exit(0);
  }
  const [r, c] = zeros[cnt];

  for (let i = 1; i <= 9; i++) {
    if (checkBlank(r, c, i)) {
      input[r][c] = i;
      sudoku(cnt + 1, amountBlank);
      input[r][c] = 0;
    }
  }
};

const solution = () => {
  findZeorBoard();
  amountBlank = zeros.length;
  sudoku(0, amountBlank);
};

solution();
