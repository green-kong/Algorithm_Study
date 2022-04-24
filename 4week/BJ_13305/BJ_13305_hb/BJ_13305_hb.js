const [num, distance, price] = require('fs').readFileSync('example2.txt').toString().trim().split('\n')
const priceArr = price.trim().split(' ').map(v => BigInt(v))
const distanceArr = distance.trim().split(' ').map(v => BigInt(v))

let min = -1
let sum = 0
sum = BigInt(sum)
for (i = 0; i < num - 1; i++) {
    if (i == 0) min = priceArr[0]
    else if (priceArr[i] < min) min = priceArr[i]
    sum += min * distanceArr[i]
}
console.log(sum.toString())