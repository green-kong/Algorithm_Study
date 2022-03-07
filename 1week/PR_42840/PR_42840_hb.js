// 1,2,3번 각각 정답과 자기 패턴을 배교해서 정답 수 구하기
// 정답 수 비교해서 최댓값인 사람 번호를 push해주기

function solution(answers) {

    const player1 = [1, 2, 3, 4, 5]
    const player2 = [2, 1, 2, 3, 2, 4, 2, 5]
    const player3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

    const aLeng = answers.length

    let aNum1 = 0
    for (let i = 0; i < aLeng; i++) {
        if (answers[i] === player1[i % player1.length]) aNum1++
    }

    let aNum2 = 0
    for (let i = 0; i < aLeng; i++) {
        if (answers[i] === player2[i % player2.length]) aNum2++
    }

    let aNum3 = 0
    for (let i = 0; i < aLeng; i++) {
        if (answers[i] === player3[i % player3.length]) aNum3++
    }
    const answer = [aNum1, aNum2, aNum3] // 1,2,3번의 정답수 배열


    winners = []
    if (aNum1 == aNum2 && aNum2 === aNum3) { winners = [1, 2, 3] }
    else {
        winner1 = answer.indexOf(Math.max(...answer)) + 1
        winner2 = answer.lastIndexOf(Math.max(...answer)) + 1

        winners.push(winner1)
        if (winner1 !== winner2) winners.push(winner2)

        //console.log(winners)
    }

    return winners;
}

answers1 = [1, 2, 3, 4, 5]
answers2 = [1, 3, 2, 4, 2]
answers3 = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1, 1, 2, 3, 2, 3, 2, 3, 4]

console.log(solution(answers1))
console.log(solution(answers2))
console.log(solution(answers3))



// ❗️
// filter에서 인덱스값을 어떻게 활용할 수 있는 지 몰라서 for문으로 짰는데
// array.filter((v,i) => { v === array2[i]}) 이런 식으로 인자를 2개 넣을 수 있었음 

// 그리고 1,2,3번의 정답수 비교하는 로직을 더럽게 짰는데
// 그냥 max값 하나를 두고 
// 1번 비교 -> 같으면 push(1)
// 2번 비교 -> 같으면 push(2)
// 3번 비교 -> 같으면 push(3)
// 이렇게 짜면 깔끔했다
// ㅎㅎ;;......