const input = require('fs')
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

/*
[
  ['0', '3', '5', '4', '6', '9', '2', '7', '8'],
  ['7', '8', '2', '1', '0', '5', '6', '0', '9'],
  ['0', '6', '0', '2', '7', '8', '1', '3', '5'],
  ['3', '2', '1', '0', '4', '6', '8', '9', '7'],
  ['8', '0', '4', '9', '1', '3', '5', '0', '6'],
  ['5', '9', '6', '8', '2', '0', '4', '1', '3'],
  ['9', '1', '7', '6', '5', '2', '0', '8', '0'],
  ['6', '0', '3', '7', '0', '1', '9', '5', '2'],
  ['2', '5', '8', '3', '9', '4', '7', '6', '0'],
];
*/

// const checkRow = (r, c) => {
//   const rowNotZero = input[r].filter((v) => v !== 0);
//   if (rowNotZero.length === 8) {
//     const sum = rowNotZero.reduce((acc, cur) => {
//       return acc + cur;
//     }, 0);

//     input[r][c] = 45 - sum;
//     return true;
//   }
//   return false;
// };

// const checkColumn = (r, c) => {
//   const colNotZero = input.map((v) => v[c]).filter((v) => v !== 0);
//   if (colNotZero.length === 8) {
//     const sum = colNotZero.reduce((acc, cur) => {
//       return acc + cur;
//     }, 0);

//     input[r][c] = 45 - sum;
//     return true;
//   }
//   return false;
// };

// const checkBox = (r, c) => {
//   const startRow = Math.floor(r / 3) * 3;
//   const startCol = Math.floor(c / 3) * 3;

//   const boxNotZero = [];

//   for (let r = startRow; r < startRow + 3; r++) {
//     for (let c = startCol; c < startCol + 3; c++) {
//       if (input[r][c] !== 0) {
//         boxNotZero.push(input[r][c]);
//       }
//     }
//   }

//   if (boxNotZero.length === 8) {
//     const sum = boxNotZero.reduce((acc, cur) => {
//       return acc + cur;
//     }, 0);

//     input[r][c] = 45 - sum;
//     return true;
//   }
//   return false;
// };

const queue = [];

const appendQueue = () => {
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (input[r][c] === 0) {
        queue.push([r, c]);
      }
    }
  }
};

const bfs = () => {
  appendQueue();
  while (queue.length) {
    const [r, c] = queue.shift();
    const result = checkBlank(r, c);
    if (result) {
      input[r][c] = result;
      continue;
    }

    queue.push([r, c]);
  }
};

function checkBlank(r, c) {
  const row = input[r];
  const column = input.map((v) => v[c]);
  const startRow = Math.floor(r / 3) * 3;
  const startCol = Math.floor(c / 3) * 3;

  const box = [];

  for (let r = startRow; r < startRow + 3; r++) {
    for (let c = startCol; c < startCol + 3; c++) {
      box.push(input[r][c]);
    }
  }

  for (let i = 1; i <= 9; i++) {
    if (row.includes(i)) {
      continue;
    }

    if (column.includes(i)) {
      continue;
    }

    if (box.includes(i)) {
      continue;
    }

    return i;
  }

  return 0;
}

bfs();

console.log(input.map((v) => v.join(' ')).join('\n'));
