let input = require('fs').readFileSync('예제.txt').toString().split('\n');
let count = Number(input[0]);
let arr = []
let answer = []

for (let i = 1; i <= count; i++) {
    let num = input[i].split(" ");
    num = num.map(v => v = parseInt(v))
    arr.push(num)
}

//1번 : 메모리초과
function solution1(arr) {
    arr.forEach(v => {
        for (let i = v[0] + 1; i <= v[1]; i++) {
            answer.push(i)
        }
        answer = [...new Set(answer)]
    })

    return answer.length
}

//2번 : 시간초과
function solution2(arr) {
    arr.forEach(v => {
        for (let i = v[0] + 1; i <= v[1]; i++) {
            if (!answer.includes(i)) answer.push(i)
        }
    })
    return answer.length
}

// 최종
function solution3(arr) {
    arr.sort((a, b) => a[0] - b[0])
    answer.push(...arr[0])
    let noLine = 0
    arr.forEach(v => {
        if (v[0] >= answer[1]) {
            noLine += v[0] - answer[1]
            answer[1] = v[1]
        }
        else {
            if (v[1] >= answer[1]) {
                answer[1] = v[1]
            }
        }
    })


    return answer[1] - answer[0] - noLine
}

console.log(solution3(arr))