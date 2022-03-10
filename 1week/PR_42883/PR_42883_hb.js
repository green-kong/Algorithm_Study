function solution(number, k) {
    let answer = ''
    let smallArr = []
    let max
    let idx
    let ansLeng = number.length - k


    while (1) {
        smallArr = number.slice(0, k + 1)
        max = 0
        for (let i = 0; i < smallArr.length; i++) {
            if (parseInt(smallArr[i]) > max) { idx = i; max = parseInt(smallArr[i]); }
        }
        answer += smallArr[idx]
        number = number.slice(idx + 1,)
        k = k - idx
        if (k === 0) { answer += number; break } // answer 다 못 채웠는데 k가 먼저 0이 되었을 때
        if (answer.length === ansLeng) { break } // answer 먼저 채웠을 때
    }

    return answer
}