const fs = require('fs');

const test = fs.readFileSync('./input.txt').toString().split('\n');
const concent = Number(test[0].split(' ')[0]);
const length = Number(test[0].split(' ')[1]);
const input = test[1].split(' ').map((v) => Number(v));

// function solution(concent, input, length) {
//   let count = 0;
//   const holes = [];
//   for (let i = 0; i < length; i++) {
//     if (holes.length === 0) {
//       holes.push(input[i]);
//       continue;
//     }

//     if (holes.length < concent && !holes.includes(input[i])) {
//       holes.push(input[i]);
//       continue;
//     }

//     if (!holes.includes(input[i])) {
//       for (let j = 0; j < holes.length; j++) {
//         if (input.indexOf(holes[j], i) < 0) {
//           holes[j] = input[i];
//           count += 1;
//           break;
//         }

//         if (j === holes.length - 1) {
//           console.log(input.indexOf(holes[j], i));
//           holes[0] = input[i];
//           count += 1;
//           break;
//         }
//       }
//     }
//   }
//   console.log(count);
// }

// 반례
// 3 10
// 3 2 1 4 3 2 4 2 3 1

function solution(concent, input) {
  let count = 0;
  const holes = [];
  for (let i = 0; i < input.length; i++) {
    if (holes.length === 0) {
      holes.push(input[i]);
      continue;
    }

    if (holes.length < concent && !holes.includes(input[i])) {
      holes.push(input[i]);
      continue;
    }

    if (!holes.includes(input[i])) {
      let maxIdx = -2;
      for (let j = 0; j < holes.length; j++) {
        const curIdx = input.indexOf(holes[j], i);
        maxIdx = curIdx > maxIdx ? curIdx : maxIdx;
        if (input.indexOf(holes[j], i) < 0) {
          holes[j] = input[i];
          count += 1;
          break;
        }

        if (j === holes.length - 1) {
          holes[holes.indexOf(input[maxIdx])] = input[i];
          count += 1;
          break;
        }
      }
    }
  }
  console.log(count);
}

solution(concent, input);

// 3 10
// 3 2 1 4 3 2 4 2 3 1
