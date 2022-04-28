n = int(input())
ropes = [int(input()) for _ in range(n)]

ropes.sort()
total = []
for i in range(n) :
    temp = ropes[i] * (n - i)
    total.append(temp)
total.sort(reverse=True)

print(total[0])
    