function solution(nums) {
  const half = nums.length / 2;
  const choiceCase = [...new Set(nums)].length;

  return half > choiceCase ? choiceCase : half;
}
