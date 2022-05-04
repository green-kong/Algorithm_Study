n = int(input())

for _ in range(n) :
    stack = []
    ps = input()
    for i in ps :
        if i == '(' :
            stack.append(i)
        else :
            if stack :
                stack.pop()
            else :
                print('NO')
                break
    else :
        if not stack :
            print('YES')
        else :
            print('NO')