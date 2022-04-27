const input = require('fs')
                .readFileSync('./test.txt')
                .toString()
                .trim()
                .split('\n');
const arr = input[1].split(' ').map(v => Boolean(Number(v)));
let answer = 0;

for (let i = 0; i < Number(input[0]); i++) {
    if (arr[i]) {
        arr[i + 1] = !arr[i + 1];
        arr[i + 2] = !arr[i + 2];
        answer++;
    }
}

console.log(answer);

// const arr = input[1].split(' ').map(Number);

// for (let i = 0; i < arr.length; i++) {
//     if (arr.every(v => v === 0)) break;
//     if (arr[i] === 1) {
//         arr[i] = 0;
//         if (arr[i + 1]) arr[i + 1] = 0;
//         else arr[i + 1] = 1;
//         if (arr[i + 2]) arr[i + 2] = 0;
//         else arr[i + 2] = 1;
//         answer++;
//     }
// }

// for문 1번 도는데 왜 시간 초과가 뜨는지 몰랐다.
// 생각해보니 every 메소드를 써서 for문이 돌 때 배열의 모든 원소가 0인지 계속 훑어야 하기 때문에 비효율적이어서 그랬다.
// 이후 다시 시도해보니 메모리 초과가 떴는데, for문에서 arr.length가 아닌 Number(input[0])으로 바꿔주니 해결되었다.