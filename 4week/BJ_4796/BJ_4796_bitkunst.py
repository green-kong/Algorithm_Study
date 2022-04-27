
n = 1
while True :
    answer = 0
    l, p, v = map(int, input().split())
    if (l <= 1 or p <= 1 or v <= 1) : break
    answer += (v // p) * l 
    temp = (v // p) * p
    if (v - temp) < l : answer += (v - temp)
    else : answer += l
    print(f'Case {n}: {answer}')
    n += 1