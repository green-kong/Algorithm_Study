case = int(input())

for _ in range(case):
    n = int(input())
    data = list(map(int,input().split()))
    answer = 0 
    maxData = data[-1]
    for i in range(n-2,-1,-1) :
        if data[i] > maxData :  
            maxData = data[i]
        else:
            answer += maxData - data[i] 
    print(answer)


# 시간초과 이슈 발생 코드

# case = int(input())
# profitArr = []

# for _ in range(case) :
#     n = int(input()) 
#     price = list(map(int, input().split()))
#     profit = 0
#     while True :
#         maxIdx = price.index(max(price))
#         if maxIdx == 0 :
#             price.remove(price[maxIdx])
#             if price == [] : 
#                 profitArr.append(profit) 
#                 break
#             maxIdx = price.index(max(price))
#         elif maxIdx == ( len(price) - 1 ) :
#             for i in range(0, len(price)) :
#                 profit += max(price) - price[i]
#             profitArr.append(profit)
#             break
#         else :
#             for i in range(0, maxIdx+1) :
#                 profit += ( price[maxIdx] - price[i] )
#             price = price[maxIdx+1:]
            
# for i in profitArr :
#     print(i)