const inputArr = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const num = inputArr.shift();
const arr = inputArr.map((v) => {
  const innerArr = v.split("").map((w) => Number(w));
  return innerArr;
});

const answer = [];
for (let i = 0; i < num; i++) {
  for (let j = 0; j < num; j++) {
    const stack = [];
    if (arr[i][j] === 1) {
      // 1. 자기자신 담기
      stack.push([i, j]);
      let count = 0;
      // 2. stack에 아무것도 남지 않을 때까지 while문 실행
      //    ㄴ 자기자신이 pop되면서 인접한 좌표 중 1인 곳을 stack에 푸시. 굳이 d
      while (stack.length > 0) {
        const [a, b] = stack.pop();
        if (arr[a][b]) {
          arr[a][b] = 0;
          count++;
        }
        // 4방향 확인
        a > 0 && arr[a - 1][b] === 1 && stack.push([a - 1, b]);
        b > 0 && arr[a][b - 1] === 1 && stack.push([a, b - 1]);
        a < num - 1 && arr[a + 1][b] === 1 && stack.push([a + 1, b]);
        b < num - 1 && arr[a][b + 1] === 1 && stack.push([a, b + 1]);
      }
      answer.push(count);
    }
  }
}
answer.sort((a, b) => a - b);
console.log(answer.length);
answer.map((v) => console.log(v));
