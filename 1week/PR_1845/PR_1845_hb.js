// {종류:수} 객체 만들고 Object.keys()해서 length 구하기
// N/2마리를 선택할 수 있으므로 length가 N/2보다 크면 N/2, 작으면 length값을 리턴

function solution(nums) {
    const obj = {}
    nums.forEach(v => {
        v = String(v)
        if (obj[v] === undefined) {
            obj[v] = 1
        }
        else { obj[v]++ }
    })
    const num = Object.keys(obj).length

    return Math.min(nums.length / 2, num)

}

const nums1 = [3, 1, 2, 3]
const nums2 = [3, 3, 3, 2, 2, 4]
const nums3 = [3, 3, 3, 2, 2, 2]

console.log(solution(nums1))
console.log(solution(nums2))
console.log(solution(nums3))



// ❗️
// 그냥.. 중복 제거 해가지고 구하면 됨..
// const arr = [...new Set(nums)]
// 위 방법으로 하면 nums 배열이 커지면 굉장히 느려짐
