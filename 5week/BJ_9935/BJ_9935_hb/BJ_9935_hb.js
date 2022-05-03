let [origin, bomb] = require('fs').readFileSync('./example2.txt').toString().trim().split('\n')

const stack = []
let flag = false
for (let i = 0; i < origin.length; i++) {
    flag = false
    stack.push(origin[i])
    if (origin[i] === bomb[bomb.length - 1]) {
        // i부터 i-bomb.length까지 일치하는지 확인 후 모두 일치하면 length만큼 pop
        flag = true
        for (let j = 0; j < bomb.length; j++) {
            if (stack[stack.length - 1 - j] !== bomb[bomb.length - 1 - j]) flag = false
        }
        if (flag === true) {
            for (let j = 0; j < bomb.length; j++) {
                stack.pop()
            }
        }
    }
}
let str = ''
stack.forEach(v => str += v)
str === '' ? console.log('FRULA') : console.log(str)

