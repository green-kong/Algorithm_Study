n = int(input())
roads = list(map(int, input().split()))
prices = list(map(int, input().split()))
prices = prices[:n-1]
result = 0

minPrice = prices[0]
for i in range(len(prices)) :
    result += roads[i] * minPrice
    if i == len(prices) - 1 : break
    if prices[i+1] <= minPrice :
        minPrice = prices[i+1]
    
print(result)