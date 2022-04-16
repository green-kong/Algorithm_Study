const fs = require('fs');

const test = fs.readFileSync('./test.txt').toString().split('\n');
const length = Number(test[0]);
const input = test
  .filter((v, i) => i > 0)
  .map((v) => v.split(' ').map((v) => Number(v)));

function solution1(length, input) {
  const order = input.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });

  console.log(order);

  const timeTable = [];
  for (let i = 0; i < length; i++) {
    if (timeTable.length === 0) {
      timeTable.push(order[i]);
      continue;
    }
    if (timeTable[timeTable.length - 1][1] <= order[i][0]) {
      timeTable.push(order[i]);
    }
  }
  console.log(timeTable.length);
}

function solution2(length, input) {
  const order = input.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });

  let timeTable = 1;
  let tmp = order[0];
  for (let i = 1; i < length; i++) {
    if (tmp[1] <= order[i][0]) {
      tmp = order[i];
      timeTable += 1;
    }
  }
  console.log(timeTable);
}

solution1(length, input);
solution2(length, input);
// [
//   ['1', '4'],
//   ['3', '5'],
//   ['0', '6'],
//   ['5', '7'],
//   ['3', '8'],
//   ['5', '9'],
//   ['6', '10'],
//   ['8', '11'],
//   ['8', '12'],
//   ['2', '13'],
//   ['12', '14'],
// ];

// order;
// [
//   ['1', '4'],
//   ['3', '5'],
//   ['0', '6'],
//   ['5', '7'],
//   ['3', '8'],
//   ['5', '9'],
//   ['6', '10'],
//   ['8', '11'],
//   ['8', '12'],
//   ['2', '13'],
//   ['12', '14'],
// ];

// 문자열을 숫자로 변경을 안해줬더니
// 문자열 비교를 했을때 아스키 코드로 비교를 한다;;
// 그래서 '11'<='8' 이 true가 되는 사태가 벌어짐;;
// https://hianna.tistory.com/374

// [
//   [1, 4],
//   [3, 5],
//   [0, 6],
//   [5, 7],
//   [3, 8],
//   [5, 9],
//   [2, 13],
//   [4, 13],
//   [6, 13],
//   [8, 13],
//   [12, 14],
// ];

// const [a, b] = fs
//   .readFileSync('/dev/stdin')
//   .toString()
//   .split(' ')
//   .map((v) => Number(v));

// function solution2(a, b) {
//   return a + b;
// }
// console.log(solution2(a, b));
