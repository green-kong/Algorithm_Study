const input = require('fs').readFileSync('example2.txt').toString().trim().split('')
const stack = []
let sum = 0

for (let i = 0; i < input.length; i++) {
    if (input[i] === '(') stack.push(1)
    else {
        stack.pop()
        if (input[i - 1] === '(') sum += stack.length
        else { sum++ }
    }
}

console.log(sum)