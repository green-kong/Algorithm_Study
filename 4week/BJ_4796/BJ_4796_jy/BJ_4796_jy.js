const input = require('fs')
                .readFileSync('./test.txt')
                .toString()
                .trim()
                .split('\n');
input.pop();
const arr = input.map(v => v.split(' ').map(v => Number(v)));

for (let i = 0; i < arr.length; i++) {
    let answer = 0;
    answer += Math.floor(arr[i][2]/arr[i][1]) * arr[i][0];
    Math.floor(arr[i][2]%arr[i][1]) < arr[i][0] ? answer += Math.floor(arr[i][2]%arr[i][1]) : answer += arr[i][0];
    console.log(`Case ${i + 1}:`, answer);
}