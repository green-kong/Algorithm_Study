const fs = require('fs');
const input = fs.readFileSync('./test.txt').toString().trim().split('\n');
const tmp = [];

for (let i = 1; i < input.length; i++) {
    if (input[i].split(' ').length === 1) {
        tmp.push(input.slice(i + 1, i + Number(input[i]) + 1));
        i += Number(input[i]);
    }
}

const arr = tmp.map((v) =>
    v.map((v) => v.split(' ').map((v) => Number(v)))
);

arr.map((v) => v.sort((a, b) => a[0] - b[0]));

for (let i = 0; i < arr.length; i++) {
    let num = arr[i][0][1];
    let answer = arr[i].length;
    for (let j = 1; j < arr[i].length; j++) {
        if (num < arr[i][j][1]) answer--;
        else num = arr[i][j][1];
    }
    console.log(answer);
}

// 로직은 간단했지만, 메모리가 초과되지 않도록 코드를 작성하는 것이 어려웠다.
// 먼저 서류 순위가 높은 사람들부터 차례로 정렬하고, 서류 순위가 1등인 사람의 면접 순위를 num의 초기 값으로 할당했다.
// 다음 사람들은 무조건 앞 사람들보다 서류 순위가 낮기 때문에 적어도 앞 사람 1명의 면접 순위보다 본인의 면접 순위가 높아야 합격할 수 있다.
// 따라서, num 값은 지원자 1명씩 for문(이중 for문의 안쪽)을 돌면서 더 면접 순위가 높은 사람이 있다면 그 사람의 면접 순위 값으로 재할당한다.
// 현재 num 값보다 현재 돌고 있는 지원자의 면접 순위가 더 낮다면, 해당 지원자보다 서류 순위와 면접 순위가 둘다 높은 지원자가 반드시 존재하므로
// answer 값에서 1을 빼준다.