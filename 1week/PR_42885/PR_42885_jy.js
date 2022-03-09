// 정답으로 인정된 코드
function solution(people, limit) {
    let answer = 0;
    people.sort((a,b)=>b-a);
    let f = 0;
    let l = people.length - 1;
    while (f<l) {
        if (people[f] + people[l] <= limit) l--;
        f++;
        answer++;
    }
    if (f == l) answer++;
    return answer;
}

// 모든 테스트 케이스 통과O, 효율성 테스트 통과X
function solution(people, limit) {
    let answer = 0;
    let peo = people.sort((a,b)=>b-a);
    for (let i = 0; i<people.length; i++) {
        if (peo.length == 1) {
            answer++;
            break;
        } else if (peo.length == 0) break;
        if (peo[0] + peo[peo.length-1] <= limit) peo[peo.length-1] = -1;
        peo[0] = -1;
        peo = peo.filter(v=>v!==-1);
        answer++;
    }
    return answer;
}

// 효율성 테스트를 실패한 이유
// 첫 번째 코드는 people에 대한 배열은 그대로 두고 인덱스만 옮겨가며 비교하였고,
// 두 번째 코드는 for 문이 돌면서 계속 배열에 변화를 주었다.
// 결국 불필요한 filter 메소드의 잦은 사용으로 효율성이 낮아진 것 같다.