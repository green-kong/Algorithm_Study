from collections import deque

[total, current, to, up, down] =list(map(int, input().split()))

def bfs(_total, _current, _to, _up, _down):
    queue = deque([[_current, 0]])
    visited = {_current}

    while queue:
        floor, cnt = queue.popleft()
        if floor == _to:  # 목표 층 도착
            return cnt
        if floor + _up <= _total and floor + _up not in visited:  # 위층으로 이동
            queue.append([floor + _up, cnt + 1])
            visited.add(floor + _up)
        if floor - _down >= 1 and floor - _down not in visited:  # 아래층으로 이동
            queue.append([floor - _down, cnt + 1])
            visited.add(floor - _down)

    return "use the stairs"

print(bfs(total, current, to, up, down))