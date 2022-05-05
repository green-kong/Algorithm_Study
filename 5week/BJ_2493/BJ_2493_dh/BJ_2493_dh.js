const [tmp, tmp2] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

const length = Number(tmp);
const tower = tmp2.split(' ').map(Number);

const stack = [tower[0]];
const idx = [1];
const answer = [0];

for (let i = 1; i < tower.length; i++) {
  while (stack[stack.length - 1] <= tower[i]) {
    stack.pop();
    idx.pop();
  }

  if (stack.length === 0) {
    answer.push(0);
  } else {
    answer.push(idx[idx.length - 1]);
  }

  stack.push(tower[i]);
  idx.push(i + 1);
}

console.log(answer.join(' '));

// 시간초과 남 ^^
// function solution(tower, length) {
//   const allSame = tower.every((v, i, t) => {
//     t[0] === v;
//   });

//   const asc = [...tower].sort((a, b) => a - b).join('') === tower.join('');

//   const desc = [...tower].sort((a, b) => b - a).join('') === tower.join('');

//   if (allSame || asc) {
//     console.log(Array(length).fill(0).join(' '));
//     return;
//   }

//   if (desc) {
//     for (let i = 0; i < tower.length; i++) {
//       answer.push(i);
//     }
//     console.log(answer.join(' '));
//     return;
//   }

//   for (let i = 0; i < tower.length; i++) {
//     stack.push(tower[i]);
//     if (stack.length === 0) {
//       answer.push(0);
//       continue;
//     }

//     let idx = stack.length - 1;
//     while (stack[idx] <= tower[i]) {
//       idx -= 1;

//       if (idx < 0) {
//         answer.push(0);
//         break;
//       }
//     }

//     if (idx >= 0) {
//       answer.push(idx + 1);
//     }
//   }
//   console.log(answer.join(' '));
// }
// solution(tower, length);
