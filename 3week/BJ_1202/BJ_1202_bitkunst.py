import heapq

n, k = map(int, input().split())
jewels = [ list(map(int, input().split())) for _ in range(n) ]
bags = [ int(input()) for _ in range(k) ]

sum = 0
for c in bags :
    heap = []
    for jewel in jewels :
        if jewel[0] < c :
            heapq.heappush(heap, (-jewel[1], jewel[1]))
    max_c = heapq.heappop(heap)[1]
    sum += max_c

print(sum)