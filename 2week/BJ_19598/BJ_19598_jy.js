const fs = require('fs');
let input = fs.readFileSync('./example.txt').toString().split('\n');
let arr = [];
let tmp = [];
let answer = 0;

console.log(input);

for (let i = 1; i < input.length; i++) {
    arr.push(input[i].split(' '));
    arr[i-1][0] = parseInt(arr[i-1][0]);
    arr[i-1][1] = parseInt(arr[i-1][1]);
}
arr.sort((a, b)=> a[0] - b[0]).sort((a, b)=> a[1] - b[1]);

function sol1() {
    let start = [];
    let finish = [];
    let sumArr = [];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        start.push(arr[i][0]);
        finish.push(arr[i][1]);
    }
    start.sort((a, b) => a - b);
    finish.sort((a, b) => a - b);

    for (let j = 0; j < arr.length; j++) {
        start[j] = [start[j], 1];
        finish[j] = [finish[j], -1];
        tmp.push(start[j]);
        tmp.push(finish[j]);
    }
    tmp.sort((a, b) => a[0] - b[0]);

    for (let k = 0; k < tmp.length; k++) {
        if (tmp[k][1] === 1) {
            sum++;
            sumArr.push(sum);
        } else {
            sum--;
            sumArr.push(sum);
        }
    }
    answer = Math.max(... new Set (sumArr));
}

function sol2() {
    let a = 0;
    let b = 1;
    while (1) {
        while (b < arr.length) {
            if (arr[b][0] >= arr[a][1]) {
                arr[a] = 0;
                a = b;
                b++;
            } 
            else b++;
        }
        arr = arr.filter(v=> v !== 0);
        if (tmp.length == arr.length) break;
        tmp = arr;
        a = 0;
        b = 1;
        console.log(arr);
        answer++;
    }
    answer += arr.length;
}

console.log(answer);

// 결론적으로 sol1()은 정답으로 인정되었고, sol2()는 메모리 초과로 실패하였다.
// 깔끔하게 풀 수 있는 방법은 sol1()이었지만 개인적으로 지난 BJ_1931문제의 풀이를 활용한 sol2() 방법으로도 통과해보고 싶었다.
// 이번에도 filter 메소드(61번째 줄)을 써서 arr의 인덱스가 계속 변화하게 된 것이 패착이라고 생각한다.
// 코드의 수정이 필요한 이유는 알겠으나 더 나은 방법이 도무지 떠오르지 않는다.. 도와주세요ㅠㅠ