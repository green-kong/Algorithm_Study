function solution(nums) {
    const set = new Set(nums);
    const uniqueArr = [...set];
    const answer = Math.min(uniqueArr.length, nums.length/2);
    return answer;
}