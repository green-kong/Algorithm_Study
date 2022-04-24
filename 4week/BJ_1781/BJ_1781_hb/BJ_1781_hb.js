let arr = require('fs').readFileSync('example.txt').toString()
    .trim()
    .split('\n')
    .slice(1,)
    .map(v => v.trim().split(' ').map(v => parseInt(v)))
    .sort((a, b) => a[0] - b[0])

console.log(arr)

let ramen = []
arr.forEach(([deadline, number]) => {
    ramen.push(number)
    ramen.sort((a, b) => b - a)
    while (ramen.length > deadline) ramen.pop()
})

let sum = ramen.reduce((ac, v) => { ac += v; return ac; }, 0)
console.log(sum)
// 메모리초과로 실패...
// deadline순서대로 전체 배열 정렬해줌
// 라면 arr에 일단 넣고 -> 내림차순으로 sort한 다음
// deadline보다 더 많다면 그만큼 pop해서 적은 수량을 버림
// 아래 로직보다는 효율이 나은것같은데 똑같이 이십몇퍼에서 메모리초과 뜸.



// 처음 했던 풀이 : 순회강연이랑 비슷한 로직으로 짬.
// null로 채운 20만개의 length를 가진 배열을 만들고
// 1. 하나씩 돌면서 해당 deadline이 비어있으면 넣고
// 2. 0~deadline에 빈자리가 있으면 넣고
// 3. 0~deadline 사이에 가장 작은 컵라면을 받는 시간이랑 비교해서 더 많은 컵라면 받으면 그때랑 바꿈.

// let arr = require('fs').readFileSync('example.txt').toString().trim().split('\n').slice(1,)
// arr = arr.map(v => v.trim().split(' ').map(v => parseInt(v))).sort((a, b) => a[0] - b[0])
// let ramen = Array(200000).fill(null)
// console.log(arr)
// arr.forEach(([deadline, number]) => {
//     if (ramen[deadline - 1] === null) { ramen[deadline - 1] = number }
//     else if (ramen.slice(0, deadline).includes(null)) { ramen[ramen.slice(0, deadline).indexOf(null)] = number }
//     else {
//         let min = Math.min(...ramen.slice(0, deadline))
//         if (min < number) {
//             ramen[ramen.indexOf(min)] = number
//         }
//     }
// })

// sum = ramen.filter(v => v !== null).reduce((ac, v) => { ac += v; return ac; }, 0)
// console.log(sum)
