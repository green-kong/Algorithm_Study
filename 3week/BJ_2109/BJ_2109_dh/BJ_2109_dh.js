const fs = require('fs');

const test = fs.readFileSync('./input.txt').toString().trim().split('\n');
const length = test.shift();
const input = test.map((v) => v.split(' ').map((v) => Number(v)));

input.sort((a, b) => {
  if (b[0] === a[0]) {
    return b[1] - a[1];
  }
  return b[0] - a[0];
});

// let maxDate = Math.max(...input.map((v) => v[1]));
// 👆 메모리초과 돼서 아래 코드로 변경

let maxDate = 0;

for (let i = 1; i < input.length; i++) {
  maxDate = maxDate > input[i][1] ? maxDate : input[i][1];
}

let totalPay = 0;

const scedule = Array(maxDate).fill(null);

for (let i = 0; i < input.length; i++) {
  let [p, d] = input[i];
  while (d > 0) {
    if (!scedule[d]) {
      scedule[d] = true;
      totalPay += p;
      break;
    } else {
      d -= 1;
    }
  }
}
console.log(totalPay);
