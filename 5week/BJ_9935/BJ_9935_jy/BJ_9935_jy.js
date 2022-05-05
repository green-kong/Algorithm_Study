const [list, bomb] = require('fs')
                .readFileSync('./test.txt')
                .toString()
                .trim()
                .split('\n');
const stack = [];
let cnt = bomb.length;

for (let i in list) {
    stack.push(list[i]);
    if (stack[stack.length - 1] === bomb[bomb.length - 1]) {
        for (let j = 0; j < bomb.length; j++) {
            if (stack[stack.length - j - 1] !== bomb[bomb.length - j - 1]) break;
            if (j === bomb.length - 1) {
                while (cnt > 0) {
                    stack.pop();
                    cnt--;
                }
            }
        }
    }
    cnt = bomb.length;
}

if (stack.length === 0) console.log('FRULA');
else console.log(stack.join(''));