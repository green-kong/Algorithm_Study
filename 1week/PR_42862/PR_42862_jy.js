function solution(n, lost, reserve) {
    const res = reserve.filter(v=>!lost.includes(v)).sort((a,b)=>a-b);
    const los = lost.filter(v=>!reserve.includes(v)).sort((a,b)=>a-b);
    for (let i = 0; i<res.length; i++) {
        for (let j = 0; j<los.length; j++) {
            if (los[j] === res[i]+1 || los[j] === res[i]-1) {
                los[j] = -1;
                break;
            }
        }
    }
    return n - los.filter(v=>v!==-1).length;
}