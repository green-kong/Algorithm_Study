const tmp = require('fs')
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' '));

const [L, C] = tmp.shift().map(Number);
const char = tmp[0].sort();

const collections = ['a', 'e', 'i', 'o', 'u'];

const answers = [];

const checkIdx = (hash) => {
  const length = hash.length;
  const curIdx = char.indexOf(hash);
  if (length === 1 && curIdx > C - L) {
    return false;
  }

  return true;
};

const checkHash = (hash) => {
  let collectionCnt = 0;
  const length = hash.length;
  const hashArr = hash.split('');

  hashArr.forEach((v) => {
    if (collections.includes(v)) {
      collectionCnt += 1;
    }
  });

  if (collectionCnt > 0 && length - collectionCnt >= 2) {
    return true;
  }

  return false;
};

const dfs = (hash, idx) => {
  if (!checkIdx(hash)) {
    return;
  }
  if (hash.length < L) {
    for (let i = idx; i < C; i++) {
      const newHash = hash + char[i];
      const newIdx = i + 1;
      dfs(newHash, newIdx);
    }
  }

  if (hash.length === L && checkHash(hash)) {
    answers.push(hash);
  }
};

dfs('', 0);
console.log(answers.join('\n'));
