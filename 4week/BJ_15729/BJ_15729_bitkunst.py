n = int(input())
quiz = list(map(int, input().split()))
arr = [0 for _ in range(n)]
answer = 0

for i in range(n) :
    if arr[i] != quiz[i] and arr[i] == 0 :
        arr[i] = 1
        if (i+1) < len(arr) :
            if arr[i+1] == 0 :
                arr[i+1] = 1
            else : arr[i+1] = 0
        if (i+2) < len(arr) :
            if arr[i+2] == 0 :
                arr[i+2] = 1
            else : arr[i+2] = 0
        answer += 1
    if arr[i] != quiz[i] and arr[i] == 1 :
        arr[i] = 0
        if (i+1) < len(arr) :
            if arr[i+1] == 0 :
                arr[i+1] = 1
            else : arr[i+1] = 0
        if (i+2) < len(arr) :
            if arr[i+2] == 0 :
                arr[i+2] = 1
            else : arr[i+2] = 0
        answer += 1
print(answer)