let input = require('fs').readFileSync('./예제.txt').toString().split('\n');
let count = Number(input[0]);
let arr = []
let answer = 0

for (let i = 1; i <= count; i++) {
    let num = input[i].split(" ");
    num = num.map(v => v = parseInt(v))
    arr.push(num)
}

arr.sort((a, b) => a[0] - b[0])
arr.sort((a, b) => a[1] - b[1])



let max
while (count > 0) {
    max = 0
    arr.map(v => {
        if (v[0] === -1) { return }
        if (max === 0 || v[0] >= max) {
            max = v[1]
            v[0] = -1
            count--
        }
    })
    answer++
}

console.log(answer)

// 돌려보면 계속 메모리초과만 뜬다
// 이전문제인 1931번은 이 문제의 반인 128mb인데도 풀렸는데 왜 얘는 메모리초과가 계속 뜨는지 모르겠다.
// 이전문제에서 추가한건 max라는 정수형 변수값 뿐이고 정답을 모아뒀던 answerArr도 메모리를 잡아먹을까봐 뺐는데 왜 그럴까???


// 반례 : 
// 4
// 0 5
// 0 10
// 8 20
// 10 15
// 2가 나와야함