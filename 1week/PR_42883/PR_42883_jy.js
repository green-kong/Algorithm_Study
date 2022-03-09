function solution(number, k) {
    let num = ''+number;
    let arr = [];
    for (let i in num) {
        if (arr.length == 0) {
            arr.push(num[i]);
            continue;
        }
        while (arr[arr.length - 1] < num[i]) {
            if (k == 0) break;
            else {
                arr.pop();
                k--;
            }
        }
        arr.push(num[i]);
    }
    if (arr.length == number.length) {
        for (let i = 0; i<k; i++) arr.pop(); 
    }
    let answer = arr.join('');
    return answer;
}

// 테스트 케이스 12를 통과하지 못한 이유
// number가 "4321"이고 k가 1일 때 "432"가 나오고, k가 3일 때 "4"가 출력되어야 하는데
// 18~20번째 줄의 if 문이 없으면 두 경우 모두 "4321"로 출력됨 -> 예외 처리 필요