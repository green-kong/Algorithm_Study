function solution(n, lost, reserve) {
    // 정렬 먼저 함
    lost.sort()
    reserve.sort()
    // 겹치는 숫자 삭제
    for (let i = 0; i < lost.length; i++) {
        if (reserve.includes(lost[i])) {
            let j = reserve.indexOf(lost[i])
            reserve.splice(j, 1)
            lost.splice(i, 1)
            i--
        }
    }
    // 이중 for문 돌리면서 하나씩 확인
    let iarr = []
    let jarr = []
    for (let i = 0; i < lost.length; i++) {
        for (let j = 0; j < reserve.length; j++) {
            if (Math.abs(lost[i] - reserve[j]) <= 1 && !jarr.includes(reserve[j])) {
                iarr.push(lost[i]) // 체육복 빌림
                jarr.push(reserve[j]) // 체육복 빌려줌
                break
            }
        }
    }

    return n - lost.length + iarr.length
}