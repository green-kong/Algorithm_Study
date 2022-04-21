const input = require('fs')
                .readFileSync('./test.txt')
                .toString()
                .trim()
                .split('\n');
const arr = [];

for (let i = 2; i < input.length; i++) {
    arr.push(input[i].split(' ').map(v => Number(v)).reverse());
    i++;
}

for (let i = 0; i < arr.length; i++) {
    let M = arr[i][0];
    let profit = 0;
    for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] <= M) profit += M - arr[i][j];
        else M = arr[i][j];
    }
    console.log(profit);
}

// reverse 메소드를 써서 마지막 날의 주가를 M으로 두고 현재 인덱스 값을 비교하며 수익을 계산했다.