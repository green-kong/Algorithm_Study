const str = require('fs').readFileSync('example.txt').toString().trim().split('\n')
str.forEach((v, i) => {
    if (i % 2 === 0 && i !== 0) calculateProfit(v)
})

function calculateProfit(v) {
    let arr = v.split(' ').map(w => parseInt(w))
    let max = 0
    let profit = 0
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] > max) { max = arr[i] }
        else { profit += max - arr[i] }
    }
    console.log(profit)
}