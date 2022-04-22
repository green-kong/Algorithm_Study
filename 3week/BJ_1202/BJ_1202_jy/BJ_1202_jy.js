const input = require('fs')
                .readFileSync('./test.txt')
                .toString()
                .trim()
                .split('\n');
const arr = [], bag = [];

for (let i = 1; i < input.length; i++) {
    if (input[i].split(' ').length === 2) arr.push(input[i].split(' ').map(v => Number(v)));
    else bag.push(parseInt(input[i]));
}

// arr.sort((a, b) => {
//     if (a[0] === b[0]) return a[1] - b[1];
//     return a[0] - b[0];
// });

// arr.sort((a, b) => {
//     if (a[1] === b[1]) return a[0] - b[0];
//     return a[1] - b[1];
// });

// bag.sort((a, b) => a - b);

// console.log(arr);
// console.log(bag);

// let idx = 0, sum = 0;
// let pq = [];
// let dup = 1;
// let M = 0;
// let flag = false;

// for (let i = 0; i < bag.length; i++) {
//     while (idx < arr.length && arr[idx][0] <= bag[i]) {
//         flag = true;
//         pq.push(arr[idx][1]);
//         console.log('push', pq);
//         idx++;
//     }
//     if (pq.length > 0) {
//         console.log('i', i);
//         console.log('before', pq);
//         M = Math.min(dup, pq.length);
//         console.log('M', M);
//         for (let j = 0; j < M; j++) {
//             sum += pq[pq.length - 1];
//             pq.pop();
//         }
//         dup = 1;
//         console.log('after', pq);
//         console.log('sum',sum);
//     } else if (flag === true) dup++;
//     flag = false;
// }

// console.log(sum);

arr.sort((a, b) => {
    if (a[1] === b[1]) return b[0] - a[0];
    return b[1] - a[1];
});

bag.sort((a, b) => a - b);

console.log(arr)
console.log(bag)

const check = Array(bag.length).fill(0);

let money = 0;
for (let i = 0; i < arr.length; i++) {
    let index = 0;
    for (let j = 0; j < bag.length; j++) {
        if (check[index] === 0 && arr[i][0] <= bag[index]) {
            check[index] = 1;
            money += arr[i][1];
            break;
        }
        index++;
    }
}

console.log(money);

// 결론적으로 아직 통과하지 못함..
// 그리디로 풀면 로직은 잘 짠 것 같은데 이중 for문이 돌면서 시간 초과 발생함
// 우선순위 큐를 이용해서 다시 시도해 볼 예정