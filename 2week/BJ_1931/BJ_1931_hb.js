let input = require('fs').readFileSync('example.txt').toString().split('\n');
let count = Number(input[0]);
let arr = []

for (let i = 1; i <= count; i++) {
    let num = input[i].split(" ");
    num = num.map(v => v = parseInt(v))
    arr.push(num)
}

arr.sort((a, b) => a[0] - b[0])
arr.sort((a, b) => a[1] - b[1])

let answerArr = []
arr.forEach(v => {
    if (answerArr[0] == undefined || v[0] >= answerArr[answerArr.length - 1][1]) {
        answerArr.push(v)
    }
})

console.log(answerArr.length)

// 처음엔 시작시간 순서로 정렬해서 그거에 맞춰서 코드짜서 풀었다가 
// -> 끝나는 시간 순서로 정렬해서 풀었다가 
// -> 예제에 [5,7], [5,5] 순서로 던져주는 경우에서 오류가 나는걸 알고 시작순서대로 먼저 정렬한 다음 끝나는 순서대로 한번 더 정렬을 해줘야 한다는 걸 파악함