const fs = require('fs');
const input = fs.readFileSync('./test.txt').toString().split('\n');
const n = parseInt(input[0]);
const arr = [];
let check = Array(10000).fill(0);
let sliceCheck = [];
let answer = 0;

for (let i = 0; i < n; i++) {
    const tmp = [];
    tmp.push(parseInt(input[i + 1].split(' ')[0]));
    tmp.push(parseInt(input[i + 1].split(' ')[1]));
    arr.push(tmp);
}

arr.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return b[0] - a[0];
});

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i][1]; j++) sliceCheck.push(check[j]);
    if (sliceCheck.some(v => v === 0)) {
        check[sliceCheck.lastIndexOf(0)] = 1;
        answer += arr[i][0];
    }
    sliceCheck = [];
}

console.log(answer);

// 처음에는 arr의 1번째 인덱스가 작은 순서대로 정렬하고, 1번째 인덱스가 같은 요소는 0번째 인덱스가 작은 순서대로 정렬하였다.
// 이후 1번째 인덱스가 바뀌기 직전의 0번째 인덱스 값을 answer에 더해주는 방식으로 문제를 풀었는데 아래와 같은 반례를 발견했다.
// 3
// 1 1
// 10 2
// 10 2
// 내 알고리즘의 결과는 11이었지만, 실제로 정답은 20이다.
// 이를 해결하기 위해 정렬 순서를 0번째 인덱스가 큰 순서대로 바꿔주었고, 
// check라는 배열을 선언하여 default 값을 0으로 주고 강연을 간 날에는 1로 바뀌게 했다.
// 이때 강연은 최대한 미뤄서 가는 것으로 했다.
// 예를 들어, arr의 첫 번째 요소가 [10, 3]이라면, 최대한 미뤄서 3일째에 강연을 가고 check 배열의 index가 2인 곳의 값이 0에서 1로 바뀐다.