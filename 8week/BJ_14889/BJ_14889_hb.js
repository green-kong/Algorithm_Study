const inputArr = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((w) => Number(w)));

const N = inputArr.shift()[0];
console.table(inputArr);

const myTeam = [];

const people = [];
for (let i = 0; i < N; i++) {
  people.push(i);
}

let min = Number.MAX_SAFE_INTEGER;

// 1. 팀 조합 찾기
function dfs(length, start) {
  if (myTeam.length > 0 && myTeam[0] !== 0) return; // 0으로 시작하는 조합 케이스만 보면 되므로 나머지 반은 건너뜀

  // console.log(`dfs(${length}, ${start}) 실행`);

  // 팀 조합 완성
  if (length === N / 2) {
    const otherTeam = [...people].filter((v) => !myTeam.includes(v));
    console.log(myTeam, otherTeam);
    const myTeamPoint = calculatePoint(myTeam);
    const otherTeamPoint = calculatePoint(otherTeam);
    min =
      min > Math.abs(myTeamPoint - otherTeamPoint)
        ? Math.abs(myTeamPoint - otherTeamPoint)
        : min;

    return;
  }

  // 팀 조합 완성될 때까지 재귀로 호출
  for (let i = start; i < N; i++) {
    myTeam.push(i);
    dfs(length + 1, i + 1);
    myTeam.pop();
  }

  // console.log(`dfs(${length}, ${start}) 끝`);
}

// 2. 팀 조합 별 점수 계산
function calculatePoint(team) {
  let point = 0;

  for (let i = 0; i < team.length; i++) {
    for (let j = i + 1; j < team.length; j++) {
      const player1 = team[i];
      const player2 = team[j];
      point += inputArr[player1][player2] + inputArr[player2][player1];
    }
  }

  return point;
}

dfs(0, 0);
console.log(min);
