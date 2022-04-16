// const fs = require('fs');
// let input = fs.readFileSync('./example.txt').toString().split('\n');
// let arr = [];
// let answer = 0;
// let now = 0;

// for (let i = 1; i < input.length; i++) {
//     arr.push(input[i].split(' '));
//     arr[i-1][0] = parseInt(arr[i-1][0]);
//     arr[i-1][1] = parseInt(arr[i-1][1]);
// }

const fs = require('fs');
const input = fs.readFileSync('./example.txt').toString().split('\n');
const length = Number(input[0]);
const arr = [];
let answer = 0;
let now = 0;

for (let i = 0; i < length; i++) {
    arr.push(input[i+1].split(' ').map(Number));
}

// arr.sort((a, b)=> a[1] - b[1]).sort((a, b)=> a[0] - b[0]);
arr.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
});

console.log(arr);

answer += arr[0][1] - arr[0][0];

for (let j = 1; j < arr.length; j++) {
    if (arr[j][1] <= arr[now][1]) continue;
    if (arr[j][0] <= arr[now][1]) {
        answer += arr[j][1] - arr[now][1];
        now = j;
    } else {
        answer += arr[j][1] - arr[j][0];
        now = j;
    }
}

console.log(answer);

// 백준 사이트에서 제출했는데 계속 7%에서 '틀렸습니다'라고 떠서 계속 반례를 찾으려고 시도했다.
// 결국 알고리즘의 문제가 아니라, txt 파일의 값을 숫자가 담긴 배열(arr)로 담아주는 과정에서 발생한 에러였다.
// 처음에 짰던 코드는 txt 파일의 첫 번째 수(N)이 나머지 행의 개수와 일치하지 않아도 문제를 푸는데 지장이 없었다.
// 하지만, 백준에서는 다음과 같은 경우에 코드 실행이 정상적으로 실행되면 틀렸다고 처리하는 것 같다.
// 1
// 1 2
// 2 4
// 위의 경우 첫 번째 숫자가 1이 아닌 2가 와야 하므로 에러가 떠야 하는데, 처음 짰던 코드대로라면 정상적으로 답이 3이라고 나온다.
// 백준에서는 이러한 경우가 발생하면 오답으로 처리한다.
// 그래서 input[0]과 map()을 써서 해당 길이를 고려한 arr를 새로 만들어주었다.

// 하지만 수정 후 제출했을 때 '시간 초과'가 떴는데, 그 이유는 sort()를 2번 사용했기 때문이다.
// sort()는 힙 정렬로 정렬하는데, 힙 정렬의 시간복잡도는 O(n logn)이다.
// sort()를 1번만 사용하는 코드로 수정한 후 제출했을 때 드디어 '맞았습니다'가 떴다.