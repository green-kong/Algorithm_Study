const fs = require('fs');
let input = fs.readFileSync('../../1week/BJ_1931/example.txt').toString().split('\n');
let arr = [];
let answer = 1;

for (let i = 1; i < input.length; i++) {
    arr.push(input[i].split(' '));
    arr[i-1][0] = parseInt(arr[i-1][0]);
    arr[i-1][1] = parseInt(arr[i-1][1]);
}
arr.sort((a, b)=> a[0] - b[0]).sort((a, b)=> a[1] - b[1]);

let a = 0;
let b = 1;

while (b < arr.length) {
    if (arr[b][0] >= arr[a][1]) {
        a = b;
        b++;
        answer++;
        continue;
    }
    b++;
}

// for (let j = 0; j < arr.length-1; j++) {
//     while (1) {
//         if (b == arr.length) break;
//         if (arr[b][0] >= arr[a][1]) {
//             a = b;
//             b++;
//             answer++;
//             break;
//         }
//         b++;
//     }
// }

console.log(arr);
console.log(answer);