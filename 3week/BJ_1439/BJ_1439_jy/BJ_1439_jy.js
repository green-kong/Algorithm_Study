const fs = require('fs');
const input = fs.readFileSync('./test.txt').toString();
let cnt = 0;

for (let i = 1; i < input.length; i++) {
    if (input[i] !== input[i - 1]) cnt++;
}

if (cnt % 2 === 1 && cnt !== 1) cnt--;
if (cnt === 1) console.log(1);
else console.log(cnt/2);