function solution(answers) {
    let answer = [];
    let first = [];
    let second = [];
    let third = [];
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    for (let i=0; i<parseInt(answers.length/5)+1; i++) {
        first.push(1,2,3,4,5);
    }
    for (let j=0; j<parseInt(answers.length/8)+1; j++) {
        second.push(2,1,2,3,2,4,2,5);
    }
    for (let k=0; k<parseInt(answers.length/10)+1; k++) {
        third.push(3,3,1,1,2,2,4,4,5,5);
    }
    for (let l=0; l<answers.length; l++) {
        if (first[l] == answers[l]) count1++;
        if (second[l] == answers[l]) count2++;
        if (third[l] == answers[l]) count3++;
    }
    let max = Math.max(count1, count2, count3);
    if (count1 == max) answer.push(1);
    if (count2 == max) answer.push(2);
    if (count3 == max) answer.push(3);
    return answer;
}