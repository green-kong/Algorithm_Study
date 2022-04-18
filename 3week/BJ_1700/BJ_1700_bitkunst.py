n, k = map(int, input().split())
item_list = list(map(int, input().split()))
plug = []

count = 0
for i in range(k) :
    if item_list[i] in plug :
        continue

    if len(plug) < n :
        plug.append(item_list[i])
        continue

    idxs = []

    for j in range(n) :
        if plug[j] in item_list[i:] :
            idx = item_list[i:].index(plug[j])
        else :
            idx = 101
        
        idxs.append(idx)

    out = idxs.index(max(idxs))
    del plug[out]
    plug.append(item_list[i])
    count += 1

print(count)