const [multitaplength, count] = require('fs').readFileSync('example.txt').toString().split('\n')[0].split(' ')
const arr = require('fs').readFileSync('example.txt').toString().split('\n')[1].split(' ')

let pullCount = 0
const multitap = []
arr.forEach((v, i) => {
    if (multitap.includes(v)) return
    else if (multitap.length < multitaplength) multitap.push(v)
    else {
        const tapIdx = multitap.map((w, j) => { return arr.slice(i + 1,).indexOf(w) })
        if (tapIdx.includes(-1)) {
            multitap.splice(tapIdx.indexOf(-1), 1)
        } else {
            multitap.splice(tapIdx.indexOf(Math.max(...tapIdx)), 1)
        }
        pullCount += 1
        multitap.push(v)
    }
})
console.log(pullCount)



// 1. 빈 multitap 어레이를 만들고, arr 값을 0번부터 차례대로 push해주는데
// 2. multitap에 이미 있으면 push 안하고 통과
// 3. multitap에 빈 구멍이 있으면 push
// 4. multitap이 꽉찼고 기존에 없는 값을 넣어주려면
// 4-1. 이제 사용안할 애을 우선적으로 빼줌
// 4-2. 모두 앞으로 또 사용할 예정이라면 가장 마지막에 사용할 애를 빼줌