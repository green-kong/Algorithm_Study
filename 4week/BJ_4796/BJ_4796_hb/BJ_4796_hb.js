const inputArr = require('fs').readFileSync('example.txt').toString().split('\n')
i = 0
while (true) {
    const [possible, unit, vacation] = inputArr[i].trim().split(' ').map(Number)
    if (!(possible && unit && vacation)) break;
    const num1 = Math.floor(vacation / unit) * possible
    const num2 = Math.min(possible, vacation % unit)
    console.log(`Case ${i + 1}: ${num1 + num2}`)
    i++
}