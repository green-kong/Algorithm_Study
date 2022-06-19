# from collections import deque

n, m = map(int, input().split())

graph = []
for i in range(n):
    graph.append(list(input()))

# [['C', 'A', 'A', 'B'], ['A', 'D', 'C', 'B']]

dx = [-1, 1, 0, 0] 
dy = [0, 0, -1, 1]
# 상,하,좌,우

def bfs():
    queue = set([(0, 0, graph[0][0])])
    result = 1

    while queue:
        x, y, visited = queue.pop()

        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if nx < 0 or nx >=n or ny < 0 or ny >= m:
                continue
            if graph[nx][ny] not in visited:
                next_visited = visited + graph[nx][ny]
                queue.add((nx, ny, next_visited))
                result = max(result, len(next_visited))
    return result

print(bfs())