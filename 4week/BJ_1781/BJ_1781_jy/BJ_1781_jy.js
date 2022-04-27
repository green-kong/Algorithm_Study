const input = require('fs')
                .readFileSync('./test.txt')
                .toString()
                .trim()
                .split('\n');
const arr = input.slice(1)
            .map(v => v.split(' ').map(v => Number(v)))
            .sort((a, b) => {
                if (a[1] === b[1]) return b[0] - a[0];
                return b[1] - a[1];
            });
console.log(arr);

// 로직은 맞는 것 같은데 25%쯤에서 메모리 초과 뜸 (컵라면 수 많은 순서 -> 기한이 많이 남은 순서)
// let answer = 0;
// let check = Array(arr.length).fill(0);

// for (let i = 0; i < arr.length; i++) {
//     let sliceCheck = check.slice(0, arr[i][0]);
//     if (sliceCheck.some(v => v === 0)) {
//         check[sliceCheck.lastIndexOf(0)] = 1;
//         answer += arr[i][1];
//     }
// }

// console.log(answer);