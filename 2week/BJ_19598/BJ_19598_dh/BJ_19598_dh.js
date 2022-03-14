const fs = require('fs');

const test = fs.readFileSync('./test.txt').toString().split('\n');
const length = Number(test[0]);
const input = [];

for (let i = 0; i < length; i++) {
  input.push(test[i + 1].split(' ').map(Number));
}

function solution(input) {
  const time = {};
  input.forEach(([start, end]) => {
    time[start] = time[start] ? time[start] + 1 : 1;
    time[end] = time[end] ? time[end] - 1 : -1;
  });

  const timeList = Object.entries(time);
  let maxCnt = 0;
  let curCnt = 0;
  timeList.forEach((v) => {
    curCnt += v[1];
    maxCnt = maxCnt > curCnt ? maxCnt : curCnt;
  });
  console.log(maxCnt);
}
solution(input);

//시간초과 뜸 ^^
// function solution(length, input) {
//   input.sort((a, b) => a[0] - b[0]);

//   const startTimes = input.map((v) => v[0]);

//   const cntList = [];

//   for (let i = 0; i < length; i++) {
//     let cnt = 0;
//     for (let j = 0; j < length; j++) {
//       if (input[j][0] <= startTimes[i] && input[j][1] > startTimes[i]) {
//         cnt++;
//       }
//     }
//     cntList.push(cnt);
//   }
//   console.log(Math.max(...cntList));
// }

// function solution(length, input) {
//   input.sort((a, b) => a[0] - b[0]);
//   console.log(input);

//   const startTimes = input.map((v) => v[0]);
//   console.log(startTimes);
//   let maxCount = 0;

//   for (let i = 0; i < length; i++) {
//     let cnt = 0;
//     for (let j = 0; j < length; j++) {
//       if (input[j][0] <= startTimes[i] && input[j][1] > startTimes[i]) {
//         cnt++;
//       }
//       // 이거해주면 될줄 알앗는데 안됨ㅎ;;
//       if (input[j][0] > startTimes[i]) break;
//     }
//     maxCount = maxCount > cnt ? maxCount : cnt;
//   }
//   console.log(maxCount);
// }
// solution(length, input);

// function solution(length, input) {
//   const timeList = [];
//   input.forEach((v) => {
//     timeList.push([v[0], 1]);
//     timeList.push([v[1], -1]);
//   });
//   let maxCnt = 0;
//   let curCnt = 0;
//   timeList.sort((a, b) => a[0] - b[0]);
//   timeList.forEach((v) => {
//     curCnt += v[1];
//     maxCnt = maxCnt > curCnt ? maxCnt : curCnt;
//   });
//   console.log(maxCnt);
// }
// solution(length, input);
