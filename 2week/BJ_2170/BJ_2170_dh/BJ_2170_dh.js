const fs = require('fs');

const test = fs.readFileSync('./test.txt').toString().split('\n');
const length = Number(test[0]);
const input = [];

for (let i = 0; i < length; i++) {
  input.push(test[i + 1].split(' ').map(Number));
}

function solution(input) {
  let answer = 0;
  input.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });

  let lastPoint = input[0][1];
  input.forEach((v, i) => {
    if (i === 0) {
      answer += v[1] - v[0];
    } else if (lastPoint >= v[0] && lastPoint >= v[1]) {
      answer += 0;
    } else if (lastPoint >= v[0] && lastPoint < v[1]) {
      answer += v[1] - lastPoint;
      lastPoint = v[1];
    } else if (lastPoint < v[0]) {
      answer += v[1] - v[0];
      lastPoint = v[1];
    }
  });
  console.log(answer);
}
solution(input);

// 틀림
// 반레 [[4,10],[5,5]]
// function solution(input) {
//   let answer = 0;
//   input.sort((a, b) => {
//     if (a[0] === b[0]) {
//       return a[1] - b[1];
//     }
//     return a[0] - b[0];
//   });

//   input.forEach((v, i, t) => {
//     const j = i - 1;
//     if (i === 0) {
//       answer += v[1] - v[0];
//       console.log(`${i + 1}번째 : ${v[1] - v[0]}`);
//     } else if (t[j][1] > v[0]) {
//       console.log(`${i + 1}번째 : ${v[1] - t[j][1]}`);
//       answer += v[1] - t[j][1];
//     } else if (t[j][1] <= v[0]) {
//       console.log(`${i + 1}번째 : ${v[1] - v[0]}`);
//       answer += v[1] - v[0];
//     }
//   });
//   console.log(input, answer);
// }
// solution(input);
