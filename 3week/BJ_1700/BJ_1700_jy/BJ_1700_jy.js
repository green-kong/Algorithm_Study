const fs = require('fs');
const input = fs.readFileSync('./test.txt').toString().split('\n');
const n = Number(input[0].split(' ')[0]);
const k = Number(input[0].split(' ')[1]);
let arr = input[1].split(' ').map(Number);
let plug = [];
const arr_plug = [];
let tmp = [];
let cnt = 0;
let outI;

for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
        arr.splice(i, 1);
        i--;
    }
}

for (let i = 0; i < k; i++) {
    outI = i;
    if (plug.length === n) break;
    if (!plug.some(v => v === arr[i])) {
        plug.push(arr[i]);
        i--;
    }
}

for (let i = outI + 1; i < arr.length; i++) arr_plug.push(arr[i]);

for (let i = n; i < arr.length; i++) {
    if (!plug.some(v => v === arr[i])) {
        tmp = plug.map(v => arr_plug.lastIndexOf(v));
        if (tmp.indexOf(-1) >= 0) tmp[tmp.indexOf(-1)] = -2;
        if (Math.min(...new Set(tmp)) >= 0) plug = plug.filter((v, i) => tmp[i] !== Math.max(...new Set(tmp)));
        else plug = plug.filter((v, i) => tmp[i] !== Math.min(...new Set(tmp)));
        plug.push(arr[i]);
        arr_plug.splice(0, 1);
        cnt++;
    }
}

console.log(cnt);

// 백준에서 제출할 때 27%에서 자꾸 '틀렸습니다.'가 뜨는데, 반례를 찾지 못함..