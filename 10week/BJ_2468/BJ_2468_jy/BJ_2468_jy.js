let [T, ...arr] = require('fs').readFileSync('./test.txt').toString().trim().split('\n');

T = Number(T);
arr = arr.map((v) => v.split(' ').map(Number));

const dir_x = [0, 0, 1, -1];
const dir_y = [1, -1, 0, 0];

const dfs = (x, y, height, visited) => {
    dir_x.forEach((dx, i) => {
        const nx = x + dx;
        const ny = y + dir_y[i];
        if (nx >= 0 && nx < T && ny >= 0 && ny < T && !visited[nx][ny]) {
            visited[nx][ny] = true;
            dfs(nx, ny, height, visited);
        }
    });
};

let maxCount = 0;
for (let height = 0; height <= 100; height++) {
    let count = 0;
    const visited = [...Array(T)].map((_, x) => [...Array(T)].map((_, y) => arr[x][y] <= height));
    for (let i = 0; i < T; i++) {
        for (let j = 0; j < T; j++) {
            if (!visited[i][j]) {
                visited[i][j] = true;
                dfs(i, j, height, visited);
                count++;
            }
        }
    }
    maxCount = Math.max(maxCount, count);
}

console.log(maxCount);

// 21번째 줄에서 height을 0부터 100까지가 아니라 주어진 배열의 min 값부터 max 값까지 for문을 돌려고 했으나 계속 틀렸다고 함..
