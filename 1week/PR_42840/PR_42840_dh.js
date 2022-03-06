function solution(answers) {
  const answer = [];

  const studentA = [1, 2, 3, 4, 5];
  const studentB = [2, 1, 2, 3, 2, 4, 2, 5];
  const studentC = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const score = [0, 0, 0];

  answers.forEach((v, i) => {
    const indexA = i % studentA.length;
    const indexB = i % studentB.length;
    const indexC = i % studentC.length;

    if (v === studentA[indexA]) score[0] += 1;
    if (v === studentB[indexB]) score[1] += 1;
    if (v === studentC[indexC]) score[2] += 1;
  });

  const highScore = Math.max(...score);

  score.forEach((v, i) => {
    if (v === highScore) answer.push(i + 1);
  });

  return answer;
}
