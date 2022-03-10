function solution(people, limit) {
    let peopleAsc = people.sort((a, b) => a - b)
    let answer = 0
    let i = 0
    let j = peopleAsc.length - 1
    while (1) {
        if (j - i > 0) {
            if (peopleAsc[i] + peopleAsc[j] > limit) { j-- }
            else { i++; j-- }
            answer++
        }
        else {
            if (j - i === 0) { answer++ }
            break;
        }
    }
    return answer
}