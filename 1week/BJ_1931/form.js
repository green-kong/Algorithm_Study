let input = require('fs').readFileSync('example.txt').toString().split('\n');
let count = Number(input[0]);
let arr = []

for (let i = 1; i <= count; i++) {
    let num = input[i].split(" ");
    arr.push(num)
}

console.log(count, arr);