n, k = map(int, input().split())

numList = list(input())
delNum = k
stack = []

for i in range(n) :
    while delNum > 0 and stack :
        if stack[-1] < numList[i] :
            stack.pop()
            delNum -= 1
        else : break
    stack.append(numList[i])

print(''.join(stack[:n-k]))