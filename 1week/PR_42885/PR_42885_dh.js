function solution(people, limit) {
  let answer = 0;
  people.sort((a, b) => a - b);
  let i = 0;
  let j = people.length - 1;

  while (i < j) {
    const sum = people[i] + people[j];
    if (sum <= limit) {
      i += 1;
      j -= 1;
      answer += 1;
    } else {
      j -= 1;
      answer += 1;
    }

    if (i === j) {
      answer += 1;
    }
  }
  return answer;
}

const p = [70, 50, 80, 50];
const l = 100;

console.log(solution(p, l));
