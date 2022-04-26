let [num, answerArr] = require('fs').readFileSync('example2.txt').toString().split('\n')
answerArr = answerArr.trim().split(' ').map(v => Boolean(Number(v)))
const arr = Array(Number(num)).fill(false)
let count = 0
for (let i = 0; i < num; i++) {
    if (arr[i] !== answerArr[i]) {
        arr[i] = !arr[i]
        arr[i + 1] = !arr[i + 1]
        arr[i + 2] = !arr[i + 2]
        count++
    }
}
console.log(count)