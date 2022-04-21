
import heapq

n=int(input())
lectures=[]
for _ in range(n) :
  lectures.append(list(map(int, input().split())))

lectures.sort(key=lambda x: (x[1]))
p_list=[]
for i in lectures :
  heapq.heappush(p_list, i[0])
  if (len(p_list)>i[1]):
    heapq.heappop(p_list)

print(sum(p_list))
