const [num, input] = require('fs').readFileSync('example.txt').toString().trim().split('\n')
let [N, canDelete] = num.trim().split(' ').map(Number)
let maxLength = N - canDelete
const arr = input.trim().split('').map(Number)
const stack = []
arr.forEach(v => {
    if (stack.length === 0) stack.push(v)
    else {
        if (stack[stack.length - 1] >= v && stack.length < maxLength) { stack.push(v) }
        else {
            while (canDelete > 0 && stack[stack.length - 1] < v) {
                stack.pop()
                canDelete--
            }
            if (stack.length < maxLength) { stack.push(v) }
        }
    }
})
console.log(maxLength)
console.log(stack.join(''))