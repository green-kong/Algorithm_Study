const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

for (let i = 0; i < input.length - 1; i++) {
  let [l, p, v] = input[i];
  let tmp = v % p > l ? l : v % p;
  console.log(`Case ${i + 1}: ${Math.floor(v / p) * l + tmp}`);
}

// 이거 왜 안되는지 모르겠음...
// for (let i = 0; i < input.length - 1; i++) {
//   let [l, p, v] = input[i];
//   let answer = 0;
//   while (v >= l) {
//     v = v - p;
//     answer += l;
//   }
//   answer += v > 0 ? v : 0;
//   console.log(answer);
// }
