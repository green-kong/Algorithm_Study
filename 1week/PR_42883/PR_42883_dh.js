function solution(number, k) {
  const stack = [];
  let chance = k;
  for (let i = 0; i < number.length; i++) {
    while (chance > 0 && stack[stack.length - 1] < number[i]) {
      stack.pop();
      chance -= 1;
    }
    stack.push(number[i]);
  }
  return stack.filter((v, i) => i < number.length - k).join('');
}

const number = '1924';
const k = 2;

console.log(solution(number, k));
