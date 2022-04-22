const strArr = require('fs').readFileSync('example2.txt').toString().trim().split('\n')
const gemNum = parseInt(strArr[0].trim().split(' ')[0])
let gemArr = strArr.splice(1, gemNum).map(v => v.trim().split(' ').map(w => Number(w)))
let bagArr = strArr.slice(1,).map(w => Number(w))
gemArr.sort((a, b) => a[0] - b[0])
bagArr.sort((a, b) => b - a)
// console.log(gemArr, bagArr)
let stack = []
let sum = 0
let count = 0
let maxBag = bagArr.length
gemArr.forEach(([m, v]) => {
    if (m <= bagArr[bagArr.length - 1]) {
        stack.push(v)
        stack.sort((a, b) => a - b)
    } else {
        // 같은 최대무게값을 가진 가방이 여러개가 있는 경우
        while (m > bagArr[bagArr.length - 1]) {
            // console.log(stack, m)
            if (count >= maxBag) break;
            if (stack.length === 0) { bagArr.pop(); count++; break; } // 가방은 있는데 담을 보석이 없는 경우 가방 버리기
            else {
                sum += stack.pop()
                bagArr.pop()
                count++
            }
        }
        stack.push(v)
        stack.sort((a, b) => a - b)
    }
    // console.log(stack, count, sum)
})

while (bagArr.length > 0) {
    if (count >= maxBag) break;
    sum += stack.pop()
    bagArr.pop()
}

console.log(sum)

// 메모리초과
// 보석, 가방을 무게 순서대로 내림차순 정렬한 뒤
// 가장 마지막 가방 무게 (작은 무게) 이하인 보석들을 stack에 담고 가격 오름차순으로 정렬 -> pop으로 가방무게가 더 커질때까지 제거해서 sum에 담음