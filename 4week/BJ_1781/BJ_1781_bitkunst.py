import heapq

case = int(input())
ramens = [list(map(int, input().split())) for _ in range(case)]

ramens.sort()

heap = []
for i in ramens :
    heapq.heappush(heap, i[1])
    if i[0] < len(heap) :
        heapq.heappop(heap)

print(sum(heap))