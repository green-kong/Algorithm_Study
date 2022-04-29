const input = require('fs').readFileSync('./example.txt').toString().split('\n').map(Number)
const num = input[0]
const arr = input.slice(1,).sort((a, b) => a - b)

let max = 0
for (let i = 0; i < num; i++) {
    max = arr[i] * (num - i) > max ? arr[i] * (num - i) : max
}
console.log(max)