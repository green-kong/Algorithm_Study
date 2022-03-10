function solution(name) {
    let answer = 0;
    let index;
    let move = name.length - 1;
    for (let i = 0; i < name.length; i++) {
        answer += Math.min((name.charCodeAt(i) - 65), (91 - name.charCodeAt(i)));
        
        index = i + 1;
        while(index < name.length && name.charCodeAt(index) === 65) index++;
        
        move = Math.min(move, (name.length - index)*2 + i, 2*i + name.length - index);
    }
    return answer + move;
}

// 문제 접근 방법 (고려해야 할 것)
// (1) 위아래 방향 조이스틱을 이용하여 알파벳을 모두 A로 맞춰주어야 한다.
// (2) 좌우 방향 조이스틱을 이용하여 최소한의 횟수만큼 이동해야 한다.
// 여기서 (1)과 (2)는 독립적이다. 즉, 조이스틱을 움직인 최종 '횟수'는 (1)을 모두 구하여 더하고, 그 후 (2)를 구해서 더해도 상관없다.
// (1)은 언제 위로 움직이고, 아래로 움직일지 생각하는 것은 쉽지만, (2)는 다양한 경우의 수를 고려해야 한다.
// 예를 들어, AAABBA 이면 조이스틱은 왼쪽 방향으로 돌아야 하고, BBAAAAAB는 오른쪽 방향으로 1번 갔다가 다시 왼쪽으로 돌아야 한다.