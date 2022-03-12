let input = require('fs').readFileSync('example.txt').toString().split('\n'); // 제출시 'example.txt'를 "/dev/stdin"으로 변경
let count = Number(input[0]);
let arr = []

for (let i = 1; i <= count; i++) {
    let num = input[i].split(" ");
    arr.push(num)
}

console.log(count, arr);