function solution(n, lost, reserve) {
  let _lost = lost //
    .filter((v) => reserve.indexOf(v) < 0)
    .sort((a, b) => a - b);

  const _reserve = reserve
    .filter((v) => lost.indexOf(v) < 0)
    .sort((a, b) => a - b);

  for (const v of _reserve) {
    const plus = v + 1;
    const minus = v - 1;

    if (_lost.includes(minus)) {
      _lost = _lost.filter((v) => v !== minus);
    } else if (_lost.includes(plus)) {
      _lost = _lost.filter((v) => v !== plus);
    }

    if (_lost.length === 0) return n;
  }

  return n - _lost.length;
}

const n = 5;
const lost = [2, 4];
const reserve = [1, 3, 5];

console.log(solution(n, lost, reserve));
