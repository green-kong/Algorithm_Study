const strArr = require('fs').readFileSync('example2.txt').toString().trim().split('\n')
const gemNum = parseInt(strArr[0].trim().split(' ')[0])
let gemArr = strArr.splice(1, gemNum).map(v => v.trim().split(' ').map(w => Number(w)))
const bagArr = strArr.slice(1,).map(w => Number(w))
gemArr.sort((a, b) => a[0] - b[0])
bagArr.sort((a, b) => a - b)
let sum = 0
let max = 0
let maxIdx = -1
bagArr.forEach(v => {
    max = 0
    maxIdx = -1
    for (let i = 0; i < gemArr.length; i++) {
        if (gemArr[i][0] > v) break;
        else {
            if (gemArr[i][1] > max) {
                max = gemArr[i][1]
                maxIdx = i
            }
        }
    }
    sum += max
    gemArr.splice(maxIdx, 1)
})

console.log(sum)

// 시간초과
// 가방과 보석을 무게순으로 정렬한 다음 가방에 들어갈 수 있는 무게 중 가장 비싼 애를 찾아서 sum에 더하는 방식으로 풀었음.
