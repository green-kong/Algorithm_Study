const [T, ...arr] = require("fs")
  .readFileSync("./test.txt")
  .toString()
  .trim()
  .split("\n");

const answer = [];
const bfs = (A, B) => {
  const visited = Array(10000).fill(false);
  visited[A] = true;
  const q = [[A, ""]];
  while (q.length) {
    let [num, path] = q.shift();
    if (num === B) {
      answer.push(path);
      return;
    }
    const d = (num * 2) % 10000;
    if (!visited[d]) {
      q.push([d, path + "D"]);
      visited[d] = true;
    }
    const s = num === 0 ? 9999 : num - 1;
    if (!visited[s]) {
      q.push([s, path + "S"]);
      visited[s] = true;
    }
    const l = (num % 1000) * 10 + Math.floor(num / 1000);
    if (!visited[l]) {
      q.push([l, path + "L"]);
      visited[l] = true;
    }
    const r = Math.floor(num / 10) + (num % 10) * 1000;
    if (!visited[r]) {
      q.push([r, path + "R"]);
      visited[r] = true;
    }
  }
};

arr.map((v) => {
  const [A, B] = v.split(" ").map(Number);
  bfs(A, B);
});

console.log(answer.join("\n"));
