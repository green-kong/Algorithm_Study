let input = require('fs').readFileSync('예제.txt').toString().split('\n')[0].split('')
// 첫번째줄만 split 해줘야 오류 없이 결과가 나옴.
// .split('\n')[0] 빼고 풀었는데 틀렸다고 나와서 로직 한참 보다가 설마하고 저거 넣으니까 맞았다고 나왔음 ㅠ

// 1->0 변환의 경우를 체크
let count1 = 0
input.reduce((ac, v, i) => {
    if (ac !== v && v == 0) { count1 += 1 }
    ac = v
    return ac
}, -1)

// 0->1 변환의 경우를 체크
let count2 = 0
input.reduce((ac, v, i) => {
    if (ac !== v && v == 1) { count2 += 1 }
    ac = v
    return ac
}, -1)

console.log(Math.min(count1, count2))