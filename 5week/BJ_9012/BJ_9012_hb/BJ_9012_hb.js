const input = require('fs').readFileSync('example.txt').toString().trim().split('\n')

function countingPS(str) {
    const arr = str.split('')
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '(') count++
        else if (arr[i] === ')') count--

        if (count < 0) {
            console.log('NO')
            return
        }
    }
    count === 0 ? console.log('YES') : console.log('NO')
}

input.forEach((v, i) => {
    if (i !== 0) countingPS(v)
})