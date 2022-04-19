const str = require('fs').readFileSync('example.txt').toString().trim().split('\n')
const wholeArr = []
let stack = []
let caseNum = +str[0]
for (let j = 1; j < str.length; j++) {
    if (str[j].split(' ').length == 1) {
        if (stack[0] !== undefined) wholeArr.push(stack)
        stack = []
    } else { stack.push(str[j]) }
}
wholeArr.push(stack)

wholeArr.forEach(arr => {
    arr = arr.map(v => v = v.trim().split(' ').map(w => parseInt(w))).sort((a, b) => + a[0] - b[0]) // 여기서 sort하기 전에 map 돌려서 숫자형으로 꼭 바꿔주기.
    let count = 0
    let top = -1
    for (let i = 0; i < arr.length; i++) {
        // 첫 값을 top로
        if (i === 0) {
            top = parseInt(arr[i][1])
            count++
        }
        else {
            // 기존의 top보다 순위가 더 높을 때 해당 값으로 top 교체 후 count+1
            if (parseInt(arr[i][1]) < top) {
                top = parseInt(arr[i][1])
                count++
            }
        }
    }
    console.log(count)
})
