function solution(name) {
  let answer = 0;
  const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const nameNum = name.split('').map((v) => char.indexOf(v));
  let min = nameNum.length - 1;

  for (let i = 0; i < nameNum.length; i++) {
    if (nameNum[i] < char.length / 2) {
      answer += nameNum[i];
    } else {
      answer += char.length - nameNum[i];
    }

    let k = i + 1;
    while (k < nameNum.length && nameNum[k] === 0) {
      k += 1;
    }
    min = Math.min(min, i * 2 + name.length - k, (name.length - k) * 2 + i);
  }
  return answer + min;
}

// function solution(name) {
//   let answer = 0;
//   let min = name.length - 1;
//   for (let i = 0; i < name.length; i++) {
//     let tmp = name.charCodeAt(i);
//     if (tmp < 78) {
//       answer += tmp % 65;
//     } else {
//       answer += 91 - tmp;
//     }
//     let nextIndex = i + 1;
//     while (nextIndex < name.length && name.charCodeAt(nextIndex) === 65)
//       nextIndex += 1;
//     min = Math.min(
//       min,
//       i * 2 + name.length - nextIndex,
//       (name.length - nextIndex) * 2 + i
//     );
//   }
//   answer += min;
//   return answer;
// }
