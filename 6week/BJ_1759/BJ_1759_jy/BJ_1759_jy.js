const [LC, str] = require("fs")
  .readFileSync("./test.txt")
  .toString()
  .trim()
  .split("\n");

const [L, C] = LC.split(" ").map(Number);
const arr = str.split(" ").sort();
const answer = [];

const crypto = (s, k) => {
  let S = s.length;
  if (S === L) {
    let cnt = 0;
    for (let i = 0; i < S; i++) {
      if (
        s[i] === "a" ||
        s[i] === "e" ||
        s[i] === "i" ||
        s[i] === "o" ||
        s[i] === "u"
      ) {
        cnt++;
      }
    }
    if (cnt > 0 && L - cnt > 1) answer.push(s);
    return;
  } else {
    for (let i = k + 1; i < C; i++) {
      crypto(s + arr[i], i);
    }
  }
};

crypto("", -1);

console.log(answer.join("\n"));
