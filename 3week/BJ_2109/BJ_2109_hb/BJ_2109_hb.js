let arr = require('fs').readFileSync('example2.txt').toString().trim().split('\n').slice(1,)
arr = arr.map(v => v = v.split(' ').map(w => parseInt(w)))
arr.sort((a, b) => b[0] - a[0])

const payArr = Array(10000).fill(null)

arr.forEach(([pay, day]) => {
    // 1. 해당 day에 자리 있는지
    if (payArr[day - 1] == null) payArr[day - 1] = pay
    // 2. 0~day array에 자리 있는지
    else if (payArr.slice(0, day - 1).includes(null)) {
        payArr[payArr.slice(0, day - 1).lastIndexOf(null)] = pay
    }
    // 3. 0~day array의 최소값보다 pay가 큰지
    else if (pay > Math.min(...payArr.slice(0, day - 1))) {
        payArr[payArr.slice(0, day - 1).lastIndexOf(Math.min(...payArr.slice(0, day - 1)))] = pay
    }
    // 4. 1~3 조건 모두 해당 안되면 버림
})

const sum = payArr.filter(p => p !== null).reduce((ac, v) => { ac += v; return ac }, 0)
console.log(sum)